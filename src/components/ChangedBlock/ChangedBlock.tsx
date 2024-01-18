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

    resizeableEle.style.top = "-210px";
    resizeableEle.style.left = "0";

    const onMouseMoveTopResize = (event: any) => {
      event.preventDefault();
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;

      const dy = clientY - y;
      height = height - dy;
      y = clientY;

      if (height < 450) {
        height = 450;
      }

      if (height > 1110) {
        height = 1110;
      }

      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpTopResize = () => {
      document.removeEventListener("touchmove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event: any) => {
      event.preventDefault();
      y = event.touches ? event.touches[0].clientY : event.clientY;

      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.bottom = styles.bottom;
      resizeableEle.style.top = "";

      document.addEventListener("touchmove", onMouseMoveTopResize);
      document.addEventListener("touchend", onMouseUpTopResize);
    };

    if (!refTop.current) {
      return;
    }

    const resizerTop = refTop.current;

    resizerTop.addEventListener("touchstart", onMouseDownTopResize);

    return () => {
      resizerTop.removeEventListener("touchstart", onMouseDownTopResize);
    };
  }, []);

  return (
    <div className="container">
      <div ref={ref} className="resizeable">
        <div className="resizer-container" ref={refTop}>
          <div className="resizer" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ChangedBlock;
