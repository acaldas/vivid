import { NextPage } from "next";
import { PropsWithChildren } from "react";
import Header from "../components/header";

interface IProps {
  loading?: boolean;
  chainId: number;
  mintEnabled: boolean;
}

const Page: NextPage<PropsWithChildren<IProps>> = ({
  chainId,
  mintEnabled,
  loading,
  children,
}) => {
  return (
    <div
      className={`lg:[5px] border-[3px] border-black h-full relative ${
        loading ? "overflow-hidden" : "overflow-auto"
      } flex flex-col`}
    >
      <Header
        className="transition-opacity duration-1000 delay-700"
        style={{ opacity: loading ? 0 : 1 }}
        chainId={chainId}
        mintEnabled={mintEnabled}
      />
      {children}
    </div>
  );
};

export default Page;
