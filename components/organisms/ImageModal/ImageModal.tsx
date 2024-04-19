import Image from "next/image";
import React from "react";

export const ImageModal = () => {
  return (
    <div className="relative h-[80vh] w-[70vw]">
      <Image
        src="/oda/open-apis/images/schema-placeholder.png"
        alt="Schema Placeholder"
        fill
      />
    </div>
  );
};
