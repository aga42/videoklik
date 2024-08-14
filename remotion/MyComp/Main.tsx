// import { z } from "zod";
// import {
//   AbsoluteFill,
//   Sequence,
//   spring,
//   useCurrentFrame,
//   useVideoConfig,
// } from "remotion";
// import { CompositionProps } from "../../types/constants";
// import { NextLogo } from "./NextLogo";
// import { loadFont, fontFamily } from "@remotion/google-fonts/Inter";
// import React from "react";
// import { Rings } from "./Rings";
// import { TextFade } from "./TextFade";

// loadFont();

// export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();

//   const transitionStart = 2 * fps;
//   const transitionDuration = 1 * fps;

//   const logoOut = spring({
//     fps,
//     frame,
//     config: {
//       damping: 200,
//     },
//     durationInFrames: transitionDuration,
//     delay: transitionStart,
//   });

//   return (
//     <AbsoluteFill className="bg-white">
//       <Sequence durationInFrames={transitionStart + transitionDuration}>
//         <Rings outProgress={logoOut}></Rings>
//         <AbsoluteFill className="justify-center items-center">
//           <NextLogo outProgress={logoOut}></NextLogo>
//         </AbsoluteFill>
//       </Sequence>
//       <Sequence from={transitionStart + transitionDuration / 2}>
//         <TextFade>
//           <h1
//             className="text-[70px] font-bold"
//             style={{
//               fontFamily,
//             }}
//           >
//             {title}
//           </h1>
//         </TextFade>
//       </Sequence>
//     </AbsoluteFill>
//   );
// };

// export default Main


"use client";

import { AbsoluteFill, useCurrentFrame, useVideoConfig, Audio, staticFile } from "remotion";
import { CompositionProps } from "../../types/constants";
import { z } from "zod";
 
export const Main = ({ title, prefix, suffix }: z.infer<typeof CompositionProps>) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const destinateValue = Number(title)
  const result = Math.round(((frame / (durationInFrames - 31)) * destinateValue))

 
  return (
    <div>
      <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        backgroundColor: "#22c943",
      }}
    >
    <Audio src={staticFile("moneyrise.mp3")} />
      <p className=" text-white"><b>{prefix} { frame >= (durationInFrames-31) ? destinateValue.toLocaleString('id-ID') : result.toLocaleString('id-ID')} {suffix}</b></p> 
    </AbsoluteFill>
    </div>
  );
};

export default Main