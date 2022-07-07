import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, } from "react-icons/fa";
import {IoReturnUpBack} from "react-icons/io5"
import { tabTitle } from "./UpdatePageTitle";

const MovieDetail = ({ movies }) => {
  const { movRoute } = useParams();
  let mr = Number(movRoute);
  const selectedMov = movies[mr - 1];

  tabTitle(`${selectedMov.title} - SeeMoviee`);
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex flex-col items-center lg:items-start lg:mb-8">
            
          <Link to="/" className="flex flex-row mb-4 items-center text-lg font-medium"> <IoReturnUpBack size="2rem" className="mr-4"/> Back to Home </Link>
          <img
            src={selectedMov.posterURL}
            alt={selectedMov.title}
            className=" w-[21.875rem] rounded-lg shadow-2xl lg:w-full lg:max-w-sm"
          />
          </div>
          <div className="lg:ml-20">
            <h1 className="text-2xl font-bold flex flex-col justify-center items-center lg:text-5xl lg:flex-row lg:justify-start">
              {selectedMov.title}
              <div className="flex flex-wrap ml-4">
                {[...Array(5)].map((star, index) => {
                  const starvl = index + 1;
                  return (
                    <label key={index}>
                      <input
                        className="hidden"
                        type="radio"
                        name="rating"
                        value={selectedMov.rating}
                      />
                      <FaStar
                        color={
                          starvl <= selectedMov.rating ? "#54BAB9" : "#E9DAC1"
                        }
                        size={20}
                      />
                    </label>
                  );
                })}
              </div>
            </h1>
            <p className="py-6 w-[21.875rem] lg:w-[37.5rem] text-center lg:text-left">{selectedMov.description}</p>
            <iframe

              src={selectedMov.trailer}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedMov.title}
              className="w-[21.875rem] h-[12.305rem] items-center lg:w-[37.5rem] lg:h-[25rem]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
