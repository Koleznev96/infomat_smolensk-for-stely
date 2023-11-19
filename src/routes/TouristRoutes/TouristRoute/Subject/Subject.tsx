import React from "react";

import { CardView } from "src/components";

import styles from "./Subject.module.scss";

const Subject = () => {
  return (
    <div className={styles.subject}>
      <CardView
        title="Церковь святых апостолов Петра и Павла (12 век)"
        descriptionTitle="Описание"
        descriptionParagraph="К концу июня 1942 года гитлеровское командование начало наращивать силы вокруг районов Смоленской области, освобожденных партизанским соединением под командованием Никифора Захаровича Коляды (партизанский псевдоним «Батя»), с целью их повторной оккупации. Фашисты жгли деревни, зверски уничтожали мирное население, не щадили стариков и детей. Детям и подросткам угрожала опасность угона в Германию."
        tags={[
          "Протяженность: 5 км",
          "Время: 2-2,5 часа",
          "Тип маршрута: Автомобильный",
        ]}
        buttons={[
          "Показать на карте",
          "Посмотреть маршрут",
          "«Мой Смоленск» об объекте",
        ]}
      />
    </div>
  );
};

export default Subject;
