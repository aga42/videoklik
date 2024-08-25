"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import {
  CompositionProps
} from "../../../types/constants";
import { z } from "zod";
import Header from "../../../components/Header";
import { RenderControlsChat } from "../../../components/rendercontrols/RenderControlsChat";
import ChatAnimation from "../../../remotion/MyComp/ChatAnimation";

const Chatpage: NextPage = () => {
  
  const [text, setText] = useState<string>("Oi ayo makan siang dimana");
  const [prefix, setPrefix] = useState<string>("yg deket - deket ajalah panas bgt");
  const [suffix, setSuffix] = useState<string>("atau ojol juga boleh cek cek diskonan");
  const [desc, setDesc] = useState<string>("ywdh tar gw info");

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
      prefix: prefix,
      suffix: suffix,
      duration: "",
      desc: desc,
      image: ""
    };
  }, [text, prefix, suffix, desc]);

  return (
    <main className="flex min-h-screen flex-col bg-white">
        <Header actionLabel="GET DEALS NOW"></Header>
        <div className="sm:grid sm:grid-cols-2 bg-gray-50 sm:h-screen">
          <div className="sm:mx-44 sm:mb-16 pt-8 sm:pt-16">
            <Player
                  className=" mx-auto sm:mx-0 sm:left-1/2"
                  component={ChatAnimation}
                  inputProps={inputProps}
                  durationInFrames={150}
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
              <RenderControlsChat
                msg1={text}
                setMsg1={setText}
                msg2={prefix}
                setMsg2={setPrefix}
                msg3={suffix}
                setMsg3={setSuffix}
                msg4={desc}
                setMsg4={setDesc}
                inputProps={inputProps}
                compositionName="ChatAnimation"
              ></RenderControlsChat>
            </div>
            
          </div>
        </div>
    </main>
  );
};

export default Chatpage;
