"use client";

import { usePathname } from "next/navigation";
import React from "react";

const HomeFooter = () => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <>
      <footer className="bg-linear-to-br from-stone-100 to-orange-50 border-t border-stone-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <h2 className="text-3xl font-extrabold bg-linear-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent mb-4">
                Servd
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Turn your leftovers into masterpieces with AI-powered cooking.
                Reduce food waste and cook smarter every day.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-stone-900 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                {[
                  "Scan Pantry",
                  "AI Recipes",
                  "Digital Cookbook",
                  "Pricing",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-orange-600 hover:translate-x-1 transition-all cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-stone-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                {["How it Works", "Help Center", "Privacy Policy", "Terms"].map(
                  (item) => (
                    <li
                      key={item}
                      className="hover:text-orange-600 hover:translate-x-1 transition-all cursor-pointer"
                    >
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-stone-900 mb-4">Contact</h3>

              <div className="space-y-2 text-sm text-stone-600">
                <p>
                  <span className="font-semibold text-stone-800">Name:</span>{" "}
                  Bidyasagar Sahu
                </p>

                <p>
                  <span className="font-semibold text-stone-800">Phone:</span>
                  <a
                    href="tel:9556482091"
                    className="hover:text-orange-600 ml-1"
                  >
                    +91 9556482091
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-stone-800">Email:</span>
                  <a
                    href="mailto:bidyasagarsahu5@gmail.com"
                    className="hover:text-orange-600 ml-1"
                  >
                    bidyasagarsahu5@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-stone-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Servd. All rights reserved.</p>

            <p className="mt-2 md:mt-0">
              Made with ❤️ by{" "}
              <span className="text-orange-600 font-semibold"> 
                Bidyasagar Sahu
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
