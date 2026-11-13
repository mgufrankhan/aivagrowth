import Image from "next/image";
import { platformScreenshots } from "@/data/offers";

export function ProductScreenshots({
  featuredId = "overview",
}: {
  featuredId?: (typeof platformScreenshots)[number]["id"];
}) {
  const featured = platformScreenshots.find((item) => item.id === featuredId) ?? platformScreenshots[0];
  const rest = platformScreenshots.filter((item) => item.id !== featured.id);

  return (
    <div className="mt-10 space-y-8">
      <figure className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_50px_-36px_rgba(7,26,67,0.45)]">
        <Image
          src={featured.src}
          alt={featured.alt}
          width={1600}
          height={900}
          className="h-auto w-full"
          priority
        />
        <figcaption className="border-t border-line px-5 py-4">
          <p className="text-sm font-semibold text-navy">{featured.title}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{featured.caption}</p>
        </figcaption>
      </figure>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item) => (
          <li key={item.id} className="overflow-hidden rounded-2xl border border-line bg-white">
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={450}
              className="h-auto w-full"
            />
            <div className="border-t border-line p-4">
              <h3 className="text-base font-semibold text-navy">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{item.caption}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
