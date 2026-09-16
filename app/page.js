const work = [
  {
    slug: "explore-majors",
    title: "Explore Majors",
    kind: "Taxonomy",
    blurb: "Extending a state framework to model 539 degrees across eight institutions.",
  },
  {
    slug: "lifestyle-calculator",
    title: "Lifestyle Calculator",
    kind: "Product",
    blurb: "Teaching teenagers what life costs by making every choice visible.",
  },
  {
    slug: "video-content-system",
    title: "Video Content System",
    kind: "Content operations",
    blurb: "Naming standards and lifecycle governance for 238 instructional modules.",
  },
  {
    slug: "gen-alpha-research",
    title: "Plugged In but Disconnected",
    kind: "Research",
    blurb: "What students actually say about AI in their classrooms.",
  },
];

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

      <h2 className="mt-16 text-sm text-neutral-500">Selected work</h2>
      <div className="mt-6">
        {work.map((item) => (
          <a
            key={item.slug}
            href={"/work/" + item.slug}
            className="group block border-t border-neutral-200 py-5"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-medium transition-colors group-hover:text-purple-800">{item.title}</span>
              <span className="text-xs text-neutral-500">{item.kind}</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">{item.blurb}</p>
          </a>
        ))}
      </div>

      <p className="mt-16 text-sm text-neutral-500">
        <a
          href="mailto:vgfortworth@gmail.com"
          className="text-neutral-700 underline underline-offset-4 decoration-neutral-300 hover:text-purple-800 hover:decoration-purple-800"
        >
          vgfortworth@gmail.com
        </a>
        {' · '}
        <a
          href="https://www.linkedin.com/in/valerie-gonzalez-ed-d-9131657b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 underline underline-offset-4 decoration-neutral-300 hover:text-purple-800 hover:decoration-purple-800"
        >
          LinkedIn
        </a>
      </p>
    </main>
  );
}