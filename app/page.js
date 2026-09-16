export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-2xl font-medium">Valerie Gonzalez, Ed.D.</h1>

      <p className="mt-3 text-lg text-neutral-600">
        I build the content systems digital products run on.
      </p>

      <p className="mt-8 text-neutral-600">
        I design the taxonomies, content models, and editorial systems
        that college and career readiness products depend on — and often
        build them. Ed.D. in Learning and Organizational Change from
        Baylor University.
      </p>

      <p className="mt-12 text-sm text-neutral-500">
        <a
          href="mailto:vgfortworth@gmail.com"
          className="text-neutral-700 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700"
        >
          vgfortworth@gmail.com
        </a>
        {' · '}
        <a
          href="https://www.linkedin.com/in/valerie-gonzalez-ed-d-9131657b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700"
        >
          LinkedIn
        </a>
      </p>
    </main>
  )
}