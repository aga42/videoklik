"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import {
  CompositionSearchbarProps,
  defaultSearchbarProps
} from "../../types/constants";
import { z } from "zod";
import Header from "../../components/Header";
import Searchbar from "../../remotion/MyComp/Searchbar";
import { RenderControlsSearchbar } from "../../components/rendercontrols/RenderControlsSearchbar";

const Searchbarpage: NextPage = () => {
  
  const [text, setText] = useState<string>(defaultSearchbarProps.title);

  const inputProps: z.infer<typeof CompositionSearchbarProps> = useMemo(() => {
    return {
      title: text
    };
  }, [text]);

  const pilihanIndexBahasa = [0, 1]
  const [indexBahasa, setIndexBahasa] = useState(pilihanIndexBahasa[0])

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
                  component={Searchbar}
                  inputProps={inputProps}
                  durationInFrames={ 120}
                  fps={30}
                  compositionHeight={720}
                  compositionWidth={1280}
                  style={{
                    // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
                    // but not over inline styles
                    width: "100%",
                  }}
                  controls
                  autoPlay
                  // loop
                />
          </div>
          
          <div className="mt-8 sm:mt-16 sm:mb-0 mb-8">
            <div className="sm:w-1/3 max-w-max sm:max-w-full mx-auto sm:mx-0 sm:left-1/2 sm:ml-44">
              <RenderControlsSearchbar
                text={text}
                setText={setText}
                inputProps={inputProps}
                compositionName="Searchbar"
              ></RenderControlsSearchbar>
            </div>
            
          </div>
        </div>
    </main>
  );
};

export default Searchbarpage;
