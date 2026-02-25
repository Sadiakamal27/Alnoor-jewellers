"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Kashif M.",
    title: "Satisfied Purchase",
    content: "I liked the product, packaging and service.",
    rating: 5,
    product: "Moissanite Diamond Ring - MDR048",
    verified: true,
  },
  {
    id: 2,
    author: "Rubina S.",
    title: "Star Fire Galaxy",
    content: "Prettier than the picture",
    rating: 5,
    product: "Pendant Set - LS742",
    verified: true,
  },
  {
    id: 3,
    author: "Muhammad S.",
    title: "Beautiful",
    content: "It's more pretty in person than in photo.",
    rating: 5,
    product: "Pendant Set - LS662",
    verified: true,
  },
  {
    id: 4,
    author: "Mamoon A.",
    title: "Beautifully Crafted For Everyone",
    content: "Fantastic products and services. 100% recommend!",
    rating: 5,
    product: "Various Items",
    verified: true,
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews-section" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6A15B] mb-2">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-10 h-px bg-[#C6A15B] mx-auto mb-4" />
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4"
                  style={{ fill: "#C6A15B", color: "#C6A15B" }}
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm">
              4.8/5 from 616+ verified reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="p-6 hover:shadow-lg transition-shadow border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        style={{ fill: "#C6A15B", color: "#C6A15B" }}
                      />
                    ))}
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    {review.title}
                  </h4>
                </div>
                {review.verified && (
                  <Badge className="bg-green-100 text-green-800 text-xs">
                    Verified
                  </Badge>
                )}
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {review.content}
              </p>

              <div className="border-t pt-4 space-y-2">
                <p className="text-xs font-medium text-gray-500">
                  <span className="font-semibold text-gray-700">
                    {review.author}
                  </span>
                </p>
                <p className="text-xs text-gray-500">{review.product}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}