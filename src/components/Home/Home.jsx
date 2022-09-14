import axios from "axios";
import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


function Home() {
    
    const navigate = useNavigate();

    const [trandingMovie, settrandingMovie] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);

    async function getData(mediaType,callback ) {
        let respnse = await axios.get(
            `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=274ebeebade49709e8b59808c78353a9`
        );
        callback(respnse.data.results);
        // console.log(respnse)
    }

    useEffect(() => {
        getData('movie',settrandingMovie);
        getData('tv', setTrendingTv );
        getData('person', setTrendingPeople );
        
    }, []);
    // console.log(trandingMovie);
    let imgPrefix = "https://image.tmdb.org/t/p/w500";
    // const toComponentB=()=>{
    //     navigate(`/movie/${movie.id}`,{state:{id:1,name:'sabaoon'}});
    //       }
    return (
        <>
       
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <div>
                        {
    localStorage.token ? <>
    
    <h5>Hello <span className="text-danger">{localStorage.user}</span> </h5>
      

    </>:<> ""</>
  }
                            <div className="brdr my-3 w-50"></div>
                            <h2 className="h4">
                                Trending Movies <br />
                                To Watch <br /> Right Now{" "}
                            </h2>

                            <p className="text-muted">Trending Movie To Watch </p>
                            <div className="brdr my-3 w-75"></div>
                        </div>
                    </div>

                    {trandingMovie.map((movie, index) => (
                        <div key={index} className="col-md-2">
                            <div className="movie">
                                <img
                                    className="imgs w-75"
                                    src={imgPrefix + movie.poster_path}
                                    alt={movie.title}
                                    // onClick={()=>{toComponentB()}}
                                    onClick={function sayhello(){
                                        // console.log(movie)
                                        // <NavLink to={`/movie/${movie.id}`} />
                                        // navigate(`/movie/${movie.id}`);
                                        navigate(`/movie/${movie.id}`,{state:{movie}});
                                        
                                    }}
                                    
                                />
                                <h3 className="text-center h6 my-2">{movie.title}</h3>
                                {movie.vote_average > 8 ? (
                            <>
                            <p className="text-danger ">Rate : {movie.vote_average}</p>
                            </> 
                        ):( <p className="text-info">Rate : {movie.vote_average}</p>)
                        }
                                {/* <button className="btn btn-outline-danger mb-3">See More</button> */}
                            </div>
                        </div>

                    ))}
                </div>

                <div className="row my-5">
      <div className="col-md-4 d-flex align-items-center">
        <div>
        <div className="brdr my-3 w-25 "></div>
        <h2 className="h4">
          Trending Tv <br />
          To Watch <br /> Right Now
        </h2>

        <p className="text-muted">Trending Tv To Watch </p>
        <div className="brdr my-3 w-100"></div>
      </div>
        </div>
       

      {trendingTv.map((movie, index) => (
        <div key={index} className="col-md-2">
          <div className="movie">
            <img
              className="imgs w-75"
              src={imgPrefix + movie.poster_path}
              alt={movie.name}
              onClick={function sayhello(){
                // console.log(movie)
                // <NavLink to={`/movie/${movie.id}`} />
                // navigate(`/movie/${movie.id}`);
                navigate(`/movie/${movie.id}`,{state:{movie}});
                
            }}
            />
            <h3 className="text-center h6 my-2">{movie.name}</h3>
            {movie.vote_average > 8 ? (
                            <>
                            <p className="text-danger">Rate : {movie.vote_average}</p>
                            </> 
                        ):( <p className="text-info">Rate : {movie.vote_average}</p>) 
                        }:
          </div>
        </div>
      ))}
    </div>

    <div className="row ">
      <div className="col-md-4 d-flex align-items-center">
        <div>
        <div className="brdr my-3 w-25"></div>
        <h2 className="h4">
          Trending People <br />
          To Watch <br /> Right Now{" "}
        </h2>

        <p className="text-muted">Trending Movie To Watch </p>
        <div className="brdr my-3 w-75"></div>
      </div>
        </div>
       

      {trendingPeople.map((movie, index) => (
        <div key={index} className="col-md-2">
          <div className="movie">
            <img
            
              className=" imgs w-75 py-2"
              src={imgPrefix + movie.profile_path}
              alt={movie.name}
              onClick={function sayhello(){
                
                navigate(`/movie/${movie.id}`,{state:{movie}});
                
            }}
            />
            <h3 className="text-center h6 my-2">{movie.name}</h3>
            
          </div>
        </div>
      ))}
    </div>
                
            </div>
        </>
    );
}

export default Home;
