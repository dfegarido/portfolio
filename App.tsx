import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { ChatWidget } from './components/ChatWidget';
import { Button } from './components/Button';
import { Section, SectionTitle } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TextReveal } from './components/TextReveal';
import { TiltCard } from './components/TiltCard';
import { Counter } from './components/Counter';
import { Parallax } from './components/Parallax';
import { Magnetic } from './components/Magnetic';
import { useGithubStats } from './hooks/useGithubStats';
import { 
  PORTFOLIO_OWNER, 
  PORTFOLIO_ROLE,
  PORTFOLIO_TAGLINE, 
  ABOUT_ME, 
  SKILLS, 
  PROJECTS, 
  EXPERIENCES, 
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL
} from './constants';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { repos, commits } = useGithubStats();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen text-slate-300 relative selection:bg-white/20 selection:text-white">
      {/* Accessibility Skip Link */}
      <a 
        href="#about" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-slate-800 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
      >
        Skip to main content
      </a>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-200 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Background Layers - Positive Stacking Context */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black z-0 pointer-events-none"></div>
      
      {/* Dot Grid Layer */}
      <div className="fixed inset-0 z-[1] pointer-events-none dot-grid opacity-20"></div>
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
          {/* Main Hero Content */}
          <div className="max-w-7xl mx-auto w-full pt-16">
            <Parallax offset={100} direction="down">
              <div className="space-y-6 max-w-4xl">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-slate-300 font-mono tracking-wide text-sm md:text-base border border-white/10 bg-white/5 px-4 py-1.5 rounded-full inline-block backdrop-blur-sm">
                    Hello, I'm
                  </span>
                </motion.div>
                
              <h1 className="text-6xl md:text-8xl font-black text-slate-100 tracking-tighter leading-tight">
                <TextReveal>{PORTFOLIO_OWNER}</TextReveal>
              </h1>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-400 tracking-tight leading-tight">
                 <TextReveal delay={0.2}>{PORTFOLIO_ROLE}</TextReveal>
              </h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="max-w-xl text-lg md:text-xl text-slate-400 leading-relaxed mt-6"
                >
                  {PORTFOLIO_TAGLINE}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 pt-8"
                >
                  <Button size="lg" className="h-14 px-8 text-base" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
                    Check my work
                  </Button>
                  <Button variant="outline" size="lg" className="h-14 px-8 text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                    Contact me
                  </Button>
                </motion.div>

                {/* Social Proof */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="pt-12 flex items-center gap-6 text-slate-500"
                >
                   <Magnetic>
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors transform hover:scale-110">
                        <Github size={24} />
                    </a>
                   </Magnetic>
                   <Magnetic>
                    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors transform hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                   </Magnetic>
                   <Magnetic>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors transform hover:scale-110">
                        <Mail size={24} />
                    </a>
                   </Magnetic>
                   <div className="h-px w-20 bg-slate-700 ml-2"></div>
                </motion.div>
              </div>
            </Parallax>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hidden md:block"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* Stats Section */}
        <Section id="stats" className="py-10 md:py-16">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Counter to={new Date().getFullYear() - 2018} label="Years Exp." />
              <Counter to={repos} label="Projects" />
              <Counter to={commits} label="Commits" />
              <Counter to={10} label="Coffees/Day" />
           </div>
        </Section>

        {/* About Section */}
        <Section id="about">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6 text-slate-400 text-lg leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {ABOUT_ME.split('\n').map((paragraph, i) => (
                  paragraph.trim() && <p key={i} className="mb-4">{paragraph}</p>
                ))}
                <div className="pt-6">
                   <h3 className="text-slate-100 font-semibold mb-4">Core Technologies</h3>
                   <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm">
                      {SKILLS.slice(0, 6).map((skill, i) => (
                        <li key={i} className="flex items-center gap-2">
                           <span className="text-white/50">▹</span> {skill.name}
                        </li>
                      ))}
                   </ul>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-5 relative group perspective-1000">
              <Parallax offset={40} className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="animate-float"
                >
                  <div className="relative w-full aspect-square max-w-sm mx-auto">
                     <div className="absolute inset-0 border-2 border-white/20 rounded-2xl translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                     <img 
                        src={`${import.meta.env.BASE_URL}images/profile_photo.png`}
                        alt="Darwin Fegarido" 
                        loading="lazy"
                        className="rounded-2xl object-cover w-full h-full shadow-2xl relative z-0" 
                        onError={(e) => {
                          // Fallback to placeholder if image not found
                          e.currentTarget.src = "https://picsum.photos/seed/darwin/800/800";
                        }}
                      />
                  </div>
                </motion.div>
              </Parallax>
              <Parallax offset={-20} className="absolute -inset-4 border border-white/5 rounded-3xl -z-10 pointer-events-none" />
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" className="bg-slate-900/50">
          <SectionTitle>Where I've Worked</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-3xl mx-auto">
              <ExperienceTimeline experiences={EXPERIENCES} />
            </div>
          </motion.div>
        </Section>

        {/* Projects Section */}
        <Section id="projects">
          <SectionTitle subtitle="A showcase of my recent development work">Some Things I've Built</SectionTitle>
          <div className="space-y-24 md:space-y-32">
            {PROJECTS.map((project, index) => (
              <Parallax key={project.id} offset={50 * (index % 2 === 0 ? 1 : -1)}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <TiltCard>
                    <ProjectCard project={project} index={index} />
                  </TiltCard>
                </motion.div>
              </Parallax>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" className="bg-slate-800/20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900"></div>
          <div className="relative z-10">
            <SectionTitle>Other Skills & Tools</SectionTitle>
            <div 
               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {SKILLS.map((skill, idx) => (
                <Parallax key={skill.name} offset={20 + (idx % 3) * 10} direction={idx % 2 === 0 ? 'up' : 'down'}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:border-white/20 hover:shadow-white/5 transition-all duration-300 group"
                    data-magnetic="true"
                  >
                    <div className="text-slate-400 group-hover:text-white transition-colors scale-125">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-slate-300 text-center">{skill.name}</span>
                  </motion.div>
                </Parallax>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="py-24 md:py-32">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="max-w-3xl mx-auto text-center"
           >
              <span className="text-slate-400 font-mono mb-4 block text-lg">04. What's Next?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                I'm currently looking for new opportunities, and my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12">
                <div className="flex flex-col items-center gap-4 text-slate-400">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-white/80 mb-2">
                    <Mail size={28} />
                  </div>
                  <div className="text-center">
                      <p className="text-sm font-mono text-slate-500 mb-1">Email Me</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-200 hover:text-white transition-colors text-lg" data-magnetic="true">{CONTACT_EMAIL}</a>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 text-slate-400">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-white/80 mb-2">
                    <MapPin size={28} />
                  </div>
                  <div className="text-center">
                      <p className="text-sm font-mono text-slate-500 mb-1">Location</p>
                      <p className="text-slate-200 text-lg">Manila, Philippines</p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="h-16 px-10 text-lg"
                onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}`}
              >
                Say Hello
              </Button>
           </motion.div>
        </Section>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800/50 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm font-mono text-center md:text-left">
            <p>Designed & Built by {PORTFOLIO_OWNER}</p>
          </div>
          <div className="flex gap-6">
               <Magnetic><a href={GITHUB_URL} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a></Magnetic>
               <Magnetic><a href={LINKEDIN_URL} className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a></Magnetic>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;