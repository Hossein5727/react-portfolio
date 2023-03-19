import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className="bg-black-100 p-10 rounded-3xl xs:w-[320px] w-full">
      <h3 className="text-white font-black text-[48px]">"</h3>

      <div className="mt-1">
        <p className="text-white tracking-wider text-lg">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center">

          <div className="flex flex-1 flex-col gap-1">
            <p className="text-white font-medium text-[16px]"><span className="blue-text-gradient">@</span> {name}</p>
            <p className="text-xs text-secondary">{designation} of {company}</p>
          </div>

          <div className="w-8 h-8 flex justify-center items-center">
            <img
              className="w-full h-full object-cover rounded-full"
              src={image}
              alt={name}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-16 flex flex-wrap gap-7`}>
        {testimonials.map((test, index) => (
          <FeedbackCard
            key={test.name}
            index={index}
            {...test}
          />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks, "")