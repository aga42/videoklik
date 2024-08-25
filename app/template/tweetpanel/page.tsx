"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import {
  CompositionProps
} from "../../../types/constants";
import { z } from "zod";
import Header from "../../../components/Header";
import { RenderControlsTweetPanel } from "../../../components/rendercontrols/RenderControlsTweetPanel";
import TweetPanel from "../../../remotion/MyComp/TweetPanel";

const TweetPanelpage: NextPage = () => {
  
  const [text, setText] = useState<string>("Videoklik");
  const [prefix, setPrefix] = useState<string>("@videoklik");
  const [desc, setDesc] = useState<string>("Get special discount only for you");
  const [image, setImage] = useState<string>("");

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
      prefix: prefix,
      suffix: "",
      duration: "",
      desc: desc,
      image: image
    };
  }, [text, prefix, desc, image]);

  return (
    <main className="flex min-h-screen flex-col bg-white">
        <Header actionLabel="GET DEALS NOW"></Header>
        <div className="sm:grid sm:grid-cols-2 bg-gray-50 sm:h-screen">
          <div className="sm:mx-44 sm:mb-16 pt-8 sm:pt-16">
            <Player
                  className=" mx-auto sm:mx-0 sm:left-1/2"
                  component={TweetPanel}
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
          
          <div className="mt-8 sm:mt-16 sm:mb-0 mb-16">
            <div className="sm:w-1/3 max-w-max sm:max-w-full mx-auto sm:mx-0 sm:left-1/2 sm:ml-44">
              <RenderControlsTweetPanel
                text={text}
                setText={setText}
                username={prefix}
                setUsername={setPrefix}
                desc={desc}
                setDesc={setDesc}
                image={image}
                setImage={setImage}
                inputProps={inputProps}
                compositionName="TweetPanel"
              ></RenderControlsTweetPanel>
            </div>
            
          </div>
        </div>
    </main>
  );
};

export default TweetPanelpage;
