import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ name, icon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.05, 0.4)}
    className="flex flex-col items-center gap-2 group"
  >
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-tertiary rounded-2xl flex items-center justify-center p-3 shadow-card group-hover:scale-110 transition-transform duration-200">
      <img src={icon} alt={name} className="w-full h-full object-contain" loading="lazy" />
    </div>
    <p className="text-secondary text-[11px] sm:text-[13px] text-center font-medium">{name}</p>
  </motion.div>
);

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8">
      {technologies.map((technology, index) => (
        <TechCard key={technology.name} index={index} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
