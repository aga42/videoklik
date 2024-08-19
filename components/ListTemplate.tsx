
import ItemTemplate from "./ItemTemplate";
import Main from "../remotion/MyComp/Main";
import { defaultMyCompProps, defaultSearchbarProps } from "../types/constants";
import Searchbar from "../remotion/MyComp/Searchbar";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import IOSNotif from "../remotion/MyComp/IOSNotif";
import InstagramAccount from "../remotion/MyComp/InstagramAccount";

const ListTemplate = () => {

  const data = [
    {
      title: "Value Counter",
      component: Main,
      inputProps: {
        title: defaultMyCompProps.title,
        prefix: defaultMyCompProps.prefix,
        suffix: defaultMyCompProps.suffix,
        duration: defaultMyCompProps.duration
      },
      link: "/counter"
    },
    {
      title: "Search Bar",
      component: Searchbar,
      inputProps: {
        title: defaultSearchbarProps.title
      },
      link: "/search"
    },
    {
      title: "Notification iMessage",
      component: IOSNotif,
      inputProps: {
        title: "Videoklik",
        desc: "Get special discount only for you"
      },
      link: "/"
    },
    {
      title: "IG Snippet",
      component: InstagramAccount,
      inputProps: {
        title: "@Petshop.official"
      },
      link: "/"
    }
  ]

  return(
    <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
        <motion.div variants={fadeIn('up', 'tween', 0.1, 0.5)}>
          <ul className="md:mx-96 lg:mx-96 mx-8 mt-10 sm:mt-32 mb-20 md:mb-40 items-center md:grid md:grid-cols-2 md:gap-8">
              {data.map((item: any, idx) =>
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
        
    </motion.div>
    
)

}

export default ListTemplate