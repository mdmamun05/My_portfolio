import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce App",
      desc: "A full-stack online shop built with React and Tailwind CSS.",
      tech: ["React", "Firebase", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Problem Solver Tool",
      desc: "A platform to visualize and solve C++ algorithms effectively.",
      tech: ["C++", "Data Structures", "Web"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Modern Portfolio",
      desc: "An ultra-minimalist developer portfolio with smooth animations.",
      tech: ["Vite", "Framer Motion", "Tailwind"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-12 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Selected Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="h-12 w-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 font-bold">
                  0{project.id}
                </div>
                <div className="flex gap-4 text-xl text-slate-400">
                  <a href={project.github} className="hover:text-white transition-colors"><FaGithub /></a>
                  <a href={project.link} className="hover:text-white transition-colors"><FaExternalLinkAlt /></a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 line-clamp-2">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-bold tracking-widest uppercase bg-white/5 px-3 py-1 rounded-full text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;