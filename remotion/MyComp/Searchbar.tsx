"use client";

import { AbsoluteFill, Sequence } from "remotion";
// import { useCurrentFrame, useVideoConfig } from "remotion";
import { CompositionSearchbarProps } from "../../types/constants";
import { z } from "zod";
import RoundedBox from "../../components/RoundedBox";
import TypingText from "../../components/TypingText";
 
export const Searchbar = ({ title }: z.infer<typeof CompositionSearchbarProps>) => {
  // const frame = useCurrentFrame();
  // const { durationInFrames } = useVideoConfig();
  // const destinateValue = Number(title)
  // const result = Math.round(((frame / (durationInFrames - 31)) * destinateValue))
 
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
      {/* <p className=" text-white"><b>{ frame >= (durationInFrames-31) ? destinateValue.toLocaleString('id-ID') : result.toLocaleString('id-ID')}</b></p>  */}
      
      <Sequence className=" mt-80">
        <RoundedBox></RoundedBox>
      </Sequence>
      <Sequence from={15} className="mt-80 ml-16">
        <TypingText title="Celana jeans hitam murah"></TypingText>
      </Sequence>
      
    </AbsoluteFill>
    </div>
  );
};

export default Searchbar