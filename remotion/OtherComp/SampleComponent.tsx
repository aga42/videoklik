// "use client";

// import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
// import { CompositionProps } from "../../types/constants";
// import { z } from "zod";
 
// export const SampleComponent = ({ title, prefix, suffix }: z.infer<typeof CompositionProps>) => {
//   const frame = useCurrentFrame();
//   const { durationInFrames } = useVideoConfig();
//   const destinateValue = Number(title)
//   const result = Math.round(((frame / (durationInFrames - 31)) * destinateValue))

 
//   return (
//     <div>
//       <AbsoluteFill
//       style={{
//         justifyContent: "center",
//         alignItems: "center",
//         fontSize: 100,
//         backgroundColor: "#22c943",
//       }}
//     >
//     {/* <Audio src={staticFile("moneyrise.mp3")} /> */}
//       <b>{prefix} { frame >= (durationInFrames-31) ? destinateValue.toLocaleString('id-ID') : result.toLocaleString('id-ID')} {suffix}</b> 
//     </AbsoluteFill>
//     </div>
//   );
// };

// export default SampleComponent