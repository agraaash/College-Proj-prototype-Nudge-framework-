import React from 'react';
import { Sparkles, ArrowRight, Eye, ShieldCheck, BookOpen, X, HelpCircle, CheckCircle2 } from 'lucide-react';

interface AcademicModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  highlightedNudge: 1 | 2 | null;
}

export const AcademicModeModal: React.FC<AcademicModeModalProps> = ({
  isOpen,
  onClose,
  highlightedNudge
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-[#d1d1d1] max-w-2xl w-full overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="academic-modal-title"
      >
        {/* Header */}
        <div className="bg-[#0078d4] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <BookOpen className="w-5 h-5 text-white/90" />
            <div>
              <h2 id="academic-modal-title" className="font-semibold text-base tracking-tight">
                Academic & Experimental Context
              </h2>
              <p className="text-xs text-white/80">
                Behavioural Intervention Research Prototype
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Main research callout */}
          <div className="bg-[#f0f6ff] border border-[#c7e0f4] rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-[#0078d4] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#004578]">
                  Intervention Condition
                </h3>
                <p className="text-xs text-[#242424] mt-1 leading-relaxed">
                  This prototype demonstrates the proposed behavioural intervention for managers facing AI disruption.
                </p>
                <div className="mt-2.5 bg-white border border-[#c7e0f4] rounded p-2.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#005a9e] block mb-0.5">
                    Primary Behavioural Outcome
                  </span>
                  <p className="text-xs font-medium text-[#242424]">
                    Whether managers consider <span className="font-bold text-[#0078d4]">redesign, augmentation, reskilling or redeployment</span> before selecting headcount reduction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nudge architecture breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#605e5c]">
              Embedded Behavioural Architecture
            </h4>

            {/* Nudge 1 */}
            <div className={`p-3.5 rounded-lg border transition-all ${
              highlightedNudge === 1 ? 'border-[#0078d4] bg-[#f3f9fd] ring-2 ring-[#0078d4]/20' : 'border-[#e1dfdd] bg-[#faf9f8]'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0078d4] text-white text-[11px] font-bold">
                    1
                  </span>
                  <span className="text-xs font-bold text-[#242424]">
                    Nudge 1: Pre-Commitment Cognitive Framing
                  </span>
                </div>
                <span className="text-[11px] text-[#605e5c] bg-white px-2 py-0.5 rounded border border-[#edebe9]">
                  Step 1 (Assessment)
                </span>
              </div>
              <p className="text-xs text-[#424242] mt-2 leading-relaxed">
                <strong>Purpose:</strong> Prompts managers to reflect on <em>how AI alters task components</em> (Automate vs Augment vs Redesign) before they formulate any headcount target.
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-[#605e5c]">
                <span className="bg-white px-2 py-0.5 rounded border border-[#edebe9]">✓ Timely Prompt</span>
                <span className="bg-white px-2 py-0.5 rounded border border-[#edebe9]">✓ Task Simplification</span>
                <span className="bg-white px-2 py-0.5 rounded border border-[#edebe9]">✓ Deliberate Reflection</span>
              </div>
            </div>

            {/* Nudge 2 */}
            <div className={`p-3.5 rounded-lg border transition-all ${
              highlightedNudge === 2 ? 'border-[#0078d4] bg-[#f3f9fd] ring-2 ring-[#0078d4]/20' : 'border-[#e1dfdd] bg-[#faf9f8]'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0078d4] text-white text-[11px] font-bold">
                    2
                  </span>
                  <span className="text-xs font-bold text-[#242424]">
                    Nudge 2: Salience of Alternative Pathways
                  </span>
                </div>
                <span className="text-[11px] text-[#605e5c] bg-white px-2 py-0.5 rounded border border-[#edebe9]">
                  Step 3 (Scenarios)
                </span>
              </div>
              <p className="text-xs text-[#424242] mt-2 leading-relaxed">
                <strong>Purpose:</strong> When exploring reduction scenarios, makes internal redeployment and reskilling pathways readily accessible via a non-restrictive side drawer.
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-[#605e5c]">
                <span className="bg-white px-2 py-0.5 rounded border border-[#edebe9]">✓ Choice Architecture</span>
                <span className="bg-white px-2 py-0.5 rounded border border-[#edebe9]">✓ Local Descriptive Norm (Social / EAST)</span>
                <span className="bg-white px-2 py-0.5 rounded border border-[#edebe9]">✓ Zero Restriction (Full Autonomy)</span>
                <span className="bg-white px-2 py-0.5 rounded border border-[#edebe9]">✓ Reduced Cognitive Friction</span>
              </div>
            </div>
          </div>

          {/* Ethics & Realism Notice */}
          <div className="p-3 bg-[#fdf6f2] border border-[#f8d7c2] rounded-lg text-xs text-[#7a3b00] flex items-start space-x-2.5">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#d83b01]" />
            <div>
              <span className="font-semibold block">Academic Integrity & Non-Incentivized Choice</span>
              The manager retains complete freedom of choice at every stage. No coercive blocks, artificial hurdles, or penalties are applied.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8f9fa] px-6 py-3 border-t border-[#edebe9] flex items-center justify-between">
          <p className="text-[11px] text-[#605e5c]">
            Concept prototype — proposed extension to Microsoft Workforce Insights.
          </p>
          <button
            onClick={onClose}
            className="fluent-btn-primary px-4 py-1.5 text-xs rounded-md"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
