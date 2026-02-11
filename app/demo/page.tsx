// "use client"

// import React, { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { 
//   MousePointer2, 
//   Cpu, 
//   CheckCircle, 
//   Play, 
//   Activity,
//   AlertCircle,
//   Terminal
// } from "lucide-react"

// // --- Real Image Assets ---
// const MAIN_IMAGE = "http://googleusercontent.com/image_collection/image_retrieval/6787178204968116689_0"
// const GRID_IMAGES = [
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_0",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_1",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_2",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_3",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_4",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_5",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_6",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_7",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_8",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_9",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_10",
//   "http://googleusercontent.com/image_collection/image_retrieval/17165098702669748576_11"
// ]

// export default function DemoPage() {
//   const [step, setStep] = useState(1) // 1: Initial, 2: Annotated, 3: Processing, 4: Grid
//   const [isAnnotated, setIsAnnotated] = useState(false)

//   const startInference = () => {
//     setStep(3)
//     setTimeout(() => setStep(4), 2500)
//   }

//   return (
//     <div className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-blue-500">
      
//       {/* Top Nav */}
//       <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
//         <div className="flex items-center gap-4">
//           <span className="font-bold tracking-tighter text-xl">SEGMENTUM</span>
//           <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold uppercase tracking-widest">
//             <Activity size={12} className="animate-pulse" /> Research Preview 0.1
//           </div>
//         </div>
//         <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all">
//           Request Cluster Access
//         </button>
//       </nav>

//       <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-12">
        
//         {/* Left Control Panel */}
//         <div className="lg:col-span-4 space-y-6">
//           <section className="p-6 rounded-3xl bg-zinc-900/50 border border-white/10">
//             <div className="flex justify-between items-center mb-6">
//                <h2 className="text-xl font-bold">Demo Workflow</h2>
//                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
//                   <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
//                   SIMULATION MODE
//                </div>
//             </div>
            
//             <div className="space-y-4">
//               <StepIndicator num={1} title="Annotation" desc="Seed point on cell nuclei." active={step <= 2} done={step > 2} />
//               <StepIndicator num={2} title="Spatial Inference" desc="Propagating manifold." active={step === 3} done={step > 3} />
//               <StepIndicator num={3} title="Result Grid" desc="Autonomous segmentation." active={step === 4} done={false} />
//             </div>

//             {step === 4 && (
//               <button onClick={() => {setStep(1); setIsAnnotated(false);}} className="w-full mt-8 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-medium border border-white/5 transition-colors">
//                 Reset Demo
//               </button>
//             )}
//           </section>

//           <section className="p-6 rounded-3xl bg-zinc-900/30 border border-white/5 font-mono text-[10px] text-zinc-500 overflow-hidden">
//              <p className="text-zinc-400 mb-2 uppercase font-bold tracking-widest">Inference Logs</p>
//              <p>{">"} Loading physics_engine_v4.bin</p>
//              <p>{">"} Concept: Fluorescence_Cell_Manifold</p>
//              <p className={step >= 3 ? "text-blue-400" : ""}>{step >= 3 ? "> [RUNNING] Mapping spatial relations..." : "> Awaiting input..."}</p>
//           </section>
//         </div>

//         {/* Right Viewport */}
//         <div className="lg:col-span-8">
//           <div className="relative aspect-video rounded-[2rem] bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl">
            
//             <AnimatePresence mode="wait">
//               {/* STAGE 1 & 2: Annotation View */}
//               {(step === 1 || step === 2) && (
//                 <motion.div 
//                   key="annotate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                   className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
//                   style={{ backgroundImage: `url(${MAIN_IMAGE})` }}
//                 >
//                   <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                  
//                   <div className="relative z-10 text-center">
//                     {!isAnnotated ? (
//                       <motion.div 
//                         whileHover={{ scale: 1.05 }}
//                         onClick={() => {setIsAnnotated(true); setStep(2);}}
//                         className="cursor-crosshair p-12 rounded-full border-2 border-dashed border-white/30 hover:border-blue-500/50 transition-all group"
//                       >
//                         <MousePointer2 className="text-white mx-auto mb-2 group-hover:text-blue-400 transition-colors" />
//                         <span className="text-sm font-medium text-zinc-200">Click to seed cell nucleus</span>
//                       </motion.div>
//                     ) : (
//                       <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center">
//                         <div className="w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,1)] mb-4 animate-pulse border-2 border-white" />
//                         <p className="text-blue-400 font-black mb-6 tracking-widest text-xs uppercase">Point Captured</p>
//                         <button onClick={startInference} className="px-8 py-3 rounded-full bg-white text-black font-bold shadow-2xl hover:bg-blue-50 transition-all">
//                            Run Inference
//                         </button>
//                       </motion.div>
//                     )}
//                   </div>
//                 </motion.div>
//               )}

