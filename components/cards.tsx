import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import CardImages from "../public/images/cards";
import Arrow from "../public/images/arrow.png";

const Cards: React.FC = () => {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState<number | undefined>(undefined);
  const ref = useRef<Array<HTMLDivElement>>([]);

  useEffect(() => {
    const cards = ref.current;
    if (!cards.length) {
      return;
    }

    if (current === undefined) {
      setCurrent(cards.length - 1);
      requestAnimationFrame(() => {
        (cards[0].querySelector(".card-image") as HTMLDivElement).click();
      });
    }

    setActive(true);
  }, [ref]);

  const showCard = (index: number) => {
    if (current === index) {
      return;
    }

    ref.current.forEach((card) => {
      card.classList.remove("card--current", "card--out", "card--next");
    });

    let currentCard =
      ref.current[current === undefined ? ref.current.length - 1 : current];
    currentCard.classList.add("card--out");

    currentCard = ref.current[index];
    currentCard.classList.add("card--current");

    const previousIndex =
      index - 1 < 0 ? ref.current.length - index - 1 : index - 1;
    let nextIndex =
      current !== undefined
        ? current < index
          ? (index + 1) % ref.current.length
          : previousIndex
        : index + 1;

    if (current === nextIndex) {
      nextIndex = current === ref.current.length - 1 ? index + 1 : index - 1;
    }
    const next = ref.current[nextIndex];
    next.classList.add("card--next");

    setCurrent(index);
  };

  const showNext = () => {
    if (current === undefined) {
      return;
    }
    const currentCard = ref.current[current];
    const next = currentCard.nextElementSibling || ref.current[0];
    (next.querySelector(".card-image") as HTMLDivElement).click();
  };

  const showPrevious = () => {
    if (current === undefined) {
      return;
    }

    const currentCard = ref.current[current];
    const previous =
      currentCard.previousElementSibling || ref.current[ref.current.length - 1];
    (previous.querySelector(".card-image") as HTMLDivElement).click();
  };

  const buttonNext = (
    <button
      onClick={showNext}
      className="bg-white rounded-[2px] border-2 border-gradient drop-gradient w-[53px] h-[47px] relative px-3 py-2"
    >
      <Image
        src={Arrow}
        alt="Next"
        layout="responsive"
        width="60"
        height="60"
      />
    </button>
  );

  const buttonPrevious = (
    <button
      onClick={showPrevious}
      className="bg-white rounded-[2px] border-2 border-gradient drop-gradient w-[53px] h-[47px] relative px-3 py-2 rotate-180"
    >
      <Image
        src={Arrow}
        alt="Previous"
        layout="responsive"
        width="60"
        height="60"
      />
    </button>
  );

  return (
    <div className="flex items-start sm:items-center justify-center w-full h-full flex-wrap">
      <div className="sm:block flex sm:w-auto w-full justify-around sm:mt-0 mt-[20px] sm:mb-0 mb-[50px]">
        {buttonNext}
        <div className="sm:hidden block">{buttonPrevious}</div>
      </div>
      <div
        className={`flex-1 mx-[40px] cards ${
          active ? "cards--active" : ""
        } w-full`}
      >
        {Object.keys(CardImages).map((key, index) => (
          <div
            key={key}
            data-index={index}
            ref={(r) => {
              if (r) {
                ref.current[index] = r;
              }
            }}
            className="card w-full pointer-events-none"
          >
            <div className="flex flex-col justify-between md:w-2/3 w-[90%] mx-auto aspect-square">
              <div
                onClick={() => {
                  showCard(index);
                }}
                className="cursor-pointer pointer-events-auto card-image relative w-full h-full border border-black bg-white"
              >
                <Image
                  src={(CardImages as any)[key]}
                  alt={key}
                  width="500"
                  height="500"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:block hidden">{buttonPrevious}</div>
    </div>
  );
};

export default Cards;
