"use client";

import { AbsoluteFill } from "remotion";
import { z } from "zod";
import { Animated, Fade, Move, Scale } from "remotion-animated";
import ChatBox from "../../components/ChatBox";
import { CompositionProps } from "../../types/constants";
 
export const ChatAnimation = ({ title, prefix, suffix, desc }: z.infer<typeof CompositionProps>) => {
 
  return (
    <div>
      <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#22c943",
      }}
    >

        <Animated absolute animations={[
          Fade({start: 0, initial: 0, to: 0, duration: 15}),
          Fade({start: 15, initial: 0, to: 1, duration: 15}),
          Scale({initial: 0, by: 1, start: 15, duration: 15}),
          Scale({initial: 1, by: 1, start: 30, duration: 15}),
          Move({initialY: 0, y: -100, start: 45, duration: 15}),
          Move({initialY: 0, y: -100, start: 75, duration: 15}),
          Move({initialY: 0, y: -100, start: 105, duration: 15})
          ]} className="flex flex-col mx-auto w-1/2 mt-96">
            <div className=" grow"></div>
            <div className=" shrink">
            <ChatBox message={title} fromOwner={true}></ChatBox>
            </div>
        </Animated>

        <Animated absolute animations={[
          Fade({start: 0, initial: 0, to: 0, duration: 45}),
          Fade({start: 45, initial: 0, to: 1, duration: 15}),
          Scale({initial: 0, by: 1, start: 45, duration: 15}),
          Scale({initial: 1, by: 1, start: 60, duration: 15}),
          Move({initialY: 0, y: -100, start: 75, duration: 15}),
          Move({initialY: 0, y: -100, start: 105, duration: 15}),
          ]} className="flex flex-col w-1/2 mt-96">
            <div className="shrink"></div>
            <div className="grow">
            <ChatBox message={prefix} fromOwner={false}></ChatBox>
            </div>
        </Animated>

        <Animated absolute animations={[
          Fade({start: 0, initial: 0, to: 0, duration: 75}),
          Fade({start: 75, initial: 0, to: 1, duration: 15}),
          Scale({initial: 0, by: 1, start: 75, duration: 15}),
          Move({initialY: 0, y: -100, start: 105, duration: 15})
          ]} className="flex flex-col w-1/2 mt-96">
            <div className="shrink"></div>
            <div className="grow">
              <ChatBox message={suffix} fromOwner={false}></ChatBox>
            </div>
        </Animated>

        <Animated absolute animations={[
          Fade({start: 0, initial: 0, to: 0, duration: 90}),
          Fade({start: 105, initial: 0, to: 1, duration: 15}),
          Scale({initial: 0, by: 1, start: 105, duration: 15})
          ]} className="flex flex-col mt-80 w-1/2">
            <div className=" grow"></div>
            <div className="shrink mt-10">
              <ChatBox message={desc} fromOwner={true}></ChatBox>
            </div>
        </Animated>

    </AbsoluteFill>
    </div>
  );
};

export default ChatAnimation