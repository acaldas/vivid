import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
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

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<IProps>>(
  ({ className = "", textProps, children, ...props }, ref) => (
    <button
      className={`button glitch-hover border-gradient drop-gradient text-gradient-hover ${className}`}
      {...props}
    >
      <Text className="font-bold flex items-center" textGradient {...textProps}>
        {children}
      </Text>
    </button>
  )
);

Button.displayName = "Button";

export default Button;
