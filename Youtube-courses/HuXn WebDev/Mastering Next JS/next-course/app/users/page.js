// Image tag Import
import Image from "next/image";
import React from "react";

// Importing Image
import amogus from "@/public/amogus.jpg";

function ImageOptm() {
  return (
    <>
      <div>
        <Image src={amogus} alt="Amogus Drip" />
      </div>
    </>
  );
}

export default ImageOptm;
