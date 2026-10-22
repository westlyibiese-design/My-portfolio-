import React from 'react';
import { BookOpen, Sparkles, ExternalLink } from 'lucide-react';

export const WritingSection: React.FC = () => {
  return (
    <section id="writing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">Creativity & Stories</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white">Westly Writes</h3>
        <p className="text-gray-300 text-base sm:text-lg">
          Combining technical software development with storytelling, exploring Nigerian experiences, and building digital publishing platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 hover:border-cyan-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-amber-400" />
          </div>
          <h4 className="text-xl font-bold text-white">Creative Storytelling</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Developing emotionally engaging narratives, relatable characters, and rich world-building rooted in authentic perspectives.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 hover:border-violet-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-violet-400" />
          </div>
          <h4 className="text-xl font-bold text-white">Digital Publishing</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building software applications dedicated to publishing stories and making written content accessible to wider digital audiences.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 hover:border-cyan-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
            <ExternalLink className="w-6 h-6 text-cyan-400" />
          </div>
          <h4 className="text-xl font-bold text-white">Published Works & Samples</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Placeholders for upcoming stories, articles, and essays exploring technology, culture, and creative fiction.
          </p>
        </div>
      </div>
    </section>
  );
};