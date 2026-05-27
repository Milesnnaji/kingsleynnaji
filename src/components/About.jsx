import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full xs:w-[230px] sm:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-8 min-h-[220px] sm:min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        <h3 className="text-white text-[17px] sm:text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
      >
        I'm Kingsley Nnaji, a full-stack software developer specializing in Next.js, React, TypeScript,
        Flutter, and Node.js. I build scalable web applications, SaaS platforms, and AI-powered automation
        tools — including OpenClaw, a multi-step autonomous AI agent framework. My expertise spans
        REST API development, payment integrations (Stripe, Paystack), Firebase, MongoDB, and cloud
        deployment on AWS and Vercel. I deliver production-ready software that is fast, secure, and user-focused.
        Let's build something great together!
      </motion.p>

      <div className="mt-12 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
