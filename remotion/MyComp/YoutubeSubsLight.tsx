"use client";

import { AbsoluteFill, Img, staticFile } from "remotion";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";
import { Animated, Fade, Move, Scale} from "remotion-animated";
import { fadeIn, scaleHorizontalIn, scaleHorizontalOut } from "../../types/animation";
import YoutubeSubsBox from "../../components/YoutubeSubsBox";
 
export const YoutubeSubsLight = ({ title, desc, image }: z.infer<typeof CompositionProps>) => {
 
  return (
    <div>
      <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#22c943",
      }}
    >

      <Animated animations={scaleHorizontalIn.concat(scaleHorizontalOut(105))} className="mt-8 w-full" absolute>
          <YoutubeSubsBox colorBg="bg-white"></YoutubeSubsBox>
      </Animated>

          
      <Animated animations={fadeIn(30).concat([
        Fade({start: 30, initial: 1, to: 1, duration: 30}),
        Fade({start: 100, initial: 1, to: 0, duration: 5})
      ])} className='w-full ml-96' absolute>
              { image === "" ?
                <Img src={staticFile("/images/img_aga.png")} className='flex ml-12 mt-8 h-32 w-fit rounded-full'/>
                :
                <Img src={image} className='flex ml-12 mt-8 h-32 w-fit '/>
              }
      </Animated>
       

      <Animated animations={[
        Fade({start: 0, initial: 0, to: 0, duration: 30}),
        Fade({start: 30, initial: 0, to: 1, duration: 15}),
        Move({start: 30, initialX: -20, x: 0, duration: 15}),
        Fade({start: 100, initial: 1, to: 0, duration: 5}),
        ]} className="mt-0 w-full ml-96 mb-4" absolute>
        <p className="text-3xl text-black ml-52 mr-32 leading-tight">{title}</p>
        <Animated animations={[
        Fade({start: 0, initial: 0, to: 0, duration: 40}),
        Fade({start: 40, initial: 0, to: 1, duration: 15}),
        Move({start: 40, initialX: -20, x: 0, duration: 15}),
        Fade({start: 100, initial: 1, to: 0, duration: 5})
        ]} className="mt-4" absolute>
          <p className="text-2xl text-black mr-40 ml-52">{desc}</p>
        </Animated>
      </Animated>

      <div className='flex w-full absolute'>
              <div className="flex grow"></div>
              <Animated className="flex bg-red-500 rounded-full px-8 py-6 w-52 shrink mr-64 mt-8" animations={fadeIn(30).concat([
              Fade({start: 30, initial: 1, to: 1, duration: 30}),
              Fade({start: 90, initial: 1, to: 0, duration: 5}),
              Scale({start: 75, initial: 1, by: 0.8, duration: 10}),
              Fade({start: 85, initial: 1, to: 0, duration: 5}),
            ])}>
                <p className="text-white text-2xl mx-auto">Subscribe</p>
              </Animated>
      </div>

      <Animated animations={fadeIn(30).concat([
        Fade({start: 0, initial: 0, to: 0, duration: 85}),
        Fade({start: 85, initial: 0, to: 1, duration: 5})
      ])} className='flex w-full' absolute>
              <div className="flex grow"></div>
              <Animated animations={fadeIn(30).concat([
                Scale({start: 85, initial: 0.8, by: 1, duration: 10}),
                Fade({start: 100, initial: 1, to: 0, duration: 5})
              ])} className="flex bg-gray-500 rounded-full px-8 py-6 w-52 shrink mr-64 mt-8">
                <p className="text-white text-2xl mx-auto">Subscribed</p>
              </Animated>
      </Animated>

    </AbsoluteFill>
    </div>
  );
};

export default YoutubeSubsLight