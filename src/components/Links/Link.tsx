import React from "react";

import styles from "./Link.module.scss";

interface Props {
  MainSvg: React.FunctionComponent;
  BgSVG: React.FunctionComponent;
  text: string;
}

const Link: React.FC<Props> = ({ MainSvg, BgSVG, text }) => {
  return (
    <div className={styles.link}>
      <div className={styles.link_content}>
        <div>
          <MainSvg />
        </div>
        <h5>{text}</h5>
      </div>
      <BgSVG />1
    </div>
  );
};

export default Link;
