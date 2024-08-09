"use client";

import { Composition } from "remotion";
import SampleComponent from "../../components/SampleComponent";

export const RemotionRoot: React.FC = () => {
  return (
    <div className="  bg-red-500">
      <Composition
      id="MyComposition"
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1920}
      component={SampleComponent}
    />
    </div>
  );
};

export default RemotionRoot;