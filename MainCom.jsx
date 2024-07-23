import { useState, useEffect } from "react";
import "./Main.css";
import { Button } from "react-bootstrap";
import img from "./images/logo.png";
import { TailSpin } from "react-loader-spinner";
import {app} from './Firebase'
import {getAuth, signOut} from 'firebase/auth'
import { useNavigate } from "react-router-dom";


function MainCom() {
  const auth = getAuth(app)
  const navigate = useNavigate();
  const handlesignout=()=>{
    signOut(auth).then(()=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  const [movies, setMovieas] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [top, setTop] = useState([]);
  const [spin, setspin] = useState(false);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  const randompicker = Math.floor(Math.random() * 10);
  const random = (randompicker) => {
    if (randompicker < 5) {
      return "upcoming";
    } else if (randompicker > 5) {
      return "popular";
    } else {
      return "top_rated";
    }
  };
  useEffect(() => {
    setspin(true);
    const getdata = async () => {
      const data = await fetch(
        `https:api.themoviedb.org/3/movie/${random(
          randompicker
        )}?api_key=20a780d716b016b7c42dab88b66d000f&language=en-US&page=1`
      );
      const popular = await fetch(
        `https:api.themoviedb.org/3/movie/popular?api_key=20a780d716b016b7c42dab88b66d000f&language=en-US&page=1`
      );
      const upcoming = await fetch(
        `https:api.themoviedb.org/3/movie/upcoming?api_key=20a780d716b016b7c42dab88b66d000f&language=en-US&page=1`
      );
      const Top = await fetch(
        `https:api.themoviedb.org/3/movie/top_rated?api_key=20a780d716b016b7c42dab88b66d000f&language=en-US&page=1`
      );
      const pop = await popular.json();
      const up = await upcoming.json();
      const top = await Top.json();
      const response = await data.json();
      setMovieas(response.results);
      setPopular(pop.results);
      setUpcoming(up.results);
      setTop(top.results);
      setspin(false);
      console.log(auth?.currentUser)
    };
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const forstring = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };
  return (
    <div>
      {spin ? (
        <TailSpin />
      ) : (
        <div className="bg text-white ">
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt=""
              className="rounded-0"
            />
            <div className="gradient-overlay"></div>
          </div>
          <div className="buttons mx-3">
            <h3 className="text-white font-semibold">{movie?.title}</h3>
            <Button
              className="bg-white text-black rounded-0 border-white"
              size="sm"
            >
              Play
            </Button>
            <Button
              className="bg-transparent border-white mx-2 rounded-0"
              size="sm"
            >
              Watch later
            </Button>
            <p>Release Date:{movie?.release_date}</p>
            <p className="my-1">{forstring(movie?.overview, 120)}</p>
          </div>

          <div id="nav">
            <img className="mx-3" id="lg" src={img} alt="" />
            <div className="sm:mx-3">
              <Button size="sm bg-transparent text-white border-white rounded-2">
                Account
              </Button>
              <Button onClick={handlesignout} id="logout" className="mx-3 rounded-2" size="sm">
                Log out
              </Button>
            </div>
          </div>
          <hr />
          <div>
            <h3>Popular Movies</h3>
            <div id="comp">
              {popular.map((movie) => {
                return (
                  <div id="flex">
                  <img
                    id="popular"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt=""
                    className="rounded-1 mx-2 my-2"
                  />
                  </div>
                );
              })}
            </div>
            <h3>Top Rated</h3>
            <div id="comp">
              {top.map((movie) => {
                return (
                  <div id="flex">
                    <img
                      id="popular"
                      src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                      alt=""
                      className="rounded-1 mx-2 my-2"
                    />
                  </div>
                );
              })}
            </div>
            <h3>Upcoming</h3>
            <div id="comp">
              {upcoming.map((movie) => {
                return (
                  <div id="flex">
                    <img
                      id="popular"
                      src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                      alt=""
                      className="rounded-4 mx-2 my-2"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MainCom;
