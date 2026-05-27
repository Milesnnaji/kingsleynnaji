import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Text content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] xs:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1 min-w-0">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{' '}
            <span className="text-[#915EFF]">Kingsley Nnaji</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build SaaS platforms, AI agents, and full-stack apps{' '}
            <br className="sm:block hidden" />
            with Next.js, Flutter, and Node.js.
          </p>
        </div>
      </div>

      {/* 3D canvas — hidden on small phones, shown on sm+ */}
      {isMobile ? (
        <div className="absolute inset-0 flex items-end justify-center pb-24 pointer-events-none">
          <div className="w-full h-[55vh] bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
        </div>
      ) : (
        <ComputersCanvas />
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
