import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code, Gamepad2, Smartphone, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: "Full-Stack Development",
      description: "Building responsive web applications and reliable backend architectures."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-violet-400" />,
      title: "Mobile Apps",
      description: "Crafting native and cross-platform mobile experiences with Kotlin, Jetpack Compose, and Flutter."
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-pink-400" />,
      title: "Game Creation",
      description: "Designing immersive game worlds and physics with libGDX and Godot."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-400" />,
      title: "Writing & Stories",
      description: "Exploring digital publishing, creative storytelling, and sharing ideas."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">About Me</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white">Passionate Creator & Problem Solver</h3>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          I am someone who enjoys experimenting with new technologies, solving complex challenges, and learning through hands-on practical projects. Whether I am architecting backend systems, crafting mobile interfaces, building open-world games, or writing stories, my goal is always to build products that serve real users with excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
              {item.icon}
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};