import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../prisma";

export const CreateEnquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Valid work email required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceInterest: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(5, "Please provide brief details"),
  source: z.string().optional(),
});

export const UpdateStatusSchema = z.object({
  status: z.enum(["NEW", "IN_PROGRESS", "QUALIFIED", "CLOSED"]),
  notes: z.string().optional(),
});

export async function createEnquiry(req: Request, res: Response) {
  try {
    const data = req.body;

    const enquiry = await prisma.enquiry.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        serviceInterest: data.serviceInterest || "General Digital Transformation",
        budget: data.budget || "Not Specified",
        message: data.message,
        source: data.source || "WEBSITE",
        status: "NEW",
      },
    });

    console.log(`[F10 Lead Alert] New inquiry received from ${enquiry.name} (${enquiry.email}) for ${enquiry.serviceInterest}`);

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully. Our team will contact you shortly.",
      enquiry,
    });
  } catch (error: any) {
    console.error("Create enquiry error:", error);
    return res.status(500).json({ success: false, message: "Failed to process enquiry" });
  }
}

export async function getEnquiries(req: Request, res: Response) {
  try {
    const { status, search } = req.query;

    const where: any = {};
    if (status && status !== "ALL") {
      where.status = String(status);
    }
    if (search) {
      const q = String(search);
      where.OR = [
        { name: { contains: q } },
        { email: { contains: q } },
        { company: { contains: q } },
      ];
    }

    const enquiries = await prisma.enquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    console.error("Get enquiries error:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch enquiries" });
  }
}

export async function updateEnquiryStatus(req: Request, res: Response) {
  const id = String(req.params.id);
  const { status, notes } = req.body;

  try {
    const updated = await prisma.enquiry.update({
      where: { id },
      data: {
        status,
        ...(notes !== undefined ? { notes } : {}),
      },
    });

    return res.json({ success: true, enquiry: updated });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to update enquiry" });
  }
}

export async function deleteEnquiry(req: Request, res: Response) {
  const id = String(req.params.id);

  try {
    await prisma.enquiry.delete({ where: { id } });
    return res.json({ success: true, message: "Enquiry deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to delete enquiry" });
  }
}
