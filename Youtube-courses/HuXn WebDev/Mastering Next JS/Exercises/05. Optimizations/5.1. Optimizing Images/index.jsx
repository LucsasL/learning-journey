// Use the <Image /> Tag from Next.JS to optimize images
import Image from "next";

import React from 'react';

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