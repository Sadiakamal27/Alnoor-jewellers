"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const heroImages = [
  {
    id: 1,
    image: "/j1.png",
    title: "Moissanite Diamonds",
    subtitle: "Timeless Elegance",
    description:
      "Discover our exclusive collection of moissanite diamonds crafted with precision.",
  },
  {
    id: 2,
    image: "/j2.png",
    title: "Royal Collection",
    subtitle: "Magnificent Luxury",
    description:
      "Experience the grandeur of royalty with our hand-picked heritage pieces.",
  },
  {
    id: 3,
    image: "/j3.png",
    title: "Sparkling Elegance",
    subtitle: "Classic Grace",
    description:
      "Find the perfect piece to complement your style and make a statement.",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="m-0">
          {heroImages.map((item) => (
            <CarouselItem key={item.id} className="p-0 basis-full">
              <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl space-y-6">
                    <p className="text-[#c8a97e] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase animate-in fade-in slide-in-from-bottom duration-700">
                      {item.subtitle}
                    </p>
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
                      {item.title}
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-lg font-light max-w-lg animate-in fade-in slide-in-from-bottom duration-1200">
                      {item.description}
                    </p>
                    <div className="flex gap-4 pt-4 animate-in fade-in slide-in-from-bottom duration-1400">
                      <Link href="/collections">
                        <Button
                          className="px-8 py-6 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                          style={{ backgroundColor: "#c8a97e" }}
                        >
                          Explore Now
                        </Button>
                      </Link>
                      <Link href="https://wa.me/923001234567" target="_blank">
                        <Button
                          variant="outline"
                          className="px-8 py-6 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
                        >
                          Book Appointment
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 sm:left-8 bg-black/20 hover:bg-black/50 text-white border-0 z-20" />
        <CarouselNext className="right-4 sm:right-8 bg-black/20 hover:bg-black/50 text-white border-0 z-20" />
      </Carousel>
    </section>
  );
}
