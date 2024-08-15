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
// import SampleComponent from "../remotion/OtherComp/SampleComponent";
import Header from "../components/Header";
import Main from "../remotion/MyComp/Main";
// import { SampleComposition } from "../components/SampleComposition";

const Home: NextPage = () => {
  // const [text, setText] = useState<string>(defaultMyCompProps.title);

  // const [prefix, setPrefix] = useState<string>(defaultMyCompProps.prefix);
  // const [suffix, setSuffix] = useState<string>(defaultMyCompProps.suffix);
  // const [duration, setDuration] = useState<string>(defaultMyCompProps.duration);
  
  const [text, setText] = useState<string>(defaultMyCompProps.title);

  const [prefix, setPrefix] = useState<string>("Rp");
  const [suffix, setSuffix] = useState<string>("");
  const [duration, setDuration] = useState<string>("4");

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
  // const [firstLoad, setFirstLoad] = useState(true)

  return (
    <main className="flex min-h-screen flex-col bg-white">
        <Header index={indexBahasa} actionIndex={(index: number)=>{
          setIndexBahasa(index)
          // setFirstLoad(true)
        }}/>
        <div className="sm:grid sm:grid-cols-2 bg-gray-50 sm:h-screen">
          <div className="sm:mx-44 sm:mb-16 pt-8 sm:pt-16">
            <Player
                  className=" mx-auto sm:mx-0 sm:left-1/2"
                  component={Main}
                  inputProps={inputProps}
                  durationInFrames={ duration == "" || duration == "0" ? 30 : Number(duration)*30}
                  fps={30}
                  compositionHeight={1280}
                  compositionWidth={720}
                  style={{
                    // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
                    // but not over inline styles
                    width: "60%",
                  }}
                  controls
                  autoPlay
                  // loop
                />
          </div>
          
          <div className="mt-8 sm:mt-16 sm:mb-0 mb-8">
            <div className="sm:w-1/3 max-w-max sm:max-w-full mx-auto sm:mx-0 sm:left-1/2 sm:ml-44">
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
        </div>
    </main>
  );
};

export default Home;
