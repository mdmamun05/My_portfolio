import profileImg from '../assets/coverr.jpg';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="relative group w-64 h-64 mx-auto md:mx-0">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <img src={profileImg} alt="Mamun" className="relative rounded-2xl w-full h-full object-cover border border-white/10" />
      </div>
      <h2 className="text-blue-500 font-bold tracking-widest mb-8">01. ABOUT ME</h2>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
        I am a <span className="text-slate-400 underline decoration-blue-500 decoration-4 underline-offset-8">Competitive Programmer</span> based in Bangladesh, focused on building logic-driven web experiences.
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
        <p>
          আমার কোডিং যাত্রা শুরু হয় প্রবলেম সলভিংয়ের প্রতি ভালোবাসা থেকে। বর্তমানে আমি ডেটা স্ট্রাকচার এবং অ্যালগরিদম (DSA) নিয়ে কাজ করছি এবং সেগুলোকে আধুনিক ওয়েব টেকনোলজির সাথে যুক্ত করার চেষ্টা করছি।
        </p>
        <p>
          আমি মনে করি একটি ভালো ওয়েবসাইট শুধু সুন্দর দেখালেই হয় না, সেটির ব্যাকএন্ড লজিক এবং পারফরম্যান্স হতে হয় নিখুঁত। আমি সবসময় নিজেকে নতুন টেকনোলজির সাথে আপডেট রাখতে পছন্দ করি।
        </p>
      </div>

      <div className="mt-20 p-8 border border-white/5 rounded-2xl bg-gradient-to-br from-slate-800/50 to-transparent">
        <h3 className="text-white font-bold mb-6">Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono text-blue-400">
          <div>▹ C++ / DSA</div>
          <div>▹ React / Vite</div>
          <div>▹ Tailwind CSS</div>
          <div>▹ Git / GitHub</div>
        </div>
      </div>
    </div>
  );
};

export default About;