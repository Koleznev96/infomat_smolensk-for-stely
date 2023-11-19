import React from "react";

import styles from "./Slider.module.scss";

import video from "src/movie.mp4";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const sliders = {
    first: (
      <video controls={true} width="560" height="315" autoPlay={true}>
        <source src={video} />
      </video>
    ),
    second: (
      <video controls={true} width="560" height="315" autoPlay={true}>
        <source src={video} type="video/mp4" />
      </video>
    ),
    third: (
      <video controls={true} width="560" height="315" autoPlay={true}>
        <source src={video} type="video/mp4" />
      </video>
    ),
  };

  const handleChangeSlider = (current: number) => {
    setCurrentSlide(current);
  };

  return (
    <div className={styles.slider}>
      <div>{Object.values(sliders)[currentSlide]}</div>
      <div className={styles.slider_controller}>
        <div className={styles.slider_action}>
          {Object.values(sliders).map((elem, index) => (
            <div
              key={index}
              onClick={() => handleChangeSlider(index)}
              className={currentSlide === index ? styles.active : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
