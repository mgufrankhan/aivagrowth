import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AgentDetail } from "@/components/agent-detail";
import { Container } from "@/components/container";
import { agents, getAgent } from "@/data/agents";
import { createPageMetadata } from "@/lib/seo";

type AgentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: AgentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) {
    return { title: "AI Agent" };
  }
  return createPageMetadata({
    title: agent.seo.title,
    description: agent.seo.description,
    path: `/ai-agents/${agent.slug}`,
  });
}

export default function AgentPage({ params }: AgentPageProps) {
  return (
    <Suspense fallback={<AgentFallback />}>
      <AgentContent params={params} />
    </Suspense>
  );
}

async function AgentContent({ params }: AgentPageProps) {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) {
    notFound();
  }
  return <AgentDetail agent={agent} />;
}

function AgentFallback() {
  return (
    <Container className="py-16">
      <div className="h-4 w-32 animate-pulse rounded bg-line motion-reduce:animate-none" />
      <div className="mt-6 h-12 max-w-xl animate-pulse rounded bg-line motion-reduce:animate-none" />
      <div className="mt-4 h-24 max-w-2xl animate-pulse rounded bg-line motion-reduce:animate-none" />
    </Container>
  );
}
