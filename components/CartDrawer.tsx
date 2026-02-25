"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQty,
    totalItems,
    totalPrice,
  } = useCart();

  // Format number as Rs. string
  const fmt = (n: number) =>
    "Rs." + n.toLocaleString("en-PK", { maximumFractionDigits: 0 });

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-[420px] p-0 flex flex-col gap-0 border-l border-gray-100">
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b border-gray-100 flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" style={{ color: "#C6A15B" }} />
            <SheetTitle className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-800">
              Your Cart
            </SheetTitle>
            {totalItems > 0 && (
              <span
                className="text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#C6A15B" }}
              >
                {totalItems}
              </span>
            )}
          </div>
        </SheetHeader>

        {/* ── Cart Items ────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-16 h-16 text-gray-200" />
              <p className="text-sm text-gray-400 tracking-wide">
                Your cart is empty
              </p>
              <Button
                onClick={closeCart}
                className="mt-2 px-8 py-6 text-xs font-semibold tracking-widest uppercase text-white rounded-full transition-all hover:scale-105"
                style={{ backgroundColor: "#C6A15B" }}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 py-4 border-b border-gray-100 last:border-0"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 shrink-0 bg-[#f8f8f8] border border-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-800 truncate leading-snug">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.option}</p>
                  <p
                    className="text-sm font-semibold mt-1"
                    style={{ color: "#C6A15B" }}
                  >
                    {fmt(item.priceNum)}
                  </p>

                  {/* Qty + Remove */}
                  <div className="flex items-center gap-3 mt-2">
                    {/* Stepper */}
                    <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 text-gray-500 hover:text-[#C6A15B] transition-colors rounded-none"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-7 text-center text-xs font-medium text-gray-700">
                        {item.qty}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 text-gray-500 hover:text-[#C6A15B] transition-colors rounded-none"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>

                    {/* Sub-total */}
                    <span className="text-xs text-gray-400">
                      = {fmt(item.priceNum * item.qty)}
                    </span>

                    {/* Remove */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-gray-300 hover:text-red-400 transition-colors w-8 h-8"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ── Footer ────────────────────────────────────────────────── */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-gray-100 space-y-4 bg-white">
            {/* Order summary */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-[10px] tracking-widest uppercase">
                  Subtotal
                </span>
                <span className="font-semibold text-gray-800 text-sm">
                  {fmt(totalPrice)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-[10px] tracking-widest uppercase">
                  Shipping
                </span>
                <span className="text-[10px] text-[#C6A15B] font-bold tracking-widest uppercase">
                  Calculated at checkout
                </span>
              </div>
            </div>

            <div className="h-px bg-gray-100" />

            <div className="flex justify-between items-center">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-700">
                Total
              </span>
              <span className="text-lg font-bold" style={{ color: "#C6A15B" }}>
                {fmt(totalPrice)}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/checkout" onClick={closeCart} className="w-full">
                <Button
                  className="w-full py-6 text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-full transition-all hover:brightness-110"
                  style={{ backgroundColor: "#C6A15B" }}
                >
                  Proceed to Checkout
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={closeCart}
                className="w-full py-6 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full border-gray-200 text-gray-600 hover:border-[#C6A15B] hover:text-[#C6A15B] transition-colors"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
