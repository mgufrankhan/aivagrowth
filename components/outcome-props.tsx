import { helpAreas } from "@/data/offers";

export function OutcomeProps() {
  return (
    <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {helpAreas.map((item) => (
        <li
          key={item.id}
          className="rounded-2xl border border-line/90 bg-white/85 p-5 shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] backdrop-blur-sm sm:min-h-[10.5rem]"
        >
          <h3 className="font-display text-base font-semibold text-navy sm:text-lg">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}
