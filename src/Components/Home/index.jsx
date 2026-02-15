import React, { useContext } from "react";

import "./style.css";

import PersonCard from "./components/PersonCard.jsx";
import MovieCard from "./components/Moviecard.jsx";
import TvCard from "./components/Tvcard.jsx";
import { ContextMovies } from "../Store/index.jsx";

export default function Home() {
  const { movies, people, tv } = useContext(ContextMovies);

  return (
    <>
      <div className="row gy-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25"></div>
            <h3 className="fw-bold">
              Trending
              <br /> Movies
              <br />
              To watch right now{" "}
            </h3>
            <p className="textHome">Top Trending movies day by day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {movies.slice(0, 10).map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}
      </div>
      {/* people */}
      <div className="row mt-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25"></div>
            <h3 className="fw-bold">
              Trending
              <br /> Actors <br />
              To view right now{" "}
            </h3>
            <p className="textHome">Top Trending Actors day by day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {people.slice(0, 10).map((person, i) => (
          <PersonCard key={i} person={person} />
        ))}
      </div>
      {/* tv */}
      <div className="row mt-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25"></div>
            <h3 className="fw-bold">
              Trending
              <br /> Tv
              <br />
              To view right now{" "}
            </h3>
            <p className="textHome">Top Trending tv day by day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {tv.slice(0, 10).map((tv, i) => (
          <TvCard key={i} tv={tv} />
        ))}
      </div>
    </>
  );
}
