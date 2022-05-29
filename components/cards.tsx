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
        cards[0].click();
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
    (next as HTMLDivElement).click();
  };

  const showPrevious = () => {
    if (current === undefined) {
      return;
    }

    const currentCard = ref.current[current];
    const previous =
      currentCard.previousElementSibling || ref.current[ref.current.length - 1];
    (previous as HTMLDivElement).click();
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={showNext}
        className="bg-white rounded-[2px] border-2 border-black w-[77px] h-[77px] relative pt-1"
      >
        <Image src={Arrow} alt="Next" layout="fixed" width="60" height="60" />
      </button>
      <div
        className={`cards ${
          active ? "cards--active" : ""
        } ml-[120px] mr-[110px]`}
      >
        {Object.keys(CardImages).map((key, index) => (
          <div
            onClick={() => {
              showCard(index);
            }}
            key={key}
            data-index={index}
            ref={(r) => {
              if (r) {
                ref.current[index] = r;
              }
            }}
            className="card w-[342px] h-[384px]"
          >
            <div className="flex flex-col justify-between h-full border border-black bg-white">
              <div className="border-b border-black px-[14px] py-[10px]">
                <p className="text-[36px] font-exo">
                  Collection item #643{index}
                </p>
              </div>
              <div className="flex-1 relative">
                <Image src={(CardImages as any)[key]} alt={key} layout="fill" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={showPrevious}
        className="bg-white rounded-[2px] border-2 border-black w-[77px] h-[77px] pt-1 rotate-180"
      >
        <Image
          src={Arrow}
          alt="Previous"
          layout="fixed"
          width="60"
          height="60"
        />
      </button>
    </div>
  );
};

export default Cards;
