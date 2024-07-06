import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full lg:h-[140vh]">
      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">

        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen">
            <Image 
              src="/banner-peach.jpg"
              alt="Princess Peach: Showtime!"
              fill={true}
              className="object-cover object-top h-[65hv] lg:h=[95hv]"
            />
          </div>



          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl text-pink-300">Princess Peach: Showtime!</h1>
          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-v-2xl">
            Robert Zemeckis dirige Christopher Lloyd e Michael J. Fox neste clássico de ficção científica
            onde um jovem viaja acidentalmente para 1955 em uma máquina do tempo e a única
            maneira de voltar é fazer seus pais se apaixonarem novamente.
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
