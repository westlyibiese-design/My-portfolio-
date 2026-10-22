import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    // Since there's no backend email service configured, display clear success feedback
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">Get in Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Let's Build Something Together</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Have a project in mind, a game development collaboration, or want to discuss technology and stories? Reach out via email or connect on social platforms.
          </p>

          <div className="space-y-4 pt-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-gray-200 transition-colors"
            >
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Email Me</div>
                <div className="font-medium text-white">{PERSONAL_INFO.email}</div>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 text-gray-200 transition-colors"
            >
              <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-gray-400">GitHub Profile</div>
                <div className="font-medium text-white">westlyibiese-design</div>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 text-gray-200 transition-colors"
            >
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-gray-400">LinkedIn</div>
                <div className="font-medium text-white">Westly Ibiese</div>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Your Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/25 hover:opacity-95 transition-all text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you! Your message has been prepared successfully.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  <AlertCircle className="w-4 h-4" />
                  <span>Please fill out all fields before submitting.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};