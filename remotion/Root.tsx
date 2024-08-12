import { Composition } from "remotion";
// import { Main } from "./MyComp/Main";
import {
  // COMP_NAME,
  defaultMyCompProps,
  // DURATION_IN_FRAMES,
  // VIDEO_FPS,
  // VIDEO_HEIGHT,
  // VIDEO_WIDTH,
  CompositionProps,
  COMP_NAME
} from "../types/constants";
import { NextLogo } from "./MyComp/NextLogo";
// import SampleComponent from "../remotion/OtherComp/SampleComponent";
import Main from "./MyComp/Main";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={defaultMyCompProps}
      /> */}
      <Composition
        id="NextLogo"
        component={NextLogo}
        durationInFrames={6}
        fps={2}
        width={140}
        height={140}
        defaultProps={{
          outProgress: 0,
        }}
      />
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={4}
        fps={2}
        width={720}
        height={1280}
        schema={CompositionProps}
        defaultProps={{
          title: defaultMyCompProps.title,
          suffix: defaultMyCompProps.suffix,
          prefix: defaultMyCompProps.prefix,
          duration: defaultMyCompProps.duration
        }}
      />
    </>
  );
};
