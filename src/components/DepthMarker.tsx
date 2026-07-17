// Signature motif: dive-computer depth readout marking how "deep" you are in the page.
export function DepthMarker({ depth, label }: { depth: string; label?: string }) {
  return (
    <div className="flex items-center gap-3 font-gauge text-sm tracking-[0.2em] text-shallows/80">
      <span aria-hidden className="h-px w-10 bg-shallows/40" />
      <span>{depth}</span>
      {label && <span className="uppercase text-shallows/50">{label}</span>}
    </div>
  );
}
