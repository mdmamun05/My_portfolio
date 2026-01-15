import React from 'react';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="p-5 flex justify-between bg-gray-800 sticky top-0 z-50">
        <h1 className="text-xl font-bold text-blue-400">MD MAMUN</h1>
        <ul className="flex gap-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl font-extrabold mb-4">Hi, I'm <span className="text-blue-500">Mamun</span></h2>
        <p className="text-gray-400 text-xl">React Developer & DSA Enthusiast</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-10 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-300">
          আমি বর্তমানে React এবং Data Structures নিয়ে কাজ করছি। প্রবলেম সলভিং আমার নেশা।
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-10">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['React', 'JavaScript', 'Tailwind', 'C++', 'DSA', 'Git'].map(skill => (
            <span key={skill} className="px-6 py-2 bg-blue-600 rounded-full">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-10 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-gray-400">DSA Algorithm Visualizer using React.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-400">Personal Portfolio Site.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-5">Get In Touch</h2>
        <p>Email: mdmamun@example.com</p>
      </section>
    </div>
  );
}

export default App;