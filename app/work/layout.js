export default function WorkLayout({ children }) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <article className="prose prose-neutral prose-headings:font-medium">
        {children}
      </article>
    </main>
  );
}