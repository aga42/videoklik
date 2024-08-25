"use client";

import { AbsoluteFill, Sequence } from "remotion";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";
import InstagramBox from "../../components/InstagramBox";
 
export const InstagramSnippet = ({ title }: z.infer<typeof CompositionProps>) => {
 
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
        <InstagramBox title={title} colorBg="bg-gray-900" colorText="text-white"></InstagramBox>
      </Sequence>
    </AbsoluteFill>
    </div>
  );
};

export default InstagramSnippet