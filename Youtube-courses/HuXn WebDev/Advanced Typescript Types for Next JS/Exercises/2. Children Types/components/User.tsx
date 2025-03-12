// Telling the TypeScript compiler that "ReactNode" is a type
import { type ReactNode } from "react";

// ReactNode Type

// A type that is a union of all the possible types that can be passed as children in JSX/TSX (DOM Elements, strings, etc...)
type UserShape = { children: ReactNode };

export function User({ children }: UserShape) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default User;
