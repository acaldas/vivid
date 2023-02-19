"use client";

import Image, { StaticImageData } from "next/image";

interface IProps {
  members: {
    id: number;
    name: string;
    image: StaticImageData;
  }[];
  selected: number;
  onSelected: (member: number) => void;
}

export default function TeamSelector({
  members,
  selected,
  onSelected,
}: IProps) {
  return (
    <div className="flex gap-6">
      {members.map((member) => (
        <button
          key={member.name}
          className={`rounded-full border-4 hover:opacity-100 ${
            member.id === selected
              ? "border-red opacity-100"
              : "border-transparent opacity-40"
          } cursor-pointer`}
          onClick={() => onSelected(member.id)}
        >
          <Image src={member.image} alt={member.name} width={74} height={74} />
        </button>
      ))}
    </div>
  );
}
