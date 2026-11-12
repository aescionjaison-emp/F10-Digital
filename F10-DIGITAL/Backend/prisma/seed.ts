import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting F10 DIGITAL database seeding...");

  // 1. Seed Super Admin
  const adminEmail = process.env.ADMIN_EMAIL || "admin@f10.digital";
  const adminPassword = process.env.ADMIN_PASSWORD || "F10Admin2027!";
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: { password: hashedPassword },
    create: {
      email: adminEmail,
      password: hashedPassword,
      name: "Daniel · F10 Partner",
      role: "SUPER_ADMIN",
    },
  });
  console.log(`✅ Admin account created: ${admin.email}`);

  // 2. Seed Initial Enquiries
  const sampleEnquiries = [
    {
      name: "Sultan Al Nuaimi",
      email: "sultan@alnuaimiholdings.ae",
      phone: "+971 50 882 1928",
      company: "Al Nuaimi Holdings UAE",
      serviceInterest: "Full Digital Transformation Ecosystem",
      budget: "AED 350,000+ (Enterprise Scale)",
      message: "We need an integrated revamp of our group corporate portal and automated AI lead capture for real estate developments in Dubai and Fujairah.",
      status: "QUALIFIED",
    },
    {
      name: "Priya Sharma",
      email: "priya.s@omniversal-health.com",
      phone: "+971 55 234 9182",
      company: "Omni Healthcare Network",
      serviceInterest: "AI & Business Automation (WhatsApp, Agents)",
      budget: "AED 150,000 - 350,000",
      message: "Requesting proposal for multi-clinic WhatsApp booking flow, automated doctor schedules, and patient intake.",
      status: "IN_PROGRESS",
    },
    {
      name: "Marc Van Der Meer",
      email: "m.vandermeer@eurofin-tech.com",
      phone: "+44 20 7946 0912",
      company: "EuroFin Capital",
      serviceInterest: "Digital & Technology (Next.js, Apps, APIs)",
      budget: "AED 150,000 - 350,000",
      message: "Seeking Next.js corporate frontend with sub-second latency for international investor portal.",
      status: "NEW",
    },
  ];

  for (const enq of sampleEnquiries) {
    await prisma.enquiry.create({ data: enq });
  }
  console.log(`✅ Seeded ${sampleEnquiries.length} enterprise enquiries`);

  console.log("🎉 Database seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

