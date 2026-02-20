"use client";

import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    id: 1,
    image: "/j1.png",
    title: "Heritage Bridal Set",
    category: "Bridal",
  },
  {
    id: 2,
    image: "/j2.png",
    title: "Royal Wedding Nath",
    category: "Wedding",
  },
  {
    id: 3,
    image: "/j3.png",
    title: "Gold Plated Jhumkas",
    category: "Classic",
  },
  {
    id: 4,
    image: "/Gold-bracelet.jpg",
    title: "Modern Gold Bracelet",
    category: "Handwear",
  },
  {
    id: 5,
    image: "/j1.png",
    title: "Exquisite Choker",
    category: "Necklace",
  },
  {
    id: 6,
    image: "/j2.png",
    title: "Wedding Bangles",
    category: "Bridal",
  },
  {
    id: 7,
    image: "/j3.png",
    title: "Premium Mala Set",
    category: "Royal",
  },
  {
    id: 8,
    image: "/Gold-bracelet.jpg",
    title: "Engagement Ring",
    category: "Jewelry",
  },
];

export default function WeddingGallery() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c8a97e] mb-2">
            The Journey of Elegance
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Heritage Wedding Diaries
          </h2>
          <div className="w-16 h-px bg-[#c8a97e] mx-auto" />
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/collections" className="block">
              <GalleryCard image={galleryImages[0]} aspect="aspect-[3/4]" />
            </Link>
            <Link href="/collections" className="block">
              <GalleryCard image={galleryImages[1]} aspect="aspect-square" />
            </Link>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <Link href="/collections" className="block">
              <GalleryCard image={galleryImages[2]} aspect="aspect-square" />
            </Link>
            <Link href="/collections" className="block">
              <GalleryCard image={galleryImages[3]} aspect="aspect-[3/4]" />
            </Link>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-4 pt-8">
            <Link href="/collections" className="block">
              <GalleryCard image={galleryImages[4]} aspect="aspect-[3/4]" />
            </Link>
            <Link href="/collections" className="block">
              <GalleryCard image={galleryImages[5]} aspect="aspect-square" />
            </Link>
          </div>
          {/* Column 4 */}
          <div className="flex flex-col gap-4 pt-8">
            <Link href="/collections" className="block">
              <GalleryCard image={galleryImages[6]} aspect="aspect-square" />
            </Link>
            <Link href="/collections" className="block">
              <GalleryCard image={galleryImages[7]} aspect="aspect-[3/4]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ image, aspect }: { image: any; aspect: string }) {
  return (
    <div
      className={`relative overflow-hidden group ${aspect} bg-gray-50 border border-gray-100`}
    >
      <Image
        src={image.image}
        alt={image.title}
        fill
        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
        <span className="text-[9px] text-[#c8a97e] font-bold tracking-[0.3em] uppercase mb-2">
          {image.category}
        </span>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
          {image.title}
        </h3>
      </div>
    </div>
  );
}
