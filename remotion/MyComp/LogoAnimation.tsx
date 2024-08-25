"use client";

import { AbsoluteFill, Img, staticFile } from "remotion";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";
import { Animated, Fade, Move, Scale } from "remotion-animated";
 
export const LogoAnimation = ({ title, desc, image }: z.infer<typeof CompositionProps>) => {
 
  return (
    <div>
      <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#22c943",
      }}
    >

      <Animated animations={[
        Fade({start: 0, initial: 0, to: 0, duration: 15}),
        Fade({start: 15, initial: 0, to: 1, duration: 15}),
        Scale({initial: 0, by: 1, start: 15, duration: 15}),
        Scale({initial: 1, by: 1, start: 30, duration: 15}),
        Move({start: 35, initialX: 0, x: -300, duration: 15})
        ]} className="flex flex-col mx-auto" absolute>
          <div className="w-56 h-56 rounded-full bg-black">
            <Animated animations={[
              Fade({start: 0, initial: 0, to: 0, duration: 20}),
              Fade({start: 20, initial: 0, to: 1, duration: 15}),
              Scale({initial: 0, by: 1, start: 20, duration: 15}),
              Scale({initial: 1, by: 1, start: 35, duration: 15})
              ]} absolute>
              { image === "" ?
                <Img src={staticFile("/images/logov.png")} className='m-auto w-fit h-fit p-12'/>
                :
                <Img src={image} className='m-auto w-fit h-fit p-12'/>
              }
            </Animated>
            
          </div>
      </Animated>

      <Animated animations={[
        Fade({start: 0, initial: 0, to: 0, duration: 35}),
        Fade({start: 35, initial: 0, to: 1, duration: 15}),
        Move({start: 35, initialY: 20, y: 0, duration: 15})
        ]} className="flex mb-14 w-full ml-60" absolute>
        <p className="text-8xl text-black ml-96"><b>{title}</b></p>
        <Animated animations={[
        Fade({start: 0, initial: 0, to: 0, duration: 50}),
        Fade({start: 50, initial: 0, to: 1, duration: 15}),
        Move({start: 50, initialY: 20, y: 0, duration: 15})
        ]} className="w-fit ml-96 mt-28" absolute>
          <p className="text-4xl text-black">{desc}</p>
        </Animated>
      </Animated>

    </AbsoluteFill>
    </div>
  );
};

export default LogoAnimation