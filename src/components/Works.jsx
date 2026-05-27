import { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ImageSlideshow = ({ images, name, onClose }) => {
  const [current, setCurrent] = useState(0);
  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[current]}
          alt={`${name} ${current + 1}`}
          className="w-full rounded-2xl object-contain max-h-[80vh]"
        />
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition">‹</button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition">›</button>
            <div className="flex justify-center gap-2 mt-3">
              {images.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition ${i === current ? 'bg-white' : 'bg-white/40'}`} />
              ))}
            </div>
          </>
        )}
        <button onClick={onClose} className="absolute -top-3 -right-3 bg-black/80 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm transition">✕</button>
      </div>
    </div>
  );
};

const ProjectCard = ({ index, name, description, tags, image, images, source_code_link }) => {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const slideImages = images || [image];
  const hasMultiple = slideImages.length > 1;

  return (
    <>
      {showSlideshow && <ImageSlideshow images={slideImages} name={name} onClose={() => setShowSlideshow(false)} />}

      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full sm:w-[360px]">
        <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl h-full">
          <div className="relative w-full h-[200px] sm:h-[230px]">
            <img
              src={image} alt={name}
              className={`w-full h-full object-cover rounded-2xl ${hasMultiple ? 'cursor-pointer' : ''}`}
              onClick={() => hasMultiple && setShowSlideshow(true)}
            />
            {hasMultiple && (
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] px-2 py-1 rounded-full pointer-events-none">
                📷 {slideImages.length} photos
              </div>
            )}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[13px] sm:text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
        >
          The following projects showcase my skills through real-world examples of my work.
          Each project includes a description and links to the code repository. They reflect
          my ability to solve complex problems, work with different technologies, and deliver
          production-ready software.
        </motion.p>
      </div>

      <div className="mt-12 sm:mt-20 flex flex-wrap gap-6 sm:gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
