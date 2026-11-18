import { BarChart3, Inbox, Share2 } from "lucide-react";
import { ChannelIcon } from "@/components/channel-icon";
import { StatusBadge } from "@/components/status-badge";
import { integrationGroups, type IntegrationGroup } from "@/data/integrations";

const groupIcons = {
  social: Share2,
  advertising: BarChart3,
  inbox: Inbox,
} as const;

export function IntegrationWorkspace() {
  return (
    <div className="grid gap-4">
      <section className="rounded-2xl border border-line bg-gradient-to-b from-white to-[#f7f9fd] px-5 py-6 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Workspace configuration</p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Integrations</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
          These are the accounts AIVA Growth supports. Social publishing covers Instagram, Facebook, LinkedIn, and
          WhatsApp. The inbox covers Gmail, WhatsApp, Instagram, LinkedIn, and Messenger. Analytics and ads cover
          Google Analytics 4, Meta Ads, and Google Ads.
        </p>
      </section>
      {integrationGroups.map((group) => (
        <IntegrationCategory key={group.id} group={group} />
      ))}
      <p className="text-sm leading-6 text-muted">
        This page lists what the platform supports. Account connection happens inside the workspace, not from this
        page. WhatsApp, Meta Ads, and Google Ads are in pilot. Advertising spend is separate.
      </p>
    </div>
  );
}

function IntegrationCategory({ group }: { group: IntegrationGroup }) {
  const Icon = groupIcons[group.id];

  return (
    <section className="overflow-hidden rounded-2xl border border-line bg-[#f7f9fd]">
      <div className="flex items-start gap-3 px-5 py-4 sm:px-6">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue">Category</p>
          <h3 className="font-display text-lg font-semibold text-navy">{group.title}</h3>
          <p className="mt-0.5 text-sm text-muted">{group.detail}</p>
        </div>
      </div>
      <ul className="border-t border-line bg-white">
        {group.items.map((item) => (
          <li key={item.id} className="border-b border-line px-5 py-4 last:border-b-0 sm:px-6">
            <div className="flex min-w-0 items-start gap-3">
              <ChannelIcon id={item.id} className="h-10 w-10 rounded-full" />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-semibold text-navy">{item.name}</h4>
                  <StatusBadge status={item.status} />
                </div>
                <p className="mt-1 text-sm leading-6 text-muted">{item.note}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
