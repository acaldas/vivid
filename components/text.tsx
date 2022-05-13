import React, { ReactHTMLElement } from "react";

interface IProps extends React.HTMLProps<HTMLParagraphElement> {}

const Text: React.FC<IProps> = ({ className, ...props }) => {
  return <p className={className} {...props} />;
};

export default Text;
