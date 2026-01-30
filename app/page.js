'use client';

import { useState } from 'react';
import { ArrowRight, Shield, Cpu, Database, AlertTriangle, ChevronRight, Upload, X, FileText, Zap, Lock, Activity, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [view, setView] = useState('home');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Global Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/95 backdrop-blur fixed w-full z-50">
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
              className={`font-medium transition-colors ${view === 'home' ? 'text-atomic-teal' : 'text-slate-400 hover:text-slate-100'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView('methodology')}
              className={`font-medium transition-colors ${view === 'methodology' ? 'text-atomic-teal' : 'text-slate-400 hover:text-slate-100'}`}
            >
              Methodology
            </button>
            <button 
              onClick={() => setView('audit')}
              className="px-6 py-2 bg-atomic-teal hover:bg-atomic-teal/90 text-slate-950 font-bold transition-colors"
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
              AGENTIC INFRASTRUCTURE
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-none">
              Infrastructure for<br />
              Beauty Contract<br />
              Manufacturing
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Valent Systems provides autonomous procurement intelligence for cosmetic and personal care CMOs. 
              We unlock <span className="text-atomic-teal font-mono font-bold">11-17% margin expansion</span> through 
              ingredient-level volume optimization and regulatory automation.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setView('audit')}
                className="px-8 py-4 bg-atomic-teal hover:bg-atomic-teal/90 text-slate-950 font-bold transition-colors flex items-center gap-2 group"
              >
                Request Shadow Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setView('methodology')}
                className="px-8 py-4 border border-slate-700 hover:border-atomic-teal text-slate-300 font-medium transition-colors"
              >
                The Verified Framework
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CFO-Focus Section */}
      <section className="py-20 px-6 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-atomic-teal" />
                <h2 className="text-4xl font-bold">80% of Your COGS<br />Is Trapped in Formula Silos</h2>
              </div>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Your R&D chemists quote based on catalog prices. Your procurement team buys based on volume tiers. 
                Valent&apos;s agents <span className="text-atomic-teal font-mono">interrogate the delta</span> between 
                these two systems in real-time, capturing hidden synergies that traditional procurement can&apos;t see.
              </p>
              <div className="space-y-4">
                <div className="border-l-2 border-atomic-teal pl-4">
                  <div className="text-2xl font-bold text-atomic-teal mb-1 font-mono">$1.8M</div>
                  <div className="text-slate-400">Average annual delta between quoted and achievable pricing</div>
                </div>
                <div className="border-l-2 border-slate-700 pl-4">
                  <div className="text-2xl font-bold mb-1 font-mono">60+ SKUs/month</div>
                  <div className="text-slate-400">Each formula quoted independently without cross-formula intelligence</div>
                </div>
                <div className="border-l-2 border-slate-700 pl-4">
                  <div className="text-2xl font-bold mb-1 font-mono">Zero visibility</div>
                  <div className="text-slate-400">Into live procurement volume when R&D generates quotes</div>
                </div>
              </div>
            </div>
            
            {/* The Optimization Engine Terminal */}
            <div className="bg-slate-950 border border-slate-800 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-500">
                <div className="w-3 h-3 bg-red-500"></div>
                <div className="w-3 h-3 bg-yellow-500"></div>
                <div className="w-3 h-3 bg-green-500"></div>
                <span className="ml-2">engine@valent:~/optimization</span>
              </div>
              <div className="space-y-2 text-slate-400">
                <div><span className="text-atomic-teal">$</span> valent --analyze-synergy --quotes ./q1_pending</div>
                <div className="pl-4 text-cyan-400">→ Parsing INCI declarations...</div>
                <div className="pl-4">→ SKU-2847: Hyaluronic Acid (50 kg) @ $1,240/kg</div>
                <div className="pl-4">→ SKU-2851: Hyaluronic Acid (75 kg) @ $1,285/kg</div>
                <div className="pl-4">→ SKU-2863: Phenoxyethanol (200 kg) @ $18.50/kg</div>
                <div className="pl-4 text-cyan-400">→ Scanning active production runs...</div>
                <div className="pl-4">→ Current PO: Hyaluronic Acid (45 kg/month recurring)</div>
                <div className="mt-3 pl-4 text-yellow-400">→ VOLUME TIER ANALYSIS:</div>
                <div className="pl-4">→ Combined HA volume: 170 kg</div>
                <div className="pl-4">→ Supplier tier: 150+ kg → 22% discount activated</div>
                <div className="pl-4 text-green-400">→ Catalog pricing: $217,625</div>
                <div className="pl-4 text-atomic-teal font-bold">→ Valent pricing: $142,013</div>
                <div className="mt-3 text-atomic-teal font-bold">SYNERGY POINT IDENTIFIED: $75,612 (34.7%)</div>
                <div className="text-slate-600">→ Forwarding to automated negotiation pipeline...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stack (The Three Pillars) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">The Infrastructure<br />Stack.</h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl">
            Three precision-engineered modules working in concert to eliminate regulatory bottlenecks, 
            capture volume synergies, and unlock secondary-market liquidity.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Audit (formerly Sentinel) */}
            <div className="border border-slate-800 bg-slate-900/30 p-8 hover:border-atomic-teal/50 transition-colors group">
              <Shield className="w-12 h-12 text-atomic-teal mb-4" />
              <h3 className="text-2xl font-bold mb-3">Audit</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Autonomous MoCRA/EPA compliance and INCI-level contract risk validation. 
                Automates ingredient substantiation and facility registration to eliminate regulatory bottlenecks.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Real-time CAS registry validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>NLP-based INCI compliance verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Automated FDA facility listing generation</span>
                </li>
              </ul>
            </div>

            {/* Optimizer (formerly Synapse) */}
            <div className="border border-slate-800 bg-slate-900/30 p-8 hover:border-atomic-teal/50 transition-colors group">
              <Cpu className="w-12 h-12 text-atomic-teal mb-4" />
              <h3 className="text-2xl font-bold mb-3">Optimizer</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Multi-formula combinatorial engine. Identifies and aggregates volume synergies across 
                Phase A and Phase B components to trigger price-tier jumps during the quoting phase.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Real-time cross-formula aggregation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Volume-tier jump detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>MOI (Master Operating Ingredient) aggregation</span>
                </li>
              </ul>
            </div>

            {/* Exchange (formerly Vault) */}
            <div className="border border-slate-800 bg-slate-900/30 p-8 hover:border-atomic-teal/50 transition-colors group">
              <Database className="w-12 h-12 text-atomic-teal mb-4" />
              <h3 className="text-2xl font-bold mb-3">Exchange</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Zero-knowledge (ZKP) liquidity network. Facilitates anonymous inventory matching and 
                secondary-market clearing for specialty actives without exposing proprietary formula IDs.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Cryptographic inventory matching for high-end actives</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>Private secondary market clearing</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-atomic-teal flex-shrink-0" />
                  <span>ZKP-preserved data sovereignty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Logic Viz */}
      <section className="py-20 px-6 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Phase-Level Optimization</h2>
          
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 p-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Formula A */}
              <div className="bg-slate-900 border border-slate-700 p-6">
                <div className="text-xs font-mono text-slate-500 mb-2">FORMULA_A_SERUM</div>
                <div className="text-2xl font-bold mb-1 font-mono">$62,000</div>
                <div className="text-sm text-slate-400 mb-3">Hyaluronic Acid (50 kg)</div>
                <div className="text-xs text-slate-600">Catalog pricing</div>
              </div>

              {/* Plus Sign */}
              <div className="flex justify-center">
                <div className="text-4xl text-atomic-teal font-light">+</div>
              </div>

              {/* Formula B */}
              <div className="bg-slate-900 border border-slate-700 p-6">
                <div className="text-xs font-mono text-slate-500 mb-2">FORMULA_B_CREAM</div>
                <div className="text-2xl font-bold mb-1 font-mono">$96,375</div>
                <div className="text-sm text-slate-400 mb-3">Hyaluronic Acid (75 kg)</div>
                <div className="text-xs text-slate-600">Catalog pricing</div>
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
                  <div className="text-xs font-mono text-atomic-teal mb-2">OPTIMIZER_AGGREGATED</div>
                  <div className="text-3xl font-bold text-atomic-teal mb-1 font-mono">$97,500</div>
                  <div className="text-sm text-slate-300 mb-2">Combined HA volume (125 kg)</div>
                  <div className="text-xs text-slate-400">22% tier discount applied automatically</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400 font-mono">+$60,875</div>
                  <div className="text-xs text-slate-400">Margin expansion</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-500 font-mono">
              → Traditional approach: $158,375 total cost<br />
              → Valent approach: $97,500 total cost<br />
              → <span className="text-atomic-teal font-bold">Synergy Point: 38.4% ($60,875)</span>
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
      <section className="py-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 bg-atomic-teal/10 border border-atomic-teal/20 text-atomic-teal text-sm font-mono mb-6">
            VALENT VERIFIED FRAMEWORK
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            The Public<br />
            Methodology
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            How Valent Systems leverages public MoCRA signals and zero-knowledge proof mathematics 
            to protect intellectual property while unlocking 11-17% margin expansion for beauty CMOs.
          </p>
        </div>
      </section>

      {/* Module I: Audit */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-10 h-10 text-atomic-teal" />
                <h2 className="text-4xl font-bold">Module I: Audit</h2>
              </div>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Autonomous regulatory compliance engine using NLP and chemical regulatory databases. 
                Eliminates 6-8 week post-quote delays through INCI-level validation and automated facility registration.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-atomic-teal">Core Capabilities</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-atomic-teal pl-4">
                  <div className="font-bold mb-1">MoCRA Signal Processing</div>
                  <div className="text-sm text-slate-400">
                    Real-time verification against FDA Modernization of Cosmetics Regulation Act. CAS registry validation 
                    with instant flagging of prohibited ingredients per 21 CFR 700.
                  </div>
                </div>
                <div className="border-l-2 border-slate-700 pl-4">
                  <div className="font-bold mb-1">INCI Compliance Verification</div>
                  <div className="text-sm text-slate-400">
                    NLP-based extraction and validation of International Nomenclature of Cosmetic Ingredients. 
                    Automatic labeling compliance check against FDA guidelines.
                  </div>
                </div>
                <div className="border-l-2 border-slate-700 pl-4">
                  <div className="font-bold mb-1">Facility Registration Automation</div>
                  <div className="text-sm text-slate-400">
                    Automated FDA facility listing generation and product listing verification. 
                    Eliminates manual documentation cycles for new ingredient introduction.
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-atomic-teal">Impact Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-slate-800 p-4">
                  <div className="text-3xl font-bold text-atomic-teal font-mono">6-8 weeks</div>
                  <div className="text-sm text-slate-400">Regulatory delays eliminated</div>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-4">
                  <div className="text-3xl font-bold text-atomic-teal font-mono">100%</div>
                  <div className="text-sm text-slate-400">Pre-quote compliance coverage</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-500">
                <div className="w-3 h-3 bg-red-500"></div>
                <div className="w-3 h-3 bg-yellow-500"></div>
                <div className="w-3 h-3 bg-green-500"></div>
                <span className="ml-2">audit@valent:~/compliance</span>
              </div>
              <div className="space-y-2 text-slate-400">
                <div><span className="text-atomic-teal">$</span> validate_inci.sh FORMULA_2847</div>
                <div className="pl-4 text-cyan-400">→ Parsing INCI declaration...</div>
                <div className="pl-4">→ Water [7732-18-5]: VALIDATED</div>
                <div className="pl-4">→ Sodium Hyaluronate [9067-32-7]: VALIDATED</div>
                <div className="pl-4">→ Phenoxyethanol [122-99-6]: VALIDATED</div>
                <div className="pl-4 text-green-400">→ MoCRA: All ingredients permitted ✓</div>
                <div className="pl-4 text-green-400">→ INCI: Proper nomenclature confirmed ✓</div>
                <div className="mt-3 pl-4 text-yellow-400">→ Checking facility registration...</div>
                <div className="pl-4 text-green-400">→ FDA Facility: #3012345678 ACTIVE ✓</div>
                <div className="pl-4 text-green-400">→ Product Listing: Auto-generated ✓</div>
                <div className="mt-3 text-atomic-teal font-bold">COMPLIANCE STATUS: CLEARED</div>
                <div className="text-slate-600">→ Formula approved for production pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module II: Optimizer */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-slate-950 border border-slate-800 p-6">
              <div className="text-xs font-mono text-slate-500 mb-4">MULTI-FORMULA OPTIMIZATION ENGINE</div>
              <div className="space-y-4">
                <div className="bg-slate-900 border border-slate-700 p-4">
                  <div className="text-xs text-slate-500 mb-2">INPUT: PENDING FORMULAS</div>
                  <div className="space-y-2 text-sm font-mono">
                    <div>Serum A: Hyaluronic Acid (50 kg) @ $1,240/kg = $62,000</div>
                    <div>Cream B: Hyaluronic Acid (75 kg) @ $1,285/kg = $96,375</div>
                    <div>Lotion C: Glycerin (200 kg) @ $4.20/kg = $840</div>
                  </div>
                </div>
                
                <div className="text-center text-2xl text-atomic-teal">↓</div>
                
                <div className="bg-slate-900 border border-slate-700 p-4">
                  <div className="text-xs text-slate-500 mb-2">OPTIMIZER ANALYSIS</div>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-cyan-400">→ MOI detected: Hyaluronic Acid (Phase A)</div>
                    <div className="text-cyan-400">→ Combined volume: 125 kg</div>
                    <div className="text-green-400">→ Tier threshold: 100+ kg → 22% discount</div>
                    <div className="text-atomic-teal">→ Optimized rate: $780/kg</div>
                  </div>
                </div>
                
                <div className="text-center text-2xl text-atomic-teal">↓</div>
                
                <div className="bg-gradient-to-r from-atomic-teal/20 to-atomic-teal/5 border border-atomic-teal/30 p-4">
                  <div className="text-xs text-atomic-teal mb-2">SYNERGY POINT IDENTIFIED</div>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="font-bold">Combined HA: 125 kg @ $780/kg = $97,500</div>
                    <div>Glycerin: 200 kg @ $4.20/kg = $840</div>
                    <div className="text-atomic-teal font-bold">Margin Expansion: $60,875 (38.4%)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-10 h-10 text-atomic-teal" />
                <h2 className="text-4xl font-bold">Module II: Optimizer</h2>
              </div>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Multi-formula combinatorial engine that identifies volume synergies across Phase A actives 
                and Phase B emulsifiers. Operates on pending quotes before commitment to pricing.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-atomic-teal">Phase-Level Intelligence</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-atomic-teal pl-4">
                  <div className="font-bold mb-1">Cross-Formula Aggregation</div>
                  <div className="text-sm text-slate-400">
                    All pending formulas analyzed simultaneously for Phase A/B component overlap. 
                    Detects MOI (Master Operating Ingredients) across disparate SKUs.
                  </div>
                </div>
                <div className="border-l-2 border-slate-700 pl-4">
                  <div className="font-bold mb-1">Volume-Tier Jump Detection</div>
                  <div className="text-sm text-slate-400">
                    Machine learning models trained on supplier pricing curves to predict tier breakpoints. 
                    Proactive alerts when pending volume approaches optimization thresholds.
                  </div>
                </div>
                <div className="border-l-2 border-slate-700 pl-4">
                  <div className="font-bold mb-1">Automated Re-Quoting</div>
                  <div className="text-sm text-slate-400">
                    API-based supplier integration for instant re-pricing based on aggregated volume scenarios. 
                    Eliminates manual negotiation cycles for high-volume actives.
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-atomic-teal">Mathematical Foundation</h3>
              <div className="bg-slate-950 border border-slate-800 p-4 font-mono text-sm text-slate-400">
                <div>Minimize: Σ(Q<sub>i</sub> × P<sub>i</sub>(V<sub>total</sub>))</div>
                <div className="mt-2">Where:</div>
                <div>Q<sub>i</sub> = Quantity for formula i</div>
                <div>P<sub>i</sub>(V) = Price function based on total MOI volume V</div>
                <div>V<sub>total</sub> = Σ Q<sub>j</sub> for all j in ingredient class</div>
                <div className="mt-2 text-atomic-teal">Subject to Audit compliance constraints</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module III: Exchange */}
      <section className="py-20 px-6 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-10 h-10 text-atomic-teal" />
                <h2 className="text-4xl font-bold">Module III: Exchange</h2>
              </div>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Zero-knowledge proof liquidity network enabling anonymous inventory matching for specialty actives 
                without exposing proprietary formula IDs or supplier relationships.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-atomic-teal">ZKP-Preserved Data Sovereignty</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-atomic-teal pl-4">
                  <div className="font-bold mb-1">Cryptographic Inventory Matching</div>
                  <div className="text-sm text-slate-400">
                    Zero-knowledge succinct non-interactive arguments of knowledge (ZK-SNARKs) enable inventory matching 
                    for high-end actives without revealing quantities, pricing, or formula compositions to any party.
                  </div>
                </div>
                <div className="border-l-2 border-slate-700 pl-4">
                  <div className="font-bold mb-1">Private Secondary Market Clearing</div>
                  <div className="text-sm text-slate-400">
                    Anonymous matching of excess specialty actives (e.g., peptides, growth factors) across CMO network. 
                    No formula ID exposure—only cryptographic proof of compatible inventory.
                  </div>
                </div>
                <div className="border-l-2 border-slate-700 pl-4">
                  <div className="font-bold mb-1">Smart Contract Settlement</div>
                  <div className="text-sm text-slate-400">
                    Automated trade execution via blockchain with cryptographic escrow. Funds released upon 
                    delivery confirmation through oracle network verification.
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-atomic-teal">Liquidity Use Cases</h3>
              <div className="space-y-3">
                <div className="bg-slate-950 border border-slate-800 p-4">
                  <div className="font-bold mb-1">Specialty Active Matching</div>
                  <div className="text-sm text-slate-400 font-mono">
                    CMO A: 5 kg excess Matrixyl 3000 → CMO B: 4 kg needed → Match without formula disclosure
                  </div>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-4">
                  <div className="font-bold mb-1">Spot Market Optimization</div>
                  <div className="text-sm text-slate-400 font-mono">
                    Real-time matching of urgent active demand with available network inventory
                  </div>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-4">
                  <div className="font-bold mb-1">Consortium Buying Power</div>
                  <div className="text-sm text-slate-400 font-mono">
                    Anonymous aggregation of Phase A active demand to negotiate volume tiers
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6">
              <div className="text-xs font-mono text-slate-500 mb-4">ZERO-KNOWLEDGE PROOF FLOW</div>
              
              <div className="space-y-6">
                <div className="border border-slate-700 p-4">
                  <div className="text-xs text-atomic-teal mb-2 font-mono">STEP 1: COMMITMENT</div>
                  <div className="text-sm text-slate-400 font-mono">
                    CMO A commits:<br/>
                    Hash(Ingredient: Peptide_Complex, Qty: 8 kg, Price: ≤$2400/kg)
                  </div>
                </div>

                <div className="border border-slate-700 p-4">
                  <div className="text-xs text-atomic-teal mb-2 font-mono">STEP 2: MATCHING</div>
                  <div className="text-sm text-slate-400 font-mono">
                    Exchange cryptographically matches compatible demand<br/>
                    → Match found (no formula IDs revealed to any party)
                  </div>
                </div>

                <div className="border border-slate-700 p-4">
                  <div className="text-xs text-atomic-teal mb-2 font-mono">STEP 3: PROOF GENERATION</div>
                  <div className="text-sm text-slate-400 font-mono">
                    ZK-SNARK proves: &quot;I have inventory satisfying<br/>
                    requirements&quot; WITHOUT revealing quantity/price/formula
                  </div>
                </div>

                <div className="border border-slate-700 p-4">
                  <div className="text-xs text-atomic-teal mb-2 font-mono">STEP 4: VERIFICATION</div>
                  <div className="text-sm text-slate-400 font-mono">
                    Buyer cryptographically verifies proof validity<br/>
                    → Trade terms negotiated in encrypted channel
                  </div>
                </div>

                <div className="border border-atomic-teal/30 bg-atomic-teal/10 p-4">
                  <div className="text-xs text-atomic-teal mb-2 font-mono">STEP 5: SETTLEMENT</div>
                  <div className="text-sm text-slate-300 font-mono">
                    Smart contract executes trade atomically<br/>
                    → Escrow released upon delivery oracle confirmation<br/>
                    → Network learns NOTHING about transaction details
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-slate-500 italic">
                All CMOs benefit from liquidity without exposing formula IPs to competitors or Valent.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Impact */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">The Verified Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 p-8">
              <div className="text-4xl font-bold text-atomic-teal mb-2 font-mono">6-8%</div>
              <div className="text-sm text-slate-400 mb-4">Margin expansion from Optimizer alone</div>
              <div className="text-xs text-slate-600">Phase-level synergy capture</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8">
              <div className="text-4xl font-bold text-atomic-teal mb-2 font-mono">3-5%</div>
              <div className="text-sm text-slate-400 mb-4">Additional savings from Exchange liquidity</div>
              <div className="text-xs text-slate-600">Specialty active matching</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8">
              <div className="text-4xl font-bold text-atomic-teal mb-2 font-mono">2-4%</div>
              <div className="text-sm text-slate-400 mb-4">Risk mitigation via Audit automation</div>
              <div className="text-xs text-slate-600">Regulatory delay prevention</div>
            </div>
          </div>
          <div className="mt-12 text-2xl text-slate-400">
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
  const [actualFiles, setActualFiles] = useState([]); // Store actual File objects
  const [processing, setProcessing] = useState(false);
  const [processingLogs, setProcessingLogs] = useState([]);
  const [showShadowInsight, setShowShadowInsight] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'submitting', 'success', 'error'

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
    const fileArray = Array.from(files);
    const fileMetadata = fileArray.map(file => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
    }));
    setUploadedFiles(prev => [...prev, ...fileMetadata]);
    setActualFiles(prev => [...prev, ...fileArray]); // Store actual File objects
    
    // Trigger terminal processing simulation
    setProcessing(true);
    setProcessingLogs([]);
    setShowShadowInsight(false);
    simulateProcessing(fileMetadata);
  };

  const simulateProcessing = (files) => {
    const logSequence = [
      { delay: 300, log: '→ Initializing shadow audit pipeline...' },
      { delay: 600, log: '→ Parsing INCI strings from uploaded documents...' },
      { delay: 1200, log: '✓ Extracted 47 unique ingredients across 12 formulas' },
      { delay: 1800, log: '→ Cross-referencing Phase A actives...' },
      { delay: 2400, log: '→ Detecting MOI (Master Operating Ingredients)...' },
      { delay: 3000, log: '✓ Found Hyaluronic Acid in 3 formulas (total: 125 kg)' },
      { delay: 3600, log: '→ Simulating volume tiers with supplier database...' },
      { delay: 4200, log: '→ Calculating synergy points...' },
      { delay: 4800, log: '✓ SYNERGY POINT IDENTIFIED: $75,612 (22% tier discount)' },
      { delay: 5400, log: '→ Generating shadow insight report...' },
      { delay: 6000, log: '✓ Analysis complete. Report ready for review.' },
    ];

    logSequence.forEach(({ delay, log }) => {
      setTimeout(() => {
        setProcessingLogs(prev => [...prev, log]);
        if (log.includes('Report ready')) {
          setProcessing(false);
          setShowShadowInsight(true);
        }
      }, delay);
    });
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    setActualFiles(prev => prev.filter((_, i) => i !== index));
    setProcessingLogs([]);
    setShowShadowInsight(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      // 1. Upload files to Supabase Storage
      const uploadedFilePaths = [];
      
      for (const file of actualFiles) {
        const timestamp = Date.now();
        const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filePath = `audits/${timestamp}_${sanitizedFileName}`;
        
        const { data: fileData, error: uploadError } = await supabase.storage
          .from('audits')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
          });

        if (uploadError) {
          console.error('File upload error:', uploadError);
          throw new Error(`Failed to upload ${file.name}`);
        }

        uploadedFilePaths.push(fileData.path);
      }

      // 2. Insert lead data into database
      const { data, error: dbError } = await supabase
        .from('intake_leads')
        .insert([{
          email: email,
          company: company,
          phone: phone,
          volume_range: volume,
          files_uploaded: uploadedFilePaths.length,
          file_paths: uploadedFilePaths,
          created_at: new Date().toISOString()
        }])
        .select();

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save lead data');
      }

      // Success!
      setSubmitStatus('success');
      
      // Optional: Clear form after successful submission
      setTimeout(() => {
        setEmail('');
        setCompany('');
        setPhone('');
        setVolume('');
        setUploadedFiles([]);
        setActualFiles([]);
        setProcessingLogs([]);
        setShowShadowInsight(false);
        setSubmitStatus('');
      }, 3000);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      alert(`Error submitting audit request: ${error.message}\n\nPlease check your Supabase configuration.`);
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-atomic-teal/10 border border-atomic-teal/20 text-atomic-teal text-sm font-mono mb-6">
            CONFIDENTIAL ANALYSIS
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Request a Shadow Audit
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Upload 90 days of formula quotes. Our system will parse INCI declarations and simulate volume tiers 
            to identify hidden <span className="text-atomic-teal font-mono">Synergy Points</span>—no commitment required.
          </p>
        </div>
      </section>

      {/* Drag and Drop Upload */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Step 1: Upload Formula Quotes</h2>
          
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed p-12 text-center transition-all ${
              dragActive 
                ? 'border-atomic-teal bg-atomic-teal/10' 
                : 'border-slate-700 bg-slate-900/30 hover:border-slate-600'
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
            <Upload className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-xl font-medium mb-2">
              {dragActive ? 'Drop files here' : 'Drag and drop your formula quotes'}
            </p>
            <p className="text-slate-500 mb-4">
              or <label htmlFor="file-upload" className="text-atomic-teal hover:text-atomic-teal/80 cursor-pointer underline">browse files</label>
            </p>
            <p className="text-sm text-slate-600 font-mono">
              Accepts: PDF, Excel, CSV, Word documents
            </p>
          </div>

          {/* Terminal-Style Processing Log */}
          {processingLogs.length > 0 && (
            <div className="mt-6 bg-slate-950 border border-slate-800 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-500">
                <div className="w-3 h-3 bg-red-500"></div>
                <div className="w-3 h-3 bg-yellow-500"></div>
                <div className="w-3 h-3 bg-green-500"></div>
                <span className="ml-2">audit@valent:~/shadow-analysis</span>
              </div>
              <div className="space-y-1 text-slate-400">
                {processingLogs.map((log, index) => (
                  <div key={index} className={log.includes('✓') ? 'text-atomic-teal' : log.includes('SYNERGY') ? 'text-atomic-teal font-bold' : ''}>
                    {log}
                  </div>
                ))}
                {processing && (
                  <div className="flex items-center gap-2 text-atomic-teal">
                    <Activity className="w-4 h-4 animate-pulse" />
                    <div className="animate-pulse">Processing...</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Shadow Insight Report (Blurred) */}
          {showShadowInsight && (
            <div className="mt-6 bg-slate-950 border border-atomic-teal/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-atomic-teal" />
                <h3 className="text-lg font-bold text-atomic-teal">Shadow Insight Report Generated</h3>
              </div>
              <div className="relative">
                <div className="blur-sm select-none pointer-events-none">
                  <div className="space-y-3 text-sm font-mono">
                    <div className="border-l-2 border-atomic-teal pl-3">
                      <div className="text-atomic-teal font-bold">SYNERGY POINT #1</div>
                      <div className="text-slate-400">Hyaluronic Acid aggregation: 125 kg → $75,612 savings</div>
                    </div>
                    <div className="border-l-2 border-slate-700 pl-3">
                      <div className="text-slate-400 font-bold">SYNERGY POINT #2</div>
                      <div className="text-slate-500">Niacinamide bundling: 85 kg → $12,340 savings</div>
                    </div>
                    <div className="border-l-2 border-slate-700 pl-3">
                      <div className="text-slate-400 font-bold">SYNERGY POINT #3</div>
                      <div className="text-slate-500">Glycerin tier jump: 450 kg → $4,220 savings</div>
                    </div>
                    <div className="mt-4 p-3 bg-atomic-teal/10 border border-atomic-teal/20">
                      <div className="text-atomic-teal font-bold">TOTAL IDENTIFIED MARGIN EXPANSION</div>
                      <div className="text-2xl font-bold text-atomic-teal">$92,172 (14.3%)</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-slate-950/90 border border-atomic-teal px-6 py-3">
                    <p className="text-atomic-teal font-bold">Complete intake form to unlock full report</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="mt-6 space-y-3">
              <h3 className="text-lg font-medium">Uploaded Files ({uploadedFiles.length})</h3>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-900 border border-slate-800 p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-atomic-teal" />
                    <div>
                      <div className="font-medium">{file.name}</div>
                      <div className="text-sm text-slate-500 font-mono">{file.size}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-slate-500 hover:text-red-500 transition-colors"
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
      <section className="py-12 px-6 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Step 2: Company Information</h2>
          <p className="text-slate-400 mb-8">
            We calibrate our analysis to your specific ingredient portfolio and production volume profile.
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
                  placeholder="Beauty CMO Inc."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 focus:border-atomic-teal focus:outline-none text-white placeholder-slate-500"
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
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 focus:border-atomic-teal focus:outline-none text-white placeholder-slate-500"
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
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 focus:border-atomic-teal focus:outline-none text-white placeholder-slate-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Annual Raw Material Volume *</label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 focus:border-atomic-teal focus:outline-none text-white font-mono"
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
                placeholder="e.g., Serums, Creams, Cleansers, Hair Care"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 focus:border-atomic-teal focus:outline-none text-white placeholder-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Biggest Procurement Challenge</label>
              <textarea
                rows={4}
                placeholder="What keeps your CFO up at night about ingredient procurement?"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 focus:border-atomic-teal focus:outline-none text-white placeholder-slate-500 resize-none"
              ></textarea>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <div className="flex items-start gap-3 mb-6">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-slate-400">
                  I authorize Valent Systems to analyze the uploaded formula data under NDA. All data will be processed 
                  in a secure, isolated environment and permanently deleted after analysis unless we proceed to implementation.
                </label>
              </div>

              <button
                type="submit"
                disabled={uploadedFiles.length === 0 || submitStatus === 'submitting'}
                className={`w-full px-8 py-4 font-bold transition-colors flex items-center justify-center gap-2 group ${
                  uploadedFiles.length === 0 || submitStatus === 'submitting'
                    ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-atomic-teal hover:bg-atomic-teal/90 text-slate-950'
                }`}
              >
                {submitStatus === 'submitting' ? (
                  <>
                    <Activity className="w-5 h-5 animate-pulse" />
                    Submitting Audit Request...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Audit Request Submitted!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <X className="w-5 h-5" />
                    Submission Failed - Try Again
                  </>
                ) : (
                  <>
                    Unlock Full Shadow Insight Report
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-600/10 border border-green-600/20 text-green-400 text-sm text-center">
                  ✓ Your audit request has been received. We&apos;ll contact you within 24 hours.
                </div>
              )}

              <p className="text-sm text-slate-500 mt-4 text-center font-mono">
                Typical audit reveals $500K-$2M in annual Synergy Points
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
              <div className="bg-atomic-teal text-slate-950 w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-bold mb-1">INCI Parsing (24 hours)</div>
                <div className="text-slate-400 text-sm">
                  Audit module extracts ingredient declarations, quantities, and supplier data from uploads
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-atomic-teal text-slate-950 w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-bold mb-1">Optimizer Analysis (48 hours)</div>
                <div className="text-slate-400 text-sm">
                  Multi-formula engine runs phase-level optimization to identify all Synergy Points
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-atomic-teal text-slate-950 w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-bold mb-1">CFO Briefing (Week 2)</div>
                <div className="text-slate-400 text-sm">
                  Confidential presentation with concrete dollar figures and implementation roadmap
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
    <footer className="border-t border-slate-800 py-12 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold tracking-tighter mb-4">VALENT SYSTEMS</div>
            <p className="text-sm text-slate-500">
              Infrastructure for beauty contract manufacturing.
            </p>
          </div>
          <div>
            <div className="font-medium mb-3">Infrastructure</div>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><button className="hover:text-atomic-teal transition-colors">Audit</button></li>
              <li><button className="hover:text-atomic-teal transition-colors">Optimizer</button></li>
              <li><button className="hover:text-atomic-teal transition-colors">Exchange</button></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><button className="hover:text-atomic-teal transition-colors">About</button></li>
              <li><button className="hover:text-atomic-teal transition-colors">Careers</button></li>
              <li><button className="hover:text-atomic-teal transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Legal</div>
            <ul className="space-y-2 text-sm text-slate-500">
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
        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-600 text-center font-mono">
          © 2024 Valent Systems. All rights reserved.
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
      <div className="bg-slate-950 border border-slate-800 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-950 border-b border-slate-800 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Security & Privacy</h2>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 text-atomic-teal">Formula Data Protection</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              All uploaded formula data is encrypted in transit (TLS 1.3) and at rest (AES-256). 
              INCI declarations are processed in isolated compute environments and permanently deleted within 
              30 days unless you explicitly authorize retention for implementation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-atomic-teal">Zero-Knowledge Architecture</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The Exchange uses cryptographic proofs to match specialty active inventory without revealing 
              formula IDs, quantities, or supplier relationships. Even Valent Systems cannot see the details 
              of matched transactions—only that a match occurred.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-atomic-teal">Compliance</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-atomic-teal mt-1.5 flex-shrink-0"></div>
                <span>SOC 2 Type II certified</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-atomic-teal mt-1.5 flex-shrink-0"></div>
                <span>GDPR and CCPA compliant</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-atomic-teal mt-1.5 flex-shrink-0"></div>
                <span>Annual third-party penetration testing</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-atomic-teal mt-1.5 flex-shrink-0"></div>
                <span>No formula data shared with third parties without explicit consent</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <p className="text-xs text-slate-600 font-mono">
              For detailed security documentation or to request our SOC 2 report, contact security@valent.systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
