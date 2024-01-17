import React, { FunctionComponent, useState } from "react";
import Keyboard from "react-simple-keyboard/build";

import "react-simple-keyboard/build/css/index.css";

import russian from "simple-keyboard-layouts/build/layouts/russian";
import english from "simple-keyboard-layouts/build/layouts/english";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: any;
  language: "ru_RU" | "en_US";
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
  language = "ru_RU",
}) => {
  const [layoutName, setLayoutName] = useState("default");

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
  };

  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      layout={
        language === "ru_RU"
          ? {
              ...russian.layout,
              default: [
                "\u0451 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "{tab} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a \\",
                "{lock} \u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}",
                "{shift} / \u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e . {shift}",
                "{space}",
              ],
              shift: [
                '\u0401 ! " \u2116 ; % : ? * ( ) _ + {bksp}',
                "{tab} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a /",
                "{lock} \u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}",
                "{shift} | \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e , {shift}",
                "{space}",
              ],
            }
          : {
              ...english.layout,
              default: [
                "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "{tab} q w e r t y u i o p [ ] \\",
                "{lock} a s d f g h j k l ; ' {enter}",
                "{shift} z x c v b n m , . / {shift}",
                "{space}",
              ],
              shift: [
                "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                "{tab} Q W E R T Y U I O P { } |",
                '{lock} A S D F G H J K L : " {enter}',
                "{shift} Z X C V B N M < > ? {shift}",
                "{space}",
              ],
            }
      }
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default KeyboardWrapper;
