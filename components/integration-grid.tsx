import { ChannelIcon } from "@/components/channel-icon";
import { StatusBadge } from "@/components/status-badge";
import { integrations } from "@/data/integrations";

export function IntegrationGrid() {
  return (
    <div className="mt-10">
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((item) => (
          <li key={item.id} className="bg-white p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-start gap-3">
                <ChannelIcon id={item.id} />
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-navy">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted">{item.category}</p>
                </div>
              </div>
              <StatusBadge status={item.status} />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{item.note}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-6 text-muted">
        Channel marks identify supported integrations. They do not imply a partnership or endorsement. Pilot means
        limited availability. Statuses are edited in the site data.
      </p>
    </div>
  );
}
