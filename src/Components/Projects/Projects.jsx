import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ExternalLink, Play, Database, Cloud, Box } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, filters } from "../../data/projects";
import { fadeUp } from "../../lib/animations";

const PipelineVisual = ({ project, isActive }) => {
  if (project.visual === "pipeline" && project.pipeline.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-8">
        {project.pipeline.map((stage, i) => (
          <div key={stage} className="flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0.3, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.95 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="px-6 py-4 rounded-xl border border-accent/20 bg-base-700/60 backdrop-blur-sm flex items-center gap-3 min-w-[180px]"
            >
              <Database size={20} className="text-accent-light" />
              <span className="text-sm font-mono font-medium text-white">{stage}</span>
            </motion.div>
            {i < project.pipeline.length - 1 && (
              <motion.div animate={isActive ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.3 }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }} className="w-[2px] h-6 bg-accent/40" />
            )}
          </div>
        ))}
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-500">
          <Play size={12} className="text-accent" /><span>Hover to run pipeline</span>
        </div>
      </div>
    );
  }
  if (project.visual === "architecture" && project.pipeline.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-8">
        {project.pipeline.map((stage, i) => (
          <div key={stage} className="flex flex-col items-center gap-3">
            <motion.div initial={{ opacity: 0.3 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="px-6 py-4 rounded-xl border border-accent/20 bg-base-700/60 backdrop-blur-sm flex items-center gap-3 min-w-[180px]">
              <Cloud size={20} className="text-accent-light" />
              <span className="text-sm font-mono font-medium text-white">{stage}</span>
            </motion.div>
            {i < project.pipeline.length - 1 && <div className="w-[2px] h-6 bg-accent/30" />}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-white/10 bg-base-700/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-base-800/60">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="ml-3 flex-1 h-5 rounded bg-base-600/50" />
      </div>
      <div className="h-48 md:h-56 flex items-center justify-center bg-gradient-to-br from-base-700/30 to-base-800/50">
        <div className="text-center">
          <Box size={40} className="text-gray-700 mx-auto mb-2" />
          <span className="text-sm font-mono text-gray-600">{project.title}</span>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] py-12"
    >
      <div className={isReversed ? "lg:order-2" : ""}>
        <div data-cursor="VIEW" className="group relative rounded-2xl border border-white/10 bg-base-800/40 overflow-hidden hover:border-accent/20 transition-all">
          <div className="bg-grid-fine absolute inset-0 opacity-30" />
          <div className="relative p-6 md:p-8"><PipelineVisual project={project} isActive={true} /></div>
        </div>
      </div>
      <div className={isReversed ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl md:text-5xl font-bold text-base-500 tracking-tightest">{project.id}</span>
          <span className="text-xs font-mono text-gray-600">{project.date}</span>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tightest mb-2">{project.title}</h3>
        <p className="text-base md:text-lg text-accent-light font-medium mb-4">{project.subtitle}</p>
        <p className="text-base text-gray-400 leading-relaxed mb-6 max-w-lg">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-base-700/40 text-xs font-mono text-gray-400">{t}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" data-cursor={link.type === "github" ? "GITHUB" : "LIVE"} className="group flex items-center gap-2 text-sm font-medium text-white border border-white/10 rounded-full px-4 py-2 hover:bg-white/5 hover:border-accent/30 transition-all">
              {link.type === "github" ? <FaGithub size={16} /> : <ExternalLink size={16} />}
              {link.label}
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
          {project.links.length === 0 && <span className="text-sm font-mono text-gray-600 px-4 py-2">Case Study</span>}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("ALL");
  const filtered = filter === "ALL" ? projects : projects.filter((p) => p.categories.includes(filter));
  return (
    <section id="Work" className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-accent">03 / WORK</span>
          <span className="flex-1 h-[1px] bg-white/5" />
        </div>
        <motion.h2 {...fadeUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tightest mb-4">Featured work.</motion.h2>
        <motion.p {...fadeUp} className="text-base text-gray-400 mb-10 max-w-xl">
          A selection of projects spanning full-stack development, cloud architecture and web applications.
        </motion.p>
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} data-cursor="" className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${filter === f ? "bg-accent text-white border border-accent" : "text-gray-500 border border-white/10 hover:border-white/20 hover:text-gray-300"}`}>
              {f}
            </button>
          ))}
        </div>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
