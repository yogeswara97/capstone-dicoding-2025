// app/register/page.tsx
"use client";

import Image from "next/image";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side → Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="mb-10">
            <h1 className="text-2xl font-bold">PneumoCare</h1>
          </div>

          {/* Welcome Text */}
          <h2 className="text-2xl font-bold mb-2">Create your account</h2>
          <p className="text-gray-500 mb-6 text-sm">
            Start building your design system effortlessly with our powerful component library.
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Alex Jordan"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  placeholder="alex.jordan@gmail.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="password"
                  placeholder="********"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="password"
                  placeholder="********"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>
            </div>

            {/* Sign up Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-xl transition"
            >
              Sign up
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Sign up */}
          <button className="w-full border border-gray-300 py-2.5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M23.49 12.27c1.89 0 3.57.65 4.9 1.95l3.66-3.66C29.9 8.04 26.93 6.75 23.49 6.75 17.56 6.75 12.4 10.72 10.29 16.02l4.35 3.39c1.01-3.02 3.9-7.14 8.85-7.14z"
              />
              <path
                fill="#34A853"
                d="M46.12 24.51c0-1.59-.14-3.15-.4-4.65H23.5v8.8h12.66c-.55 2.86-2.22 5.3-4.74 6.93l4.42 3.43c2.6-2.4 5.28-6.38 5.28-14.51z"
              />
              <path
                fill="#FBBC05"
                d="M10.64 28.59c-.48-1.44-.74-2.97-.74-4.59s.26-3.15.74-4.59l-4.35-3.39C4.85 18.92 4 21.66 4 24s.85 5.08 2.29 7.98l4.35-3.39z"
              />
              <path
                fill="#EA4335"
                d="M23.49 41.25c3.45 0 6.38-1.13 8.5-3.07l-4.42-3.43c-1.24.84-2.82 1.35-4.08 1.35-4.95 0-7.84-4.12-8.85-7.14l-4.35 3.39c2.11 5.3 7.27 9.27 13.2 9.27z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Sign up with Google
            </span>
          </button>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side → Image */}
      <div className="hidden md:flex w-1/2 bg-black relative">
        <Image
          src="/register-bg.jpg" // simpan di /public/register-bg.jpg
          alt="Register background"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute bottom-10 left-10 text-white max-w-sm">
          <p className="text-lg font-semibold">
            “Design freedom starts here with the best tools.”
          </p>
          <p className="mt-4 text-sm">
            <span className="font-bold">Michael Chen</span>
            <br />
            Product Designer
          </p>
        </div>
      </div>
    </div>
  );
}
