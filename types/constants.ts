import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  title: z.string(),
  prefix: z.string(),
  suffix: z.string(),
  duration: z.string(),
  desc: z.string(),
  image: z.string()
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "2000",
  prefix: "Rp",
  suffix: "",
  duration: "4",
  desc: "",
  image: ""
};

export const DURATION_IN_FRAMES = 1;
export const VIDEO_WIDTH = 1280;
export const VIDEO_HEIGHT = 720;
export const VIDEO_FPS = 1;

export const CompositionSearchbarProps = z.object({
  title: z.string()
});

export const defaultSearchbarProps: z.infer<typeof CompositionSearchbarProps> = {
  title: "Vermak Levis terdekat"
};

export const defaultTweetProps: z.infer<typeof CompositionProps> = {
  title: "Fullname",
  prefix: "@username",
  suffix: "",
  duration: "4",
  desc: "This is my first tweet",
  image: ""
};
