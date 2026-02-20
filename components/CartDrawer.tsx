"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";

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
    <>
      {/* ── Backdrop ──────────────────────────────────────────────── */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Drawer panel ──────────────────────────────────────────── */}
      <aside
        className={`fixed top-0 right-0 h-full z-50 w-full sm:w-[420px] bg-white shadow-2xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" style={{ color: "#c8a97e" }} />
            <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-800">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span
                className="text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"
                style={{ backgroundColor: "#c8a97e" }}
              >
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-[#c8a97e] hover:text-[#c8a97e] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Cart Items ────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-16 h-16 text-gray-200" />
              <p className="text-sm text-gray-400 tracking-wide">
                Your cart is empty
              </p>
              <button
                onClick={closeCart}
                className="mt-2 px-6 py-2 text-xs font-semibold tracking-widest uppercase text-white rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#c8a97e" }}
              >
                Continue Shopping
              </button>
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
                    style={{ color: "#c8a97e" }}
                  >
                    {fmt(item.priceNum)}
                  </p>

                  {/* Qty + Remove */}
                  <div className="flex items-center gap-3 mt-2">
                    {/* Stepper */}
                    <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#c8a97e] transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-medium text-gray-700">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#c8a97e] transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Sub-total */}
                    <span className="text-xs text-gray-400">
                      = {fmt(item.priceNum * item.qty)}
                    </span>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ── Footer ────────────────────────────────────────────────── */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gray-100 space-y-3 bg-white">
            {/* Order summary */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 text-xs tracking-wide uppercase">
                Subtotal
              </span>
              <span className="font-semibold text-gray-800">
                {fmt(totalPrice)}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 text-xs tracking-wide uppercase">
                Shipping
              </span>
              <span className="text-xs text-[#c8a97e] font-medium">
                Calculated at checkout
              </span>
            </div>

            <div className="h-px bg-gray-100" />

            <div className="flex justify-between items-center">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-700">
                Total
              </span>
              <span className="text-lg font-bold" style={{ color: "#c8a97e" }}>
                {fmt(totalPrice)}
              </span>
            </div>

            {/* CTA Buttons */}
            <Link href="/checkout" onClick={closeCart}>
              <button
                className="w-full py-3 text-white text-xs font-semibold tracking-[0.15em] uppercase rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#c8a97e" }}
              >
                Proceed to Checkout
              </button>
            </Link>
            <button
              onClick={closeCart}
              className="w-full py-3 text-xs font-semibold tracking-[0.15em] uppercase rounded-full border border-gray-300 text-gray-600 hover:border-[#c8a97e] hover:text-[#c8a97e] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
