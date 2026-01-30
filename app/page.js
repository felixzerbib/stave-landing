'use client';

import { useState } from 'react';
import { ArrowRight, Shield, Brain, Lock, TrendingUp, AlertTriangle, ChevronRight, Upload, X, FileText, CheckCircle } from 'lucide-react';

export default function Home() {
  const [view, setView] = useState('home');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Global Navigation */}
      <nav className="border-b border-zinc-800 bg-zinc-950/95 backdrop-blur fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-bold tracking-tighter cursor-pointer hover:text-orange-500 transition-colors"
            onClick={() => setView('home')}
          >
            STAVE
          </div>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setView('home')}
              className={`font-medium transition-colors ${view === 'home' ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-100'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView('methodology')}
              className={`font-medium transition-colors ${view === 'methodology' ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-100'}`}
            >
              The Methodology
            </button>
            <button 
              onClick={() => setView('audit')}
              className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors"
            >
              Shadow Audit
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {view === 'home' && <HomePage setView={setView} />}
      {view === 'methodology' && <MethodologyPage />}
      {view === 'audit' && <AuditPage />}

      {/* Global Footer */}
      <Footer setShowPrivacyModal={setShowPrivacyModal} />

      {/* Privacy Modal */}
      {showPrivacyModal && <PrivacyModal onClose={() => setShowPrivacyModal(false)} />}
    </div>
  );
}

// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================
function HomePage({ setView }) {
  return (
    <>
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
                onClick={() => setView('audit')}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors flex items-center gap-2 group"
              >
                Request Shadow Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setView('methodology')}
                className="px-8 py-4 border border-zinc-700 hover:border-zinc-600 text-zinc-300 font-medium transition-colors"
              >
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
    </>
  );
}

