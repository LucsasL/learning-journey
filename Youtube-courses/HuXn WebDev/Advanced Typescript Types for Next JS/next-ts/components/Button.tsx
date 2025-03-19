"use client";

import React, { FC } from "react";

// Types Declaration
interface PrimaryButtonProps {
  type: "primary";
  label: string;
}

interface SecondaryButtonProps {
  type: "secondary";
  label: string;
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

// Type predicate function to check if props are of type PrimaryButtonProps
function isPrimaryButtonProp(props: ButtonProps): props is PrimaryButtonProps {
  return props.type === "primary";
}

// Objects Declaration
export const primaryButtonProps: PrimaryButtonProps = {
  type: "primary",
  label: "Primary Button",
};

export const secondaryButtonProps: SecondaryButtonProps = {
  type: "secondary",
  label: "Secondary Button",
};

// Main Component
const Button: FC<ButtonProps> = (props) => {
  if (isPrimaryButtonProp(props)) {
    return (
      <>
        <button style={{ background: "blue", color: "white" }}>
          {props.label}
        </button>
      </>
    );
  }

  return (
    <>
      <button style={{ background: "red", color: "white" }}>
        {props.label}
      </button>
    </>
  );
};

export default Button;
