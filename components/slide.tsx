import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import _LooksImages from "../public/images/fashion";
import Arrow from "../public/images/arrow.png";

const LooksImages = _LooksImages as string[];
const photosCount = 4;
const LooksCount = Object.keys(LooksImages).length / photosCount;
const Looks = new Array(LooksCount).fill("").map((_, index) => ({
  id: index,
  title: "BUTTON SHIRT",
  description: "100% HIGH QUALITY METAL",
  photos: new Array(photosCount)
    .fill("")
    .map(
      (_, photo) =>
        (LooksImages[`${index + 1}/${photo + 1}.png` as any] as any).default.src
    ),
}));

console.log(Looks[0].photos[0]);

const SLIDE_DURATION = 5000;

const Slide: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [play, setPlay] = useState(true);
  const currentLook = useMemo(() => Looks[current], [current]);

  useEffect(() => {
    if (!play) {
      return;
    }
    const timeout = setTimeout(
      () => setCurrent((current) => (current + 1) % Looks.length),
      SLIDE_DURATION
    );

    return () => clearTimeout(timeout);
  }, [play, current]);

  return (
    <div className="px-[6vw]">
      <div className="flex items-center justify-between mb-[26px]">
        <div className="flex gap-[15px]">
          {Looks.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-[40px] h-[40px] cursor-pointer transition-colors rounded-[2.34px] hover:bg-[rgba(196,196,196,0.8)] ${
                index !== current
                  ? "bg-[rgba(196,196,196,0.5)]"
                  : "bg-black hover:bg-black"
              }`}
            ></div>
          ))}
          <button
            onClick={() => setPlay((play) => !play)}
            className="bg-white rounded-[2px] border-2 border-black w-[40px] h-[40px]"
          >
            {play ? (
              <div className="flex justify-center items-center">
                <span className="bg-black w-[4.44px] h-[20px] mr-[6.54px]" />
                <span className="bg-black w-[4.44px] h-[20px]" />
              </div>
            ) : (
              <div className="pt-1 rotate-90">
                <Image
                  src={Arrow}
                  alt="Previous"
                  layout="fixed"
                  width="22"
                  height="22"
                />
              </div>
            )}
          </button>
        </div>
        <div>
          <p className="text-[29.2px] font-exo">{currentLook.title}</p>
          <p className="text-[17.52px] font-exo font-semibold">
            {currentLook.description}
          </p>
        </div>
      </div>
      <SwitchTransition>
        <CSSTransition
          key={currentLook.id}
          nodeRef={ref}
          addEndListener={(done) =>
            ref.current?.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <div className="flex justify-between" ref={ref}>
            <div className="w-[43%]">
              <Image
                src={currentLook.photos[0]}
                alt="photo 1"
                layout="responsive"
                width={200}
                height={400}
              />
            </div>
            <div className="w-[28%] flex flex-col justify-between">
              <div className="w-full h-[67%] mb-[1%] relative">
                <Image
                  src={currentLook.photos[1]}
                  alt="photo 2"
                  layout="fill"
                />
              </div>
              <div className="w-full h-[32%] relative">
                <Image
                  src={currentLook.photos[2]}
                  alt="photo 3"
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-[28%] relative">
              <Image src={currentLook.photos[3]} alt="photo 4" layout="fill" />
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Slide;
