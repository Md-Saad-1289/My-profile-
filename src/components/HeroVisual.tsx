import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Database, Server, CheckCircle2, Cpu, GitBranch, ShieldCheck } from 'lucide-react';

type Tab = 'api' | 'schema' | 'metrics';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('api');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow pulsing */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/25 via-teal-500/15 to-indigo-500/25 rounded-2xl blur-xl pointer-events-none"
      />

      {/* Main Terminal/Dashboard Container */}
      <div className="relative rounded-2xl bg-neutral-900/90 dark:bg-neutral-900/95 border border-neutral-800/90 shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-xl">
        {/* Window Topbar */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-950/70 border-b border-neutral-800/80">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-neutral-300 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              production.core.sys
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-200 bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700">
            <GitBranch className="w-3 h-3 text-emerald-400" />
            <span>main @ 9e4f21</span>
          </div>
        </div>

        {/* View Switcher Tabs with Layout Animation */}
        <div className="flex items-center gap-1 px-3 pt-2 bg-neutral-950/40 border-b border-neutral-800/60 text-xs font-mono">
          <button
            onClick={() => setActiveTab('api')}
            className={`relative px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'api' ? 'text-emerald-300 font-semibold' : 'text-neutral-300 hover:text-white font-medium'
            }`}
          >
            {activeTab === 'api' && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-neutral-900 border-t border-x border-neutral-800 rounded-t-md -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <Server className="w-3.5 h-3.5" />
            <span>server.ts</span>
          </button>

          <button
            onClick={() => setActiveTab('schema')}
            className={`relative px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'schema' ? 'text-emerald-300 font-semibold' : 'text-neutral-300 hover:text-white font-medium'
            }`}
          >
            {activeTab === 'schema' && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-neutral-900 border-t border-x border-neutral-800 rounded-t-md -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <Database className="w-3.5 h-3.5" />
            <span>models/Project.ts</span>
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`relative px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'metrics' ? 'text-emerald-300 font-semibold' : 'text-neutral-300 hover:text-white font-medium'
            }`}
          >
            {activeTab === 'metrics' && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-neutral-900 border-t border-x border-neutral-800 rounded-t-md -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <Cpu className="w-3.5 h-3.5" />
            <span>telemetry.live</span>
          </button>
        </div>

        {/* Tab Content Area with Smooth Animation */}
        <div className="p-4 sm:p-5 font-mono text-xs text-neutral-200 min-h-[260px] leading-relaxed select-none overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'api' && (
              <motion.div
                key="api"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-1 text-[11px] sm:text-xs"
              >
                <div className="text-emerald-400/90 font-medium">// Express + Node.js High-Throughput Route</div>
                <div>
                  <span className="text-purple-400 font-semibold">router</span>
                  <span className="text-neutral-200">.</span>
                  <span className="text-blue-400 font-semibold">post</span>
                  <span className="text-neutral-200">(</span>
                  <span className="text-emerald-300 font-medium">'/api/v1/projects/deploy'</span>
                  <span className="text-neutral-200">, </span>
                  <span className="text-yellow-300 font-semibold">authMiddleware</span>
                  <span className="text-neutral-200">, </span>
                  <span className="text-purple-400 font-semibold">async </span>
                  <span className="text-neutral-200">(req, res) =&gt; &#123;</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-400 font-semibold">const </span>
                  <span className="text-white font-medium">&#123; projectId, env &#125; = </span>
                  <span className="text-neutral-200">req.body;</span>
                </div>
                <div className="pl-4 text-emerald-400/90 font-medium">// Initialize cluster build pipeline</div>
                <div className="pl-4">
                  <span className="text-purple-400 font-semibold">const </span>
                  <span className="text-white font-medium">result = </span>
                  <span className="text-purple-400 font-semibold">await </span>
                  <span className="text-blue-400 font-semibold">deployPipeline</span>
                  <span className="text-neutral-200">(&#123;</span>
                </div>
                <div className="pl-8">
                  <span className="text-neutral-200">id: projectId,</span>
                </div>
                <div className="pl-8">
                  <span className="text-neutral-200">region: </span>
                  <span className="text-emerald-300 font-medium">'ap-south-1'</span>
                  <span className="text-neutral-200">,</span>
                </div>
                <div className="pl-8">
                  <span className="text-neutral-200">status: </span>
                  <span className="text-emerald-300 font-medium">'healthy'</span>
                </div>
                <div className="pl-4">
                  <span className="text-neutral-200">&#125;);</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-400 font-semibold">return </span>
                  <span className="text-neutral-200">res.</span>
                  <span className="text-blue-400 font-semibold">status</span>
                  <span className="text-neutral-200">(</span>
                  <span className="text-amber-400 font-semibold">201</span>
                  <span className="text-neutral-200">).</span>
                  <span className="text-blue-400 font-semibold">json</span>
                  <span className="text-neutral-200">(&#123; success: </span>
                  <span className="text-purple-400 font-semibold">true</span>
                  <span className="text-neutral-200">, result &#125;);</span>
                </div>
                <div>
                  <span className="text-neutral-200">&#125;);</span>
                </div>
                <div className="pt-2 flex items-center gap-1 text-emerald-300 font-medium">
                  <span className="text-neutral-400">$</span>
                  <span>ready on :3000 — 0 errors</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-1.5 h-3 bg-emerald-400 ml-1"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'schema' && (
              <motion.div
                key="schema"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-1 text-[11px] sm:text-xs"
              >
                <div className="text-emerald-400/90 font-medium">// MongoDB Mongoose Schema Definition</div>
                <div>
                  <span className="text-purple-400 font-semibold">const </span>
                  <span className="text-yellow-300 font-semibold">ProjectSchema </span>
                  <span className="text-neutral-200">= </span>
                  <span className="text-purple-400 font-semibold">new </span>
                  <span className="text-blue-400 font-semibold">Schema</span>
                  <span className="text-neutral-200">(&#123;</span>
                </div>
                <div className="pl-4">
                  <span className="text-white font-medium">name: </span>
                  <span className="text-neutral-200">&#123; type: </span>
                  <span className="text-blue-400 font-semibold">String</span>
                  <span className="text-neutral-200">, required: </span>
                  <span className="text-purple-400 font-semibold">true</span>
                  <span className="text-neutral-200">, trim: </span>
                  <span className="text-purple-400 font-semibold">true</span>
                  <span className="text-neutral-200"> &#125;,</span>
                </div>
                <div className="pl-4">
                  <span className="text-white font-medium">category: </span>
                  <span className="text-neutral-200">&#123; type: </span>
                  <span className="text-blue-400 font-semibold">String</span>
                  <span className="text-neutral-200">, enum: [</span>
                  <span className="text-emerald-300 font-medium">'saas'</span>
                  <span className="text-neutral-200">, </span>
                  <span className="text-emerald-300 font-medium">'utility'</span>
                  <span className="text-neutral-200">, </span>
                  <span className="text-emerald-300 font-medium">'system'</span>
                  <span className="text-neutral-200">] &#125;,</span>
                </div>
                <div className="pl-4">
                  <span className="text-white font-medium">status: </span>
                  <span className="text-neutral-200">&#123; type: </span>
                  <span className="text-blue-400 font-semibold">String</span>
                  <span className="text-neutral-200">, default: </span>
                  <span className="text-emerald-300 font-medium">'active'</span>
                  <span className="text-neutral-200"> &#125;,</span>
                </div>
                <div className="pl-4">
                  <span className="text-white font-medium">clusterHealth: </span>
                  <span className="text-neutral-200">&#123; latencyMs: </span>
                  <span className="text-blue-400 font-semibold">Number</span>
                  <span className="text-neutral-200">, uptime: </span>
                  <span className="text-blue-400 font-semibold">Number</span>
                  <span className="text-neutral-200"> &#125;</span>
                </div>
                <div>
                  <span className="text-neutral-200">&#125;, &#123; timestamps: </span>
                  <span className="text-purple-400 font-semibold">true</span>
                  <span className="text-neutral-200"> &#125;);</span>
                </div>
                <div className="pt-2 text-emerald-300 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Compound indexing verified (optimized query plan)</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'metrics' && (
              <motion.div
                key="metrics"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3 pt-1"
              >
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-200 text-xs font-semibold">Node Cluster Health</span>
                  <span className="text-emerald-300 flex items-center gap-1 text-[11px] font-mono font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 99.98% Uptime
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-neutral-950/70 border border-neutral-800">
                    <div className="text-[10px] text-neutral-300 uppercase font-mono font-bold">Avg API Latency</div>
                    <div className="text-base font-bold text-white mt-0.5 font-mono">14.2 ms</div>
                    <div className="text-[10px] text-emerald-300 mt-0.5 font-mono font-medium">Fast response tier</div>
                  </div>
                  <div className="p-2.5 rounded bg-neutral-950/70 border border-neutral-800">
                    <div className="text-[10px] text-neutral-300 uppercase font-mono font-bold">MERN Architecture</div>
                    <div className="text-base font-bold text-white mt-0.5 font-mono">SSR + REST</div>
                    <div className="text-[10px] text-teal-300 mt-0.5 font-mono font-medium">Zero-leakage schemas</div>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-neutral-950/70 border border-neutral-800 text-[11px] flex items-center justify-between font-mono">
                  <span className="text-neutral-300 font-medium">Build Container:</span>
                  <span className="text-emerald-300 font-semibold">Docker · Optimized SPA / Express</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Status Ribbon */}
        <div className="px-4 py-2.5 bg-neutral-950/80 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-300">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-300 font-semibold">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>MongoDB v7.0</span>
            </span>
            <span className="hidden sm:inline text-neutral-500">|</span>
            <span className="hidden sm:inline text-neutral-200 font-medium">Node.js 22 LTS</span>
          </div>
          <div className="text-neutral-300">
            Region: <span className="text-white font-bold">South Asia</span>
          </div>
        </div>
      </div>

      {/* Floating Mini Overlay Card 1: Production Ready */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 -left-3 sm:-left-6 p-3 rounded-xl bg-neutral-950/95 border border-neutral-800 shadow-xl backdrop-blur-md flex items-center gap-3 max-w-[220px]"
      >
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
          <Terminal className="w-4 h-4" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-white truncate">SaaS & Systems</span>
          <span className="text-[11px] text-emerald-300 font-mono font-medium">Clean Architecture</span>
        </div>
      </motion.div>

      {/* Floating Mini Overlay Card 2: Security & Scalability */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden sm:flex absolute -top-4 -right-3 sm:-right-5 p-2.5 rounded-xl bg-neutral-950/95 border border-neutral-800 shadow-xl backdrop-blur-md items-center gap-2.5"
      >
        <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-bold text-white font-mono">Production Grade</span>
          <span className="text-[10px] text-neutral-300 font-mono font-medium">Secure & Scalable</span>
        </div>
      </motion.div>
    </div>
  );
};
