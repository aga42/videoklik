import { Composition } from "remotion";
import {
  defaultMyCompProps,
  CompositionProps,
  COMP_NAME,
  defaultSearchbarProps,
  defaultTweetProps
} from "../types/constants";
import { NextLogo } from "./MyComp/NextLogo";
import Main from "./MyComp/Main";
import Searchbar from "./MyComp/Searchbar";
import IOSNotif from "./MyComp/IOSNotif";
import InstagramAccount from "./MyComp/InstagramAccount";
import TweetPanel from "./MyComp/TweetPanel";
import LogoAnimation from "./MyComp/LogoAnimation";
import TiktokComment from "./MyComp/TiktokComment";
import YoutubeSubs from "./MyComp/YoutubeSubs";

export const RemotionRoot: React.FC = () => {

  return (
    <>
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
          duration: defaultMyCompProps.duration,
          desc: defaultMyCompProps.desc,
          image: defaultMyCompProps.image
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
          suffix: defaultMyCompProps.suffix,
          prefix: defaultMyCompProps.prefix,
          duration: defaultMyCompProps.duration,
          desc: defaultMyCompProps.desc,
          image: defaultMyCompProps.image
        }}
      />
      <Composition
        id="iOSNotif"
        component={IOSNotif}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          title: defaultSearchbarProps.title,
          suffix: defaultMyCompProps.suffix,
          prefix: defaultMyCompProps.prefix,
          duration: defaultMyCompProps.duration,
          desc: defaultMyCompProps.desc,
          image: defaultMyCompProps.image
        }}
      />
      <Composition
        id="InstagramAccount"
        component={InstagramAccount}
        durationInFrames={90}
        fps={30}
        width={1280}
        height={720}
        schema={CompositionProps}
        defaultProps={{
          title: defaultSearchbarProps.title,
          suffix: defaultMyCompProps.suffix,
          prefix: defaultMyCompProps.prefix,
          duration: defaultMyCompProps.duration,
          desc: defaultMyCompProps.desc,
          image: defaultMyCompProps.image
        }}
      />
      <Composition
        id="TweetPanel"
        component={TweetPanel}
        durationInFrames={90}
        fps={30}
        width={1280}
        height={720}
        schema={CompositionProps}
        defaultProps={{
          title: defaultTweetProps.title,
          suffix: defaultTweetProps.suffix,
          prefix: defaultTweetProps.prefix,
          duration: defaultTweetProps.duration,
          desc: defaultTweetProps.desc,
          image: defaultTweetProps.image
        }}
      />
      <Composition
        id="LogoAnimation"
        component={LogoAnimation}
        durationInFrames={90}
        fps={30}
        width={1280}
        height={720}
        schema={CompositionProps}
        defaultProps={{
          title: "My Company",
          suffix: defaultTweetProps.suffix,
          prefix: defaultTweetProps.prefix,
          duration: defaultTweetProps.duration,
          desc: "Best culture from future",
          image: defaultTweetProps.image
        }}
      />
      <Composition
        id="TiktokComment"
        component={TiktokComment}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
        schema={CompositionProps}
        defaultProps={{
          title: "Alexander Gophler",
          suffix: defaultTweetProps.suffix,
          prefix: defaultTweetProps.prefix,
          duration: defaultTweetProps.duration,
          desc: "Why people always want to own thing that they cannot afford",
          image: defaultTweetProps.image
        }}
      />
      <Composition
        id="YoutubeSubs"
        component={YoutubeSubs}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
        schema={CompositionProps}
        defaultProps={{
          title: "Makan Jajan Channel",
          suffix: defaultTweetProps.suffix,
          prefix: defaultTweetProps.prefix,
          duration: defaultTweetProps.duration,
          desc: "11.8k subscribers",
          image: defaultTweetProps.image
        }}
      />
    </>
  );
};
