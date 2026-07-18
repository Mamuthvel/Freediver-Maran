import Link from "next/link";
import { CartProvider } from "@/components/store/CartContext";
import { CartBadgeLink } from "@/components/store/CartBadgeLink";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="border-b border-foam/10 bg-abyss/60 px-6 pb-3 pt-28">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/store" className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/70 hover:text-foam">
            Sea Critter Store
          </Link>
          <CartBadgeLink />
        </div>
      </div>
      {children}
    </CartProvider>
  );
}
