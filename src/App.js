import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import theGodfatherImg from "./img/The Godfather.jpg";
import fightClubImg from "./img/Fight Club.jpg";
import theShawshankImg from "./img/The Shawshank Redemption.jpg";
import theDarkKnightImg from "./img/The Dark Knight.jpg";
import jokerImg from "./img/Joker.jpg";
import schindlerImg from "./img/Schindler's List.jpg";
import inceptionImg from "./img/Inception.jpg";
import gladiatorImg from "./img/Gladiator.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import {tabTitle} from "./components/UpdatePageTitle"
function App() {
  const [ntitle, setNtitle] = useState("");
  const [ndescription, setNdescription] = useState("");
  const [nposter, setNposter] = useState("");
  const [ntrailer, setNtrailer] = useState("");

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      posterURL: theGodfatherImg,
      rating: 4,
      trailer: "https://www.youtube.com/embed/watch?v=UaVTIH8mujA",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption .",
      posterURL: theShawshankImg,
      rating: 2,
      trailer: "https://www.youtube.com/embed/watch?v=6hB3S9bIaco",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.",
      posterURL: theDarkKnightImg,
      rating: 4,
      trailer: "https://www.youtube.com/embed/watch?v=EXeTwQWrcwY",
    },
    {
      id: 4,
      title: "Joker",
      description:
        "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      posterURL: jokerImg,
      rating: 5,
      trailer: "https://www.youtube.com/embed/watch?v=zAGVQLHvwOY",
    },
    {
      id: 5,
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned Jewish workforce.",
      posterURL: schindlerImg,
      rating: 1,
      trailer: "https://www.youtube.com/embed/watch?v=gG22XNhtnoY",
    },

    {
      id: 6,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology.",
      posterURL: inceptionImg,
      rating: 4,
      trailer: "https://www.youtube.com/embed/watch?v=YoHD9XEInc0",
    },
    {
      id: 7,
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      posterURL: fightClubImg,
      rating: 3,
      trailer: "https://www.youtube.com/embed/watch?v=qtRKdVHc-cE",
    },
    {
      id: 8,
      title: "Gladiator",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor.",
      posterURL: gladiatorImg,
      rating: 5,
      trailer: "https://www.youtube.com/embed/watch?v=owK1qxDselE",
    },
  ]);


  const newMovie = {
    id: movies.length + 1,
    title: ntitle,
    description: ndescription,
    posterURL: nposter,
    rating: Math.floor(Math.random() * 5) + 1,
    trailer: ntrailer,
  };
  const movieAdd = () => {
    setMovies([...movies, newMovie]);
    setNtitle("");
    setNdescription("");
    setNposter("");
    setNtrailer("");
  };

    // Redirect Page
const RedirectLinkedIn = () => {
  useEffect(() => {
    window.location.replace('https://www.linkedin.com/in/sayfibrahim');
  }, [])
  return <h1 className="text-2xl">Redirecting...</h1>
}

const RedirectYoutube = () => {
  useEffect(() => {
    window.location.replace('https://www.youtube.com/c/SEEFIBRAHIM');
  }, [])
  return <h1 className="text-2xl">Redirecting...</h1>
}

const RedirectFacebook = () => {
  useEffect(() => {
    window.location.replace('https://www.facebook.com/seefbrahim');
  }, [])
  return <h1 className="text-2xl">Redirecting...</h1>
}


  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <MovieList movies={movies} /> {/* Add Movie Feature */}
              <>
                {/* Add movie button */}
                <label
                  htmlFor="my-modal-5"
                  className="btn btn-circle bottom-8 right-8 z-40 fixed text-3xl font-normal w-14 h-14 bg-accent border-0"
                  onClick={()=> {tabTitle("Add Movie")}}
                >
                  +
                </label>
                {/* Add Movie Form */}
                <input
                  type="checkbox"
                  id="my-modal-5"
                  className="modal-toggle"
                />
                <label htmlFor="my-modal-5" className="modal cursor-pointer ">
                  <label className="modal-box relative w-96">
                    <h3 className="text-lg font-bold">List a New Movie!</h3>
                    <p className="pt-4">
                      <label className="label mt-2">
                        <span className="label-text">
                          What is the Movie Name?
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Movie Name"
                        className="input input-bordered input-bg-base-content w-full max-w-xs"
                        value={ntitle}
                        onChange={(e) => {
                          setNtitle(e.target.value);
                        }}
                      />
                      <label className="label mt-2">
                        <span className="label-text">
                          Short Description of the Movie?
                        </span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered"
                        placeholder="Short Description"
                        cols={38}
                        value={ndescription}
                        onChange={(e) => {
                          setNdescription(e.target.value);
                        }}
                      ></textarea>
                      <label className="label">
                        <span className="label-text">Movie Poster Url?</span>
                      </label>
                      <input
                        type="url"
                        placeholder="Poster Url"
                        className="input input-bordered input-bg-base-content w-full max-w-xs"
                        value={nposter}
                        onChange={(e) => {
                          setNposter(e.target.value);
                        }}
                      />
                      <label className="label mt-2">
                        <span className="label-text">Movie Trailer Url?</span>
                      </label>
                      <input
                        type="url"
                        placeholder="Trailer Url"
                        className="input input-bordered input-bg-base-content w-full max-w-xs"
                        value={ntrailer}
                        onChange={(e) => {
                          setNtrailer(e.target.value);
                        }}
                      />
                      <label
                        htmlFor="my-modal-5"
                        className="mt-4 btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-accent border-0 w-44 ml-20"
                        onClick={movieAdd}
                      >
                        Submit
                      </label>
                    </p>
                  </label>
                </label>
              </>
              {/* End of Add Movie Feature */}
            </>
          }
        />
        <Route
          path="/movie/:movRoute"
          element={<MovieDetail movies={movies} />}
        />
        <Route path="*" element={<PageNotFound />} />
        <Route path='/linkedin-profile' element={<RedirectLinkedIn />} />
        <Route path='/youtube-channel' element={<RedirectYoutube />} />
        <Route path='/facebook-profile' element={<RedirectFacebook />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
