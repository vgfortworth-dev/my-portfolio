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

export default function Work() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-sm text-neutral-500">Selected work</h1>
      <div className="mt-6">
        {work.map((item) => (
          <a key={item.slug} href={"/work/" + item.slug} className="block border-t border-neutral-200 py-5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-medium">{item.title}</span>
              <span className="text-xs text-neutral-500">{item.kind}</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">{item.blurb}</p>
          </a>
        ))}
      </div>
    </main>
  );
}