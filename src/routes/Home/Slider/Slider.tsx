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
      controlsList={undefined}
      onEnded={onVideoEnd}
    >
      <source src={video.url} />
    </video>
  ));

  function onVideoEnd() {
    const videoLength = response?.data?.videos?.length || 0;

    setCurrentSlide((prev) => (prev + 1) % videoLength);
  }

  const handleChangeSlider = (current: number) => {
    setCurrentSlide(current);
  };

  if (!response?.data?.videos?.length) return <></>;

  return (
    <div className={styles.slider}>
      {sliders?.[currentSlide]}
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
