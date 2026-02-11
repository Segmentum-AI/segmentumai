"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  GraduationCap, 
  FileText, 
  LineChart, 
  Microscope, 
  CheckCircle2, 
  ArrowLeft,
  Calendar
} from "lucide-react"

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export default function ResearchOrigin() {
  return (
    <div className="bg-[#030303] text-zinc-100 selection:bg-white selection:text-black min-h-screen">
      
      {/* Navigation */}
      <nav className="p-8">
        <a href="/">
        <button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </button>
        </a>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pb-32">
        
        {/* ================= HERO SECTION ================= */}
        <section className="pt-12 pb-24">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-widest font-bold text-blue-400 mb-6">
              Foundational Research
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              From the Physics Lab <br /> to Production AI.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
              Segmentum was born at the Princeton University Physics Department. 
              Our research focuses on a fundamental shift: moving away from segmentation as a 
              pixel-classification problem and toward segmentation as a geometric reasoning task.
            </p>
          </motion.div>
        </section>

        {/* ================= THE BREAKTHROUGH ================= */}
        <section className="grid md:grid-cols-2 gap-12 py-20 border-t border-white/5">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Microscope className="text-zinc-500" /> The Core Insight
            </h2>
            <div className="space-y-6 text-zinc-400">
              <p>
                Modern "State-of-the-Art" (SOTA) models are primarily trained on massive, 2D-centric 
                datasets. While they are impressive at identifying common objects, they lack an 
                intrinsic understanding of **spatial manifolding**.
              </p>
              <p>
                By applying principles of topological data analysis and physics-informed 
                neural networks, we developed a system that understands how volumes occupy space. 
                This allows Segmentum to generalize to entirely new visual domains with 
                vanishingly small amounts of data.
              </p>
            </div>
          </motion.div>

          <motion.div 
            {...fadeUp} 
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-white font-bold mb-4">Research Milestones</h3>
              <ul className="space-y-4">
                {[
                  "Few-shot adaptation without retraining",
                  "Cross-dimensional (2D to 3D) inference",
                  "Geometric consistency across temporal frames",
                  "Physics-constrained latent spaces"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-blue-500/5 blur-3xl" />
          </motion.div>
        </section>

        {/* ================= SOTA COMPARISON ================= */}
        <section className="py-20 border-t border-white/5">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Shattering the SOTA Ceiling</h2>
            <p className="text-zinc-400 max-w-2xl">
              In our internal testing, Segmentum consistently outperforms industry-standard 
              foundational models across diverse benchmarks, particularly in low-data regimes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { field: "Medical Imaging", dataset: "BraTS 2024", metric: "+14% mIoU" },
              { field: "Satellite Data", dataset: "SpaceNet 7", metric: "+9% Accuracy" },
              { field: "Robotics/Scene", dataset: "ADE20K (Few-shot)", metric: "+22% Gain" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 text-center"
              >
                <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-2">{stat.field}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.metric}</div>
                <div className="text-zinc-600 text-xs">Compared to current SOTA on {stat.dataset}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= WHITE PAPER TEASER ================= */}
        <section className="mt-20">
          <motion.div 
            {...fadeUp}
            className="relative p-12 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-zinc-900/50 to-transparent border border-white/10 overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-40 h-56 bg-zinc-800 rounded-lg shadow-2xl border border-white/10 flex flex-col p-4 shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
                <div className="w-8 h-1 bg-blue-500 mb-2" />
                <div className="w-full h-2 bg-white/10 mb-1" />
                <div className="w-2/3 h-2 bg-white/10 mb-4" />
                <div className="flex-1 w-full bg-white/5 rounded" />
              </div>

              <div>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-bold mb-2">
                  <Calendar size={14} /> Coming Q1 2026
                </div>
                <h2 className="text-4xl font-bold mb-4">White Paper: Spatial Geometry Transformers</h2>
                <p className="text-zinc-400 mb-8 max-w-xl">
                  We are finalizing a comprehensive white paper detailing our architectural 
                  breakthroughs, extensive benchmark results on major open datasets, and the 
                  mathematical framework behind our few-shot performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                    <FileText size={18} /> Notify on Release
                  </button>
                  <button className="px-6 py-3 rounded-full bg-zinc-800 text-white font-bold hover:bg-zinc-700 transition-colors">
                    Access Early Data
                  </button>
                </div>
              </div>
            </div>

            {/* Background Decorative Mesh */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10" />
          </motion.div>
        </section>

      </main>

      <footer className="py-20 text-center border-t border-white/5">
        <div className="text-zinc-600 text-sm">
          Segmentum AI Laboratory · Princeton, NJ
        </div>
      </footer>
    </div>
  )
}