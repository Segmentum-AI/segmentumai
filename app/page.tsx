"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Box, 
  Cpu, 
  Layers, 
  Zap, 
  ChevronRight, 
  Github, 
  ArrowRight 
} from "lucide-react"

// --- Animation Variants ---
const fader = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number]},
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
}

export default function Home() {
  return (
    <div className="bg-[#030303] text-zinc-100 selection:bg-white selection:text-black font-sans">
      <Navbar />

      <main className="relative overflow-hidden">
        <AmbientBackground />

        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              {...fader}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Now in Private Beta for Enterprise
            </motion.div>

            <motion.h1 
              {...fader}
              className="text-5xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1] mb-8"
            >
              Spatial intelligence, <br className="hidden md:block" />
              learned from zero.
            </motion.h1>

            <motion.p 
              {...fader}
              transition={{ delay: 0.1 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed mb-12"
            >
              Segmentum enables autonomous few-shot segmentation across 3D volumes. 
              We reason about geometry and structure without retraining or human prompts.
            </motion.p>

            <motion.div 
              {...fader}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="demo">
              <button className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95">
                Try Demo
              </button>
              </a>
              <a href="research">
              <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-transparent border border-white/10 text-white font-medium hover:bg-white/5 transition-all">
                Research Origin <ChevronRight size={16} />
              </button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ================= BENTO FEATURES ================= */}
        <section className="py-24 px-6 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Feature 1: Large Box */}
              <motion.div 
                {...fader}
                className="md:col-span-8 group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden"
              >
                <div className="relative z-10">
                  <Cpu className="text-zinc-400 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2">Physics-Informed Modeling</h3>
                  <p className="text-zinc-400 max-w-md">
                    Unlike standard CV models, Segmentum treats images as physical volumes. 
                    It respects occlusion, lighting, and geometric consistency.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] group-hover:bg-emerald-500/20 transition-colors" />
              </motion.div>

              {/* Feature 2: Small Box */}
              <motion.div 
                {...fader}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between"
              >
                <Box className="text-zinc-400" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Cross-Domain</h3>
                  <p className="text-zinc-400 text-sm">
                    Deploy from medical MRIs to satellite imagery without fine-tuning.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3: Small Box */}
              <motion.div 
                {...fader}
                transition={{ delay: 0.2 }}
                className="md:col-span-4 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between"
              >
                <Layers className="text-zinc-400" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">3D Native</h3>
                  <p className="text-zinc-400 text-sm">
                    Segment entire volumes from a single 2D slice annotation.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4: Large Box */}
              <motion.div 
                {...fader}
                transition={{ delay: 0.3 }}
                className="md:col-span-8 group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden flex flex-col justify-center"
              >
                <div className="flex items-center gap-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 italic tracking-tighter italic">"Human time is the bottleneck."</h3>
                    <p className="text-zinc-400 max-w-sm">
                      We automate the labeling process by learning visual concepts 
                      from a single example, then scaling to millions autonomously.
                    </p>
                  </div>
                  <div className="hidden lg:block w-px h-32 bg-white/10" />
                  <div className="hidden lg:block">
                     <div className="text-4xl font-bold">100x</div>
                     <div className="text-xs text-zinc-500 uppercase tracking-widest">Efficiency Gain</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ================= TEAM SECTION ================= */}
        <section className="py-32 px-6 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="text-4xl font-bold mb-4">The Founding Team</h2>
                <p className="text-zinc-500 max-w-md">Research-led and engineering-driven. Born out of the Princeton Physics Department.</p>
              </div>
              <a href="#" className="text-white hover:underline flex items-center gap-2">Read our paper <ArrowRight size={16}/></a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <FounderCard 
                name="Akshat Santhana Gopalan"
                role="CEO / Technical Founder"
                bio="Former Princeton Physics researcher. Leading model architecture and end-to-end infrastructure."
              />
              <FounderCard 
                name="Dr. Jason Puchalla"
                role="Chief Scientific Officer"
                bio="Physics lead specializing in spatial reasoning and geometry-driven intelligent modeling."
              />
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-40 px-6 text-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10"
          >
            <h2 className="text-5xl font-bold mb-6">Start Segmenting.</h2>
            <p className="text-zinc-400 mb-10 text-lg">Join the waitlist for the spatial intelligence API.</p>
            <div className="flex justify-center gap-4">
               <button className="px-8 py-3 rounded-full bg-white text-black font-bold">Get Started</button>
               <button className="px-8 py-3 rounded-full bg-zinc-800 text-white font-bold">Documentation</button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

/* ================= SUB-COMPONENTS ================= */

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-center">
      <div className="w-full max-w-7xl flex justify-between items-center px-6 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
        <div className="text-xl font-bold tracking-tighter">SEGMENTUM</div>
        <div className="hidden md:flex gap-8 text-sm text-zinc-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">Technology</a>
          <a href="#" className="hover:text-white transition-colors">Research</a>
          <a href="#" className="hover:text-white transition-colors">Company</a>
        </div>
        
        <div className="flex items-center gap-4">
         <a href="https://github.com/Segmentum-AI" target="_blank"><Github size={20} className="text-zinc-400 cursor-pointer hover:text-white" /></a>
          <a href="auth"><button className="text-sm px-4 py-1.5 rounded-full bg-white text-black font-bold">Sign In</button></a>
        </div>
      </div>
    </nav>
  )
}

function FounderCard({ name, role, bio }: { name: string, role: string, bio: string }) {
  return (
    <div className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-400" />
        <div>
          <h4 className="font-bold text-lg leading-none">{name}</h4>
          <span className="text-xs text-zinc-500 uppercase tracking-widest">{role}</span>
        </div>
      </div>
      <p className="text-zinc-400 leading-relaxed text-sm">
        {bio}
      </p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-zinc-600 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>© 2026 Segmentum AI. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

function AmbientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-white/5 rounded-full blur-[100px]" />
    </div>
  )
}