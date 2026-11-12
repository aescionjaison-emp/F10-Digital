import { Router } from "express";
import { validateBody } from "../middleware/validate";
import { requireAdminAuth } from "../middleware/auth";
import { 
  loginAdmin, 
  getAdminProfile, 
  LoginSchema 
} from "../controllers/authController";
import { 
  createEnquiry, 
  getEnquiries, 
  updateEnquiryStatus, 
  deleteEnquiry, 
  CreateEnquirySchema, 
  UpdateStatusSchema 
} from "../controllers/enquiryController";
import { 
  getServices, 
  getServiceBySlug, 
  getCaseStudies, 
  getCaseStudyBySlug, 
  getPosts, 
  getPostBySlug, 
  getAdminStats 
} from "../controllers/contentController";

const router = Router();

// Public Endpoints
router.post("/enquiries", validateBody(CreateEnquirySchema), createEnquiry);
router.get("/services", getServices);
router.get("/services/:slug", getServiceBySlug);
router.get("/case-studies", getCaseStudies);
router.get("/case-studies/:slug", getCaseStudyBySlug);
router.get("/posts", getPosts);
router.get("/posts/:slug", getPostBySlug);

// Admin Authentication
router.post("/admin/login", validateBody(LoginSchema), loginAdmin);

// Protected Admin Endpoints
router.get("/admin/me", requireAdminAuth, getAdminProfile);
router.get("/admin/stats", requireAdminAuth, getAdminStats);
router.get("/admin/enquiries", requireAdminAuth, getEnquiries);
router.patch("/admin/enquiries/:id", requireAdminAuth, validateBody(UpdateStatusSchema), updateEnquiryStatus);
router.delete("/admin/enquiries/:id", requireAdminAuth, deleteEnquiry);

export default router;

