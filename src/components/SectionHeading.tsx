import { DepthMarker } from "./DepthMarker";

export function SectionHeading({
  depth, eyebrow, title, lead,
}: { depth: string; eyebrow: string; title: string; lead?: string }) {
  return (
    <header className="mb-12 max-w-3xl">
      <DepthMarker depth={depth} label={eyebrow} />
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foam md:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg leading-relaxed text-foam/70">{lead}</p>}
    </header>
  );
}
