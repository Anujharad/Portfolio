import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { personal } from "../../data/personal";
import { fadeUp } from "../../lib/animations";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Please enter a message";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
  ];

  return (
    <section id="Contact" className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-accent">07 / CONTACT</span>
          <span className="flex-1 h-[1px] bg-white/5" />
        </div>
        <motion.div {...fadeUp} className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tightest leading-tight">Have a product in mind?</h2>
          <p className="mt-2 text-3xl md:text-5xl lg:text-6xl font-bold text-gradient tracking-tightest">Let&apos;s build it.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={personal.resumeUrl} download data-cursor="" className="group flex items-center gap-2 bg-accent text-white font-medium text-sm md:text-base px-5 py-3 rounded-full hover:bg-accent-dark transition-all hover:scale-[1.02]">
              Download Resume <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#Contact" data-cursor="" className="group flex items-center gap-2 border border-white/15 text-gray-200 font-medium text-sm md:text-base px-5 py-3 rounded-full hover:bg-white/5 transition-all">
              Get In Touch <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div {...fadeUp}>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tightest mb-4">Let&apos;s build something useful.</h3>
            <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-md">
              I&apos;m open to software engineering, full-stack development and relevant technology opportunities.
            </p>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-base-800/40 flex items-center justify-center text-accent-light flex-shrink-0">
                    <info.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-gray-600">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} data-cursor="" className="text-sm text-gray-200 hover:text-white transition-colors">{info.value}</a>
                    ) : (
                      <span className="text-sm text-gray-200">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.form {...fadeUp} onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Name</label>
              <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-base-800/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-accent/40 focus:outline-none transition-colors" placeholder="Your name" />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Email</label>
              <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-base-800/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-accent/40 focus:outline-none transition-colors" placeholder="you@example.com" />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Message</label>
              <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-base-800/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-accent/40 focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..." />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>
            <button type="submit" data-cursor="" className="group flex items-center gap-2 bg-accent text-white font-medium text-sm px-5 py-3 rounded-full hover:bg-accent-dark transition-all hover:scale-[1.02]">
              Send Message <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="text-xs text-gray-600 font-mono">Opens your email client — no backend required.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
