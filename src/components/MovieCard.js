import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ mov }) => {
  let navigatge = useNavigate();
  const [movId, setMovId] = useState({
    activeMovId: null,
    movs: mov.map((a) => a.id),
  });

  const toggleActive = (i) =>
    setMovId({ ...movId, activeMovId: movId.movs[i] });
  const toggleActiveStyle = (i) =>
    movId.movs[i] === movId.activeMovId ? "card-body" : "hidden";
  const toggleActiveStyleOn = (i) =>
    movId.movs[i] === movId.activeMovId ? "image-full" : "";
  return (
    <>
      {mov.map((m, i) => (
        <div
          key={i}
          className={`card ${toggleActiveStyleOn(
            i
          )}  w-64 bg-base-100 shadow-xl my-4 mx-auto`}
          onMouseEnter={() => {
            toggleActive(i);
          }}
          onMouseLeave={() => {
            setMovId({ ...movId, activeMovId: 0 });
          }}
        >
          
          <figure>
            <img className="h-96" src={m.posterURL} alt={m.title} />
          </figure>
          <div key={i} className={toggleActiveStyle(i)}>
            <h2 className="card-title image-full text-xl text-accent">
              {m.title}
            </h2>
            <p>{m.description}</p>
            <div className="card-actions justify-center my-2">
              {[...Array(5)].map((star, index) => {
                const starvl = index + 1;

                return (
                  <label key={index}>
                    <input
                      className="hidden"
                      type="radio"
                      name="rating"
                      value={m.rating}
                    />
                    <FaStar
                      color={starvl <= m.rating ? "#54BAB9" : "#E9DAC1"}
                      size={20}
                    />
                  </label>
                  
                );
              })}
            </div>
            <div className="card-actions justify-center">
              <button
                className="btn btn-accent"
                onClick={() => {
                  navigatge(`/movie/${i + 1}`);
                }}
              >
                More Details
              </button>
            </div>
          </div>
        </div>
))}
    </>
  );
};

export default MovieCard;
