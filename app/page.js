'use client';

import { useState } from 'react';
import { ArrowRight, Shield, Brain, Lock, TrendingUp, AlertTriangle, ChevronRight, Upload, X, FileText, CheckCircle, Zap, Database } from 'lucide-react';

export default function Home() {
  const [view, setView] = useState('home');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Global Navigation */}
      <nav className="border-b border-zinc-800 bg-zinc-950/95 backdrop-blur fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-bold tracking-tighter cursor-pointer hover:text-atomic-teal transition-colors"
            onClick={() => setView('home')}
          >
            VALENT SYSTEMS
          </div>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setView('home')}
              className={`font-medium transition-colors ${view === 'home' ? 'text-atomic-teal' : 'text-zinc-400 hover:text-zinc-100'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView('methodology')}
              className={`font-medium transition-colors ${view === 'methodology' ? 'text-atomic-teal' : 'text-zinc-400 hover:text-zinc-100'}`}
            >
              Methodology
            </button>
            <button 
              onClick={() => setView('audit')}
              className="px-6 py-2 bg-atomic-teal hover:bg-atomic-teal/90 text-zinc-950 font-bold transition-colors"
            >
              Shadow Audit
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div key={view} className="animate-fadeIn">
        {view === 'home' && <HomePage setView={setView} />}
        {view === 'methodology' && <MethodologyPage />}
        {view === 'audit' && <AuditPage />}
      </div>

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
            <div className="inline-block px-3 py-1 bg-atomic-teal/10 border border-atomic-teal/20 text-atomic-teal text-sm font-mono mb-6">
              THE HADRIAN OF CHEMICALS
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-none">
              Agentic Procurement<br />
              for Specialty<br />
              Chemicals
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
              Valent Systems provides autonomous procurement intelligence and private liquidity networks 
              for mid-market contract manufacturers. We unlock <span className="text-atomic-teal font-mono font-bold">11-17% margin expansion</span> through 
              forward-looking volume optimization.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setView('audit')}
                className="px-8 py-4 bg-atomic-teal hover:bg-atomic-teal/90 text-zinc-950 font-bold transition-colors flex items-center gap-2 group"
              >
                Request Shadow Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setView('methodology')}
                className="px-8 py-4 border border-zinc-700 hover:border-atomic-teal text-zinc-300 font-medium transition-colors"
              >
                The Valent Framework
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CFO-Focus Section */}
      <section className="py-20 px-6 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-atomic-teal" />
                <h2 className="text-4xl font-bold">80% of Your COGS<br />Is Trapped in Silos</h2>
              </div>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                Your CFO sees the aggregate raw material spend. But procurement operates quote-by-quote, 
                each optimized in isolation. The delta between what you <em>could</em> negotiate and what 
                you <em>actually</em> pay is invisible—until now.
              </p>
              <div className="space-y-4">
                <div className="border-l-2 border-atomic-teal pl-4">
                  <div className="text-2xl font-bold text-atomic-teal mb-1 font-mono">$2.3M</div>
                  <div className="text-zinc-400">Average annual margin leak for $50M manufacturers</div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="text-2xl font-bold mb-1 font-mono">40+ quotes/month</div>
                  <div className="text-zinc-400">Each priced independently without cross-quote visibility</div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="text-2xl font-bold mb-1 font-mono">0% synergy capture</div>
                  <div className="text-zinc-400">Volume tier discounts missed when quotes don&apos;t talk to each other</div>
                </div>
              </div>
            </div>
            
            {/* The Quoting Oracle Terminal */}
            <div className="bg-zinc-950 border border-zinc-800 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-zinc-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2">oracle@valent:~/quoting</span>
              </div>
              <div className="space-y-2 text-zinc-400">
                <div><span className="text-atomic-teal">$</span> interrogate_delta.sh</div>
                <div className="pl-4 text-cyan-400">→ Scanning pending quotes...</div>
                <div className="pl-4">→ Quote #2847: TiO₂ (50 tons) @ $3,600/ton</div>
                <div className="pl-4">→ Quote #2851: TiO₂ (65 tons) @ $3,692/ton</div>
                <div className="pl-4 text-cyan-400">→ Scanning active production...</div>
                <div className="pl-4">→ Current PO: TiO₂ (30 tons/month recurring)</div>
                <div className="mt-3 pl-4 text-yellow-400">→ VOLUME TIER ANALYSIS:</div>
                <div className="pl-4">→ Combined volume: 145 tons</div>
                <div className="pl-4">→ Supplier threshold: 100+ tons → 18% discount tier</div>
                <div className="pl-4 text-green-400">→ Current pricing: $420,000</div>
                <div className="pl-4 text-atomic-teal font-bold">→ Valent pricing: $344,400</div>
                <div className="mt-3 text-atomic-teal font-bold">SYNERGY POINT IDENTIFIED: $75,600 (18.0%)</div>
                <div className="text-zinc-600">→ Forwarding to negotiation engine...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Three Pillars.<br />One Autonomous System.</h2>
          <p className="text-zinc-400 text-xl mb-16 max-w-2xl">
            Valent combines compliance automation, combinatorial optimization, and cryptographic liquidity 
            to extract hidden value from your procurement operations.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* The Sentinel */}
            <div className="border border-zinc-800 bg-zinc-900/30 p-8 hover:border-atomic-teal/50 transition-colors group">
              <Shield className="w-12 h-12 text-atomic-teal mb-4" />
              <h3 className="text-2xl font-bold mb-3">The Sentinel</h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Autonomous MoCRA/EPA compliance and contract risk scoring. 
                Eliminates 6-8 weeks of post-quote regulatory delays.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Real-time CAS registry validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>NLP-based contract term extraction</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Quantified risk scoring pre-commit</span>
                </li>
              </ul>
            </div>

            {/* The Synapse */}
            <div className="border border-zinc-800 bg-zinc-900/30 p-8 hover:border-atomic-teal/50 transition-colors group">
              <Brain className="w-12 h-12 text-atomic-teal mb-4" />
              <h3 className="text-2xl font-bold mb-3">The Synapse</h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Multi-quote combinatorial optimizer. Identifies volume synergies across 
                simultaneous opportunities before you commit to pricing.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Real-time cross-quote aggregation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Volume threshold detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Automated supplier re-negotiation</span>
                </li>
              </ul>
            </div>

            {/* The Vault */}
            <div className="border border-zinc-800 bg-zinc-900/30 p-8 hover:border-atomic-teal/50 transition-colors group">
              <Lock className="w-12 h-12 text-atomic-teal mb-4" />
              <h3 className="text-2xl font-bold mb-3">The Vault</h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Zero-knowledge proof liquidity network. Match excess inventory and demand 
                without exposing commercially sensitive data.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Cryptographic inventory matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Network effects without data leakage</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Smart contract settlement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Logic Viz */}
      <section className="py-20 px-6 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Valent Advantage</h2>
          
          <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 p-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Quote A */}
              <div className="bg-zinc-900 border border-zinc-700 p-6">
                <div className="text-xs font-mono text-zinc-500 mb-2">QUOTE_A</div>
                <div className="text-2xl font-bold mb-1 font-mono">$180,000</div>
                <div className="text-sm text-zinc-400 mb-3">Titanium Dioxide (50 tons)</div>
                <div className="text-xs text-zinc-600">Isolated pricing</div>
              </div>

              {/* Plus Sign */}
              <div className="flex justify-center">
                <div className="text-4xl text-atomic-teal font-light">+</div>
              </div>

              {/* Quote B */}
              <div className="bg-zinc-900 border border-zinc-700 p-6">
                <div className="text-xs font-mono text-zinc-500 mb-2">QUOTE_B</div>
                <div className="text-2xl font-bold mb-1 font-mono">$240,000</div>
                <div className="text-sm text-zinc-400 mb-3">Titanium Dioxide (65 tons)</div>
                <div className="text-xs text-zinc-600">Isolated pricing</div>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center my-6">
              <Zap className="w-8 h-8 text-atomic-teal" />
            </div>

            {/* Result */}
            <div className="bg-gradient-to-r from-atomic-teal/20 to-atomic-teal/5 border border-atomic-teal/30 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-mono text-atomic-teal mb-2">VALENT_OPTIMIZED</div>
                  <div className="text-3xl font-bold text-atomic-teal mb-1 font-mono">$344,400</div>
                  <div className="text-sm text-zinc-300 mb-2">Combined volume (115 tons)</div>
                  <div className="text-xs text-zinc-400">18% tier discount applied automatically</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400 font-mono">+$75,600</div>
                  <div className="text-xs text-zinc-400">Margin expansion</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-zinc-500 font-mono">
              → Traditional approach: $420,000 total cost<br />
              → Valent approach: $344,400 total cost<br />
              → <span className="text-atomic-teal font-bold">Synergy Point: 18.0% ($75,600)</span>
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
          <div className="inline-block px-3 py-1 bg-atomic-teal/10 border border-atomic-teal/20 text-atomic-teal text-sm font-mono mb-6">
            VALENT VERIFIED FRAMEWORK
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            The Public<br />
            Methodology
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            How Valent Systems combines autonomous compliance, combinatorial optimization, and 
            cryptographic liquidity to unlock 11-17% margin expansion for specialty chemical manufacturers.
          </p>
        </div>
      </section>

      {/* Pillar I: The Sentinel */}
      <section className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-10 h-10 text-atomic-teal" />
                <h2 className="text-4xl font-bold">Pillar I: The Sentinel</h2>
              </div>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Autonomous regulatory compliance and contract risk assessment engine using natural language 
                processing and chemical regulatory databases.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-atomic-teal">Core Capabilities</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-atomic-teal pl-4">
                  <div className="font-bold mb-1">MoCRA/EPA Validation</div>
                  <div className="text-sm text-zinc-400">
                    Real-time verification against FDA Modernization of Cosmetics Regulation Act and EPA TSCA inventory. 
                    CAS registry number validation with instant flagging of prohibited substances.
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Contract Term Extraction</div>
                  <div className="text-sm text-zinc-400">
                    NLP-based extraction of payment terms, liability clauses, force majeure conditions, and delivery schedules. 
                    Automatic flagging of non-standard terms that increase procurement risk.
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Quantified Risk Scoring</div>
                  <div className="text-sm text-zinc-400">
                    Multi-factor risk assessment based on supplier certification status, regulatory compliance history, 
                    and contract term analysis. Scores normalized to 0-10 scale for CFO-level reporting.
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-atomic-teal">Impact Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="text-3xl font-bold text-atomic-teal font-mono">6-8 weeks</div>
                  <div className="text-sm text-zinc-400">Post-quote compliance delays eliminated</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="text-3xl font-bold text-atomic-teal font-mono">100%</div>
                  <div className="text-sm text-zinc-400">Regulatory coverage pre-commitment</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-zinc-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2">sentinel@valent:~/validation</span>
              </div>
              <div className="space-y-2 text-zinc-400">
                <div><span className="text-atomic-teal">$</span> validate_quote.sh QUOTE_2847</div>
                <div className="pl-4 text-cyan-400">→ Checking CAS Registry Numbers...</div>
                <div className="pl-4">→ Titanium Dioxide [13463-67-7]: VALIDATED</div>
                <div className="pl-4">→ Propylene Glycol [57-55-6]: VALIDATED</div>
                <div className="pl-4 text-green-400">→ EPA TSCA: All substances listed ✓</div>
                <div className="pl-4 text-green-400">→ MoCRA: No prohibited ingredients ✓</div>
                <div className="mt-3 pl-4 text-yellow-400">→ Analyzing contract terms...</div>
                <div className="pl-4">→ Payment: Net 60 (FLAGGED: Above 45 day threshold)</div>
                <div className="pl-4">→ Liability Cap: $500K (ACCEPTABLE)</div>
                <div className="pl-4 text-green-400">→ Force Majeure: Standard clause ✓</div>
                <div className="mt-3 text-atomic-teal font-bold">OVERALL RISK SCORE: 2.3/10 (LOW)</div>
                <div className="text-zinc-600">→ Quote cleared for optimization pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar II: The Synapse */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-xs font-mono text-zinc-500 mb-4">COMBINATORIAL OPTIMIZATION ENGINE</div>
              <div className="space-y-4">
                <div className="bg-zinc-900 border border-zinc-700 p-4">
                  <div className="text-xs text-zinc-500 mb-2">INPUT: PENDING QUOTES</div>
                  <div className="space-y-2 text-sm font-mono">
                    <div>Quote A: TiO₂ (50 tons) @ $3,600/ton = $180,000</div>
                    <div>Quote B: TiO₂ (65 tons) @ $3,692/ton = $240,000</div>
                    <div>Quote C: Glycerin (30 tons) @ $1,200/ton = $36,000</div>
                  </div>
                </div>
                
                <div className="text-center text-2xl text-atomic-teal">↓</div>
                
                <div className="bg-zinc-900 border border-zinc-700 p-4">
                  <div className="text-xs text-zinc-500 mb-2">SYNAPSE ANALYSIS</div>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-cyan-400">→ Volume bundling detected (TiO₂)</div>
                    <div className="text-cyan-400">→ Combined volume: 115 tons</div>
                    <div className="text-green-400">→ Tier discount threshold: 100+ tons</div>
                    <div className="text-atomic-teal">→ Negotiated rate: $2,995/ton (18% savings)</div>
                  </div>
                </div>
                
                <div className="text-center text-2xl text-atomic-teal">↓</div>
                
                <div className="bg-gradient-to-r from-atomic-teal/20 to-atomic-teal/5 border border-atomic-teal/30 p-4">
                  <div className="text-xs text-atomic-teal mb-2">VALENT SYNERGY POINT</div>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="font-bold">Combined TiO₂: 115 tons @ $2,995/ton = $344,425</div>
                    <div>Glycerin: 30 tons @ $1,200/ton = $36,000</div>
                    <div className="text-atomic-teal font-bold">Margin Expansion: $75,575 (16.5%)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-10 h-10 text-atomic-teal" />
                <h2 className="text-4xl font-bold">Pillar II: The Synapse</h2>
              </div>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Multi-quote combinatorial optimizer that identifies volume synergies across simultaneous 
                procurement opportunities. Operates on pending quotes before commitment.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-atomic-teal">The Quoting Oracle Logic</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-atomic-teal pl-4">
                  <div className="font-bold mb-1">Delta Interrogation</div>
                  <div className="text-sm text-zinc-400">
                    Continuous analysis of the gap between pending quotes and active production contracts. 
                    Identifies when combined volumes cross supplier tier thresholds.
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Volume Threshold Detection</div>
                  <div className="text-sm text-zinc-400">
                    Machine learning models trained on supplier pricing curves to predict tier break points. 
                    Proactive alerts when pending volume approaches optimization opportunities.
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Automated Re-negotiation</div>
                  <div className="text-sm text-zinc-400">
                    API-based supplier integration for instant re-pricing based on combined volume scenarios. 
                    No manual negotiation cycles required.
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Forward-Looking Signals</div>
                  <div className="text-sm text-zinc-400">
                    Incorporates pipeline opportunities (weighted by win probability) into volume projections. 
                    Enables pre-emptive volume commitments with contingency clauses.
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-atomic-teal">Mathematical Foundation</h3>
              <div className="bg-zinc-950 border border-zinc-800 p-4 font-mono text-sm text-zinc-400">
                <div>Minimize: Σ(Q<sub>i</sub> × P<sub>i</sub>(V<sub>total</sub>))</div>
                <div className="mt-2">Where:</div>
                <div>Q<sub>i</sub> = Quantity for quote i</div>
                <div>P<sub>i</sub>(V) = Price function based on total volume V</div>
                <div>V<sub>total</sub> = Σ Q<sub>j</sub> for all j in material class</div>
                <div className="mt-2 text-atomic-teal">Subject to Sentinel compliance constraints</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar III: The Vault */}
      <section className="py-20 px-6 bg-zinc-900/30 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-10 h-10 text-atomic-teal" />
                <h2 className="text-4xl font-bold">Pillar III: The Vault</h2>
              </div>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Zero-knowledge proof private liquidity network enabling anonymous inventory matching 
                without exposing commercially sensitive data to competitors or Valent itself.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-atomic-teal">Privacy-Preserving Architecture</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-atomic-teal pl-4">
                  <div className="font-bold mb-1">Cryptographic Matching via ZK-SNARKs</div>
                  <div className="text-sm text-zinc-400">
                    Zero-knowledge succinct non-interactive arguments of knowledge enable inventory matching 
                    without revealing quantities, pricing, or supplier identities to any party.
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Network Liquidity Without Data Leakage</div>
                  <div className="text-sm text-zinc-400">
                    Each manufacturer benefits from aggregate network liquidity while maintaining complete 
                    confidentiality. Valent cannot see transaction details—only that a match occurred.
                  </div>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <div className="font-bold mb-1">Smart Contract Settlement</div>
                  <div className="text-sm text-zinc-400">
                    Automated trade execution via blockchain with cryptographic escrow. Funds released 
                    upon delivery confirmation verified through oracle network.
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-atomic-teal">Liquidity Use Cases</h3>
              <div className="space-y-3">
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="font-bold mb-1">Excess Inventory Matching</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    Company A: 10 tons TiO₂ excess → Company B: 8 tons TiO₂ needed → Match without price disclosure
                  </div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="font-bold mb-1">Spot Market Optimization</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    Real-time matching of urgent demand with available network inventory at optimized pricing
                  </div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="font-bold mb-1">Consortium Buying Power</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    Anonymous demand aggregation across network to negotiate volume tiers with suppliers
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-xs font-mono text-zinc-500 mb-4">ZERO-KNOWLEDGE PROOF FLOW</div>
              
              <div className="space-y-6">
                <div className="border border-zinc-700 p-4">
                  <div className="text-xs text-atomic-teal mb-2 font-mono">STEP 1: COMMITMENT</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    Manufacturer A commits:<br/>
                    Hash(Material: TiO₂, Qty: 12 tons, Price: ≤$3500/ton)
                  </div>
                </div>

                <div className="border border-zinc-700 p-4">
                  <div className="text-xs text-atomic-teal mb-2 font-mono">STEP 2: MATCHING</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    The Vault cryptographically matches compatible demand<br/>
                    → Match found (no details revealed to any party)
                  </div>
                </div>

                <div className="border border-zinc-700 p-4">
                  <div className="text-xs text-atomic-teal mb-2 font-mono">STEP 3: PROOF GENERATION</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    ZK-SNARK proves: &quot;I have inventory satisfying<br/>
                    requirements&quot; WITHOUT revealing qty/price
                  </div>
                </div>

                <div className="border border-zinc-700 p-4">
                  <div className="text-xs text-atomic-teal mb-2 font-mono">STEP 4: VERIFICATION</div>
                  <div className="text-sm text-zinc-400 font-mono">
                    Buyer cryptographically verifies proof validity<br/>
                    → Trade terms negotiated in encrypted channel
                  </div>
                </div>

                <div className="border border-atomic-teal/30 bg-atomic-teal/10 p-4">
                  <div className="text-xs text-atomic-teal mb-2 font-mono">STEP 5: SETTLEMENT</div>
                  <div className="text-sm text-zinc-300 font-mono">
                    Smart contract executes trade atomically<br/>
                    → Escrow released upon delivery oracle confirmation<br/>
                    → Network learns NOTHING about transaction details
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-zinc-500 italic">
                All participants benefit from liquidity without exposing competitive intelligence to peers or Valent.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Impact */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">The Valent Verified Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-4xl font-bold text-atomic-teal mb-2 font-mono">6-8%</div>
              <div className="text-sm text-zinc-400 mb-4">Margin expansion from Synapse optimization alone</div>
              <div className="text-xs text-zinc-600">Volume synergy capture</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-4xl font-bold text-atomic-teal mb-2 font-mono">3-5%</div>
              <div className="text-sm text-zinc-400 mb-4">Additional savings from Vault liquidity matching</div>
              <div className="text-xs text-zinc-600">Network effects</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-4xl font-bold text-atomic-teal mb-2 font-mono">2-4%</div>
              <div className="text-sm text-zinc-400 mb-4">Risk mitigation via Sentinel compliance automation</div>
              <div className="text-xs text-zinc-600">Delay prevention</div>
            </div>
          </div>
          <div className="mt-12 text-2xl text-zinc-400">
            Total verified range: <span className="text-atomic-teal font-bold font-mono">11-17% margin expansion</span>
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
  const [processing, setProcessing] = useState(false);
  const [processingLogs, setProcessingLogs] = useState([]);

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
    
    // Simulate processing logs
    setProcessing(true);
    simulateProcessing(fileArray);
  };

  const simulateProcessing = (files) => {
    const logs = [];
    files.forEach((file, index) => {
      setTimeout(() => {
        setProcessingLogs(prev => [...prev, `→ Scanning ${file.name}...`]);
      }, index * 300);
      setTimeout(() => {
        setProcessingLogs(prev => [...prev, `→ Extracting material specs from ${file.name}`]);
      }, index * 300 + 150);
      setTimeout(() => {
        setProcessingLogs(prev => [...prev, `✓ Found ${Math.floor(Math.random() * 15) + 5} quotes in ${file.name}`]);
      }, index * 300 + 300);
    });
    
    setTimeout(() => {
      setProcessingLogs(prev => [...prev, '→ Cross-referencing volume thresholds...']);
    }, files.length * 300 + 500);
    
    setTimeout(() => {
      setProcessingLogs(prev => [...prev, '✓ Identified 3 Valent Synergy Points']);
      setProcessing(false);
    }, files.length * 300 + 1000);
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
          <div className="inline-block px-3 py-1 bg-atomic-teal/10 border border-atomic-teal/20 text-atomic-teal text-sm font-mono mb-6">
            CONFIDENTIAL ANALYSIS
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Request a Shadow Audit
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Upload 90 days of historical quotes. Our Quoting Oracle will identify hidden <span className="text-atomic-teal font-mono">Valent Synergy Points</span> in 
            your procurement data—no commitment required.
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
                ? 'border-atomic-teal bg-atomic-teal/10' 
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
              or <label htmlFor="file-upload" className="text-atomic-teal hover:text-atomic-teal/80 cursor-pointer underline">browse files</label>
            </p>
            <p className="text-sm text-zinc-600 font-mono">
              Accepts: PDF, Excel, CSV, Word documents
            </p>
          </div>

          {/* Terminal-Style Processing Log */}
          {processingLogs.length > 0 && (
            <div className="mt-6 bg-zinc-950 border border-zinc-800 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-zinc-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2">oracle@valent:~/shadow-audit</span>
              </div>
              <div className="space-y-1 text-zinc-400">
                {processingLogs.map((log, index) => (
                  <div key={index} className={log.includes('✓') ? 'text-atomic-teal' : ''}>
                    {log}
                  </div>
                ))}
                {processing && (
                  <div className="flex items-center gap-2 text-atomic-teal">
                    <div className="animate-pulse">→ Processing...</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="mt-6 space-y-3">
              <h3 className="text-lg font-medium">Uploaded Files ({uploadedFiles.length})</h3>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-atomic-teal" />
                    <div>
                      <div className="font-medium">{file.name}</div>
                      <div className="text-sm text-zinc-500 font-mono">{file.size}</div>
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
            We calibrate our Quoting Oracle to your specific industry vertical and volume profile.
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
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-atomic-teal focus:outline-none text-white placeholder-zinc-500"
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
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-atomic-teal focus:outline-none text-white placeholder-zinc-500"
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
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-atomic-teal focus:outline-none text-white placeholder-zinc-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Annual Raw Material Volume *</label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-atomic-teal focus:outline-none text-white font-mono"
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
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-atomic-teal focus:outline-none text-white placeholder-zinc-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Biggest Procurement Challenge</label>
              <textarea
                rows={4}
                placeholder="What keeps your CFO up at night about your current procurement process?"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-atomic-teal focus:outline-none text-white placeholder-zinc-500 resize-none"
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
                  I authorize Valent Systems to analyze the uploaded quote data under NDA. All data will be processed 
                  in a secure, isolated environment and permanently deleted after analysis unless we proceed to implementation.
                </label>
              </div>

              <button
                type="submit"
                disabled={uploadedFiles.length === 0}
                className={`w-full px-8 py-4 font-bold transition-colors flex items-center justify-center gap-2 group ${
                  uploadedFiles.length === 0
                    ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                    : 'bg-atomic-teal hover:bg-atomic-teal/90 text-zinc-950'
                }`}
              >
                Submit for Shadow Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-zinc-500 mt-4 text-center font-mono">
                Typical audit reveals $500K-$2M in Valent Synergy Points annually
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
              <div className="bg-atomic-teal text-zinc-950 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-bold mb-1">Data Ingestion (24 hours)</div>
                <div className="text-zinc-400 text-sm">
                  The Sentinel extracts material specs, quantities, pricing, and supplier data from your uploads
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-atomic-teal text-zinc-950 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-bold mb-1">Synapse Analysis (48 hours)</div>
                <div className="text-zinc-400 text-sm">
                  The Quoting Oracle runs combinatorial optimization across historical quotes to identify Valent Synergy Points
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-atomic-teal text-zinc-950 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-bold mb-1">Confidential Briefing (Week 2)</div>
                <div className="text-zinc-400 text-sm">
                  CFO-level presentation with concrete dollar figures and implementation roadmap
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
            <div className="text-2xl font-bold tracking-tighter mb-4">VALENT SYSTEMS</div>
            <p className="text-sm text-zinc-500">
              Agentic procurement and liquidity for specialty chemicals.
            </p>
          </div>
          <div>
            <div className="font-medium mb-3">Product</div>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><button className="hover:text-atomic-teal transition-colors">The Sentinel</button></li>
              <li><button className="hover:text-atomic-teal transition-colors">The Synapse</button></li>
              <li><button className="hover:text-atomic-teal transition-colors">The Vault</button></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><button className="hover:text-atomic-teal transition-colors">About</button></li>
              <li><button className="hover:text-atomic-teal transition-colors">Careers</button></li>
              <li><button className="hover:text-atomic-teal transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Legal</div>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><button className="hover:text-atomic-teal transition-colors">Privacy</button></li>
              <li><button className="hover:text-atomic-teal transition-colors">Terms</button></li>
              <li>
                <button 
                  onClick={() => setShowPrivacyModal(true)}
                  className="hover:text-atomic-teal transition-colors"
                >
                  Security & Privacy
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-8 pt-8 text-sm text-zinc-600 text-center font-mono">
          © 2024 Valent Systems. The Hadrian of Chemicals.
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
            <h3 className="text-lg font-bold mb-3 text-atomic-teal">Data Handling</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              All uploaded quote data is encrypted in transit (TLS 1.3) and at rest (AES-256). 
              Files are processed in isolated compute environments and permanently deleted within 
              30 days unless you explicitly authorize retention for implementation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-atomic-teal">Zero-Knowledge Architecture</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The Vault uses cryptographic proofs to match inventory without revealing specific 
              quantities, pricing, or supplier identities. Even Valent Systems cannot see the details of 
              matched transactions—only that a match occurred.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-atomic-teal">Compliance</h3>
            <div className="space-y-2 text-sm text-zinc-400">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                <span>SOC 2 Type II certified</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                <span>GDPR and CCPA compliant</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                <span>Annual third-party penetration testing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                <span>No data shared with third parties without explicit consent</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-atomic-teal">Access Controls</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Role-based access control (RBAC) ensures only authorized personnel can view your data. 
              All access is logged and auditable. Multi-factor authentication is required for all users.
            </p>
          </div>

          <div className="border-t border-zinc-800 pt-6">
            <p className="text-xs text-zinc-600 font-mono">
              For detailed security documentation or to request our SOC 2 report, contact security@valent.systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