// ============================================================================
// METHODOLOGY PAGE COMPONENT
// ============================================================================
function MethodologyPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 bg-orange-600/10 border border-orange-600/20 text-orange-500 text-sm font-mono mb-6">
            PUBLIC METHODOLOGY
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            The Three Pillars<br />
            of Margin Expansion
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Our system combines automated compliance, combinatorial optimization, and private liquidity 
            to unlock hidden value in your procurement operations. Here&apos;s exactly how it works.
          </p>
        </div>
      </section>

      {/* The Sentinel - Detailed */}
      <section className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-10 h-10 text-orange-500" />
                <h2 className="text-4xl font-bold">Pillar I: The Sentinel</h2>
              </div>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Automated regulatory compliance and contract risk assessment using natural language processing 
                and chemical regulatory databases.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-orange-500">Core Capabilities</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-orange-600 pl-4">
                  <div className="font-bold mb-1">MoCRA/EPA Validation</div>
                  <div className="text-sm text-zinc-400">
                    Real-time verification against FDA Modernization of Cosmetics Regulation Act and EPA TSCA inventory
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Contract Term Extraction</div>
                  <div className="text-sm text-zinc-400">
                    NLP-based extraction of payment terms, liability clauses, and force majeure conditions
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Risk Scoring</div>
                  <div className="text-sm text-zinc-400">
                    Quantified risk assessment based on supplier certification status and regulatory flags
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-orange-500">Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="text-3xl font-bold text-orange-500">6-8 weeks</div>
                  <div className="text-sm text-zinc-400">Eliminated post-quote compliance delays</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-zinc-400">Regulatory coverage before quote acceptance</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-zinc-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2">sentinel@stave:~/validation</span>
              </div>
              <div className="space-y-2 text-zinc-400">
                <div><span className="text-orange-500">$</span> validate_quote.sh QUOTE_2847</div>
                <div className="pl-4 text-green-400">→ Checking CAS Registry Numbers...</div>
                <div className="pl-4">→ Titanium Dioxide [13463-67-7]: VALIDATED</div>
                <div className="pl-4">→ Propylene Glycol [57-55-6]: VALIDATED</div>
                <div className="pl-4 text-green-400">→ EPA TSCA: All substances listed ✓</div>
                <div className="pl-4 text-green-400">→ MoCRA: No prohibited ingredients ✓</div>
                <div className="mt-3 pl-4 text-yellow-400">→ Analyzing contract terms...</div>
                <div className="pl-4">→ Payment: Net 60 (FLAGGED: Above 45 day threshold)</div>
                <div className="pl-4">→ Liability Cap: $500K (ACCEPTABLE)</div>
                <div className="pl-4 text-green-400">→ Force Majeure: Standard clause ✓</div>
                <div className="mt-3 text-green-400 font-bold">OVERALL RISK SCORE: 2.3/10 (LOW)</div>
                <div className="text-zinc-600">→ Quote cleared for optimization pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Synapse - Detailed */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-xs font-mono text-zinc-500 mb-4">COMBINATORIAL OPTIMIZATION ENGINE</div>
              <div className="space-y-4">
                <div className="bg-zinc-900 border border-zinc-700 p-4">
                  <div className="text-xs text-zinc-500 mb-2">INPUT: PENDING QUOTES</div>
                  <div className="space-y-2 text-sm">
                    <div>Quote A: TiO₂ (50 tons) @ $3,600/ton = $180,000</div>
                    <div>Quote B: TiO₂ (65 tons) @ $3,692/ton = $240,000</div>
                    <div>Quote C: Glycerin (30 tons) @ $1,200/ton = $36,000</div>
                  </div>
                </div>
                
                <div className="text-center text-2xl text-orange-500">↓</div>
                
                <div className="bg-zinc-900 border border-zinc-700 p-4">
                  <div className="text-xs text-zinc-500 mb-2">SYNAPSE ANALYSIS</div>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-green-400">→ Volume bundling detected (TiO₂)</div>
                    <div className="text-green-400">→ Combined volume: 115 tons</div>
                    <div className="text-green-400">→ Tier discount threshold: 100+ tons</div>
                    <div className="text-orange-500">→ Negotiated rate: $2,995/ton (18% savings)</div>
                  </div>
                </div>
                
                <div className="text-center text-2xl text-orange-500">↓</div>
                
                <div className="bg-gradient-to-r from-orange-600/20 to-orange-600/5 border border-orange-600/30 p-4">
                  <div className="text-xs text-orange-400 mb-2">OPTIMIZED OUTPUT</div>
                  <div className="space-y-2 text-sm">
                    <div className="font-bold">Combined TiO₂: 115 tons @ $2,995/ton = $344,425</div>
                    <div>Glycerin: 30 tons @ $1,200/ton = $36,000</div>
                    <div className="text-green-400 font-bold">Total Savings: $75,575 (16.5%)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-10 h-10 text-orange-500" />
                <h2 className="text-4xl font-bold">Pillar II: The Synapse</h2>
              </div>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Multi-quote combinatorial optimization that identifies volume synergies across simultaneous 
                procurement opportunities before you commit to pricing.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-orange-500">How It Works</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-orange-600 pl-4">
                  <div className="font-bold mb-1">Real-Time Aggregation</div>
                  <div className="text-sm text-zinc-400">
                    All pending quotes are analyzed simultaneously, not in isolation
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Volume Threshold Detection</div>
                  <div className="text-sm text-zinc-400">
                    Identifies when combining orders crosses supplier tier discount thresholds
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Automated Negotiation</div>
                  <div className="text-sm text-zinc-400">
                    API-based supplier integration for instant re-pricing based on combined volume
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Forward-Looking Signals</div>
                  <div className="text-sm text-zinc-400">
                    Incorporates pipeline opportunities (weighted by probability) into volume calculations
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-orange-500">Mathematical Foundation</h3>
              <div className="bg-zinc-950 border border-zinc-800 p-4 font-mono text-sm text-zinc-400">
                <div>Minimize: Σ(Q<sub>i</sub> × P<sub>i</sub>(V<sub>total</sub>))</div>
                <div className="mt-2">Where:</div>
                <div>Q<sub>i</sub> = Quantity for quote i</div>
                <div>P<sub>i</sub>(V) = Price function based on total volume V</div>
                <div>V<sub>total</sub> = Σ Q<sub>j</sub> for all j in material class</div>
                <div className="mt-2 text-orange-500">Subject to compliance constraints from Sentinel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vault - Detailed */}
      <section className="py-20 px-6 bg-zinc-900/30 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-10 h-10 text-orange-500" />
                <h2 className="text-4xl font-bold">Pillar III: The Vault</h2>
              </div>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Zero-knowledge proof private liquidity network enabling anonymous inventory matching 
                without exposing commercially sensitive data.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-orange-500">Privacy-Preserving Architecture</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-orange-600 pl-4">
                  <div className="font-bold mb-1">Cryptographic Matching</div>
                  <div className="text-sm text-zinc-400">
                    ZK-SNARKs enable inventory matching without revealing specific quantities or pricing
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Network Effects Without Data Leakage</div>
                  <div className="text-sm text-zinc-400">
                    Each participant benefits from network liquidity while maintaining complete confidentiality
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Smart Contract Execution</div>
                  <div className="text-sm text-zinc-400">
                    Automated settlement via blockchain for matched trades with escrow protection
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-orange-500">Use Cases</h3>
              <div className="space-y-3">
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="font-bold mb-1">Excess Inventory Matching</div>
                  <div className="text-sm text-zinc-400">
                    Company A has 10 tons excess TiO₂. Company B needs 8 tons. Match occurs without price disclosure.
                  </div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="font-bold mb-1">Spot Market Optimization</div>
                  <div className="text-sm text-zinc-400">
                    Real-time matching of urgent demand with available inventory across the network
                  </div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="font-bold mb-1">Consortium Buying Power</div>
                  <div className="text-sm text-zinc-400">
                    Anonymous aggregation of demand across manufacturers to negotiate better supplier terms
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-xs font-mono text-zinc-500 mb-4">ZERO-KNOWLEDGE PROOF FLOW</div>
              
              <div className="space-y-6">
                <div className="border border-zinc-700 p-4">
                  <div className="text-xs text-orange-500 mb-2">STEP 1: COMMITMENT</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    Manufacturer A commits:<br/>
                    Hash(Material: TiO₂, Qty: 12 tons, Price: ≤$3500/ton)
                  </div>
                </div>

                <div className="border border-zinc-700 p-4">
                  <div className="text-xs text-orange-500 mb-2">STEP 2: MATCHING</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    The Vault finds compatible demand:<br/>
                    Match found (no details revealed)
                  </div>
                </div>

                <div className="border border-zinc-700 p-4">
                  <div className="text-xs text-orange-500 mb-2">STEP 3: PROOF GENERATION</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    ZK-SNARK proves: &quot;I have inventory that satisfies<br/>
                    your requirements&quot; WITHOUT revealing quantity or price
                  </div>
                </div>

                <div className="border border-zinc-700 p-4">
                  <div className="text-xs text-orange-500 mb-2">STEP 4: VERIFICATION</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    Buyer verifies proof is valid<br/>
                    → Trade terms negotiated in encrypted channel
                  </div>
                </div>

                <div className="border border-orange-600/30 bg-orange-600/10 p-4">
                  <div className="text-xs text-orange-400 mb-2">STEP 5: SETTLEMENT</div>
                  <div className="text-sm text-zinc-300 font-mono">
                    Smart contract executes trade<br/>
                    → Escrow released upon delivery confirmation<br/>
                    → Network learns NOTHING about transaction details
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-zinc-500 italic">
                All participants benefit from liquidity without exposing competitive intelligence.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Impact */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">The Compounding Effect</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-4xl font-bold text-orange-500 mb-2">6-8%</div>
              <div className="text-sm text-zinc-400 mb-4">Typical margin expansion from Synapse alone</div>
              <div className="text-xs text-zinc-600">Volume optimization</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-4xl font-bold text-orange-500 mb-2">3-5%</div>
              <div className="text-sm text-zinc-400 mb-4">Additional savings from Vault liquidity matching</div>
              <div className="text-xs text-zinc-600">Network effects</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-4xl font-bold text-orange-500 mb-2">2-4%</div>
              <div className="text-sm text-zinc-400 mb-4">Avoided delays and penalties via Sentinel</div>
              <div className="text-xs text-zinc-600">Risk mitigation</div>
            </div>
          </div>
          <div className="mt-12 text-2xl text-zinc-400">
            Combined potential: <span className="text-orange-500 font-bold">11-17% total margin expansion</span>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// AUDIT PAGE COMPONENT
