import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { SliderData } from "./SliderData";
import "./slider.css"
function Slides() {
  return (
   
    <div className="container">
      <div className="slide-container">
        <Slide>
          {SliderData.map((slide, index) => {
            return (
              <div className="slider">
                <div className="slide-content">
                  <h4 className="movie-title">{slide.title}</h4>
                  <p className="movie-des">{slide.description}</p>
                </div>

                <img src={slide.image} alt="" />
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
   
  );
}

export default Slides;
