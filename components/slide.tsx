import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import _LooksImages, {
  LooksDescription as _LooksDescription,
} from "../public/images/fashion";
import Arrow from "../public/images/arrow.png";

const LooksImages = _LooksImages as string[];
const LooksDescription = _LooksDescription as string[];
const photosCount = 4;
const LooksCount = Object.keys(LooksImages).length / photosCount;
const Looks = new Array(LooksCount).fill("").map((_, index) => {
  const text = JSON.stringify(
    (LooksDescription[`${index + 1}/Text` as any] as any).default
  );
  return {
    id: index,
    title: text.substring(1, text.indexOf("\\")).toUpperCase(),
    description: text
      .substring(text.lastIndexOf("\\") + 2, text.length - 1)
      .toUpperCase(),
    photos: new Array(photosCount)
      .fill("")
      .map(
        (_, photo) =>
          (LooksImages[`${index + 1}/${photo + 1}` as any] as any).default.src
      ),
  };
});

const SLIDE_DURATION = 8000;

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
    <div className="px-[6vw] pb-10">
      <div className="flex items-center justify-between max-w-full flex-wrap">
        <div className="flex md:gap-[15px] sm:gap-[8px] gap-[4px] mr-[26px] mb-[26px]">
          {Looks.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`xl:w-[40px] xl:h-[40px] sm:w-[26px] sm:h-[26px] w-[20px] h-[20px] cursor-pointer transition-colors rounded-[2.34px] hover:bg-[rgba(196,196,196,0.8)] ${
                index !== current
                  ? "bg-[rgba(196,196,196,0.5)]"
                  : "bg-black hover:bg-black"
              }`}
            ></div>
          ))}
          <button
            onClick={() => setPlay((play) => !play)}
            className="bg-white rounded-[2px] border-2 border-black xl:w-[40px] xl:h-[40px] sm:w-[24px] sm:h-[24px] w-[19px] h-[19px]"
          >
            {play ? (
              <div className="flex justify-center items-center">
                <span className="bg-black xl:w-[4.44px] w-[3px] xl:h-[20px] sm:h-[13px] h-[10px] xl:mr-[6.54px] mr-[3px]" />
                <span className="bg-black xl:w-[4.44px] w-[3px] xl:h-[20px] sm:h-[13px] h-[10px]" />
              </div>
            ) : (
              <div className="rotate-90 w-[80%] ml-[12%]">
                <Image
                  src={Arrow}
                  alt="Previous"
                  layout="responsive"
                  width="16"
                  height="16"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            )}
          </button>
        </div>
        <div className="mb-[26px]">
          <p className="xl:text-[29.2px] text-[24px] font-exo">
            {currentLook.title}
          </p>
          <p className="xl:text-[17.52px] text-[14px] font-exo font-semibold">
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
          <div className="flex justify-between flex-wrap" ref={ref}>
            <div className="sm:w-[43%] w-full">
              <Image
                src={currentLook.photos[0]}
                alt="photo 1"
                layout="responsive"
                width={533}
                height={800}
                objectFit="contain"
                priority
              />
            </div>
            <div className="sm:flex hidden w-[28%] flex-col justify-between">
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
            <div className="sm:block hidden w-[28%] relative">
              <Image src={currentLook.photos[3]} alt="photo 4" layout="fill" />
            </div>
            <div className="sm:hidden flex w-full mt-[1%] items-stretch justify-between">
              <div className="w-[49.5%] relative flex flex-col justify-between">
                <div className="relative h-[69.5%]">
                  <Image
                    src={currentLook.photos[1]}
                    alt="photo 2"
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
                <div className="relative h-[29.5%]">
                  <Image
                    src={currentLook.photos[2]}
                    alt="photo 2"
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
              </div>
              <div className="w-[49.5%]">
                <Image
                  src={currentLook.photos[3]}
                  alt="photo 4"
                  layout="responsive"
                  width={340}
                  height={801}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Slide;
