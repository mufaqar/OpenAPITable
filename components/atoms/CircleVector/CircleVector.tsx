import { FC } from "react";
import Image from "next/image";

interface CircleVectorProps {
  text?: string;
}

export const CircleVector: FC<CircleVectorProps> = (props) => {
  const { text } = props;
  return (
    <div className="">
      <Image
        src={"/oda/open-apis/images/dot-pillar.svg"}
        width={4.25}
        height={99.34}
        alt="acceleration"
      />
      <p>te</p>
    </div>
  );
};
