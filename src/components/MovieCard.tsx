import React from "react";
import Image from "next/image";

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => (
  <div
    key={index}
    className="group rounded relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:scale-110 sm:h-36 hover:z-50
         md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]"
  >
    <Image src={`/item_${index}.png`} fill={true} alt="" className="rounded" />
  </div>
);

export default MovieCard;
