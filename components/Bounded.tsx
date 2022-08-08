import React from "react";
import clsx from "clsx";

interface IProps {
  as?: React.ElementType;
  yPadding?: string;
  collapsible?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export function Bounded({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  className,
  children,
}: IProps) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        "px-6 py-20 md:py-32",
        yPadding === "sm" && "py-8 md:py-10",
        yPadding === "base" && "py-20 md:py-32",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
