"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(0);

  // Scroll progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen grid-bg">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-[96px] flex items-center justify-between">

          {/* Logo */}
          <Image
            src="/sns-logo.png"
            alt="SNS Square Logo"
            width={110}
            height={44}
            priority
            className="object-contain"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <ul className="flex gap-12 text-[16px] font-medium text-gray-800">
              <li>Agentic Workbench</li>
              <li>Use Cases</li>
              <li>Who we are</li>
              <li>Careers</li>
              <li className="text-blue-600 font-semibold">Blogs</li>
            </ul>

            <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium">
              Sign Up
            </button>

            <button className="border border-black px-6 py-3 rounded-md text-sm font-medium hover:bg-black hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Rainbow Scroll Line */}
        <div className="h-[4px] w-full bg-gray-100">
          <div
            className="h-full transition-all duration-150"
            style={{
              width: `${scroll}%`,
              background:
                "linear-gradient(90deg,#ff7a18,#ff3d77,#7a5cff,#00c6ff,#00ffa3,#ffd400)",
            }}
          />
        </div>
      </nav>

      {/* ================= HEADER ================= */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20">
        <h1 className="text-[52px] font-semibold mb-4">Blog</h1>
        <p className="text-gray-600 text-[18px] max-w-2xl">
          The latest innovations and wins in AI-powered agents from Square
        </p>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[1,2,3,4,5,6].map((n) => (
            <BlogCard
              key={n}
              img={`/blog${n}.jpg`}
              title="SNS Square Consultancy Services Redefining Enterprise Transformation With Agentic Intelligence"
              date="Feb 4, 2026"
            />
          ))}

        </div>

        {/* Show More */}
        <div className="flex justify-center mt-16">
          <button className="border border-black px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition">
            Show More
          </button>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-200 to-blue-100 py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-4">
              Let&apos;s Build Your <br />
              <span className="text-blue-600">Agentic Future</span>
            </h2>

            <p className="text-gray-700 mt-4 max-w-md">
              Beyond automation. Agentic AI that thinks, acts, and delivers.
              The future is agentic.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-xl font-semibold mb-2">Let&apos;s Build Together</h3>
            <p className="text-gray-500 mb-6">We&apos;ll get back within 24h</p>

            <input placeholder="Name" className="w-full border-b py-2 mb-4 outline-none" />
            <input placeholder="Email" className="w-full border-b py-2 mb-4 outline-none" />
            <textarea placeholder="Message" className="w-full border-b py-2 mb-6 outline-none" />

            <button className="w-full bg-black text-white py-3 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white py-16 border-t">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-10">

          <div>
            <Image src="/sns-logo.png" alt="logo" width={120} height={60} />
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Address</h4>
            <p>Bangalore, India</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Email</h4>
            <p>info@snssquare.com</p>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-10 text-sm">
          © 2026 SNS Square. All rights reserved.
        </p>
      </footer>

    </main>
  );
}

/* ================= BLOG CARD ================= */

function BlogCard({ img, title, date }: any) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition cursor-pointer">
      <Image src={img} alt={title} width={500} height={260} className="w-full h-[260px] object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xs text-gray-400 mt-4">{date}</p>
      </div>
    </div>
  );
}
