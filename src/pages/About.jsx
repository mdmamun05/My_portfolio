import { motion } from 'framer-motion';
import { SiCplusplus, SiJavascript, SiReact, SiTailwindcss, SiFirebase, SiGithub } from 'react-icons/si';

const About = () => {
  const skills = [
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-500" }, // SiCpp এর বদলে SiCplusplus
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "React", icon: <SiReact />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
  { name: "GitHub", icon: <SiGithub />, color: "text-white" },
];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* বাম পাশ: আপনার সম্পর্কে বর্ণনা */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Hi, I'm <span className="text-white font-bold">MD MAMUN</span>. I am a passionate developer with a strong foundation in competitive programming and web technologies. 
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            আমার যাত্রা শুরু হয়েছিল লজিক বিল্ডিং এবং প্রবলেম সলভিং দিয়ে। এখন আমি মডার্ন এবং স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরিতে কাজ করছি। আমি সবসময় নতুন টেকনোলজি শিখতে এবং সেগুলোকে বাস্তব জীবনে প্রয়োগ করতে পছন্দ করি।
          </p>
          
          <div className="p-6 bg-slate-900/50 border border-white/5 rounded-3xl">
            <h4 className="text-white font-bold mb-2">Education</h4>
            <p className="text-slate-400 text-sm italic">BSc in Computer Science & Engineering (Ongoing)</p>
          </div>
        </motion.div>

        {/* ডান পাশ: স্কিলস গ্রিড */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-white">My Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="flex flex-col items-center justify-center p-6 bg-slate-900/30 border border-white/5 rounded-3xl transition-all"
              >
                <div className={`text-4xl ${skill.color} mb-3`}>
                  {skill.icon}
                </div>
                <span className="text-slate-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;