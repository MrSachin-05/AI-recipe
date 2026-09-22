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
      <footer className="bg-linear-to-b from-zinc-950 to-black border-t border-zinc-800/80 mt-16 text-zinc-400">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <h2 className="text-3xl font-extrabold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Spicyfy
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Turn your leftovers into masterpieces with AI-powered cooking.
                Reduce food waste and cook smarter every day.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                {[
                  "Scan Pantry",
                  "AI Recipes",
                  "Digital Cookbook",
                  "Pricing",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] hover:translate-x-1.5 transition-all cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                {["How it Works", "Help Center", "Privacy Policy", "Terms"].map(
                  (item) => (
                    <li
                      key={item}
                      className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] hover:translate-x-1.5 transition-all cursor-pointer"
                    >
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>

              <div className="space-y-2 text-sm text-zinc-400">
                <p>
                  <span className="font-semibold text-zinc-200">Name:</span>{" "}
                  Sachidananda Panigrahi
                </p>

                <p>
                  <span className="font-semibold text-zinc-200">Phone:</span>
                  <a
                    href="tel:8260537905"
                    className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all ml-1"
                  >
                    +91 8260537905
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-zinc-200">Email:</span>
                  <a
                    href="mailto:sachidanandapanigrahi96@gmail.com"
                    className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all ml-1"
                  >
                    sachidanandapanigrahi96@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-zinc-800/80 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} Spicyfy. All rights reserved.</p>

            <p className="mt-2 md:mt-0">
              Made with ❤️ by{" "}
              <span className="text-pink-500 font-semibold drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]"> 
                Mr. Sachin
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
