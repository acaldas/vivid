"use client";
import Image from "next/image";
import Logo from "#/public/images/logo.svg";
import Navbar from "./navbar";
import Link from "next/link";
import SocialIcons from "./social-icons";
import HeaderMobile from "./header-mobile";

export default function Header() {
  return (
    <div className="h-[80px] px-[40px] flex items-center justify-between py-[27px] bg-overlay backdrop-blur-[30px] relative z-10">
      <div className="flex-1">
        <Link href="/">
          <Image src={Logo} alt="Vivid logo" width={140} height={25} />
        </Link>
      </div>
      <div className="hidden xl:block mx-10">
        <SocialIcons />
      </div>
      <Navbar className="hidden xl:flex flex-1 justify-end" />
      <HeaderMobile />
    </div>
  );
}
