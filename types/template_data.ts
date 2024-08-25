import Main from "../remotion/MyComp/Main";
import Searchbar from "../remotion/MyComp/Searchbar";
import IOSNotif from "../remotion/MyComp/IOSNotif";
import { InstagramSnippet } from "../remotion/MyComp/InstagramSnippet";
import LogoAnimation from "../remotion/MyComp/LogoAnimation";
import TweetPanel from "../remotion/MyComp/TweetPanel";
import TiktokComment from "../remotion/MyComp/TiktokComment";
import YoutubeSubs from "../remotion/MyComp/YoutubeSubs";
import { defaultMyCompProps, defaultSearchbarProps } from "./constants";
import LogoAnimation2 from "../remotion/MyComp/LogoAnimation2";
import ChatAnimation from "../remotion/MyComp/ChatAnimation";
import InstagramSnippetLight from "../remotion/MyComp/InstagramSnippetLight";
import YoutubeSubsLight from "../remotion/MyComp/YoutubeSubsLight";

export const dataTemplate = [
  {
    title: "Value Counter",
    component: Main,
    inputProps: {
      title: defaultMyCompProps.title,
      prefix: defaultMyCompProps.prefix,
      suffix: defaultMyCompProps.suffix,
      duration: defaultMyCompProps.duration
    },
    link: "/template/counter",
    durationInFrames: 120
  },
  {
    title: "Search Bar",
    component: Searchbar,
    inputProps: {
      title: defaultSearchbarProps.title
    },
    link: "/template/search",
    durationInFrames: 120
  },
  {
    title: "iMessage Notification",
    component: IOSNotif,
    inputProps: {
      title: "Videoklik",
      desc: "Get special discount only for you",
      image: ""
    },
    link: "/template/iosnotif",
    durationInFrames: 120
  },
  {
    title: "IG Snippet",
    component: InstagramSnippet,
    inputProps: {
      title: "@Petshop.official"
    },
    link: "/template/igsnippet",
    durationInFrames: 120
  },
  {
    title: "Logo Animation",
    component: LogoAnimation,
    inputProps: {
      title: "My Company",
      desc: "Best Culture From Future",
      image: "/images/logov.png"
    },
    link: "/template/logoanimation",
    durationInFrames: 120
  },
  {
    title: "Tweet Card",
    component: TweetPanel,
    inputProps: {
      title: "Aga Ariesta",
      prefix: "@aga_ariesta",
      desc: "This is my first tweet. Hope someone can bring me a beautiful day.",
      image: ""
    },
    link: "/template/tweetpanel",
    durationInFrames: 120
  },
  {
    title: "Tiktok Comment",
    component: TiktokComment,
    inputProps: {
      title: "Keanu Reeves",
      desc: "I like the shoes that I buy before in England 1999",
      image: ""
    },
    link: "/template/tiktokcomment",
    durationInFrames: 120
  },
  {
    title: "Youtube Subscribe",
    component: YoutubeSubs,
    inputProps: {
      title: "Makan Jajan Channel",
      desc: "11.8k subscribers",
      image: ""
    },
    link: "/template/youtubesubs",
    durationInFrames: 120
  },
  {
    title: "Logo Animation 2",
    component: LogoAnimation2,
    inputProps: {
      title: "My Company",
      image: "/images/logov.png"
    },
    link: "/template/logoanimation2",
    durationInFrames: 120
  },
  {
    title: "Chat Animation",
    component: ChatAnimation,
    inputProps: {
      title: "Beli makanan yuk, apa ya yang enak",
      suffix: "Kopi aja gak sih pengen yang seger - seger",
      prefix: "ywdh sekalian aja coba cek grabfood",
      desc: "sip sip wait"
    },
    link: "/template/chat",
    durationInFrames: 150
  },
  {
    title: "IG Snippet White",
    component: InstagramSnippetLight,
    inputProps: {
      title: "@Petshop.official"
    },
    link: "/template/igsnippetlight",
    durationInFrames: 120
  },
  {
    title: "Youtube Subscribe White",
    component: YoutubeSubsLight,
    inputProps: {
      title: "Makan Jajan Channel",
      desc: "11.8k subscribers",
      image: ""
    },
    link: "/template/youtubesubslight",
    durationInFrames: 120
  }
]