import React from 'react';
import { 
  X, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  Building2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { InternalOpportunity } from '../../types';

interface RoleDetailModalProps {
  role: InternalOpportunity | null;
  onClose: () => void;
}

export const RoleDetailModal: React.FC<RoleDetailModalProps> = ({ role, onClose }) => {
  if (!role) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 backdrop-blur-2xs p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-[#d1d1d1] max-w-lg w-full overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#faf9f8] p-5 border-b border-[#edebe9] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#eff6fc] text-[#0078d4] flex items-center justify-center border border-[#c7e0f4]">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#242424]">
                {role.title}
              </h3>
              <p className="text-xs text-[#605e5c]">
                {role.department} • {role.openings} open positions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#605e5c] hover:bg-[#f3f2f1] hover:text-[#242424]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          {/* Alignment Meter */}
          <div className="p-3.5 bg-[#f0f6ff] border border-[#c7e0f4] rounded-lg flex items-center justify-between">
            <div>
              <div className="font-bold text-[#004578] text-sm">{role.alignmentScore}% Match</div>
              <div className="text-[11px] text-[#605e5c]">High skill transferability from Customer Analytics</div>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-semibold text-[#107c41] bg-[#dff6dd] px-2 py-0.5 rounded border border-[#92c353]">
                Ready in ~{role.estimatedTransitionWeeks} wks
              </span>
            </div>
          </div>

          {/* Role Overview */}
          <div>
            <h4 className="font-bold text-[#242424] mb-1">Role Description</h4>
            <p className="text-[#605e5c] leading-relaxed">
              {role.description}
            </p>
          </div>

          {/* Matched vs Gap Skills */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-[#faf9f8] rounded-md border border-[#edebe9]">
              <h5 className="font-semibold text-[#107c41] mb-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Existing Skills Match</span>
              </h5>
              <ul className="space-y-1 text-[11px] text-[#242424]">
                {role.matchedSkills.map(s => (
                  <li key={s} className="flex items-center gap-1">
                    <span className="text-[#107c41]">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-[#faf9f8] rounded-md border border-[#edebe9]">
              <h5 className="font-semibold text-[#0078d4] mb-2 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Growth Bridge Skills</span>
              </h5>
              <ul className="space-y-1 text-[11px] text-[#242424]">
                {role.gapSkills.map(s => (
                  <li key={s} className="flex items-center gap-1">
                    <span className="text-[#0078d4]">+</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Internal Learning Path */}
          <div>
            <h4 className="font-bold text-[#242424] mb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#0078d4]" />
              <span>Recommended Accelerated Upskilling Modules</span>
            </h4>
            <div className="space-y-1.5">
              {role.recommendedTraining.map((mod, i) => (
                <div key={mod} className="p-2 bg-[#f8f9fa] rounded border border-[#edebe9] text-[11px] text-[#323130] flex items-center justify-between">
                  <span>{i + 1}. {mod}</span>
                  <span className="text-[#605e5c] text-[10px]">Microsoft Learn</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prototype disclaimer */}
          <div className="p-2.5 bg-[#faf9f8] border border-[#edebe9] rounded text-[10px] text-[#605e5c]">
            Illustrative prototype data — not actual Microsoft workforce data. Designed to evaluate decision-making under alternative choice architectures.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#faf9f8] border-t border-[#edebe9] flex items-center justify-end space-x-2">
          <button
            onClick={onClose}
            className="fluent-btn-secondary px-4 py-1.5 text-xs rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
