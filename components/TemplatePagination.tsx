"use client"

import { TemplatePaginationProps } from "../types"
import { useState } from "react"


const TemplatePagination = ({page, setPage, choose, scrollToTop}: TemplatePaginationProps) => {

  const colorChoose = "frelative z-10 inline-flex items-center bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500"
  const colorDefault = "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"

  const [selected, setSelected] = useState(colorChoose)
  

  const numberPage = () => {

    var indexPage = []

    for (let i = 1; i < (page + 1); i++) {
      indexPage.push(<button type="submit" onClick={()=>{
        setPage(i)
        setSelected(colorChoose)
        scrollToTop()
      }} className={i === choose ? selected : colorDefault}>{i}</button>)
    }

    return indexPage
    
  }

  return (
    <div className="flex w-full mb-8">
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm mx-auto" aria-label="Pagination">
            {(numberPage())}
          </nav>
    </div>
  )

}

export default TemplatePagination