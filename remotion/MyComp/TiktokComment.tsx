"use client";

import { AbsoluteFill, Img, staticFile } from "remotion";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";
import { Animated, Fade, Move} from "remotion-animated";
import TiktokCommentBox from "../../components/TiktokCommentBox";
import { fadeIn, scaleHorizontalIn, scaleHorizontalOut } from "../../types/animation";
 
export const TiktokComment = ({ title, desc, image }: z.infer<typeof CompositionProps>) => {
 
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
          <TiktokCommentBox></TiktokCommentBox>
      </Animated>

          
      <Animated animations={fadeIn(30).concat([
        Fade({start: 30, initial: 1, to: 1, duration: 30}),
        Fade({start: 90, initial: 1, to: 0, duration: 15})
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
        Fade({start: 90, initial: 1, to: 0, duration: 15})
        ]} className="mt-0 w-full ml-96 mb-4" absolute>
        <p className="text-3xl text-white ml-52 mr-32 leading-tight">{title}</p>
        <Animated animations={[
        Fade({start: 0, initial: 0, to: 0, duration: 40}),
        Fade({start: 40, initial: 0, to: 1, duration: 15}),
        Move({start: 40, initialX: -20, x: 0, duration: 15}),
        Fade({start: 90, initial: 1, to: 0, duration: 15})
        ]} className="mt-4" absolute>
          <p className="text-2xl text-white mr-40 ml-52">{desc}</p>
        </Animated>
      </Animated>

    </AbsoluteFill>
    </div>
  );
};

export default TiktokComment