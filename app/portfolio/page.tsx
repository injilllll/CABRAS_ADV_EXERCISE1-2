import Image from "next/image";
import Header from "../components/Header";

const portfolioItems = [
  {
    title: "Natural History",
    description: "Exhibits that reveal the biodiversity, ecology, and geological richness of Mindanao.",
    image: "/images/Natural History.png",
  },
  {
    title: "Cultural Heritage",
    description: "Objects and stories that preserve the identity and traditions of the Filipino people.",
    image: "/images/Cultural Heritage.png",
  },
  {
    title: "Indigenous Textiles",
    description: "Masterpieces of weaving, artistry, and social memory from local communities.",
    image: "/images/Indigenous Textile.png",
  },
  {
    title: "Historical Artifacts",
    description: "Witnesses to nationhood, memory, and the shaping of communities across time.",
    image: "/images/Historical Artifact.png",
  },
  {
    title: "Local Artists",
    description: "A celebration of creativity and craftsmanship by Davao’s renowned artists.",
    image: "/images/Local Artist.png",
  },
  {
    title: "National Artists",
    description: "Curated works honoring artistic excellence and cultural significance.",
    image: "/images/National Artist.png",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-6xl flex-col px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#ce1126]">Portfolio</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Featured collections.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map(({ title, description, image }) => (
            <article key={title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative mb-6 h-40 overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
