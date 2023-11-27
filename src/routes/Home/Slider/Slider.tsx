import React from "react";

import { useGetGeneralQuery } from "src/api/main";

import styles from "./Slider.module.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const { data: response } = useGetGeneralQuery(undefined);

  const sliders = response?.data?.videos?.map((video) => (
    <video
      key={video.id}
      controls={false}
      autoPlay={true}
      loop={true}
      controlsList={undefined}
    >
      <source src={video.url} />
    </video>
  ));

  const handleChangeSlider = (current: number) => {
    setCurrentSlide(current);
  };

  if (!response?.data?.videos?.length) return;

  return (
    <div className={styles.slider}>
      <div>{sliders?.[currentSlide]}</div>
      <div className={styles.slider_controller}>
        <div className={styles.slider_action}>
          {sliders?.map((elem, index) => (
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
