import React, { useEffect, useRef, useState } from "react";

export interface IProps extends React.HTMLProps<HTMLParagraphElement> {
  delay?: number;
  duration?: number;
  textGradient?: boolean;
  refreshRate?: number;
  finishClassName?: string;
}

interface Data {
  isScrolling: boolean;
  repeat: number;
  target?: HTMLParagraphElement;
  letters: string;
  originalStrings: string;
  singleLetters: HTMLSpanElement[];
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function getLetter() {
  const result = characters.charAt(
    Math.floor(Math.random() * characters.length)
  );
  return result;
}

const Text: React.FC<IProps> = ({
  delay = 0,
  duration = 2000,
  refreshRate = 50,
  className,
  textGradient,
  style,
  finishClassName,
  ...props
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [data, setData] = useState<Data>({
    isScrolling: false,
    repeat: 0,
    letters: characters,
    originalStrings: "",
    singleLetters: [],
  });
  const [initial, setInitial] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [done, setDone] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const divideLetters = (data: Data) => {
    const element = data.target!;
    var text = element.textContent || "";
    var textDivided = "";

    if (element.childNodes.length === 1) {
      for (var i = 0; i < text.length; i++) {
        const wordStart = i === 0 || text.charAt(i - 1) === " ";
        const wordEnd = i === text.length - 1 || text.charAt(i + 1) === " ";
        const letter = text[i];
        const isInt = !isNaN(parseInt(letter));
        const letterSpan = `<span class="text-shuffle-letter ${
          textGradient ? "text-gradient-item" : ""
        } text-shuffle-letter-${0}-span-${i} font-vivid" data-txt="${letter}">${
          isInt ? getLetter() : letter
        }</span>`;
        if (wordStart) {
          textDivided += `<span class="text-shuffle-word">`;
        }
        textDivided += letterSpan;
        if (wordEnd) {
          textDivided += "</span>";
        }
      }
      element.innerHTML = textDivided;
    }

    setData((data) => ({
      ...data,
      singleLetters: Array.from(
        ref.current!.querySelectorAll(".text-shuffle-letter")
      ),
    }));
  };

  const changeLetter = (letter: HTMLSpanElement) => {
    if (letter.textContent === " ") {
      return;
    }
    letter.classList.add("is-changing");
    letter.style.animationDuration = Math.random().toFixed(2) + "s";

    const index = Math.random() * data.letters.length;
    const newChar = data.letters.substring(index, index + 1);

    letter.textContent = newChar;
  };

  const changeLetters = (data: Data) => {
    data.singleLetters.forEach(function (el) {
      changeLetter(el);
    });
  };

  const resetLetter = (letter: HTMLSpanElement, value: string) => {
    letter.classList.remove("is-changing", "font-vivid");
    letter.classList.add("font-exo");
    letter.textContent = value;
  };

  const resetLetters = (data: Data) => {
    var randomArray = [];
    for (var i = 0; i < data.singleLetters.length; i++) {
      randomArray.push(i);
    }

    randomArray.sort(() => (Math.random() > 0.5 ? 1 : -1));

    randomArray.forEach(function (el, index) {
      setTimeout(function () {
        resetLetter(
          data.singleLetters[el],
          data.originalStrings.substring(el, el + 1)
        );
      }, index * 5 * (Math.random() * 5));
    });
  };

  useEffect(() => {
    if (!animate || done) {
      return;
    }
    const id = setInterval(() => changeLetters(data), refreshRate);
    return () => {
      clearInterval(id);
      resetLetters(data);
      setDone(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, animate, done]);

  useEffect(() => {
    if (!ref || !ref.current || !initial) {
      return;
    }
    setInitial(false);
    const newData = {
      ...data,
      target: ref.current,
      originalStrings: props.children?.toString() || "",
    };
    setData(newData);

    divideLetters(newData);

    setTimeout(() => {
      setAnimate(true);
    }, delay);

    setTimeout(() => {
      setAnimate(false);
    }, delay + duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <div>
      <p
        className={`text-shuffle overflow-hidden
          ${className}
          ${done ? finishClassName : ""}
          ${textGradient ? "text-gradient-hover" : ""}`}
        style={style}
        {...props}
        ref={ref}
      />
    </div>
  );
};

export default Text;
