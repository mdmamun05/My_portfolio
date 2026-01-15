const Projects = () => {
  const allProjects = [
    {
      title: "Sorting Visualizer",
      desc: "A high-performance tool built with C++ and React to visualize complex algorithms.",
      tech: ["React", "C++", "Algorithms"],
      link: "#"
    },
    {
      title: "Secure E-Vault",
      desc: "A decentralized storage application focusing on data privacy and security.",
      tech: ["Node.js", "Firebase", "Tailwind"],
      link: "#"
    },
    {
      title: "AI Pathfinding",
      desc: "Interactive visualizer for A* and Dijkstra algorithms in a 2D grid.",
      tech: ["JavaScript", "Canvas API"],
      link: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 mb-4 uppercase">Selected Works</h2>
        <h1 className="text-4xl md:text-6xl font-black">Crafting Digital <br /> <span className="text-slate-500 text-3xl md:text-5xl">Masterpieces</span></h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <div key={index} className="group relative bg-slate-800/30 border border-white/5 p-8 rounded-3xl hover:bg-slate-800/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-8 right-8 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;