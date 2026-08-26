import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { TechIcon } from "../../lib/icons";
import { personal } from "../../data/personal";
import { prefersReducedMotion } from "../../lib/utils";

const nodes = [
  { name: "React", icon: "react", x: 15, y: 20 },
  { name: "Node", icon: "node", x: 80, y: 15 },
  { name: "AWS", icon: "aws", x: 75, y: 75 },
  { name: "MongoDB", icon: "mongodb", x: 20, y: 80 },
  { name: "Docker", icon: "docker", x: 50, y: 10 },
  { name: "Express", icon: "express", x: 50, y: 90 },
];

const Hero = () => {
  const heroRef = useRef(null);
  const reduced = prefersReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glowX = useSpring(mx, { stiffness: 150, damping: 30 });
  const glowY = useSpring(my, { stiffness: 150, damping: 30 });
  const glowBg = useTransform([glowX, glowY], ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(59,130,246,0.10) 0%, transparent 50%)`);
  const headlineX = useSpring(useTransform(mx, [0, 100], [-8, 8]), { stiffness: 100, damping: 20 });
  const headlineY = useSpring(useTransform(my, [0, 100], [-4, 4]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    if (reduced || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section id="Home" ref={heroRef} onMouseMove={handleMouseMove} className="relative min-h-screen flex items-center pt-20 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      {!reduced && <motion.div className="absolute inset-0 pointer-events-none" style={{ background: glowBg }} />}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-900 pointer-events-none" />
      <div className="relative z-10 grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center w-full max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Software Engineering Graduate</span>
          </div>
          <motion.h1 style={reduced ? {} : { x: headlineX, y: headlineY }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tightest text-white">
            I build<br />
            <span className="text-gradient">full-stack</span><br />
            digital products.
          </motion.h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-gray-400 leading-relaxed">{personal.positioning}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#Work" data-cursor="VIEW" className="group flex items-center gap-2 bg-accent text-white font-medium text-sm md:text-base px-5 py-3 rounded-full hover:bg-accent-dark transition-all hover:scale-[1.02]">
              View My Work <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href={personal.resumeUrl} download data-cursor="" className="group flex items-center gap-2 border border-white/15 text-gray-200 font-medium text-sm md:text-base px-5 py-3 rounded-full hover:bg-white/5 hover:border-white/25 transition-all">
              Download Resume <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" data-cursor="GITHUB" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub"><FaGithub size={20} /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
            <a href={`mailto:${personal.email}`} data-cursor="" className="text-gray-500 hover:text-white transition-colors" aria-label="Email"><FaEnvelope size={20} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="relative hidden lg:flex items-center justify-center h-[400px] xl:h-[480px]">
          <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
            {nodes.map((node, i) => nodes.slice(i + 1).map((other, j) => {
              const dist = Math.hypot(node.x - other.x, node.y - other.y);
              if (dist > 45) return null;
              return <line key={`${i}-${j}`} x1={`${node.x}%`} y1={`${node.y}%`} x2={`${other.x}%`} y2={`${other.y}%`} stroke="rgba(59,130,246,0.12)" strokeWidth="1" />;
            }))}
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-28 h-28 rounded-full border border-white/10 bg-base-800/50 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Full</div>
                <div className="text-sm font-bold text-white">Stack</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Dev</div>
              </div>
            </div>
          </div>
          {nodes.map((node, i) => (
            <motion.div key={node.name} className="absolute" style={{ left: `${node.x}%`, top: `${node.y}%` }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }} whileHover={{ scale: 1.15 }}>
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-base-700/60 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-accent-light hover:border-accent/30 transition-all -translate-x-1/2 -translate-y-1/2">
                <TechIcon name={node.icon} size={22} />
              </div>
              <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase tracking-wider text-gray-600 whitespace-nowrap">{node.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600">Scroll to explore</span>
        <motion.div animate={reduced ? {} : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} className="text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
