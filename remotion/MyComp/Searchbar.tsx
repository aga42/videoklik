"use client";

import { AbsoluteFill, Sequence } from "remotion";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";
import RoundedBox from "../../components/RoundedBox";
import TypingText from "../../components/TypingText";
 
export const Searchbar = ({ title }: z.infer<typeof CompositionProps>) => {
 
  return (
    <div>
      <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        backgroundColor: "#22c943",
      }}
    >
      
      <Sequence className=" mt-80">
        <RoundedBox></RoundedBox>
      </Sequence>
      <Sequence from={15} className="mt-80 ml-16">
        <TypingText title={`${title}`}></TypingText>
      </Sequence>
      
    </AbsoluteFill>
    </div>
  );
};

export default Searchbar