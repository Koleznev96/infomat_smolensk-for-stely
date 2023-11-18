import React from "react";

import { Button, ImageSlider, Tag } from "src/components";

import styles from "./Subject.module.scss";

const Subject = () => {
  return (
    <div className={styles.subject}>
      <ImageSlider />
      <div className={styles.info}>
        <h4>Церковь святых апостолов Петра и Павла (12 век)</h4>
        <div className={styles.tags}>
          <Tag text="Адрес: ул. Дзержинского, 6" />
          <Tag text="Время работы: Круглосуточно" />
          <Tag text="Маршрут: «Православные святыни и храмы 12 века» " />
        </div>
        <div className={styles.description}>
          <h5>Описание</h5>
          <p>
            К концу июня 1942 года гитлеровское командование начало наращивать
            силы вокруг районов Смоленской области, освобожденных партизанским
            соединением под командованием Никифора Захаровича Коляды
            (партизанский псевдоним «Батя»), с целью их повторной оккупации.
            Фашисты жгли деревни, зверски уничтожали мирное население, не щадили
            стариков и детей. Детям и подросткам угрожала опасность угона в
            Германию.
          </p>
        </div>
        <div className={styles.buttons}>
          <Button>Показать на карте</Button>
          <Button>Посмотреть маршрут</Button>
          <Button>«Мой Смоленск» об объекте</Button>
        </div>
      </div>
    </div>
  );
};

export default Subject;
