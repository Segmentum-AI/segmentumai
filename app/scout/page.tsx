"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Camera, 
  Search, 
  ShoppingBag, 
  Sparkles, 
  BadgePercent, 
  ArrowRight,
  Smartphone,
  Check
} from "lucide-react"

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function Scout() {
  return (
    <div className="bg-white text-black selection:bg-indigo-500 selection:text-white min-h-screen font-sans">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter italic">SCOUT</div>
        <a href="/">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold bg-indigo-600 text-white px-3 py-1 rounded-full">Powered by Segmentum</span>
        </div>
        </a>
      </nav>

      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="pt-16 pb-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
                Stop searching. <br />
                <span className="text-indigo-600">Start finding.</span>
              </h1>
              <p className="text-xl text-zinc-500 max-w-lg mb-10 leading-relaxed">
                The internet is too big to shop manually. Scout uses advanced spatial intelligence to identify products from a single photo and find you the one deal that actually matters.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-black text-white font-bold hover:scale-105 transition-transform cursor-pointer">
                  <Smartphone size={20} />
                  <span>Coming Soon</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6 text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-black">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">iOS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-black">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">Android</span>
                </div>
              </div>
            </motion.div>

            {/* App Mockup Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              className="relative aspect-[4/5] bg-zinc-100 rounded-[3rem] border-[12px] border-zinc-900 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent p-12">
                <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-zinc-200 rounded-xl flex items-center justify-center"><Camera size={20}/></div>
                      <div>
                        <div className="h-3 w-24 bg-zinc-200 rounded mb-2" />
                        <div className="h-2 w-16 bg-zinc-100 rounded" />
                      </div>
                   </div>
                   <div className="h-40 w-full bg-zinc-50 rounded-2xl flex items-center justify-center italic text-zinc-300 font-bold">Product Identified</div>
                </div>
                <div className="bg-indigo-600 text-white rounded-3xl p-6 shadow-xl transform translate-x-12">
                   <div className="text-xs font-bold uppercase mb-2 opacity-80">Powered by Segmentum</div>
                   <div className="text-2xl font-black mb-1">$42.00</div>
                   <div className="text-sm font-medium mb-4">Cheapest Renewed @ eBay</div>
                   <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold">Buy Now</button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              <FeatureCard 
                icon={<Camera className="text-indigo-600" />}
                title="Snap or Describe"
                desc="Take a photo of a sneaker on the street or just type 'Blue vintage lamp'. We know exactly what you're looking for."
              />
              
              <FeatureCard 
                icon={<Sparkles className="text-indigo-600" />}
                title="No More Link Lists"
                desc="Scout doesn't give you 50 tabs to compare. We analyze price, shipping, and condition to say: 'THIS is the one to buy.'"
              />

              <FeatureCard 
                icon={<BadgePercent className="text-indigo-600" />}
                title="Exclusive Scout Rates"
                desc="We negotiate direct discounts with platforms. Using Scout isn't just faster—it's cheaper than buying direct."
              />

            </div>
          </div>
        </section>

        {/* ================= THE VERDICT SECTION ================= */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">
              "Is this actually a good deal?"
            </h2>
            <p className="text-xl text-zinc-500 mb-12">
              Scout looks across every major platform—Amazon, eBay, Grailed, StockX, and 100+ others—to find new, renewed, and pre-owned options. We do the math so you don't have to.
            </p>
            <div className="inline-flex gap-8 items-center py-4 px-8 bg-zinc-100 rounded-full grayscale opacity-50 overflow-hidden">
               <span className="font-bold">AMAZON</span>
               <span className="font-bold">EBAY</span>
               <span className="font-bold">GOAT</span>
               <span className="font-bold">WALMART</span>
               <span className="font-bold">ANY RETAILER</span>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-6">Coming Soon.</h2>
              <p className="text-indigo-100 text-xl mb-12 font-medium">Join the next online-shopping revolution</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="flex items-center justify-center gap-2 px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg shadow-xl hover:bg-zinc-100 transition-colors">
                   <Smartphone /> App Store
                </button>
                <button className="flex items-center justify-center gap-2 px-10 py-5 bg-black text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-zinc-900 transition-colors">
                   <Search /> Google Play
                </button>
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl" />
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 text-center text-zinc-400 font-medium text-sm">
        <div className="mb-4">© 2026 Scout Shopping AI. Powered by Segmentum.</div>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-black">Twitter</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="#" className="hover:text-black">Support</a>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      {...fadeUp}
      className="p-10 rounded-[2.5rem] bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8">
        {/* {React.cloneElement(icon as React.ReactElement, { size: 28 })} */}
      </div>
      <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
      <p className="text-zinc-500 leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  )
}