//               {/* STAGE 3: Processing */}
//               {step === 3 && (
//                 <motion.div key="processing" className="absolute inset-0 flex flex-col items-center justify-center bg-black">
//                    <Cpu size={48} className="text-blue-500 animate-pulse mb-6" />
//                    <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
//                       <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 2.5 }} className="w-full h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
//                    </div>
//                    <p className="mt-4 text-zinc-500 text-[10px] uppercase tracking-[0.3em]">Solving Geometry</p>
//                 </motion.div>
//               )}

//               {/* STAGE 4: The Result Grid */}
//               {step === 4 && (
//                 <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 p-4 overflow-y-auto bg-zinc-950">
//                   <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
//                     {GRID_IMAGES.map((img, i) => (
//                       <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
//                         className="relative aspect-square rounded-xl bg-zinc-900 border border-white/5 overflow-hidden group"
//                       >
//                          <img src={img} className="w-full h-full object-cover" alt="Cell scan" />
//                          <div className="absolute inset-0 bg-blue-500/30 mix-blend-overlay group-hover:bg-blue-400/50 transition-colors" />
//                          <div className="absolute inset-0 border-2 border-blue-500/20 group-hover:border-blue-400/60 rounded-xl" />
//                          <div className="absolute top-2 right-2"><CheckCircle size={14} className="text-blue-400" /></div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* SIMULATION NOTICE */}
//           <div className="mt-6 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-4">
//              <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
//              <div>
//                 <h4 className="text-amber-500 text-sm font-bold">Simulation Active</h4>
//                 <p className="text-zinc-400 text-xs leading-relaxed mt-1 italic">
//                    Using simulation right now since GPU Clusters are not available for public demo. 
//                    Real-time clusters are provisioned exclusively for enterprise partners during pilot phases.
//                 </p>
//              </div>
//           </div>
          
//           <div className="mt-8 grid grid-cols-4 gap-4">
//              <Stat label="Recall" value="99.4%" />
//              <Stat label="Speed" value="~42ms" />
//              <Stat label="Cluster" value="PRIVATE" />
//              <Stat label="Mode" value="SIM" />
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// function StepIndicator({ num, title, desc, active, done }: { num: number, title: string, desc: string, active: boolean, done: boolean }) {
//   return (
//     <div className={`flex gap-4 p-4 rounded-2xl transition-all border ${active ? 'bg-white/5 border-white/10' : 'opacity-30 border-transparent'}`}>
//       <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${done ? 'bg-blue-500 border-blue-500' : 'border-white/20'}`}>
//         {done ? <CheckCircle size={16} className="text-black" /> : <span className="text-xs font-bold">{num}</span>}
//       </div>
//       <div>
//         <h4 className="font-bold text-sm">{title}</h4>
//         <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-tight">{desc}</p>
//       </div>
//     </div>
//   )
// }

// function Stat({ label, value }: { label: string, value: string }) {
//   return (
//     <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 text-center">
//       <div className="text-[8px] text-zinc-600 uppercase tracking-widest font-black mb-1">{label}</div>
//       <div className="text-sm font-bold text-zinc-300">{value}</div>
//     </div>
//   )
// }

"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  MousePointer2, 
  Cpu, 
  CheckCircle, 
  Play, 
  Activity,
  AlertCircle,
  Terminal
} from "lucide-react"

// --- Local Image Assets ---
const MAIN_IMAGE = "./segmented_images/segmented_x.jpg" // Using 30 as requested
const GRID_IMAGES = [
  "./segmented_images/segmented_1.png",
  "./segmented_images/segmented_2.png",
  "./segmented_images/segmented_3.png",
  "./segmented_images/segmented_4.png",
  "./segmented_images/segmented_5.png",
  "./segmented_images/segmented_6.png",
  "./segmented_images/segmented_7.png",
  "./segmented_images/segmented_8.png",
  "./segmented_images/segmented_9.png",
  "./segmented_images/segmented_10.png",
  "./segmented_images/segmented_11.png",
  "./segmented_images/segmented_12.png"
]

