import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden lg:h-[140vh] bg-gradient-to-b from-transparent to-black">
      <Header  />

      <main className="relative pb-24 pl-4 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen">
            <Image 
              src="/banner-barbie.jpg"
              alt="Princess Peach: Showtime!"
              fill={true}
              className="object-cover object-top h-[65hv] lg:h=[95hv]"
            />
          </div>

          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl text-pink-400">Barbie</h1>
      
          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-v-2xl">
            Viver na Barbielândia significa ser perfeita em um lugar perfeito. A não ser que você tenha uma crise existencial. Ou você seja um Ken.
          </p>
        </div>

        <div className="flex space-x-5">
          <button className="md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-pink-400 px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5">
            Reproduzir
          </button>
          <button className="md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-pink-200 text-pink-700 px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5">
            Mais Informações
          </button>
        </div>

      </main>
    </div>
  );
}
