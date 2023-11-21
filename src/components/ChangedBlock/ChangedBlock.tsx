import React, { useEffect, useRef } from "react";

import "./ChangedBlock.scss";

interface ChangedBlockProps {
  children: React.ReactNode;
}

const ChangedBlock = ({ children }: ChangedBlockProps) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const refTop = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const resizeableEle = ref.current;
    const styles = window.getComputedStyle(resizeableEle);
    let height = parseInt(styles.height, 10);
    let y = 0;

    resizeableEle.style.top = "-100px";
    resizeableEle.style.left = "0";

    const onMouseMoveTopResize = (event: any) => {
      const dy = event.clientY - y;
      height = height - dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpTopResize = () => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event: any) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.bottom = styles.bottom;
      resizeableEle.style.top = "";
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    if (!refTop.current) {
      return;
    }

    const resizerTop = refTop.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);

    return () => {
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
    };
  }, []);

  return (
    <div className="container">
      <div ref={ref} className="resizeable">
        <div ref={refTop} className="resizer resizer-t" />
        {children}
      </div>
    </div>
  );
};

export default ChangedBlock;
