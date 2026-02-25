"use client";

import { Star } from "lucide-react";

export default function FloatingReviews() {
  const scrollToReviews = () => {
    const element = document.getElementById("reviews-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on homepage, redirect to home and then scroll (if possible) or just link
      window.location.href = "/#reviews-section";
    }
  };

  return (
    <button
      onClick={scrollToReviews}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-2 py-4 px-2 rounded-l-lg hover:pr-4 transition-all duration-300 group shadow-lg"
      style={{ backgroundColor: "#C6A15B" }}
    >
      <Star className="w-4 h-4 text-white fill-white transition-transform duration-300 group-hover:scale-125" />
      <span
        className="text-white text-sm font-bold tracking-widest uppercase [writing-mode:vertical-lr]"
        style={{ transform: "rotate(180deg)" }}
      >
        Reviews
      </span>
    </button>
  );
}