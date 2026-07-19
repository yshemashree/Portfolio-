import { SIDEBAR_LINES } from "@/lib/constants";

export default function RightSidebar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`hidden flex-col items-end gap-3 text-right lg:flex ${className}`}
    >
      {SIDEBAR_LINES.map((line) => (
        <p
          key={line}
          className="font-sans text-[11px] uppercase tracking-[0.2em] text-navy/60"
        >
          {line}
        </p>
      ))}
    </div>
  );
}
