"use client";

import { AbsoluteFill, Sequence } from "remotion";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";
import RoundedMidBox from "../../components/RoundedMidBox";
 
export const IOSNotif = ({ title }: z.infer<typeof CompositionProps>) => {
 
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
        <RoundedMidBox color="bg-gray-100"></RoundedMidBox>
      </Sequence>
    </AbsoluteFill>
    </div>
  );
};

export default IOSNotif