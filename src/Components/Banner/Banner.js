import React, { useEffect,useState } from "react";
import axios from "../../axios";
import { API_KEY,imageUrl } from "../../Constants/Constants";
import "./Banner.css";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
function Banner() {
const [movie, setMovie] = useState([])
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0])
      });
  }, []);
  return (
    <div 
    style={{ backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})` } }
    className="banners">
      <div className="content">
        <h1 className="title">{ movie ? movie.title : "" }</h1>
        <div className="banner_buttons">
          <button className="button">
            <BsFillPlayFill /> Play
          </button>
          <button className="button">
            <BsFillInfoCircleFill /> More infor
          </button>
        </div>
        <h1 className="discription">
          { movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
