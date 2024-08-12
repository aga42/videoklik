import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  title: z.string(),
  prefix: z.string(),
  suffix: z.string(),
  duration: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "1000",
  prefix: "Rp",
  suffix: "",
  duration: "4"
};

export const DURATION_IN_FRAMES = 4;
export const VIDEO_WIDTH = 1280;
export const VIDEO_HEIGHT = 720;
export const VIDEO_FPS = 2;


// export const SampleCompositionProps = z.object({
//   value: z.number(),
// });

// export const sampleCompProps: z.infer<typeof SampleCompositionProps> = {
//   value: 1000,
// };

// import { z } from "zod";
// export const COMP_NAME = "MyComp";

// export const CompositionProps = z.object({
//   title: z.string(),
// });

// export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
//   title: "Next.js and Remotion",
// };

// export const DURATION_IN_FRAMES = 6;
// export const VIDEO_WIDTH = 1280;
// export const VIDEO_HEIGHT = 720;
// export const VIDEO_FPS = 2;
