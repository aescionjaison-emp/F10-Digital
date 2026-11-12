import { Request, Response } from "express";
import prisma from "../prisma";

export async function getServices(req: Request, res: Response) {
  try {
    const services = await prisma.service.findMany({ orderBy: { createdAt: "asc" } });
    return res.json({ success: true, count: services.length, data: services });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch services" });
  }
}

export async function getServiceBySlug(req: Request, res: Response) {
  const slug = String(req.params.slug);
  try {
    const service = await prisma.service.findUnique({ where: { slug } });
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    return res.json({ success: true, data: service });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error fetching service" });
  }
}

export async function getCaseStudies(req: Request, res: Response) {
  try {
    const cases = await prisma.caseStudy.findMany({ orderBy: { createdAt: "desc" } });
    return res.json({ success: true, count: cases.length, data: cases });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch case studies" });
  }
}

export async function getCaseStudyBySlug(req: Request, res: Response) {
  const slug = String(req.params.slug);
  try {
    const item = await prisma.caseStudy.findUnique({ where: { slug } });
    if (!item) {
      return res.status(404).json({ success: false, message: "Case study not found" });
    }
    return res.json({ success: true, data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error fetching case study" });
  }
}

export async function getPosts(req: Request, res: Response) {
  try {
    const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });
    return res.json({ success: true, count: posts.length, data: posts });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch posts" });
  }
}

export async function getPostBySlug(req: Request, res: Response) {
  const slug = String(req.params.slug);
  try {
    const post = await prisma.blogPost.findUnique({ where: { slug } });
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    return res.json({ success: true, data: post });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error fetching post" });
  }
}

export async function getAdminStats(req: Request, res: Response) {
  try {
    const totalEnquiries = await prisma.enquiry.count();
    const newEnquiries = await prisma.enquiry.count({ where: { status: "NEW" } });
    const qualifiedEnquiries = await prisma.enquiry.count({ where: { status: "QUALIFIED" } });
    const totalServices = await prisma.service.count();
    const totalCases = await prisma.caseStudy.count();
    const totalPosts = await prisma.blogPost.count();

    return res.json({
      success: true,
      stats: {
        totalEnquiries,
        newEnquiries,
        qualifiedEnquiries,
        totalServices,
        totalCases,
        totalPosts,
        activeClients: "50+",
        projectsDelivered: "200+",
        regionalHubs: 4,
        metrics: {
          trafficIncrease: "+120%",
          qualifiedLeads: "+85%",
          conversionRate: "+40%",
          cpaReduction: "-35%",
        },
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch statistics" });
  }
}
