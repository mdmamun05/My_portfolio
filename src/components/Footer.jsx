const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">© 2026 MD MAMUN. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="https://github.com/mdmamun05" target="_blank" className="text-slate-400 hover:text-white transition">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-white transition">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition">Facebook</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;