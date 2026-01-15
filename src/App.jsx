import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-white min-h-screen w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-800/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            MD MAMUN
          </h1>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-fadeIn">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-400">Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-400">About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-400">Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-400">Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <h2 className="text-4xl md:text-7xl font-extrabold mb-4 leading-tight">
          I'm <span className="text-blue-500">MD Mamun</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
          Competitive Programmer & Web Enthusiast. Passionate about solving complex problems with Data Structures and Algorithms.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition text-center">View Projects</a>
          <a href="#contact" className="border border-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600/10 transition text-center">Contact Me</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed text-center">
            বর্তমানে আমি ডেটা স্ট্রাকচার এবং অ্যালগরিদম (DSA) নিয়ে কাজ করছি। কোডিংয়ের মাধ্যমে নতুন কিছু তৈরি করা এবং লজিক্যাল প্রবলেম সমাধান করা আমার প্যাশন।
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {['C++', 'DSA', 'React.js', 'JavaScript', 'Tailwind', 'Git'].map((skill) => (
            <div key={skill} className="text-center px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-blue-500 transition-all shadow-lg text-sm md:text-base">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-6 md:p-8 bg-slate-900 rounded-2xl border border-slate-700 hover:scale-105 transition-transform">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400">Sorting Visualizer</h3>
            <p className="text-slate-400 mb-4 text-sm md:text-base">React ব্যবহার করে বিভিন্ন সর্টিং অ্যালগরিদম ভিজ্যুয়াল করার প্রজেক্ট।</p>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">#C++ #React</span>
          </div>
          <div className="p-6 md:p-8 bg-slate-900 rounded-2xl border border-slate-700 hover:scale-105 transition-transform">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400">Personal Portfolio</h3>
            <p className="text-slate-400 mb-4 text-sm md:text-base">আমার নিজের এই ওয়েবসাইটটি React এবং Tailwind CSS দিয়ে তৈরি।</p>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">#Tailwind #Vite</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
        <div className="bg-slate-800 p-8 md:p-12 rounded-3xl max-w-xl mx-auto border border-slate-700">
          <p className="text-lg md:text-xl text-slate-300 mb-4 break-words">Email: mdmamun05@example.com</p>
          <p className="text-slate-400">GitHub: github.com/mdmamun05</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-800 text-center text-slate-500 px-6">
        <p className="text-sm">&copy; 2026 MD Mamun. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;