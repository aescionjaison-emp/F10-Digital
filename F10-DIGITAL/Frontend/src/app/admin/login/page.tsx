"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, ArrowLeft } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@f10.digital");
  const [password, setPassword] = useState("F10Admin2027!");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5050/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }).catch(() => null);

      if (res && res.ok) {
        const data = await res.json();
        localStorage.setItem("f10_admin_token", data.token);
        localStorage.setItem("f10_admin_user", JSON.stringify(data.user));
        router.push("/admin/dashboard");
        return;
      }

      if (email === "admin@f10.digital" && password === "F10Admin2027!") {
        const dummyToken = `f10-jwt-token-${Date.now()}`;
        localStorage.setItem("f10_admin_token", dummyToken);
        localStorage.setItem(
          "f10_admin_user",
          JSON.stringify({ name: "Daniel · F10 Partner", email: "admin@f10.digital", role: "SUPER_ADMIN" })
        );
        router.push("/admin/dashboard");
      } else {
        setError("Invalid administrative credentials.");
      }
    } catch (err: any) {
      setError("An error occurred during authentication.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] flex items-center justify-center p-6 text-[#202522]">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#777A75] hover:text-[#202522] uppercase tracking-wider mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Site</span>
          </Link>
          <div className="w-12 h-12 rounded-full border border-[#202522] mx-auto flex items-center justify-center font-bold text-xs font-mono">
            F10
          </div>
          <h1 className="text-2xl font-black font-heading tracking-tight text-[#202522]">
            F10 Administrative Console
          </h1>
          <p className="text-xs text-[#777A75] font-mono">
            Restricted Executive Governance
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] shadow-md space-y-6">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777A75] mb-1.5 font-semibold">
                Admin Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E2DED6] text-[#202522] text-sm focus:outline-none focus:border-[#B69A72]"
                  placeholder="admin@f10.digital"
                />
                <Mail className="w-4 h-4 text-[#777A75] absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777A75] mb-1.5 font-semibold">
                Security Key
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E2DED6] text-[#202522] text-sm focus:outline-none focus:border-[#B69A72]"
                  placeholder="••••••••••••"
                />
                <Lock className="w-4 h-4 text-[#777A75] absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#E8E4DC] text-[11px] text-[#777A75]">
              <span className="font-semibold text-[#202522] block mb-0.5">Preset Credentials:</span>
              <span><code className="text-[#202522]">admin@f10.digital</code> / <code className="text-[#202522]">F10Admin2027!</code></span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-[#202522] text-[#F7F5F0] hover:bg-[#141715] text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{loading ? "Verifying Session..." : "Authorize Access"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
