import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import Text, { IProps as TextProps } from "./text";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  textProps?: TextProps;
}

const Button: React.FC<PropsWithChildren<IProps>> = ({
  className = "",
  textProps,
  children,
  ...props
}) => (
  <button
    className={`button glitch-hover border-gradient drop-gradient text-gradient-hover ${className}`}
    {...props}
  >
    <Text className="font-bold flex items-center" textGradient {...textProps}>
      {children}
    </Text>
  </button>
);

export default Button;
