
import ItemTemplate from "./ItemTemplate";
import Main from "../remotion/MyComp/Main";
import { CompositionSearchbarProps, defaultMyCompProps } from "../types/constants";
import Searchbar from "../remotion/MyComp/Searchbar";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

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
      inputProps: CompositionSearchbarProps,
      link: "/search"
    }
  ]

  return(
    <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
        <motion.div variants={fadeIn('up', 'tween', 0.2, 0.5)}>
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