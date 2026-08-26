import { motion } from "motion/react";
import { MapPin, GraduationCap, Layers, Cloud, CircleCheck as CheckCircle2 } from "lucide-react";
import { fadeUp, stagger, staggerItem } from "../../lib/animations";

const facts = [
  { icon: MapPin, label: "Mumbai, India" },
  { icon: GraduationCap, label: "Computer Engineering" },
  { icon: Layers, label: "Full Stack" },
  { icon: Cloud, label: "AWS / Cloud" },
  { icon: CheckCircle2, label: "Available for opportunities" },
];

const About = () => (
  <section id="About" className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-accent">01 / ABOUT</span>
        <span className="flex-1 h-[1px] bg-white/5" />
      </div>
      <div className="grid lg:grid-cols-[80px_1fr_280px] gap-8 lg:gap-12">
        <div className="hidden lg:block">
          <span className="sticky top-32 text-xs font-mono uppercase tracking-widest text-gray-600 [writing-mode:vertical-rl] rotate-180">About</span>
        </div>
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tightest leading-tight mb-6">A little about me.</h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-6">
            I&apos;m a Computer Engineering graduate and Full Stack Developer who enjoys turning ideas into reliable web products.
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            My background spans the full MERN stack — from building responsive, interactive frontends with React and Tailwind to designing REST APIs with Node.js and Express. I&apos;ve worked with AWS for cloud-based media management, containerized services with Docker, and focused on performance optimization through lazy loading and API tuning. I care about production-oriented development: clean architecture, secure file handling, and software that works reliably for real users.
          </p>
        </motion.div>
        <motion.div {...stagger} className="flex flex-col gap-3">
          {facts.map((fact, i) => (
            <motion.div key={i} {...staggerItem} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5 bg-base-800/40 hover:border-accent/20 transition-colors">
              <fact.icon size={18} className="text-accent-light flex-shrink-0" />
              <span className="text-sm text-gray-300">{fact.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
