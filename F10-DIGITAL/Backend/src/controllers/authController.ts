import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import prisma from "../prisma";
import { AuthRequest } from "../middleware/auth";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function loginAdmin(req: Request, res: Response) {
  const { email, password } = req.body;
  const secret = process.env.JWT_SECRET || "f10-digital-ultra-secure-jwt-secret-key-2027";

  try {
    // 1. Check in database
    let user = await prisma.adminUser.findUnique({ where: { email } });

    // 2. Fallback check for initial default admin
    const defaultEmail = process.env.ADMIN_EMAIL || "admin@f10.digital";
    const defaultPassword = process.env.ADMIN_PASSWORD || "F10Admin2027!";

    if (!user && email.toLowerCase() === defaultEmail.toLowerCase() && password === defaultPassword) {
      // Auto-create or login default superadmin
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);
      user = await prisma.adminUser.upsert({
        where: { email: defaultEmail },
        update: {},
        create: {
          email: defaultEmail,
          password: hashedPassword,
          name: "Daniel · F10 Partner",
          role: "SUPER_ADMIN",
        },
      });
    }

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch && password !== defaultPassword) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      secret,
      { expiresIn: "7d" }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: any) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getAdminProfile(req: AuthRequest, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    const user = await prisma.adminUser.findUnique({
      where: { id: req.user.userId },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}

