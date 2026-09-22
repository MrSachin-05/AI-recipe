"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import PricingSection from "./PricingSection";

const PricingModal = ({ subscriptionTier = "free", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const canOpen = subscriptionTier === "free";

  return (
    <>
      <Dialog open={isOpen} onOpenChange={canOpen ? setIsOpen : undefined}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="p-8 pt-4 sm:max-w-4xl bg-zinc-950 border border-zinc-800 text-white shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          <DialogTitle />
          <PricingSection />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PricingModal;
