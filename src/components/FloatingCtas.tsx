"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

// Sticky "Book now" (mobile bottom bar) + WhatsApp float, hidden on the booking section itself.
export function FloatingCtas() {
  const pathname = usePathname();
  return (
    <>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sea Critter on WhatsApp"
        className="fixed bottom-20 right-4 z-40 grid h-13 w-13 place-items-center rounded-full bg-[#25D366] p-3.5 shadow-lg shadow-abyss/40 transition hover:scale-105 md:bottom-6 md:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-abyss" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.4-.1.7.1.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.4.3.1.5.1.6-.1l.7-.9c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.2 1.5Z"/>
        </svg>
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-foam/10 bg-abyss/85 p-3 backdrop-blur-xl md:hidden">
        <Link
          href={pathname.startsWith("/courses/") ? "#book" : "/book"}
          className="block rounded-full bg-coral py-3 text-center font-semibold text-ink"
        >
          Book your course
        </Link>
      </div>
    </>
  );
}
