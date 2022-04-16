import { display } from "@mui/system";
import { useState } from "react";

interface Props {
  items: { [image: string]: any }[];
  heading: { [text: string]: any }[];
}
export default function SlideShow(props: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    const images = props.items.length;
    setCurrentSlide((currentSlide + 1) % images);
  };

  const prev = () => {
    const images = props.items.length;
    let current = currentSlide;

    current -= 1;
    if (current < 0) {
      current = images - 1;
    }

    setCurrentSlide(current);
  };
  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {props.items.map((el, index) => (
          <div
            className="mySlides fade"
            hidden={currentSlide == index ? false : true}
          >
            <div className="numbertext">
              {index + 1} / {props.items.length}
              <h1 className="headertext">{el.text}</h1>
            </div>

            {console.log(el)}
            <img
              className="headerimage"
              src={el.image}
              style={{
                width: "1000px",
                height: "800px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
        ))}

        <a className="prev" onClick={prev}>
          &#10094;
        </a>
        <a className="next" onClick={next}>
          &#10095;
        </a>
      </div>

      <div className="dot-container">
        {props.items.map((_, index) => (
          <span
            className="dot"
            onClick={() => {
              setCurrentSlide(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
