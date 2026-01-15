import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
          MAMUN<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-medium text-slate-400 hover:text-white transition">HOME</Link>
          <Link to="/about" className="text-sm font-medium text-slate-400 hover:text-white transition">ABOUT</Link>
          <Link to="/projects" className="text-sm font-medium text-slate-400 hover:text-white transition">PROJECTS</Link>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm font-bold transition">
            HIRE ME
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/5 px-6 py-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg text-slate-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg text-slate-400">About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-lg text-slate-400">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-blue-500 font-bold">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;