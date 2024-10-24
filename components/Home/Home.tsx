// pages/index.tsx
"use client";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchPopularMovies } from "@/lib/api";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number; // Ensure this property exists
}

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetchPopularMovies(1); // Fetch the first page
      setMovies(movies);
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Upcoming Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
