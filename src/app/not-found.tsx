import Link from "next/link";
import { DepthMarker } from "@/components/DepthMarker";

export default function NotFound() {
  return (
    <div className="grid min-h-svh place-items-center bg-descent px-6">
      <div className="text-center">
        <DepthMarker depth="−404 M" label="Below crush depth" />
        <h1 className="mt-6 font-display text-4xl font-semibold text-foam">This page doesn't exist.</h1>
        <p className="mt-3 text-foam/70">Nothing lives this deep. Surface and try again.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-coral px-8 py-3.5 font-semibold text-ink">
          Back to the surface
        </Link>
      </div>
    </div>
  );
}
