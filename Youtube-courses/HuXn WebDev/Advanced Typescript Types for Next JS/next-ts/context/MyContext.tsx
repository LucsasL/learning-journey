"use client";

import React, { createContext, FC, ReactNode, useState } from "react";

export type ContextShape = {
  value: string;
  setValue: (newValue: string) => void;
};

export const MyContext = createContext<ContextShape | null>(null);

// Type for children of the context
type ProviderType = {
  children: ReactNode;
};

const MyContextProvider: FC<ProviderType> = ({ children }) => {
  const [value, setValue] = useState<string>("");

  const contextValue: ContextShape = { value, setValue };

  return (
    <>
      <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    </>
  );
};

export default MyContextProvider;
