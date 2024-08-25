"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import {
  CompositionProps
} from "../../../types/constants";
import { z } from "zod";
import Header from "../../../components/Header";
import IOSNotif from "../../../remotion/MyComp/IOSNotif";
import { RenderControlsiOSNotif } from "../../../components/rendercontrols/RenderControlsiOSNotif";

const IOSNotifpage: NextPage = () => {
  
  const [text, setText] = useState<string>("Videoklik");
  const [desc, setDesc] = useState<string>("Get special discount only for you");

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
      prefix: "",
      suffix: "",
      duration: "",
      desc: desc,
      image: ""
    };
  }, [text, desc]);

  return (
    <main className="flex min-h-screen flex-col bg-white">
        <Header actionLabel="GET DEALS NOW"></Header>
        <div className="sm:grid sm:grid-cols-2 bg-gray-50 sm:h-screen">
          <div className="sm:mx-44 sm:mb-16 pt-8 sm:pt-16">
            <Player
                  className=" mx-auto sm:mx-0 sm:left-1/2"
                  component={IOSNotif}
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
              <RenderControlsiOSNotif
                text={text}
                setText={setText}
                desc={desc}
                setDesc={setDesc}
                inputProps={inputProps}
                compositionName="iOSNotif"
              ></RenderControlsiOSNotif>
            </div>
            
          </div>
        </div>
    </main>
  );
};

export default IOSNotifpage;
