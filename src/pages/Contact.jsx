const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-[80vh] flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Side: Text */}
        <div>
          <h2 className="text-blue-500 font-bold tracking-[0.2em] mb-4 uppercase">Contact</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-8">Let's build <br /> something <span className="text-slate-500">great.</span></h1>
          <p className="text-slate-400 text-lg max-w-md mb-12">
            Feel free to reach out — whether it’s for a project discussion or just to say hi. My inbox is always open.
          </p>
          <div className="space-y-4">
            <p className="text-xl font-medium">abdullahalmamun7805@gmail.com</p>
            <p className="text-slate-500">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Right Side: Simple Form Design */}
        <div className="bg-slate-800/30 p-8 rounded-3xl border border-white/5">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-slate-500">Your Name</label>
              <input type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition" placeholder="Mamun" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-slate-500">Email Address</label>
              <input type="email" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition" placeholder="name@email.com" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-slate-500">Message</label>
              <textarea rows="4" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition" placeholder="How can I help you?"></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-500/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// important for link up
export default Contact;