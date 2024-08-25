"use client";

import { AbsoluteFill } from "remotion";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";
import TweetBox from "../../components/TweetBox";
import { Animated } from "remotion-animated";
import { moveTextRightIn, scaleIn } from "../../types/animation";
 
export const TweetPanel = ({ title, prefix, desc, image }: z.infer<typeof CompositionProps>) => {
 
  return (
    <div>
      <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#22c943",
      }}
    >

      <Animated animations={scaleIn} className="mt-8 flex w-full" absolute>
          <TweetBox color="bg-gray-100" title={title} username={prefix} image={image}></TweetBox>
      </Animated>

      <Animated animations={moveTextRightIn(30)} className="mt-36 w-full" absolute>
        <p className="text-4xl text-gray-900 ml-32 mt-6 mr-32 leading-tight">{desc}</p>
        <Animated animations={moveTextRightIn(40)} className="mt-4" absolute>
          <p className="text-xl text-gray-500 mr-40 ml-32">12:30 PM - Jun 21, 2024 - <span className="text-blue-400">Twitter Web App</span></p>
        </Animated>
      </Animated>

    </AbsoluteFill>
    </div>
  );
};

export default TweetPanel