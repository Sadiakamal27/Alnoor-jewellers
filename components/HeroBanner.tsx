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
    title: "Heritage Bridal Collection",
    subtitle: "Timeless Elegance",
    description:
      "Experience the grandeur of royalty with our hand-picked heritage bridal pieces.",
  },
  {
    id: 2,
    image: "/j2.png",
    title: "Exquisite Gold Sets",
    subtitle: "Magnificent Luxury",
    description:
      "Discover our exclusive collection of gold sets crafted with passion and precision.",
  },
  {
    id: 3,
    image: "/j3.png",
    title: "Timeless Mala Designs",
    subtitle: "Classic Grace",
    description:
      "Find the perfect mala set to complement your style and make a statement.",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-white">
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
              <div className="relative w-full aspect-4/3 sm:aspect-1024/326">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/30 lg:bg-black/20" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 flex items-center">
                  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl space-y-1 sm:space-y-6 text-center sm:text-left">
                      <p className="text-[#c8a97e] text-[8px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase animate-in fade-in slide-in-from-bottom duration-700">
                        {item.subtitle}
                      </p>
                      <h2 className="text-lg sm:text-4xl lg:text-7xl font-fancy text-white leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
                        {item.title}
                      </h2>
                      <p className="hidden sm:block text-gray-200 text-base md:text-lg font-light max-w-xs sm:max-w-lg mx-auto sm:mx-0 animate-in fade-in slide-in-from-bottom duration-1200 sm:line-clamp-3 md:line-clamp-none">
                        {item.description}
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 pt-1.5 sm:pt-4 animate-in fade-in slide-in-from-bottom duration-1400">
                        <Link href="/collections" className="w-full sm:w-auto">
                          <Button
                            className="w-full sm:w-auto px-2.5 py-1.5 sm:px-7 sm:py-4 text-[8px] sm:text-xs md:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300"
                            style={{ backgroundColor: "#c8a97e" }}
                          >
                            Explore Now
                          </Button>
                        </Link>
                        <Link
                          href="https://wa.me/19059040067"
                          target="_blank"
                          className="w-full sm:w-auto"
                        >
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto px-2.5 py-1.5 sm:px-7 sm:py-4 text-[8px] sm:text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-white border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
                          >
                            Book Appointment
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex left-4 sm:left-8 bg-black/20 hover:bg-black/50 text-white border-0 z-20" />
        <CarouselNext className="hidden sm:flex right-4 sm:right-8 bg-black/20 hover:bg-black/50 text-white border-0 z-20" />
      </Carousel>
    </section>
  );
}
