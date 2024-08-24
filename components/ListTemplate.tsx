
import ItemTemplate from "./ItemTemplate";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { ListTemplateProps } from "../types";
import TemplatePagination from "./TemplatePagination";
import { useState } from "react";
import { dataTemplate } from "../types/template_data";

const ListTemplate = ({ isLandingPage }: ListTemplateProps) => {

  var data = dataTemplate

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
                                      durationInFrames={item.durationInFrames}
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