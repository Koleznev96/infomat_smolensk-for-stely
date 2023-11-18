import React from "react";

import styles from "./Slider.module.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const sliders = {
    first: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nPJZWTwZ9gY?autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    ),
    second: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NdUCpfOn0J8?autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    ),
    third: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RxzD6zcvkKw?autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
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
