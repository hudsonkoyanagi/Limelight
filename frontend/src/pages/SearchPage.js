import React, { useState, useEffect } from "react";
import MovieButton from "../components/ui/movieButton";
import SearchBar from "../components/searchBar";
import movieFiller from "../assets/littleWomen.jpg";
import movieFillerVer from "../assets/fillerVert.jpg";

const genres = ["Comedy", "Horror", "Drama", "Romance", "Action", "Sci-Fi"]; // Add more genres as needed





function SearchPage() {
  const [selectedGenre, setSelectedGenre] = useState("Genres");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/movies/allMovies")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data.data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setMovies([]);
      });
  }, []);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="w-5/6 ml-auto p-12">
      <div className="flex flex-col justify-start">
        <div className="flex flex-row justify-between items-center mb-8">
          <h3 className="text-4xl font-bold">Search</h3>
          <SearchBar/>
        </div>
        <div className="mb-20 w-full">
          <div className="grid grid-cols-4 gap-x-3 gap-y-8">
            <MovieButton 
              movieImg={movieFiller}
              movieImgVert={movieFillerVer}
              movieTitle="The GodFather"
              movieTime="2004 2h 17m"
              movieDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas. Consequat..."
              movieCast= "Uma Thurman, David Carradine, Micheal, more"
              movieGenre="Martial Arts Move, Action, Adventure"
              alt="Movie Poster"
             />

            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
            <MovieButton movieImg={movieFiller} alt="Movie Poster" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
