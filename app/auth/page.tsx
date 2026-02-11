"use client"

import React from "react"
import { motion } from "framer-motion"
import { Lock, ArrowLeft, ShieldCheck, Globe } from "lucide-react"

export default function SignIn() {
  return (
    <div className="bg-[#030303] text-zinc-100 min-h-screen flex flex-col justify-center items-center px-6 font-sans">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md w-full relative z-10 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-zinc-900 border border-white/10 mb-8 shadow-2xl">
          <Lock className="text-blue-500" size={28} />
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-4">Access Restricted</h1>
        
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm mb-8">
          <p className="text-zinc-400 leading-relaxed text-sm">
            Segmentum is currently in a <strong>private pilot phase</strong>. 
            Access is limited to direct enterprise partners and academic researchers with pre-provisioned GPU clusters.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
            Individual registrations are closed
          </p>
          
          <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
            Join Waitlist
          </button>
          
          <button 
            onClick={() => window.history.back()}
            className="w-full py-4 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} /> Return to Home
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2 text-zinc-500 mb-1">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-bold uppercase tracking-tight">Security</span>
            </div>
            <p className="text-[11px] text-zinc-600">SOC2 Type II Compliant Infrastructure</p>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2 text-zinc-500 mb-1">
              <Globe size={14} />
              <span className="text-[10px] font-bold uppercase tracking-tight">Availability</span>
            </div>
            <p className="text-[11px] text-zinc-600">On-demand regional GPU allocation</p>
          </div>
        </div>
      </motion.div>

      <footer className="absolute bottom-8 text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
        Segmentum Authorization Protocol v.2.0.4
      </footer>
    </div>
  )
}