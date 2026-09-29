import Image from "next/image";
import Header from "../components/Header";

const galleryImages = [
  "/images/nt1.png",
  "/images/nt2.png",
  "/images/nt3.png",
  "/images/nt4.png",
  "/images/nt5.png",
  "/images/nt6.png",
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-6xl flex-col px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#0038a8]">Gallery</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            A visual journey through heritage.
          </h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative h-72 overflow-hidden rounded-[2rem] bg-slate-200 shadow-lg"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
