import React, { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
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

  const categories = [
    { name: "Credits", value: 2 },
    { name: "Design", value: 8 },
    { name: "Handmobile", value: 7 },
    { name: "Interior", value: 1 },
    { name: "Wood", value: 6 },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="max-w-md mx-auto p-6 font-sans">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
              Categories
            </h1>

            {/* Search Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {filteredCategories.length > 0 ? (
                <table className="w-full">
                  <tbody>
                    {filteredCategories.map((category, index) => (
                      <tr
                        key={category.name}
                        className={`border-b border-gray-100 ${
                          index === filteredCategories.length - 1
                            ? ""
                            : "border-b"
                        }`}
                      >
                        <td className="py-4 px-6 text-gray-700 font-medium">
                          {category.name}
                        </td>
                        <td className="py-4 px-6 text-gray-500 text-right">
                          {category.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="py-4 px-6 text-gray-500 text-center">
                  No categories found matching your search.
                </div>
              )}
              <div className="pt-5">
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
                        <span className="text-xs text-gray-500">
                          {post.date}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Posts */}

      <section>
        <InfoBanner />
      </section>
    </div>
  );
};

export default AboutPage;
