import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";

import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className={styles.breadcrumb} key={match.pathname}>
          <Link to={match.pathname}>{breadcrumb}</Link>
          <span>{match && index < breadcrumbs.length - 1 && ">"}</span>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