// ============================================================================
function AuditPage() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [volume, setVolume] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const fileArray = Array.from(files).map(file => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
    }));
    setUploadedFiles(prev => [...prev, ...fileArray]);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Shadow Audit requested for ${company}\nEmail: ${email}\nFiles uploaded: ${uploadedFiles.length}`);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-orange-600/10 border border-orange-600/20 text-orange-500 text-sm font-mono mb-6">
            CONFIDENTIAL ANALYSIS
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Request a Shadow Audit
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Upload 90 days of historical quotes. We&apos;ll show you exactly how much margin 
            you&apos;ve been leaving on the table—no commitment required.
          </p>
        </div>
      </section>

      {/* Drag and Drop Upload */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Step 1: Upload Your Quote History</h2>
          
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
              dragActive 
                ? 'border-orange-500 bg-orange-600/10' 
                : 'border-zinc-700 bg-zinc-900/30 hover:border-zinc-600'
            }`}
          >
            <input
              type="file"
              id="file-upload"
              multiple
              onChange={handleFileInput}
              className="hidden"
              accept=".pdf,.xlsx,.xls,.csv,.docx"
            />
            <Upload className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
            <p className="text-xl font-medium mb-2">
              {dragActive ? 'Drop files here' : 'Drag and drop your quote files'}
            </p>
            <p className="text-zinc-500 mb-4">
              or <label htmlFor="file-upload" className="text-orange-500 hover:text-orange-400 cursor-pointer underline">browse files</label>
            </p>
            <p className="text-sm text-zinc-600">
              Accepts: PDF, Excel, CSV, Word documents
            </p>
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="mt-6 space-y-3">
              <h3 className="text-lg font-medium">Uploaded Files ({uploadedFiles.length})</h3>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium">{file.name}</div>
                      <div className="text-sm text-zinc-500">{file.size}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-zinc-500 hover:text-red-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* High-Friction Intake Form */}
      <section className="py-12 px-6 bg-zinc-900/30 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Step 2: Company Information</h2>
          <p className="text-zinc-400 mb-8">
            We need these details to calibrate our analysis to your specific industry vertical and volume profile.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name *</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  placeholder="Acme Contract Manufacturing"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-orange-600 focus:outline-none text-white placeholder-zinc-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Work Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-orange-600 focus:outline-none text-white placeholder-zinc-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-orange-600 focus:outline-none text-white placeholder-zinc-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Annual Raw Material Volume *</label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-orange-600 focus:outline-none text-white"
                >
                  <option value="">Select range</option>
                  <option value="<5M">Less than $5M</option>
                  <option value="5-25M">$5M - $25M</option>
                  <option value="25-100M">$25M - $100M</option>
                  <option value=">100M">Over $100M</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Primary Product Categories</label>
              <input
                type="text"
                placeholder="e.g., Personal care, Industrial coatings, Food ingredients"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-orange-600 focus:outline-none text-white placeholder-zinc-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Biggest Procurement Challenge</label>
              <textarea
                rows={4}
                placeholder="What keeps you up at night about your current procurement process?"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-orange-600 focus:outline-none text-white placeholder-zinc-500 resize-none"
              ></textarea>
            </div>

            <div className="border-t border-zinc-700 pt-6">
              <div className="flex items-start gap-3 mb-6">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-zinc-400">
                  I authorize Stave to analyze the uploaded quote data under NDA. All data will be processed 
                  in a secure, isolated environment and deleted after analysis unless we proceed to implementation.
                </label>
              </div>

              <button
                type="submit"
                disabled={uploadedFiles.length === 0}
                className={`w-full px-8 py-4 font-medium transition-colors flex items-center justify-center gap-2 group ${
                  uploadedFiles.length === 0
                    ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                    : 'bg-orange-600 hover:bg-orange-700 text-white'
                }`}
              >
                Submit for Shadow Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-zinc-500 mt-4 text-center">
                Typical audit reveals $500K-$2M in annual margin expansion opportunities
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Happens Next</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-bold mb-1">Data Ingestion (24 hours)</div>
                <div className="text-zinc-400 text-sm">
                  Our system extracts material specs, quantities, pricing, and supplier data from your uploads
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-bold mb-1">Synapse Analysis (48 hours)</div>
                <div className="text-zinc-400 text-sm">
                  We run combinatorial optimization across your historical quotes to identify missed opportunities
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-bold mb-1">Results Presentation (Week 2)</div>
                <div className="text-zinc-400 text-sm">
                  Confidential briefing with concrete dollar figures and implementation roadmap
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// FOOTER COMPONENT
// ============================================================================
function Footer({ setShowPrivacyModal }) {
  return (
    <footer className="border-t border-zinc-800 py-12 px-6 bg-zinc-950">
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
              <li><button className="hover:text-orange-500 transition-colors">The Sentinel</button></li>
              <li><button className="hover:text-orange-500 transition-colors">The Synapse</button></li>
              <li><button className="hover:text-orange-500 transition-colors">The Vault</button></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><button className="hover:text-orange-500 transition-colors">About</button></li>
              <li><button className="hover:text-orange-500 transition-colors">Careers</button></li>
              <li><button className="hover:text-orange-500 transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Legal</div>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><button className="hover:text-orange-500 transition-colors">Privacy</button></li>
              <li><button className="hover:text-orange-500 transition-colors">Terms</button></li>
              <li>
                <button 
                  onClick={() => setShowPrivacyModal(true)}
                  className="hover:text-orange-500 transition-colors"
                >
                  Security & Privacy
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-8 pt-8 text-sm text-zinc-600 text-center">
          © 2025 Stave. Building the Hadrian of Chemicals.
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// PRIVACY MODAL COMPONENT
// ============================================================================
function PrivacyModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-zinc-950 border border-zinc-800 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-zinc-950 border-b border-zinc-800 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Security & Privacy</h2>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-500">Data Handling</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              All uploaded quote data is encrypted in transit (TLS 1.3) and at rest (AES-256). 
              Files are processed in isolated compute environments and permanently deleted within 
              30 days unless you explicitly authorize retention for implementation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-500">Zero-Knowledge Architecture</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The Vault uses cryptographic proofs to match inventory without revealing specific 
              quantities, pricing, or supplier identities. Even Stave cannot see the details of 
              matched transactions—only that a match occurred.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-500">Compliance</h3>
            <div className="space-y-2 text-sm text-zinc-400">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>SOC 2 Type II certified</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>GDPR and CCPA compliant</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>Annual third-party penetration testing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>No data shared with third parties without explicit consent</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-500">Access Controls</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Role-based access control (RBAC) ensures only authorized personnel can view your data. 
              All access is logged and auditable. Multi-factor authentication is required for all users.
            </p>
          </div>

          <div className="border-t border-zinc-800 pt-6">
            <p className="text-xs text-zinc-600">
              For detailed security documentation or to request our SOC 2 report, contact security@stave.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
