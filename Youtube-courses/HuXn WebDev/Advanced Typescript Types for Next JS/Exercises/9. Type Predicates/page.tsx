import React, { FC } from "react";
import "./globals.css";

// Button Component Imports
import Button from "@/components/Button";
import { primaryButtonProps, secondaryButtonProps } from "@/components/Button";

const Home: FC = () => {
  return (
    <>
      <main>
        <Button {...primaryButtonProps} />
        <Button {...secondaryButtonProps} />
      </main>
    </>
  );
}

export default Home;