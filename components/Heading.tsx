import React from "react";
import clsx from "clsx";

interface IProps {
  as?: React.ElementType;
  size?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Heading({
  as: Comp = "h1",
  size = "8xl",
  children,
  className,
}: IProps) {
  return (
    <Comp
      className={clsx(
        "font-semibold tracking-tighter",
        size === "8xl" && "text-5xl md:text-[5rem]",
        size === "6xl" && "text-4xl md:text-6xl",
        size === "2xl" && "text-2xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