export default function DemoPage() {
  const [step, setStep] = useState(1) // 1: Initial, 2: Annotated, 3: Processing, 4: Grid
  const [isAnnotated, setIsAnnotated] = useState(false)

  const startInference = () => {
    setStep(3)
    setTimeout(() => setStep(4), 2500)
  }

  return (
    <div className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-blue-500">
      
      {/* Top Nav */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
      
        <div className="flex items-center gap-4">
          <a href="/"><span className="font-bold tracking-tighter text-xl">SEGMENTUM</span></a>
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold uppercase tracking-widest">
            <Activity size={12} className="animate-pulse" /> Research Preview 0.1
          </div>
        </div>
        <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all">
          Request Cluster Access
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-12">
        
        {/* Left Control Panel */}
        <div className="lg:col-span-4 space-y-6">
          <section className="p-6 rounded-3xl bg-zinc-900/50 border border-white/10">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl font-bold">Demo Workflow</h2>
               <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  SIMULATION MODE
               </div>
            </div>
            
            <div className="space-y-4">
              <StepIndicator num={1} title="Annotation" desc="Tumor Bulge in Scan." active={step <= 2} done={step > 2} />
              <StepIndicator num={2} title="Spatial Inference" desc="Propagating manifold." active={step === 3} done={step > 3} />
              <StepIndicator num={3} title="Result Grid" desc="Autonomous segmentation." active={step === 4} done={false} />
            </div>

            {step === 4 && (
              <button onClick={() => {setStep(1); setIsAnnotated(false);}} className="w-full mt-8 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-medium border border-white/5 transition-colors">
                Reset Demo
              </button>
            )}
          </section>

          <section className="p-6 rounded-3xl bg-zinc-900/30 border border-white/5 font-mono text-[10px] text-zinc-500 overflow-hidden">
             <p className="text-zinc-400 mb-2 uppercase font-bold tracking-widest">Inference Logs</p>
             <p>{">"} Loaded seg_v3-485.bin</p>
             <p>{">"} Spatial Awareness Concept: Tumor & Necrosis</p>
             <p className={step >= 3 ? "text-blue-400" : ""}>{step >= 3 ? "> [FINISHED] Mapping spatial relations..." : "> Awaiting input..."}</p>
          </section>
        </div>

        {/* Right Viewport */}
        <div className="lg:col-span-8">
          <div className="relative aspect-video rounded-[2rem] bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl">
            
            <AnimatePresence mode="wait">
              {/* STAGE 1 & 2: Annotation View */}
              {(step === 1 || step === 2) && (
                <motion.div 
                  key="annotate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
                  style={{ backgroundImage: `url(${MAIN_IMAGE})` }}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                  
                  <div className="relative z-10 text-center">
                    {!isAnnotated ? (
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {setIsAnnotated(true); setStep(2);}}
                        className="cursor-crosshair p-12 rounded-full border-2 border-dashed border-white/30 hover:border-blue-500/50 transition-all group"
                      >
                        <MousePointer2 className="text-white mx-auto mb-2 group-hover:text-blue-400 transition-colors" />
                        <span className="text-sm font-medium text-zinc-200">Click to annotate tumor bulge</span>
                      </motion.div>
                    ) : (
                      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,1)] mb-4 animate-pulse border-2 border-white" />
                        <p className="text-blue-400 font-black mb-6 tracking-widest text-xs uppercase">Point Captured</p>
                        <button onClick={startInference} className="px-8 py-3 rounded-full bg-white text-black font-bold shadow-2xl hover:bg-blue-50 transition-all">
                           Run Inference
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* STAGE 3: Processing */}
              {step === 3 && (
                <motion.div key="processing" className="absolute inset-0 flex flex-col items-center justify-center bg-black">
                   <Cpu size={48} className="text-blue-500 animate-pulse mb-6" />
                   <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 2.5 }} className="w-full h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
                   </div>
                   <p className="mt-4 text-zinc-500 text-[10px] uppercase tracking-[0.3em]">Solving Geometry</p>
                </motion.div>
              )}

              {/* STAGE 4: The Result Grid */}
              {step === 4 && (
                <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 p-4 overflow-y-auto bg-zinc-950">
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {GRID_IMAGES.map((img, i) => (
                      <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                        className="relative aspect-square rounded-xl bg-zinc-900 border border-white/5 overflow-hidden group"
                      >
                         <img src={img} className="w-full h-full object-cover" alt="Cell scan" />
                         <div className="absolute inset-0 bg-blue-500/30 mix-blend-overlay group-hover:bg-blue-400/50 transition-colors" />
                         <div className="absolute inset-0 border-2 border-blue-500/20 group-hover:border-blue-400/60 rounded-xl" />
                         <div className="absolute top-2 right-2"><CheckCircle size={14} className="text-blue-400" /></div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SIMULATION NOTICE */}
          <div className="mt-6 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-4">
             <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
             <div>
                <h4 className="text-amber-500 text-sm font-bold">Simulation Active</h4>
                <p className="text-zinc-400 text-xs leading-relaxed mt-1 italic">
                   Using simulation right now since GPU Clusters are not available for public demo. 
                   Real-time clusters are provisioned exclusively for enterprise partners during pilot phases.
                </p>
             </div>
          </div>
          
          <div className="mt-8 grid grid-cols-4 gap-4">
             <Stat label="Confidence" value="98.4%" />
             <Stat label="Speed" value="~42ms" />
             <Stat label="Cluster" value="A100x8" />
             <Stat label="Mode" value="SIM" />
          </div>
        </div>
      </main>
    </div>
  )
}

function StepIndicator({ num, title, desc, active, done }: { num: number, title: string, desc: string, active: boolean, done: boolean }) {
  return (
    <div className={`flex gap-4 p-4 rounded-2xl transition-all border ${active ? 'bg-white/5 border-white/10' : 'opacity-30 border-transparent'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${done ? 'bg-blue-500 border-blue-500' : 'border-white/20'}`}>
        {done ? <CheckCircle size={16} className="text-black" /> : <span className="text-xs font-bold">{num}</span>}
      </div>
      <div>
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-tight">{desc}</p>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 text-center">
      <div className="text-[8px] text-zinc-600 uppercase tracking-widest font-black mb-1">{label}</div>
      <div className="text-sm font-bold text-zinc-300">{value}</div>
    </div>
  )
}