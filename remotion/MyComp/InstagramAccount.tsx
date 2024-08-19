"use client";

import { AbsoluteFill, Sequence } from "remotion";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";
import InstagramBox from "../../components/InstagramBox";
 
export const InstagramAccount = ({ title }: z.infer<typeof CompositionProps>) => {
 
  return (
    <div>
      <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#22c943",
      }}
    >
      
      <Sequence className=" mt-80">
        <InstagramBox title={title} colorBg="bg-gray-900" colorText="text-white" colorLogo="#ffffff"></InstagramBox>
      </Sequence>
    </AbsoluteFill>
    </div>
  );
};

export default InstagramAccount