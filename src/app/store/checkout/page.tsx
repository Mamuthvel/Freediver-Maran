import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckoutForm } from "@/components/store/CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout",
  alternates: { canonical: "/store/checkout" },
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <div className="bg-abyss px-6 pb-24 pt-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading depth="−1 M" eyebrow="Checkout" title="Complete your order" />
        <CheckoutForm />
      </div>
    </div>
  );
}
