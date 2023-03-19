import { motion } from "framer-motion"
import { Tooltip } from "react-tooltip";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, im <span className="text-[#915eff]">Hossein</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Im Front'End Developer
          </p>
        </div>

      </div>

      <ComputersCanvas />

      <div className="absolute bottom-10 md:bottom-2 w-full flex justify-center items-center">
        <a href="#about">

          <div data-tooltip-id="scroll-to-bottom" data-tooltip-content="scroll to bottom!" className="w-7 h-14 rounded-full border-secondary border-[3px] flex justify-center items-start">
            <motion.div
              animate={{ y: [1, 35, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              className="w-3 h-3 bg-secondary rounded-full"
            ></motion.div>
          </div>
        </a>

      </div>
      <Tooltip id="scroll-to-bottom" />
    </section>
  )
}

export default Hero