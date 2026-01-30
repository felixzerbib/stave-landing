'use client';

import { useState } from 'react';
import { ArrowRight, Shield, Brain, Lock, TrendingUp, AlertTriangle, ChevronRight } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Shadow Audit requested for ${company} (${email})`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="border-b border-zinc-800 bg-zinc-950/95 backdrop-blur fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">STAVE</div>
          <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors">
            Request Audit
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-orange-600/10 border border-orange-600/20 text-orange-500 text-sm font-mono mb-6">
              AGENTIC PROCUREMENT ENGINE
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
              Margin Expansion<br />
              Through Forward-<br />
              Looking Volume
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
              The first procurement system that solves the <span className="text-orange-500 font-medium">Simultaneous Sourcing Problem</span>—
              combining all pending quotes to unlock hidden volume synergies before you commit.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors flex items-center gap-2 group"
              >
                Request Shadow Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-zinc-700 hover:border-zinc-600 text-zinc-300 font-medium transition-colors">
                See the Math
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Jim Problem */}
      <section className="py-20 px-6 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                <h2 className="text-4xl font-bold">The $10M Leak</h2>
              </div>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                Meet Jim. VP of Operations at a mid-market contract manufacturer. 
                He quotes 40 projects a month. Each quote is optimized in isolation.
              </p>
              <div className="space-y-4">
                <div className="border-l-2 border-orange-600 pl-4">
                  <div className="text-2xl font-bold text-orange-500 mb-1">15.2%</div>
                  <div className="text-zinc-400">Average margin left on table from fragmented procurement</div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="text-2xl font-bold mb-1">6-8 weeks</div>
                  <div className="text-zinc-400">Time wasted chasing compliance docs after quote acceptance</div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="text-2xl font-bold mb-1">Zero visibility</div>
                  <div className="text-zinc-400">Into volume synergies across simultaneous contracts</div>
                </div>
              </div>
            </div>
            
            {/* Terminal-style visualization */}
            <div className="bg-zinc-950 border border-zinc-800 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-zinc-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2">jim@manufacturer:~/quotes</span>
              </div>
              <div className="space-y-2 text-zinc-400">
                <div><span className="text-orange-500">$</span> quote_project_alpha.sh</div>
                <div className="pl-4">→ Raw material: $180k (isolated pricing)</div>
                <div className="pl-4 text-zinc-600">→ Potential savings: UNKNOWN</div>
                <div className="mt-3"><span className="text-orange-500">$</span> quote_project_beta.sh</div>
                <div className="pl-4">→ Raw material: $240k (isolated pricing)</div>
                <div className="pl-4 text-zinc-600">→ Potential savings: UNKNOWN</div>
                <div className="mt-3"><span className="text-orange-500">$</span> quote_project_gamma.sh</div>
                <div className="pl-4">→ Raw material: $195k (isolated pricing)</div>
                <div className="pl-4 text-zinc-600">→ Potential savings: UNKNOWN</div>
                <div className="mt-4 text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>MARGIN LEAK: ~$92k across 3 quotes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Modules */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Three Modules.<br />One System.</h2>
          <p className="text-zinc-400 text-xl mb-16 max-w-2xl">
            Automated compliance, combinatorial optimization, and private liquidity—
            working in concert to expand your margin before you commit.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* The Sentinel */}
            <div className="border border-zinc-800 bg-zinc-900/30 p-8 hover:border-orange-600/50 transition-colors group">
              <Shield className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">The Sentinel</h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Automated MoCRA/EPA compliance checking and contract auditing. 
                No more manual doc-chasing after the deal is signed.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                  <span>Real-time regulatory validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                  <span>Contract term extraction & risk flagging</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                  <span>Supplier certification tracking</span>
                </li>
              </ul>
            </div>

            {/* The Synapse */}
            <div className="border border-zinc-800 bg-zinc-900/30 p-8 hover:border-orange-600/50 transition-colors group">
              <Brain className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">The Synapse</h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Combinatorial optimization across all pending and active quotes. 
                See volume synergies in real-time, before you lock in pricing.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                  <span>Multi-quote volume bundling</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                  <span>Forward-looking demand signals</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                  <span>Automated supplier negotiation</span>
                </li>
              </ul>
            </div>

            {/* The Vault */}
            <div className="border border-zinc-800 bg-zinc-900/30 p-8 hover:border-orange-600/50 transition-colors group">
              <Lock className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">The Vault</h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Zero-knowledge proof private liquidity network. 
                Match excess inventory and demand without exposing sensitive data.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                  <span>Anonymous inventory matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                  <span>Cryptographically secure transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                  <span>Network effects without data leakage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Logic Viz */}
      <section className="py-20 px-6 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Simultaneous Sourcing Advantage</h2>
          
          <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 p-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Quote A */}
              <div className="bg-zinc-900 border border-zinc-700 p-6">
                <div className="text-xs font-mono text-zinc-500 mb-2">QUOTE_A</div>
                <div className="text-2xl font-bold mb-1">$180,000</div>
                <div className="text-sm text-zinc-400 mb-3">Titanium Dioxide (50 tons)</div>
                <div className="text-xs text-zinc-600">Isolated pricing</div>
              </div>

              {/* Plus Sign */}
              <div className="flex justify-center">
                <div className="text-4xl text-orange-500 font-light">+</div>
              </div>

              {/* Quote B */}
              <div className="bg-zinc-900 border border-zinc-700 p-6">
                <div className="text-xs font-mono text-zinc-500 mb-2">QUOTE_B</div>
                <div className="text-2xl font-bold mb-1">$240,000</div>
                <div className="text-sm text-zinc-400 mb-3">Titanium Dioxide (65 tons)</div>
                <div className="text-xs text-zinc-600">Isolated pricing</div>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center my-6">
              <TrendingUp className="w-8 h-8 text-orange-500" />
            </div>

            {/* Result */}
            <div className="bg-gradient-to-r from-orange-600/20 to-orange-600/5 border border-orange-600/30 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-mono text-orange-400 mb-2">SYNAPSE_OPTIMIZED</div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">$344,400</div>
                  <div className="text-sm text-zinc-300 mb-2">Combined volume (115 tons)</div>
                  <div className="text-xs text-zinc-400">18% tier discount applied automatically</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">+$75,600</div>
                  <div className="text-xs text-zinc-400">Margin expansion</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-zinc-500 font-mono">
              → Traditional approach: $420,000 total cost<br />
              → Stave approach: $344,400 total cost<br />
              → <span className="text-orange-500">Savings: 18.0% ($75,600)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Request a Shadow Audit</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Upload 90 days of historical quotes. We'll show you exactly how much margin 
            you've been leaving on the table—no commitment required.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="space-y-4 mb-6">
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 bg-zinc-900 border border-zinc-700 focus:border-orange-600 focus:outline-none text-white placeholder-zinc-500"
              />
              <input
                type="text"
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="w-full px-6 py-4 bg-zinc-900 border border-zinc-700 focus:border-orange-600 focus:outline-none text-white placeholder-zinc-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors flex items-center justify-center gap-2 group"
            >
              Get Your Shadow Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-zinc-500 mt-4">
              Typical audit reveals $500K-$2M in annual margin expansion opportunities
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold tracking-tighter mb-4">STAVE</div>
              <p className="text-sm text-zinc-500">
                The procurement and liquidity engine for contract manufacturers.
              </p>
            </div>
            <div>
              <div className="font-medium mb-3">Product</div>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-orange-500 transition-colors">The Sentinel</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">The Synapse</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">The Vault</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-3">Company</div>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-orange-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-3">Legal</div>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-sm text-zinc-600 text-center">
            © 2025 Stave. Building the Hadrian of Chemicals.
          </div>
        </div>
      </footer>
    </div>
  );
}
