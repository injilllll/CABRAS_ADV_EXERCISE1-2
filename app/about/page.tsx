import Header from "../components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-6xl flex-col px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#ce1126] p-8 text-white shadow-[0_24px_80px_rgba(206,17,38,0.22)] md:p-10 lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.3em] text-[#fcd116]">About</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Preserving heritage for future generations.
            </h1>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 md:p-12 lg:p-14 shadow-sm col-span-2">
            <p className="text-lg leading-8 text-slate-700 text-justify">
              The National Museum of the Philippines – Davao is the 17th regional component museum of the National Museum of the Philippines and the fourth component museum under the Mindanao National Museums. It represents an important milestone in the development of Davao’s cultural heritage and NMP’s pursuit in promoting the Philippine culture and heritage alive on the Southeastern area of the Philippines. The collaboration between the National Museum of the Philippines and the Local Government of Davao City in 2021 has paved the way for a cultural hub to exists in the Davao Region, that preserves and showcases the region’s rich history and cultural significance. The museum’s six-story building was inspired from the iconic fruit of Davao Region, the Durian Fruit. It was an architectural feat as it nods to the region’s identity. The first four floors are dedicated to the exhibits managed by the National Museum of the Philippines, while the fifth floor is reserved for Museo Dabawenyo, the local museum of the City Government of Davao. The museum houses fascinating exhibits featuring Davao Region’s natural history features, cultural and historical artifacts and Mindanao’s priceless treasures. It also features the culture of the Indigenous People of Mindanao in terms of their textiles and practices. The museum also houses masterpieces by some of Davao’s Local and National Artists.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
