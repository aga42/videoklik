"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Hero = () => {

    const labelQuestion = "Video element generator "
    const labelQuestion2 = " at your klik"
    // const labelVideoklik = " will help you to dodge create any video element from scratch and save your time"
    const labelVideoklik = " create any video element from scratch and waste your time"
    const labelJawaban = "Try for FREE"

    return (
        
        <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <section className="mt-24 md:mt-48 lg:mt-48 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
                <motion.div className="text-center space-y-4" variants={fadeIn('up', 'tween', 0.1, 0.5)}>
                    <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                        {labelQuestion}
                         <span className="text-fuchsia-600">{labelQuestion2}</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed md:text-base sm:text-sm">
                    No more{labelVideoklik}
                    </p>
                </motion.div>
                <motion.div className="flex items-center justify-center mt-6" variants={fadeIn('up', 'tween', 0.1, 0.5)}>
                    <button
                        className="flex items-center whitespace-nowrap rounded bg-fuchsia-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-fuchsia-700 hover:shadow-primary-2 focus:bg-fuchsia-700 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-fuchsia-700 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        type="button"
                        aria-expanded="false"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        onClick={()=> {
                            
                        } }>
                        {labelJawaban}
                    </button>
                </motion.div>
            </section>
        </motion.div>
    )

}

export default Hero