import { StatusBadge } from "@/components/status-badge";
import { integrations } from "@/data/integrations";

export function IntegrationGrid() {
  return (
    <div className="mt-10">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((item) => (
          <li key={item.name} className="rounded-2xl border border-line bg-white p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-navy">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">{item.category}</p>
              </div>
              <StatusBadge status={item.status} />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{item.note}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-6 text-muted">
        Names are written as text on purpose. This site does not use official logos and does not imply a partnership
        or endorsement. Planned means the connection is part of the product direction, not that it is available in
        every account today. Statuses are edited in the site data.
      </p>
    </div>
  );
}
