"use client";

import { AbsoluteFill, Sequence } from "remotion";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";
import RoundedMidBox from "../../components/RoundedMidBox";
 
export const IOSNotif = ({ title, desc }: z.infer<typeof CompositionProps>) => {
 
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
        <RoundedMidBox color="bg-gray-100" title={title} desc={desc}></RoundedMidBox>
      </Sequence>
    </AbsoluteFill>
    </div>
  );
};

export default IOSNotif