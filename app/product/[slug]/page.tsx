"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/data";

// ─── Payment method icons (text-based badges) ──────────────────────────────
const paymentMethods = [
  "Amazon",
  "Amex",
  "Apple Pay",
  "Discover",
  "Facebook Pay",
  "Google Pay",
  "JCB",
  "Klarna",
  "Mastercard",
  "PayPal",
  "Shop",
  "Visa",
];

// Helper to provide extended details for products (since lib/data is basic)
const getExtendedDetails = (slug: string) => {
  return {
    bullets: [
      "925 Sterling Silver",
      "Exchange: 50% of the current price",
      "Refund: 50% of the sale price",
      "Yellow & White Gold Electroplating",
      "Expert Craftmanship",
      "Premium Packaging",
    ],
    options: ["Standard Set", "Full Set", "Custom"],
    description: {
      specs: [
        "Studded with Fine Zircons",
        "925 Sterling Silver",
        "Yellow Gold Electroplated",
      ],
      body: [
        "Al Noor Jewellers provides top-notch quality in all of its products. Prioritizing customer satisfaction and demands, we give the best after-sale service.",
        "All our Silver Jewellery products are repairable, exchangeable, and refundable on an unlimited-time basis.",
        "We provide,",
        "Exchange: 50% value of the sale price.",
        "Refund: 30% value of the sale price.",
        "",
        "P.s: All products can be customized as per customer requirement",
      ],
    },
  };
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const baseProduct = products.find((p) => p.slug === slug);

  if (!baseProduct) notFound();

  const details = getExtendedDetails(slug);
  const product = { ...baseProduct, ...details };

  return (
    <main className="min-h-screen bg-white">
      {/* ── Breadcrumb ──────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-gray-100 px-4 sm:px-8 lg:px-16 py-3">
        <ol className="flex items-center gap-1.5 text-xs tracking-widest uppercase max-w-7xl mx-auto">
          <li>
            <Link
              href="/"
              className="text-gray-500 hover:text-[#c8a97e] transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="text-gray-300">›</li>
          <li>
            <Link
              href="/collections"
              className="text-gray-500 hover:text-[#c8a97e] transition-colors"
            >
              Collections
            </Link>
          </li>
          <li className="text-gray-300">›</li>
          <li className="text-gray-800 font-medium truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* ── Features Bar ────────────────────────────────────────────── */}
      <FeaturesSection />

      {/* ── Product Detail ──────────────────────────────────────────── */}
      <ProductDetail product={product} slug={slug} />

      {/* ══ YOU MAY ALSO LIKE ══════════════════════════════════════ */}
      <div className="border-t border-gray-100 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-12 pb-4">
          <h2 className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-gray-700 mb-1">
            You May Also Like
          </h2>
          <div className="w-10 h-px bg-[#c8a97e] mx-auto mb-8" />
        </div>
        <ProductShowcase />
      </div>
    </main>
  );
}

function ProductDetail({ product, slug }: { product: any; slug: string }) {
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: `${slug}-${selectedOption}`,
      slug,
      name: product.name,
      price: product.price,
      priceNum: product.priceNum,
      option: selectedOption,
      image: product.images[0],
    });
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Thumbnails */}
          <div className="flex flex-row lg:flex-col gap-2 lg:w-[90px] shrink-0 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px]">
            {product.images.map((img: string, i: number) => (
              <button
                key={i}
                onMouseEnter={() => setActiveImg(i)}
                onClick={() => setActiveImg(i)}
                className={`relative shrink-0 w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 transition-all duration-200 ${
                  activeImg === i
                    ? "border-[#c8a97e]"
                    : "border-gray-200 hover:border-[#c8a97e]"
                }`}
              >
                <Image
                  src={img}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Large Image */}
          <div className="relative flex-1 min-h-[400px] lg:min-h-[580px] bg-[#f8f8f8] overflow-hidden group">
            <Image
              src={product.images[activeImg]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* Info Panel */}
          <div className="lg:w-[360px] shrink-0 flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-gray-900 leading-snug">
              {product.name}
            </h1>
            <p className="text-xl font-medium text-[#c8a97e]">
              {product.price}
            </p>

            <ul className="space-y-1">
              {product.bullets.map((b: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="mt-1 text-gray-400">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-500 border-t border-gray-100 pt-3">
              <span className="text-gray-400">SKU:</span>{" "}
              <span className="text-gray-700">{product.sku}</span>
            </p>

            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-700 uppercase mb-2">
                Options
              </p>
              <div className="flex flex-wrap gap-2">
                {product.options.map((opt: string) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedOption(opt)}
                    className={`px-4 py-2 text-sm border rounded-full transition-all ${
                      selectedOption === opt
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 bg-[#c8a97e] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b8966b] transition-colors"
              >
                Pre-Order
              </button>
            </div>

            <div className="flex flex-wrap gap-1 mt-1">
              {paymentMethods.map((pm) => (
                <span
                  key={pm}
                  className="px-2 py-1 text-[10px] border border-gray-100 rounded text-gray-400 bg-gray-50"
                >
                  {pm}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-16 bg-[#f9f9f9] py-12 px-8 -mx-16">
          <div className="flex justify-center mb-10">
            <span className="px-8 py-2 border border-gray-400 rounded-full text-sm text-gray-700 font-medium">
              Description
            </span>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Specifications:
            </h2>
            <ul className="mb-6 space-y-1">
              {product.description.specs.map((s: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm font-semibold text-gray-800 leading-relaxed"
                >
                  <span className="mt-1">•</span> <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              {product.description.body.map((line: string, i: number) => (
                <p key={i} className="text-sm text-[#5a7a9a] leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
