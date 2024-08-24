import Main from "../remotion/MyComp/Main";
import Searchbar from "../remotion/MyComp/Searchbar";
import IOSNotif from "../remotion/MyComp/IOSNotif";
import InstagramAccount from "../remotion/MyComp/InstagramAccount";
import LogoAnimation from "../remotion/MyComp/LogoAnimation";
import TweetPanel from "../remotion/MyComp/TweetPanel";
import TiktokComment from "../remotion/MyComp/TiktokComment";
import YoutubeSubs from "../remotion/MyComp/YoutubeSubs";
import { defaultMyCompProps, defaultSearchbarProps } from "./constants";

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
    link: "/template/counter"
  },
  {
    title: "Search Bar",
    component: Searchbar,
    inputProps: {
      title: defaultSearchbarProps.title
    },
    link: "/template/search"
  },
  {
    title: "iMessage Notification",
    component: IOSNotif,
    inputProps: {
      title: "Videoklik",
      desc: "Get special discount only for you",
      image: ""
    },
    link: "/template/iosnotif"
  },
  {
    title: "IG Snippet",
    component: InstagramAccount,
    inputProps: {
      title: "@Petshop.official"
    },
    link: "/template/igsnippet"
  },
  {
    title: "Logo Animation",
    component: LogoAnimation,
    inputProps: {
      title: "My Company",
      desc: "Best Culture From Future",
      image: "/images/logov.png"
    },
    link: "/template/logoanimation"
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
    link: "/template/tweetpanel"
  },
  {
    title: "Tiktok Comment",
    component: TiktokComment,
    inputProps: {
      title: "Keanu Reeves",
      desc: "I like the shoes that I buy before in England 1999",
      image: ""
    },
    link: "/template/tiktokcomment"
  },
  {
    title: "Youtube Subscribe",
    component: YoutubeSubs,
    inputProps: {
      title: "Makan Jajan Channel",
      desc: "11.8k subscribers",
      image: ""
    },
    link: "/template/youtubesubs"
  }
]