"use client";
import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  variant?: "login" | "register";
};

export default function AuthLayout({ children, variant = "login" }: AuthLayoutProps) {
  const bgClass = variant === "login" ? "bg-gray-900" : "bg-gradient-to-r from-blue-100 to-purple-100";
  const textColor = variant === "login" ? "text-white" : "text-gray-900";

  return (
    <div className={`${bgClass} min-h-screen flex items-center justify-center px-4`}>
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-lg ${variant === "login" ? "bg-gray-800" : "bg-white"} ${textColor}`}>
        {children}
      </div>
    </div>
  );
}
