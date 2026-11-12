export function DraftNotice({ documentName }: { documentName: string }) {
  return (
    <aside className="rounded-2xl border border-orange/40 bg-orange/10 p-5 text-navy" role="note">
      <p className="text-sm font-semibold">Draft for legal review</p>
      <p className="mt-2 text-sm leading-6">
        This {documentName} has not been reviewed by qualified counsel and is not a final policy. Do not treat it
        as legal advice or as the binding terms of AIVAgrowth until it is reviewed and published as final.
      </p>
    </aside>
  );
}
