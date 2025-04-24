import React from "react";
import ProductImg from "./../../Asset/productc.png";
import InfoBanner from "./InfoBanner";
import logoManu from "./../../Asset/MeuLogos.png";
import Laptop from "./../../Asset/Rectangl.png";
import Writehand from "./../../Asset/Rectang.png";
import Teacup from "./../../Asset/Rectan.png";
import Paperpen from "./../../Asset/Recta.png";
import Readmore from "./../../Asset/Rec.png";
import Lappen from "./../../Asset/Re.png";
import Modernhome from "./../../Asset/Rea.png";
import Coloroffice from "./../../Asset/Rep.png";

const AboutPage = () => {
  const blogs = [
    {
      title: "Going all-in with minimalist design",
      image: Laptop,
      category: "Interior",
      date: "April 22, 2025",
      excerpt:
        "Explore the beauty and clarity that comes with less in modern design philosophy.",
    },
    {
      title: "Exploring new ways of decorating",
      image: Writehand,
      category: "Decor",
      date: "April 20, 2025",
      excerpt:
        "Creative decoration trends that break traditional rules and bring life to your space.",
    },
    {
      title: "Handmade pieces that took time to make",
      image: Teacup,
      category: "Craft",
      date: "April 18, 2025",
      excerpt: "The stories and craftsmanship behind unique handmade pieces.",
    },
  ];

  const inputSearch = [];

  const categories = ["Interior 1", "Decor 2", "Craft 3", "Art 4", "DIY 5"];

  const recentPosts = [
    {
      title: "Going all-in with millennial design",
      image: Paperpen,
      date: "03 Aug 2022",
    },
    {
      title: "Exploring new ways of decorating",
      image: Readmore,
      date: "03 Aug 2022",
    },
    {
      title: "Handmade pieces that took time to make",
      image: Lappen,
      date: "03 Aug 2022",
    },

    {
      title: "Modern home in Milan",
      image: Modernhome,
      date: "03 Aug 2022",
    },
    {
      title: "Colorful office redesign",
      image: Coloroffice,
      date: "03 Aug 2022",
    },
  ];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ProductImg})`,
        }}
      >
        <div className="inset-0 bg-white bg-opacity-70 flex flex-col justify-center items-center text-center p-4">
          {/* Logo */}
          <div className="mb-2">
            <img src={logoManu} alt="Logo" className="h-12 md:h-16" />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-black">
            Blog
          </h1>

          {/* Breadcrumb */}
          <div className="mt-2 text-sm text-gray-700">
            <span className="font-semibold">Home</span>
            <span className="mx-1">›</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white px-4 sm:px-8 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-2/3 space-y-10">
            {blogs.map((blog, idx) => (
              <div key={idx} className="space-y-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <div className="text-sm text-gray-500">
                    {blog.category} - {blog.date}
                  </div>
                  <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                </div>
              </div>
            ))}
            {/* Pagination */}
            <div className="flex justify-center gap-2 pt-6">
              <button className="w-8 h-8 rounded bg-yellow-600 text-white hover:bg-yellow-700">
                1
              </button>
              <button className="w-8 h-8 rounded bg-gray-200 hover:bg-yellow-500">
                2
              </button>
              <button className="w-8 h-8 rounded bg-gray-200 hover:bg-yellow-500">
                3
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-10">
            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold  mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-700">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="hover:text-yellow-600 cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
              <ul className="space-y-4">
                {recentPosts.map((post, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h5 className="text-sm font-medium">{post.title}</h5>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <InfoBanner />
      </section>
    </div>
  );
};

export default AboutPage;
