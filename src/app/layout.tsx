import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { site, absoluteUrl } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCtas } from "@/components/FloatingCtas";
import { Preloader } from "@/components/preloader/Preloader";
import { RouteProgress } from "@/components/RouteProgress";

const display = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });
const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const gauge = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-gauge" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sea Critter — PADI Freediving Courses in India",
    template: "%s · Sea Critter Freediving",
  },
  description: site.description,
  keywords: [
    "freediving India", "PADI freediving course India", "learn freediving",
    "freediving Pondicherry", "freediving Goa", "freediving Andaman",
    "breath hold training", "freediving certification cost India",
  ],
  alternates: { canonical: "/", types: { "application/rss+xml": absoluteUrl("/rss.xml") } },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Sea Critter — PADI Freediving Courses in India",
    description: site.description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Sea Critter Freediving" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${gauge.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {/* Runs before first paint: applies a saved white-theme choice so
            returning visitors never see a flash of the default dark theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(localStorage.getItem("sc-theme")==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}',
          }}
        />
        {/* Runs before first paint: gates the server-rendered preloader overlay
            (and its CSS scroll lock) on there being no "dived this session"
            flag, so first visits never flash unstyled content and repeat
            navigations skip the overlay entirely. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(!sessionStorage.getItem("sc-dived"))document.documentElement.classList.add("sc-preload")}catch(e){}',
          }}
        />
        <Preloader />
        <RouteProgress />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-lagoon focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCtas />
      </body>
    </html>
  );
}
