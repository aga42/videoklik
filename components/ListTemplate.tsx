
import ItemTemplate from "./ItemTemplate";
import Main from "../remotion/MyComp/Main";
import { defaultMyCompProps, defaultSearchbarProps } from "../types/constants";
import Searchbar from "../remotion/MyComp/Searchbar";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import IOSNotif from "../remotion/MyComp/IOSNotif";
import InstagramAccount from "../remotion/MyComp/InstagramAccount";
import TweetPanel from "../remotion/MyComp/TweetPanel";
import LogoAnimation from "../remotion/MyComp/LogoAnimation";
import { ListTemplateProps } from "../types";
import TemplatePagination from "./TemplatePagination";
import { useState } from "react";

const ListTemplate = ({ isLandingPage }: ListTemplateProps) => {

  var data = [
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
    }
  ]

  const size = 4

  const [page, setPage] = useState(1)
      
  const showPagination = () => {
    if(!isLandingPage){
      return <TemplatePagination page={data.length / size} setPage={setPage} choose={page}></TemplatePagination>
    }
  }

  function getData(page: number): any{

    var startIndex = page === 1 ? 0 
    : (page - 1) * size

    var endIndex = page === 1 ? (page * size) 
    : (page * size)

    var dataPage = data.slice(startIndex, endIndex)

    console.log(`${startIndex} dan ${endIndex}`)

    return dataPage
    
  }

  return(
    <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
        <motion.div variants={fadeIn('up', 'tween', 0.1, 0.5)}>
          <ul className="md:mx-96 lg:mx-96 mx-8 mt-10 sm:mt-32 mb-4 items-center md:grid md:grid-cols-2 md:gap-8">
              {getData(page).map((item: any, idx: any) =>
                  {
                      return <ItemTemplate
                                      key={idx}
                                      title={item.title}
                                      component={item.component}
                                      inputProps={item.inputProps}
                                      link={item.link}
                                      /> 
                  }
                  )}
          </ul>
        </motion.div>
        
        {
          showPagination()
        }
        
    </motion.div>
    
)

}

export default ListTemplate