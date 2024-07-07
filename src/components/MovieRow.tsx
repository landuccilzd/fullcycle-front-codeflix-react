import React from "react";
import MovieCard from "./MovieCard";

type MovieRowProps = {
  sectiontTitle: string;
};

const MovieRow = ({ sectiontTitle }: MovieRowProps) => (
  <div className="flex-col mt-4">
    <div className="flex">
      <h2 className="-ml-2 -mb-2 inline-flex items-center text-2xl font-bold">
        {sectiontTitle}
      </h2>
    </div>
    <div className="-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <MovieCard key={index} index={index} />
      ))}
    </div>
  </div>
);

export default MovieRow;
