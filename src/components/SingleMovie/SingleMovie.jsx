import { React, useState, useEffect } from "react";
import "./movie.css";

import { useLocation } from "react-router-dom";

function SingleMovie() {
    const location = useLocation();
    // console.log(location);
    // function gender(){
    //     const  person =  location.state.movie.media_type
    //     console.log(person)
    // }
    // useEffect(() => {
    //     gender()
    // }, [])

    // const proid = useParams()
    let imgPrefix = "https://image.tmdb.org/t/p/w500";
    let Prefix = "https://image.tmdb.org/t/p/w500";

    if (location.state.movie.media_type === "person") {
        // console.log('profile')
        imgPrefix +=
            "https://image.tmdb.org/t/p/w500" + location.state.movie.profile_path;
        // console.log(imgPrefix)
    } else {
        // console.log('else')
        imgPrefix +=
            "https://image.tmdb.org/t/p/w500" + location.state.movie.poster_path;
        // console.log(imgPrefix)
    }

    const [knowFror, setknowFror] = useState(location.state.movie.known_for);
    console.log(knowFror);
    //     knowFror = location.state.movie.known_for
    //    console.log(knowFror)

    // useEffect(() => {
    //     personData()
    // }, [])

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row movies ">
                    <div className="col-md-6 d-flex justify-content-center mx-auto ">
                        <img className="h-75" src={imgPrefix} height="400px" alt="" />
                    </div>
                    <div className="col-md-6 flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{location.state.movie.title}</h1>

                        <h2 className="my-4 fw-bolder text-danger">
                            {" "}
                            {location.state.movie.name}
                        </h2>
                        <hr />

                        <p className="lead">{location.state.movie.overview}</p>
                        {location.state.movie.vote_average > 2 ? (
                            <>
                            <p className="text-danger">Rate : {location.state.movie.vote_average}</p>
                            
                            </> 
                        ):("")
                    
                        }
                       

                        <div className="row">
                            <div className="col-md-12"></div>
                            <br />
                        </div>

                        <div className="d-flex p-3">
                            {location.state.movie.known_for ? (
                                <>
                                    {knowFror.map((movies, index) => (
                                        <div>
                                            <img
                                                key={index}
                                                className="col-md-4 w-75 p-2x  "
                                                src={Prefix + movies.poster_path}
                                                alt={movies.name}
                                            />
                                            <h3 className="text-center h6 my-2">{movies.title}</h3>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleMovie;
