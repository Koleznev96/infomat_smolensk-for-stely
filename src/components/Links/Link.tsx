import React from "react";
import { Link as RouterLink } from "react-router-dom";

import styles from "./Link.module.scss";

interface Props {
  MainSvg: React.FunctionComponent;
  BgSVG: React.FunctionComponent;
  text: string;
  href: string;
}

const Link: React.FC<Props> = ({ MainSvg, BgSVG, text, href }) => {
  return (
    <RouterLink to={href} className={styles.link}>
      <div className={styles.link_content}>
        <div>
          <MainSvg />
        </div>
        <h5>{text}</h5>
      </div>
      <BgSVG />
    </RouterLink>
  );
};

export default Link;
