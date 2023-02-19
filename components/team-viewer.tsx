"use client";

import Image, { StaticImageData } from "next/image";
import { ReactNode, Ref, useEffect, useRef } from "react";

interface IProps {
  members: {
    id: number;
    name: string;
    image: StaticImageData;
    description: string;
  }[];
  selected: number;
  onSelected: (member: number) => void;
}

export default function TeamViewer({ members, selected, onSelected }: IProps) {
  const itemsRef = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const ref = itemsRef.current[selected];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  }, [selected, itemsRef.current]);
  return (
    <div className="flex flex-col">
      {members.map((member) => (
        <button
          ref={(el) => {
            itemsRef.current[member.id] = el;
          }}
          key={member.name}
          onClick={() => onSelected(member.id)}
          className={`transition p-8 mb-10 rounded-md overflow-hidden hover:opacity-100 hover:bg-overlay ${
            member.id === selected ? "opacity-100 bg-overlay" : "opacity-40"
          } cursor-pointer`}
        >
          <div className="flex items-center">
            <div
              className={`w-[80px] h-[80px] rounded-full border-4 ${
                member.id === selected ? "border-red" : "border-transparent"
              }`}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={74}
                height={74}
              />
            </div>
            <h5 className="ml-6 text-[40px] leading-tight font-bold">
              {member.name}
            </h5>
          </div>
          <p className="text-lg text-left mt-4">{member.description}</p>
        </button>
      ))}
    </div>
  );
}
