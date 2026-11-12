"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  BarChart3, 
  MessageSquare, 
  Layers, 
  FileText, 
  CheckCircle, 
  Trash2, 
  LogOut, 
  ExternalLink,
  TrendingUp,
  Search
} from "lucide-react";
import { SERVICES_DATA, CASE_STUDIES, BLOG_POSTS, MEASUREMENT_OUTCOMES, COMPANY_INFO } from "@/lib/data";
import { getLocalOrRemoteEnquiries } from "@/lib/api";

interface EnquiryItem {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  budget?: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "enquiries" | "services" | "cases" | "insights">("overview");
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("f10_admin_token");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    const savedUser = localStorage.getItem("f10_admin_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    loadEnquiries(token);
  }, [router]);

  const loadEnquiries = async (token: string) => {
    const res = await getLocalOrRemoteEnquiries(token);
    if (res && res.data && res.data.length > 0) {
      setEnquiries(res.data);
    } else {
      const defaultEnquiries: EnquiryItem[] = [
        {
          id: "enq-101",
          name: "Sultan Al Nuaimi",
          email: "sultan@alnuaimiholdings.ae",
          phone: "+971 50 882 1928",
          company: "Al Nuaimi Holdings UAE",
          serviceInterest: "Full Digital Transformation Ecosystem",
          budget: "AED 350,000+ (Enterprise Scale)",
          message: "We need an integrated revamp of our group corporate portal and automated AI lead capture for real estate developments in Dubai and Fujairah.",
          status: "QUALIFIED",
          createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
        },
        {
          id: "enq-102",
          name: "Priya Sharma",
          email: "priya.s@omniversal-health.com",
          phone: "+971 55 234 9182",
          company: "Omni Healthcare Network",
          serviceInterest: "AI & Business Automation (WhatsApp, Agents)",
          budget: "AED 150,000 - 350,000",
          message: "Requesting proposal for multi-clinic WhatsApp booking flow, automated doctor schedules, and patient intake.",
          status: "IN_PROGRESS",
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
        },
      ];
      setEnquiries(defaultEnquiries);
      localStorage.setItem("f10_local_enquiries", JSON.stringify(defaultEnquiries));
    }
  };

  const updateEnquiryStatus = (id: string, newStatus: string) => {
    const updated = enquiries.map((e) => (e.id === id ? { ...e, status: newStatus } : e));
    setEnquiries(updated);
    localStorage.setItem("f10_local_enquiries", JSON.stringify(updated));
  };

  const deleteEnquiry = (id: string) => {
    if (confirm("Are you sure you want to delete this enquiry record?")) {
      const updated = enquiries.filter((e) => e.id !== id);
      setEnquiries(updated);
      localStorage.setItem("f10_local_enquiries", JSON.stringify(updated));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("f10_admin_token");
    localStorage.removeItem("f10_admin_user");
    router.push("/admin/login");
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.company && e.company.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === "ALL" || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Admin Top Header */}
      <header className="bg-[#E8E4DC] border-b border-[#DCD7CD] px-6 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#202522] flex items-center justify-center font-bold text-xs font-mono">
                F10
              </div>
              <span className="font-extrabold tracking-[0.2em] uppercase text-sm font-heading">
                ADMIN CONSOLE
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <div className="text-xs font-bold text-[#202522]">{user?.name || "Daniel · Leadership"}</div>
              <div className="text-[10px] text-[#777A75]">{user?.email || "admin@f10.digital"}</div>
            </div>

            <Link
              href="/"
              target="_blank"
              className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] text-xs font-medium border border-[#E2DED6] flex items-center gap-1.5"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="p-2 rounded-lg bg-rose-50 text-rose-700 text-xs flex items-center gap-1 border border-rose-200"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Tabs */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 border-b border-[#E2DED6]">
          {[
            { id: "overview", label: "Overview", icon: BarChart3 },
            { id: "enquiries", label: `Enquiries (${enquiries.length})`, icon: MessageSquare },
            { id: "services", label: `Capabilities (${SERVICES_DATA.length})`, icon: Layers },
            { id: "cases", label: `Case Studies (${CASE_STUDIES.length})`, icon: TrendingUp },
            { id: "insights", label: `Insights (${BLOG_POSTS.length})`, icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
                  isSelected
                    ? "bg-[#202522] text-[#F7F5F0] shadow-sm"
                    : "bg-[#FFFFFF] text-[#777A75] hover:text-[#202522] border border-[#E2DED6]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] shadow-sm space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#777A75]">
                  Total Inbound Inquiries
                </span>
                <div className="text-4xl font-extrabold text-[#202522] font-heading">
                  {enquiries.length}
                </div>
                <div className="text-xs text-[#B69A72] flex items-center gap-1 font-mono">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>100% Capture Active</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] shadow-sm space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#777A75]">
                  Active Clients
                </span>
                <div className="text-4xl font-extrabold text-[#202522] font-heading">
                  50+
                </div>
                <div className="text-xs text-[#777A75] font-mono">
                  UAE, GCC & Global
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] shadow-sm space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#777A75]">
                  Projects Delivered
                </span>
                <div className="text-4xl font-extrabold text-[#202522] font-heading">
                  200+
                </div>
                <div className="text-xs text-[#777A75] font-mono">
                  In 24 Months
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] shadow-sm space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#777A75]">
                  Delivery Hubs
                </span>
                <div className="text-4xl font-extrabold text-[#202522] font-heading">
                  4
                </div>
                <div className="text-xs text-[#777A75] font-mono">
                  Dubai · Fujairah · Mumbai · Chennai
                </div>
              </div>
            </div>

            {/* Recent Enquiries List */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2DED6] pb-4">
                <h3 className="text-base font-bold font-heading text-[#202522]">
                  Recent Inbound Briefs
                </h3>
                <button
                  onClick={() => setActiveTab("enquiries")}
                  className="text-xs text-[#B69A72] font-bold uppercase tracking-wider"
                >
                  View All ({enquiries.length})
                </button>
              </div>

              <div className="space-y-3">
                {enquiries.slice(0, 3).map((e) => (
                  <div key={e.id} className="p-4 rounded-xl bg-[#F7F5F0] flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-[#202522] block text-sm">{e.name}</span>
                      <span className="text-[#777A75]">{e.company || e.email} · {e.serviceInterest}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#E8E4DC] text-[#202522]">
                      {e.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ENQUIRIES */}
        {activeTab === "enquiries" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6]">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder="Search inquiries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F7F5F0] border border-[#E2DED6] text-xs text-[#202522] focus:outline-none focus:border-[#B69A72]"
                />
                <Search className="w-3.5 h-3.5 text-[#777A75] absolute left-3 top-2.5" />
              </div>

              <div className="flex items-center gap-2">
                {["ALL", "NEW", "IN_PROGRESS", "QUALIFIED", "CLOSED"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                      statusFilter === st
                        ? "bg-[#202522] text-[#F7F5F0]"
                        : "bg-[#F7F5F0] text-[#777A75] hover:text-[#202522]"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredEnquiries.map((enq) => (
                <div
                  key={enq.id}
                  className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-[#E2DED6] pb-3">
                    <div>
                      <h4 className="text-base font-bold text-[#202522] font-heading">
                        {enq.name} {enq.company && `· ${enq.company}`}
                      </h4>
                      <div className="text-xs text-[#777A75] font-mono">
                        {enq.email} {enq.phone && `· ${enq.phone}`}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={enq.status}
                        onChange={(e) => updateEnquiryStatus(enq.id, e.target.value)}
                        className="px-3 py-1 rounded-lg bg-[#F7F5F0] border border-[#E2DED6] text-xs font-mono font-bold text-[#202522]"
                      >
                        <option value="NEW">NEW</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="QUALIFIED">QUALIFIED</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>

                      <button
                        onClick={() => deleteEnquiry(enq.id)}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-[#777A75] font-light leading-relaxed">
                    {enq.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SERVICES */}
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv) => (
              <div key={srv.id} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] space-y-3">
                <span className="text-[10px] uppercase font-mono text-[#B69A72] block">
                  {srv.division}
                </span>
                <h4 className="text-base font-bold text-[#202522] font-heading">
                  {srv.title}
                </h4>
                <p className="text-xs text-[#777A75] line-clamp-2">
                  {srv.shortDesc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: CASES */}
        {activeTab === "cases" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.id} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] space-y-3">
                <span className="text-xs font-mono font-bold text-[#B69A72]">
                  {cs.clientCategory}
                </span>
                <h4 className="text-base font-bold text-[#202522] font-heading">
                  {cs.title}
                </h4>
                <p className="text-xs text-[#202522] font-medium">
                  {cs.result}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 5: INSIGHTS */}
        {activeTab === "insights" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] space-y-3">
                <span className="text-xs font-mono text-[#B69A72]">
                  {post.category} · {post.readTime}
                </span>
                <h4 className="text-base font-bold text-[#202522] font-heading">
                  {post.title}
                </h4>
                <p className="text-xs text-[#777A75] line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
