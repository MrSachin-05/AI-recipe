import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Cookie, Refrigerator, Sparkle } from "lucide-react";
import UserDropdown from "@/components/UserDropdown";
import { checkUser } from "@/lib/checkUser";
import PricingModal from "./PricingModal";
import { Badge } from "./ui/badge";
import HowToCookModal from "./HowToCookModal";

const Header = async () => {
  const user = await checkUser(); //Replace with actual user fatching logic

  return (
    <header className="fixed top-0 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl z-50 supports-backdrop-filter:bg-zinc-950/60">
      <nav className="container mx-auto px-12 h-16 flex justify-between items-center">
        <Link href={user ? "/dashboard" : "/"} className="hover:opacity-90 hover:scale-105 transition-all">
          <Image
            src="/glow-logo.png"
            alt="Spicyfy Logo"
            width={60}
            height={60}
            className="w-16 h-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
          {" "}
          <Link
            href="/recipes"
            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] transition-all flex gap-1.5 items-center"
          >
            <Cookie className="w-4 h-4 text-purple-400" />
            My Recipes
          </Link>
          <Link
            href="/pantry"
            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] transition-all flex gap-1.5 items-center"
          >
            <Refrigerator className="w-4 h-4 text-pink-400" />
            My Pantry
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* How to cook */}
              <HowToCookModal />

              <PricingModal subscriptionTier={user.subscriptionTier}>
                <Badge
                  variant="outline"
                  className={`flex h-8 px-3 gap-1.5 rounded-full text-xs font-semibold transition-all ${user.subscriptionTier === "pro" ? "bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 text-white border-none shadow-md shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105" : "bg-zinc-900 text-zinc-300 border-zinc-800 cursor-pointer hover:bg-zinc-800 hover:text-white hover:border-zinc-700"}`}
                >
                  <Sparkle
                    className={`h-3 w-3 ${user.subscriptionTier === "pro" ? "text-white fill-white/20" : "text-zinc-400"}`}
                  />
                  <span>
                    {user.subscriptionTier === "pro" ? "Pro Chef" : "free Plan"}
                  </span>
                </Badge>
              </PricingModal>
              <UserDropdown />
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="text-zinc-300 hover:text-white hover:bg-zinc-800/80 font-medium"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="primary" className="rounded-full px-6 shadow-md shadow-purple-500/30 hover:shadow-purple-500/50">
                  Get Started
                </Button>
              </SignUpButton>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
