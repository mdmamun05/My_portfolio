import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa'; // আইকন ইমপোর্ট
import profileImg from '../assets/coverr.jpg'; // আপনার ছবি

const Home = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* ১. background animated glow */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content and Social Media Icon */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-blue-500/20"
          >
            Available for Freelance
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 text-white">
            Design <br /> 
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Beyond Limits.
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            I'm Mamun, a full-stack developer with a passion for turning complex logic into intuitive and visually appealing user interfaces. 
          </p>

          {/* Button Section: Resume & Let's Talk */}
          <div className="flex flex-wrap gap-6 mb-12">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="doc/Resume.pdf" 
              target="_blank"
              className="px-8 py-4 bg-white text-black font-bold rounded-2xl shadow-lg shadow-white/5 tracking-widest"
            >
              RESUME
            </motion.a>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/projects" className="px-8 py-4 border border-white/10 hover:border-white/40 rounded-2xl font-bold transition-all inline-block text-white tracking-widest">
                VIEW PROJECTS
              </Link>
            </motion.div>
          </div>

          {/* Social Media Icon with animation */}
          <div className="flex gap-6 items-center">
            <p className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Follow Me</p>
            <div className="h-[1px] w-12 bg-white/10"></div>
            <div className="flex gap-5 text-2xl text-slate-400">
              <motion.a whileHover={{ y: -5, color: '#fff' }} href="https://github.com/mdmamun05" target="_blank"><FaGithub /></motion.a>
              <motion.a whileHover={{ y: -5, color: '#3b82f6' }} href="https://linkedin.com/in/abdullah-al-mamun-526556237"><FaLinkedin /></motion.a>
              <motion.a whileHover={{ y: -5, color: '#1877f2' }} href="https://facebook.com/profile.php?id=61579446690945"><FaFacebook /></motion.a>
              <motion.a whileHover={{ y: -5, color: '#06b6d4' }} href="#"><FaExternalLinkAlt /></motion.a> {/* Netlify/Website icon */}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Picture & cotation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Image Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[3rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-slate-800 rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src={profileImg} 
                alt="Mamun" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" 
              />
            </div>
          </div>

          {/* কোটেশন বক্স */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 max-w-sm text-center"
          >
            <div className="relative p-6 bg-slate-800/20 backdrop-blur-md rounded-3xl border border-white/5">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-blue-500 font-serif">“</span>
              <p className="text-slate-300 italic text-lg leading-relaxed">
                "The only way to do great work is to love what you do."
              </p>
              <p className="mt-4 text-xs font-bold tracking-[0.3em] text-blue-500 uppercase">— Steve Jobs</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;