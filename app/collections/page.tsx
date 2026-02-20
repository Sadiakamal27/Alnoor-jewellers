"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/data";
import FeaturesSection from "@/components/FeaturesSection";
import { Suspense } from "react";

// Single product type derived from data
type Product = (typeof products)[0];

function CollectionsContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filteredProducts = activeCategory
    ? products.filter((p: Product) => p.category === activeCategory)
    : products;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gray-900 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/Gold-bracelet.jpg"
            alt="Collections Hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c8a97e] mb-3">
            {activeCategory || "Our Heritage"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest">
            {activeCategory ? activeCategory : "Exquisite Collections"}
          </h1>
          <div className="w-16 h-px bg-[#c8a97e] mx-auto" />
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-100 px-4 sm:px-8 lg:px-16 py-4">
        <ol className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase max-w-7xl mx-auto">
          <li>
            <Link
              href="/"
              className="text-gray-400 hover:text-[#c8a97e] transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="text-gray-200">›</li>
          <li>
            <Link
              href="/collections"
              className="text-gray-400 hover:text-[#c8a97e] transition-colors"
            >
              Collections
            </Link>
          </li>
          {activeCategory && (
            <>
              <li className="text-gray-200">›</li>
              <li className="text-gray-800 font-bold">{activeCategory}</li>
            </>
          )}
        </ol>
      </nav>

      {/* Category Filter Pills (Mobile/Quick Access) */}
      <div className="bg-gray-50 py-4 overflow-x-auto whitespace-nowrap px-4 sm:px-8 lg:px-16 border-b border-gray-100 scrollbar-hide">
        <div className="max-w-7xl mx-auto flex gap-4">
          <Link
            href="/collections"
            className={`px-6 py-2 text-[10px] tracking-widest uppercase rounded-full border transition-all ${!activeCategory ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-500 border-gray-200 hover:border-[#c8a97e]"}`}
          >
            All
          </Link>
          {categories.map((cat: string) => (
            <Link
              key={cat}
              href={`/collections?category=${cat}`}
              className={`px-6 py-2 text-[10px] tracking-widest uppercase rounded-full border transition-all ${activeCategory === cat ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-500 border-gray-200 hover:border-[#c8a97e]"}`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      <section className="py-16 px-4 sm:px-8 lg:px-16 container mx-auto max-w-7xl">
        {activeCategory ? (
          /* Flattened view for single category */
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {filteredProducts.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-gray-50">
                <p className="text-gray-400 italic">
                  No products found in this category yet.
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Grouped view for "All" */
          <div className="space-y-24">
            {categories.map((cat: string) => {
              const catProducts = products.filter(
                (p: Product) => p.category === cat,
              );
              if (catProducts.length === 0) return null;
              return (
                <div key={cat} className="space-y-10">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest">
                      {cat}
                    </h2>
                    <Link
                      href={`/collections?category=${cat}`}
                      className="text-xs font-semibold text-[#c8a97e] hover:underline underline-offset-4 tracking-widest uppercase"
                    >
                      Browse All
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {catProducts.slice(0, 4).map((product: Product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <FeaturesSection />
    </main>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group">
      <div className="relative aspect-[4/5] bg-[#fcfcfc] overflow-hidden mb-4 border border-gray-50 flex items-center justify-center">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />

        {/* Sale tag if it were to have one - example style */}
        <div className="absolute top-4 left-4">
          <span className="bg-gray-900 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1">
            New
          </span>
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full bg-white/95 backdrop-blur-sm text-gray-900 py-3 text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg hover:bg-[#c8a97e] hover:text-white transition-colors border-none">
            View Details
          </button>
        </div>
      </div>

      <div className="text-center px-2">
        <p className="text-[9px] tracking-[0.25em] uppercase text-[#c8a97e] mb-1.5 font-bold">
          {product.category}
        </p>
        <h3 className="text-xs font-medium text-gray-800 group-hover:text-[#c8a97e] transition-colors mb-2 leading-relaxed tracking-wide px-4">
          {product.name}
        </h3>
        <p className="text-sm font-bold text-gray-900">{product.price}</p>
      </div>
    </Link>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading collections...
        </div>
      }
    >
      <CollectionsContent />
    </Suspense>
  );
}
