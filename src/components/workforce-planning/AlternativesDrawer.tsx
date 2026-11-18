import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowLeft, 
  Info,
  ChevronRight,
  CheckCircle2,
  Building2,
  Users,
  Briefcase
} from 'lucide-react';
import { InternalOpportunity } from '../../types';
import { INTERNAL_OPPORTUNITIES } from '../../data/teamData';

interface AlternativesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRole: (role: InternalOpportunity) => void;
  onReturnToPlan: () => void;
}

export const AlternativesDrawer: React.FC<AlternativesDrawerProps> = ({
  isOpen,
  onClose,
  onSelectRole,
  onReturnToPlan
}) => {
  const [hasAppliedRedeployment, setHasAppliedRedeployment] = useState(false);

  if (!isOpen) return null;

  const handleConsiderRedeployment = () => {
    setHasAppliedRedeployment(true);
  };

  const handleClose = () => {
    setHasAppliedRedeployment(false);
    onClose();
  };

  const handleProceedToPlan = () => {
    setHasAppliedRedeployment(false);
    onReturnToPlan();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/25 backdrop-blur-2xs animate-in fade-in duration-150">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-[440px] bg-white border-l border-[#EDEBE9] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EDEBE9] flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-[#323130]">
                Potential redeployment opportunities
              </h2>
              <p className="text-xs text-[#605E5C] mt-0.5">
                Identified skill-matching pathways
              </p>
            </div>

            <button
              onClick={handleClose}
              className="p-1 rounded text-[#605E5C] hover:bg-[#F3F2F1] hover:text-[#323130] transition-colors cursor-pointer"
              title="Close panel"
              aria-label="Close panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs">
            {/* Top Context Callout */}
            <div className="p-3.5 bg-[#FAF9F8] rounded-lg border border-[#EDEBE9] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#605E5C] text-[11px] uppercase tracking-wider">
                  Your current plan
                </span>
                <span className="font-bold text-[#a4262c] bg-[#FDF3F4] px-2 py-0.5 rounded border border-[#F1C1C6]">
                  Reduce team size by 3 positions
                </span>
              </div>
              <p className="text-[#323130] leading-relaxed">
                Workforce Insights identified the following illustrative internal roles that could potentially match the skills of affected employees.
              </p>
              <p className="text-[11px] text-[#0078d4] font-medium pt-1 border-t border-[#EDEBE9]">
                These are potential redeployment pathways—not additional jobs created by this intervention.
              </p>
            </div>

            {/* Confirmation state when manager clicks 'Consider redeployment' */}
            {hasAppliedRedeployment ? (
              <div className="p-4 bg-[#F0F6FF] border border-[#C7E0F4] rounded-lg space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center space-x-2 text-[#107C41]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-bold text-xs text-[#004578]">
                    Redeployment options added to your review
                  </span>
                </div>
                <p className="text-[#323130] leading-relaxed">
                  You can now compare these potential redeployment pathways with your original workforce recommendation in the Plan Summary.
                </p>

                <div className="bg-white p-3 rounded border border-[#C7E0F4] space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-[#605E5C]">Original recommendation:</span>
                    <span className="font-bold text-[#323130]">Reduce team size: 20 → 17</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#605E5C]">Alternative pathway considered:</span>
                    <span className="font-bold text-[#0078d4]">Potential redeployment: 3 roles</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Roles List */
              <div className="space-y-3 pt-1">
                {INTERNAL_OPPORTUNITIES.map((opp) => (
                  <div
                    key={opp.id}
                    className="p-4 border border-[#EDEBE9] rounded-lg bg-white hover:border-[#0078d4] transition-colors shadow-xs space-y-2.5"
                  >
                    {/* Title & Match */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-[#323130] text-xs">{opp.title}</h4>
                        <p className="text-[11px] text-[#605E5C] mt-0.5">{opp.department}</p>
                      </div>
                      <span className="text-[11px] text-[#107C41] font-bold bg-[#DFF6DD] px-2 py-0.5 rounded border border-[#92C353]/40 shrink-0">
                        {opp.alignmentScore}% Match
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center justify-between text-[11px] text-[#605E5C]">
                      <span>Openings: <strong>{opp.openings} positions</strong></span>
                      <span>Potential transition: <strong>~{opp.estimatedTransitionWeeks} weeks</strong></span>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {opp.requiredSkills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-[#F3F2F1] text-[#323130] rounded text-[10px] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-[#EDEBE9] flex justify-between items-center">
                      <button
                        onClick={() => onSelectRole(opp)}
                        className="text-xs text-[#0078d4] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View role details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Prototype Disclaimer */}
            <div className="p-2.5 bg-[#FAF9F8] rounded border border-[#EDEBE9] text-[10px] text-[#605E5C] flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#605E5C] shrink-0 mt-0.5" />
              <span>
                Illustrative prototype data — not actual Microsoft workforce data.
              </span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-[#EDEBE9] bg-[#FAF9F8] space-y-2">
            {hasAppliedRedeployment ? (
              <button
                onClick={handleProceedToPlan}
                className="w-full bg-[#0078d4] text-white py-2 rounded text-xs font-semibold hover:bg-[#106ebe] transition-colors cursor-pointer shadow-xs"
              >
                Return to workforce plan
              </button>
            ) : (
              <>
                <button
                  onClick={handleConsiderRedeployment}
                  className="w-full bg-[#0078d4] text-white py-2 rounded text-xs font-semibold hover:bg-[#106ebe] transition-colors cursor-pointer shadow-xs"
                >
                  Consider redeployment
                </button>
                <button
                  onClick={handleProceedToPlan}
                  className="w-full border border-[#EDEBE9] bg-white text-[#323130] py-2 rounded text-xs font-semibold hover:bg-[#F3F2F1] transition-colors cursor-pointer"
                >
                  Back to workforce plan
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
