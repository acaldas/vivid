import Image from "next/image";
import LogoBig from "#/public/images/logo_big.svg";

export default function Loading() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="max-h-[24vh] relative w-full h-full">
        <Image src={LogoBig} alt="Vivid logo" priority fill />
      </div>
    </div>
  );
}
