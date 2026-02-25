"use client";

import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  // Gold Sets
  {
    id: 1,
    image: "/gold-sets/Crown Jewel Gold Set.png",
    title: "Crown Jewel Gold Set",
    category: "Gold Sets",
    href: "/collections?category=Gold+Sets",
  },
  {
    id: 2,
    image: "/gold-sets/Majestic Aura Gold Set.png",
    title: "Majestic Aura Gold Set",
    category: "Gold Sets",
    href: "/collections?category=Gold+Sets",
  },
  // Bridal Sets
  {
    id: 3,
    image: "/bridal-sets/Celestial Charm Bridal Set.png",
    title: "Celestial Charm Bridal Set",
    category: "Bridal Sets",
    href: "/collections?category=Bridal+Sets",
  },
  {
    id: 4,
    image: "/bridal-sets/Queen's Grace Bridal Set.png",
    title: "Queen's Grace Bridal Set",
    category: "Bridal Sets",
    href: "/collections?category=Bridal+Sets",
  },
  // Bangles & Kara
  {
    id: 5,
    image: "/bangles-kara/golden-queen-bangles.png",
    title: "Golden Queen Bangles",
    category: "Bangles & Kara",
    href: "/collections?category=Bangles+%26+Kara",
  },
  {
    id: 6,
    image: "/bangles-kara/heritage-bride-bangles.png",
    title: "Heritage Bride Bangles",
    category: "Bangles & Kara",
    href: "/collections?category=Bangles+%26+Kara",
  },
  // Mala Sets
  {
    id: 7,
    image: "/mala-sets/Queen's Grace Mala.png",
    title: "Queen's Grace Mala",
    category: "Mala Sets",
    href: "/collections?category=Mala+Sets",
  },
  // Chain & Locket Sets
  {
    id: 8,
    image: "/chain-locket-sets/Elegant Gold Chain & Locket.png",
    title: "Elegant Gold Chain & Locket",
    category: "Chain & Locket Sets",
    href: "/collections?category=Chain+%26+Locket+Sets",
  },
];

export default function WeddingGallery() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-gold)] mb-2">
            The Journey of Elegance
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Heritage Wedding Diaries
          </h2>
          <div className="w-16 h-px bg-[var(--brand-gold)] mx-auto" />
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href={galleryImages[0].href} className="block">
              <GalleryCard image={galleryImages[0]} aspect="aspect-[3/4]" />
            </Link>
            <Link href={galleryImages[1].href} className="block">
              <GalleryCard image={galleryImages[1]} aspect="aspect-square" />
            </Link>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <Link href={galleryImages[2].href} className="block">
              <GalleryCard image={galleryImages[2]} aspect="aspect-square" />
            </Link>
            <Link href={galleryImages[3].href} className="block">
              <GalleryCard image={galleryImages[3]} aspect="aspect-[3/4]" />
            </Link>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-4 pt-8">
            <Link href={galleryImages[4].href} className="block">
              <GalleryCard image={galleryImages[4]} aspect="aspect-[3/4]" />
            </Link>
            <Link href={galleryImages[5].href} className="block">
              <GalleryCard image={galleryImages[5]} aspect="aspect-square" />
            </Link>
          </div>
          {/* Column 4 */}
          <div className="flex flex-col gap-4 pt-8">
            <Link href={galleryImages[6].href} className="block">
              <GalleryCard image={galleryImages[6]} aspect="aspect-square" />
            </Link>
            <Link href={galleryImages[7].href} className="block">
              <GalleryCard image={galleryImages[7]} aspect="aspect-[3/4]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  image,
  aspect,
}: {
  image: (typeof galleryImages)[0];
  aspect: string;
}) {
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
        <span className="text-[9px] text-[var(--brand-gold)] font-bold tracking-[0.3em] uppercase mb-2">
          {image.category}
        </span>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
          {image.title}
        </h3>
      </div>
    </div>
  );
}
