"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import {
  CompositionProps,
  defaultMyCompProps
} from "../types/constants";
import { z } from "zod";
import { RenderControls } from "../components/RenderControls";
import SampleComponent from "../components/SampleComponent";
import Header from "../components/Header";

const Home: NextPage = () => {
  const [text, setText] = useState<string>(defaultMyCompProps.title);

  const [prefix, setPrefix] = useState<string>(defaultMyCompProps.prefix);
  const [suffix, setSuffix] = useState<string>(defaultMyCompProps.suffix);
  const [duration, setDuration] = useState<string>(defaultMyCompProps.duration);


  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
      prefix: prefix,
      suffix: suffix,
      duration: duration
    };
  }, [text, prefix, suffix, duration]);

  const pilihanIndexBahasa = [0, 1]
  const [indexBahasa, setIndexBahasa] = useState(pilihanIndexBahasa[0])
  const [firstLoad, setFirstLoad] = useState(true)

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header index={indexBahasa} actionIndex={(index: number)=>{
        setIndexBahasa(index)
        setFirstLoad(true)
      }}/>
        <div className="grid grid-cols-2 mt-16 mx-44">
          <div className="">
            <Player
            className=" mx-auto"
                  component={SampleComponent}
                  inputProps={inputProps}
                  durationInFrames={ duration == "" ? 120 : Number(duration)*30}
                  fps={30}
                  compositionHeight={1280}
                  compositionWidth={720}
                  style={{
                    // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
                    // but not over inline styles
                    width: "50%",
                  }}
                  controls
                  autoPlay
                  // loop
                />
          </div>
          
          <div className=" w-1/2 mx-auto">
            <RenderControls
              text={text}
              setText={setText}
              prefix={prefix}
              setPrefix={setPrefix}
              suffix={suffix}
              setSuffix={setSuffix}
              duration={duration}
              setDuration={setDuration}
              inputProps={inputProps}
            ></RenderControls>
          </div>
        </div>
    </main>
  );
};

export default Home;
