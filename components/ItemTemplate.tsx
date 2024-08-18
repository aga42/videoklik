"use client"

import { Player } from "@remotion/player"
import { ItemTemplateProps } from "../types"
import { useRouter } from "next/navigation"

const ItemTemplate = ({ key, title, component, inputProps, link }: ItemTemplateProps) => {

    const router = useRouter()

    return(
        <li key={key}>
        <div
        className="block rounded-sm bg-white text-surface shadow-secondary-1">
        <Player
                  className=" mx-auto"
                  component={component}
                  inputProps={inputProps}
                  durationInFrames={120}
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
                  allowFullscreen = {false}
                  showVolumeControls = {false}
                  // loop
                />
        </div>
        <div className=" shadow-md border border-gray-100 hover:border-fuchsia-200 bg-gray-100 hover:bg-fuchsia-200 rounded-b-xl text-gray-600 sm:text-xl text-base py-4 pl-4 mb-8">
          <a href={link} className="flex w-full">{title}</a>
        </div>
        </li>
    )

}

export default ItemTemplate