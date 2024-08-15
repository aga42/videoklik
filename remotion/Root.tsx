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
  COMP_NAME,
  defaultSearchbarProps
} from "../types/constants";
import { NextLogo } from "./MyComp/NextLogo";
import Main from "./MyComp/Main";
import Searchbar from "./MyComp/Searchbar";

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
        durationInFrames={1}
        fps={1}
        width={140}
        height={140}
        defaultProps={{
          outProgress: 0,
        }}
      />
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={120}
        fps={30}
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
      <Composition
        id="Searchbar"
        component={Searchbar}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          title: defaultSearchbarProps.title,
        }}
      />
    </>
  );
};
