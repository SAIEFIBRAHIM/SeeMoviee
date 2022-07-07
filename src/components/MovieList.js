import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import MovieCard from "./MovieCard";
import {tabTitle} from "./UpdatePageTitle"

function MovieList({ movies }) {
  tabTitle("SeeMoviee - Browse")
  const [hover, setHover] = useState(null);
  const [query, setQuery] = useState({ qSearch: "", qRate: null });


  const tFilter = movies.filter(
    (el) => el.title.toLowerCase().indexOf(query.qSearch.toLowerCase()) !== -1
  );
  const rFilter =
    query.qRate !== null
      ? movies.filter((el) => el.rating === query.qRate)
      : tFilter;
  const tClear = (e) => setQuery({ ...query, qSearch: "" });
  const tQuery = (e) =>
    setQuery({ ...query, qSearch: e.target.value, qRate: null });

  return (
    <>
      {/* show filters */}
      <div className="collapse mt-6 lg:mt-0">
        <input type="checkbox" className="peer" />
        <button className="collapse-title peer-checked: cursor-pointer btn btn-accent w-32 text-white flex mx-auto p-0 min-h-0 h-11">
          Show Filters
        </button>
        <div className="collapse-content peer-checked: flex flex-col items-center justify-center lg:flex-row">
          {/* Search by name */}
          <div className="form-control w-80 my-2 mx-4">
            <div className="input-group">
              <input
                type="text"
                value={query.qSearch}
                placeholder="Search by title"
                className="input input-accent w-full max-w-xs"
                style={{ outline: "0", outlineOffset: "0" }}
                onChange={(e) => tQuery(e)}
              />
              <button
                className="btn btn-square btn-accent text-white"
                onClick={tClear}
              >
                x
              </button>
            </div>
          </div>
          {/* Search by rating */}
          <div className="card-actions text-lg font-medium justify-center text-accent my2 mx-4">
            Filter by Rating:
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;

              return (
                <label key={index} className="cursor-pointer">
                  <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => {
                      setQuery({ ...query, qRate: ratingValue, qSearch: "" });
                    }}
                  />
                  <FaStar
                    color={
                      ratingValue <= (hover || query.qRate)
                        ? "#54BAB9"
                        : "#E9DAC1"
                    }
                    size={25}
                    onMouseEnter={() => {
                      setHover(ratingValue);
                    }}
                    onMouseLeave={() => {
                      setHover(null);
                    }}
                  />
                </label>
              );
            })}
          </div>
          {/* Clear filters */}
          <button
            className=" flex btn btn-accent text-white my-2 mx-4"
            onClick={() => setQuery({ ...query, qSearch: "", qRate: null })}
          >
            Clear
          </button>
        </div>
      </div>

      {/* MovieCard Component */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-0 lg:mt-8">
        <MovieCard mov={rFilter} />
      </div>
    </>
  );
}

export default MovieList;
