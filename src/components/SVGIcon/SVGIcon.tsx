import { useEffect, useState } from "react";

const SVGIcon = ({ path }: { path?: string }) => {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const importSVG = async () => {
      try {
        const importedIcon = await import(`src/icons/weather/${path}.svg`);
        setIcon(importedIcon.default);
      } catch (error) {
        console.error(error);
      }
    };

    void importSVG();
  }, [path]);

  return <img alt="icon" src={icon} />;
};

export default SVGIcon;
