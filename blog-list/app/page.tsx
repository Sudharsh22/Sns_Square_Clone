import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen grid-bg">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-[96px] flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/sns-logo.png"
              alt="SNS Square Logo"
              width={110}
              height={44}
              priority
              className="object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <ul className="flex items-center gap-12 text-[16px] font-medium text-gray-800">
              <li className="cursor-pointer hover:text-black">
                Agentic Workbench
              </li>
              <li className="cursor-pointer hover:text-black">
                Use Cases
              </li>
              <li className="cursor-pointer hover:text-black">
                Who we are
              </li>
              <li className="cursor-pointer hover:text-black">
                Careers
              </li>
              <li className="cursor-pointer text-blue-600 font-semibold">
                Blogs
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium">
                Sign Up
              </button>

              <button className="border border-black px-6 py-3 rounded-md text-sm font-medium hover:bg-black hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* ================= HEADER ================= */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20">
        <h1 className="text-[52px] font-semibold text-black mb-4">
          Blog
        </h1>
        <p className="text-gray-600 text-[18px] max-w-2xl">
          The latest innovations and wins in AI-powered agents from Square
        </p>
      </section>

      {/* ================= CATEGORY PILLS ================= */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-4">

          <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium">
            All
          </button>

          {[
            "AI Insights",
            "Healthcare",
            "Information Technology",
            "Insurance",
            "Our Story",
            "Supply Chain",
            "Uncategorized",
          ].map((item) => (
            <button
              key={item}
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <BlogCard
            img="/blog1.jpg"
            title="SNS Square Consultancy Services Redefining Enterprise Transformation With Agentic Intelligence"
            date="Feb 4, 2026"
          />

          <BlogCard
            img="/blog2.jpg"
            title="Apple Expands Hyderabad GCC To Strengthen India’s Global Role"
            date="Feb 3, 2026"
          />

          <BlogCard
            img="/blog3.jpg"
            title="From Policy To Prosperity: How GCCs Power India’s Growth"
            date="Feb 2, 2026"
          />

          <BlogCard
            img="/blog4.jpg"
            title="OpenAI’s Homeownership Strategy and the Future of Employee Compensation"
            date="Feb 2, 2026"
          />

          <BlogCard
            img="/blog5.jpg"
            title="Indian AI Startup Emergent Raises $70M Valuation, Hits $300M"
            date="Jan 30, 2026"
          />

          <BlogCard
            img="/blog6.jpg"
            title="India’s GCC Momentum: From Offshore Units to Growth Engines"
            date="Jan 30, 2026"
          />

        </div>
      </section>
    </main>
  );
}

/* ================= BLOG CARD ================= */
function BlogCard({
  img,
  title,
  date,
}: {
  img: string;
  title: string;
  date: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition duration-300 cursor-pointer">
      <Image
        src={img}
        alt={title}
        width={500}
        height={260}
        className="w-full h-[260px] object-cover"
      />
      <div className="p-6">
        <h3 className="text-[18px] font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
        <p className="mt-4 text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
}
