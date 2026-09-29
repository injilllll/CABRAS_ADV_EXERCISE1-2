import Header from "./components/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main
        className="relative isolate flex min-h-[calc(100vh-73px)] w-full items-center px-6 py-16"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(0, 56, 168, 0.82), rgba(255, 255, 255, 0.2) 42%, rgba(206, 17, 38, 0.76)), url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-white/30 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-sm md:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#ce1126]">
              National Museum of the Philippines
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-[#0f172a] md:text-6xl">
              Davao Regional Museum
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1e293b]">
              The National Museum of the Philippines – Davao is the 17th regional component museum of the NMP and the fourth component museum under the Mindanao National Museums. The museum houses fascinating exhibits featuring natural history, cultural and historical artifacts, Mindanao’s priceless treasures, the artistry of Indigenous textiles, and masterpieces by some of Davao’s Local and National Artists.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/portfolio"
                className="rounded-full bg-[#ce1126] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a10d1f]"
              >
                Explore Exhibits
              </a>
              <a
                href="/about"
                className="rounded-full border border-[#0038a8] bg-white px-5 py-3 text-sm font-semibold text-[#0038a8] transition hover:bg-[#e8f0ff]"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-transparent bg-[#0038a8]/85 p-8 text-white shadow-[0_20px_60px_rgba(0,56,168,0.32)] backdrop-blur-sm md:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[#fcd116]">Highlights</p>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-3xl font-bold text-white">17th</p>
                <p className="mt-2 text-slate-200">Regional museum in the national network</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">Mindanao</p>
                <p className="mt-2 text-slate-200">Treasures, culture, and heritage preserved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">4th</p>
                <p className="mt-2 text-slate-200">Component museum under Mindanao museums</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
