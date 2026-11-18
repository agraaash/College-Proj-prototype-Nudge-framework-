import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Compass,
  Info,
  X,
  Sparkles,
  UserCheck,
  RefreshCw,
  Bot
} from 'lucide-react';
import { Scenario } from '../../types';
import { SCENARIOS } from '../../data/teamData';

interface Step3Props {
  selectedScenario: Scenario['id'];
  onSelectScenario: (id: Scenario['id']) => void;
  onExploreAlternatives: () => void;
  onContinueRecommendation: () => void;
  onBack: () => void;
  isAcademicMode: boolean;
  hasViewedAlternatives: boolean;
}

export const Step3Scenarios: React.FC<Step3Props> = ({
  selectedScenario,
  onSelectScenario,
  onExploreAlternatives,
  onContinueRecommendation,
  onBack,
  isAcademicMode,
  hasViewedAlternatives
}) => {
  const currentScenarioObj = SCENARIOS.find(s => s.id === selectedScenario) || SCENARIOS[0];
  const [isInfoPopoverOpen, setIsInfoPopoverOpen] = useState(false);
  const [isSocialNormPopoverOpen, setIsSocialNormPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const socialNormPopoverRef = useRef<HTMLDivElement>(null);

  // Close info popover & social norm popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsInfoPopoverOpen(false);
      }
      if (socialNormPopoverRef.current && !socialNormPopoverRef.current.contains(event.target as Node)) {
        setIsSocialNormPopoverOpen(false);
      }
    };
    if (isInfoPopoverOpen || isSocialNormPopoverOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isInfoPopoverOpen, isSocialNormPopoverOpen]);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <button
            onClick={onBack}
            className="flex items-center space-x-1 text-xs text-[#0078d4] hover:underline mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to AI impact</span>
          </button>
          <h1 className="text-2xl font-semibold text-[#323130] tracking-tight">
            How should your team be structured?
          </h1>
          <p className="text-sm text-[#605E5C]">
            Based on the potential changes in work identified above, compare different ways to structure your team.
          </p>
        </div>

        <div className="flex items-center space-x-2 self-start sm:self-center">
          <span className="text-xs text-[#605E5C] bg-white px-3 py-1.5 rounded-md border border-[#EDEBE9] shadow-xs">
            Baseline: <strong>20 FTEs</strong>
          </span>
        </div>
      </div>

      {/* 3 Scenario Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SCENARIOS.map((scenario) => {
          const isSelected = selectedScenario === scenario.id;
          
          return (
            <div
              key={scenario.id}
              onClick={() => onSelectScenario(scenario.id)}
              className={`p-5 rounded-lg cursor-pointer transition-all shadow-xs relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#EBF3FC] border-2 border-[#0078d4]'
                  : 'bg-white border border-[#EDEBE9] hover:border-[#0078d4]'
              }`}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
            >
              {isSelected && (
                <div className="absolute top-3 right-3">
                  <div className="w-4 h-4 bg-[#0078d4] rounded-full flex items-center justify-center text-white text-[10px]">
                    ✓
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm text-[#323130]">
                    {scenario.title}
                  </h4>
                  <span className="text-xs font-bold text-[#323130] bg-white/80 px-2 py-0.5 rounded border border-[#EDEBE9]">
                    {scenario.employeeCount} employees
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#0078d4] mb-2.5">
                  {scenario.subtitle}
                </p>
                <p className="text-xs text-[#605E5C] leading-relaxed mb-4">
                  {scenario.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EDEBE9] flex items-center justify-between text-xs text-[#605E5C]">
                <span>Workforce change</span>
                <span className={`font-semibold ${scenario.workforceDelta < 0 ? 'text-[#a4262c]' : 'text-[#107c41]'}`}>
                  {scenario.workforceDelta === 0 ? '0 positions' : `${scenario.workforceDelta} positions`}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 
        ============================================================
        NUDGE 2: INLINE CALLOUT BEFORE FINALISING RECOMMENDATION
        (Triggered when Scenario C - Reduce team size is selected)
        ============================================================
      */}
      {selectedScenario === 'reduce' && (
        <div className="relative animate-in fade-in duration-200">
          <div className="bg-white border border-[#EDEBE9] p-6 rounded-lg shadow-xs space-y-4">
            {/* Header & Dynamic Statement */}
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#605E5C]">
                    Workforce Considerations
                  </span>
                  <span className="text-[11px] text-[#a4262c] bg-[#FDF3F4] px-2 py-0.5 rounded border border-[#F1C1C6] font-semibold">
                    Reduce team: 20 → 17 employees
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#323130]">
                  Before you finalise this workforce recommendation
                </h3>
                <p className="text-xs text-[#605E5C]">
                  You are proposing to reduce the team from 20 to 17 employees.
                </p>
              </div>
            </div>

            {/* Question with Information Icon */}
            <div className="relative flex items-center gap-2 pt-1">
              <p className="text-xs font-semibold text-[#323130]">
                Have you considered whether AI could change how these roles are structured before reducing team size?
              </p>
              
              {/* Information ⓘ Trigger */}
              <div className="relative inline-block" ref={popoverRef}>
                <button
                  type="button"
                  onClick={() => setIsInfoPopoverOpen(prev => !prev)}
                  className="w-4 h-4 rounded-full bg-[#EBF3FC] text-[#0078d4] hover:bg-[#0078d4] hover:text-white transition-colors flex items-center justify-center text-[11px] font-bold cursor-pointer"
                  title="What do these pathways mean?"
                  aria-label="What do these pathways mean?"
                >
                  ⓘ
                </button>

                {/* Information Popover (Fluent 2 Card) */}
                {isInfoPopoverOpen && (
                  <div className="absolute left-0 bottom-full mb-2 z-50 w-80 sm:w-96 bg-white border border-[#EDEBE9] rounded-lg shadow-xl p-4 text-xs text-[#323130] animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between border-b border-[#EDEBE9] pb-2 mb-3">
                      <h4 className="font-bold text-[#323130] text-xs">
                        What do these pathways mean?
                      </h4>
                      <button
                        onClick={() => setIsInfoPopoverOpen(false)}
                        className="text-[#605E5C] hover:text-[#323130] p-1 rounded hover:bg-[#F3F2F1] cursor-pointer"
                        aria-label="Close"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-2.5 leading-relaxed">
                      <div>
                        <span className="font-bold text-[#0078d4] block">Reskill / Redeploy</span>
                        <p className="text-[11px] text-[#605E5C] mt-0.5">
                          Develop existing employees' skills or move them into another internal role where their capabilities can be better applied.
                        </p>
                      </div>

                      <div>
                        <span className="font-bold text-[#0078d4] block">Redesign</span>
                        <p className="text-[11px] text-[#605E5C] mt-0.5">
                          Change the responsibilities or composition of a role so employees focus more on higher-value work as AI changes some tasks.
                        </p>
                      </div>

                      <div>
                        <span className="font-bold text-[#0078d4] block">Augment</span>
                        <p className="text-[11px] text-[#605E5C] mt-0.5">
                          Use AI to support employees in performing their existing work more effectively rather than replacing the role.
                        </p>
                      </div>

                      <div>
                        <span className="font-bold text-[#0078d4] block">Automate</span>
                        <p className="text-[11px] text-[#605E5C] mt-0.5">
                          Use AI to perform tasks that can be completed with limited human involvement.
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#EDEBE9] text-[10px] text-[#605E5C] italic">
                      These pathways are not mutually exclusive. A workforce plan may combine several approaches.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Reconfigured 4 Pathways in EXACT ORDER with equal visual weight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
              {/* 1. Reskill / Redeploy */}
              <div className="bg-[#FAF9F8] p-3 rounded-md border border-[#EDEBE9] text-xs space-y-1">
                <div className="flex items-center space-x-1.5 font-bold text-[#323130]">
                  <Sparkles className="w-3.5 h-3.5 text-[#0078d4]" />
                  <span>1. Reskill / Redeploy</span>
                </div>
                <p className="text-[11px] text-[#605E5C] leading-snug">
                  Can affected employees move into another role?
                </p>
              </div>

              {/* 2. Redesign */}
              <div className="bg-[#FAF9F8] p-3 rounded-md border border-[#EDEBE9] text-xs space-y-1">
                <div className="flex items-center space-x-1.5 font-bold text-[#323130]">
                  <RefreshCw className="w-3.5 h-3.5 text-[#0078d4]" />
                  <span>2. Redesign</span>
                </div>
                <p className="text-[11px] text-[#605E5C] leading-snug">
                  Can the role shift toward higher-value work?
                </p>
              </div>

              {/* 3. Augment */}
              <div className="bg-[#FAF9F8] p-3 rounded-md border border-[#EDEBE9] text-xs space-y-1">
                <div className="flex items-center space-x-1.5 font-bold text-[#323130]">
                  <UserCheck className="w-3.5 h-3.5 text-[#0078d4]" />
                  <span>3. Augment</span>
                </div>
                <p className="text-[11px] text-[#605E5C] leading-snug">
                  Can AI help employees perform the work more effectively?
                </p>
              </div>

              {/* 4. Automate */}
              <div className="bg-[#FAF9F8] p-3 rounded-md border border-[#EDEBE9] text-xs space-y-1">
                <div className="flex items-center space-x-1.5 font-bold text-[#323130]">
                  <Bot className="w-3.5 h-3.5 text-[#0078d4]" />
                  <span>4. Automate</span>
                </div>
                <p className="text-[11px] text-[#605E5C] leading-snug">
                  Can AI perform some of the tasks?
                </p>
              </div>
            </div>

            {/* 
              ============================================================
              SOCIAL NORM COMPONENT (EAST Framework: Local Descriptive Norm)
              ============================================================
            */}
            <div className="p-4 bg-[#FAF9F8] border border-[#EDEBE9] rounded-lg space-y-2.5">
              <h4 className="text-xs font-semibold text-[#323130]">
                What are other managers considering?
              </h4>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
                <span className="text-3xl font-bold text-[#0078d4] tracking-tight shrink-0">
                  72%
                </span>
                <p className="text-xs text-[#323130] leading-relaxed">
                  of managers in your business unit who recently planned for AI-related workforce changes considered reskilling or redeployment before finalising their workforce plan.
                </p>
              </div>

              <div className="pt-2 border-t border-[#EDEBE9] flex flex-wrap items-center justify-between gap-2 text-[11px]">
                <span className="text-[#605E5C]">
                  Illustrative prototype data
                </span>

                {/* Why am I seeing this? Trigger and Popover */}
                <div className="relative inline-block" ref={socialNormPopoverRef}>
                  <button
                    type="button"
                    onClick={() => setIsSocialNormPopoverOpen(prev => !prev)}
                    className="text-[#0078d4] hover:underline cursor-pointer flex items-center space-x-1 font-medium"
                    aria-label="Why am I seeing this comparison?"
                  >
                    <span>Why am I seeing this?</span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#EBF3FC] text-[#0078d4] flex items-center justify-center text-[10px] font-bold">ⓘ</span>
                  </button>

                  {/* Popover */}
                  {isSocialNormPopoverOpen && (
                    <div className="absolute right-0 bottom-full mb-2 z-50 w-72 sm:w-80 bg-white border border-[#EDEBE9] rounded-lg shadow-xl p-4 text-xs text-[#323130] animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex items-center justify-between border-b border-[#EDEBE9] pb-2 mb-2.5">
                        <h5 className="font-bold text-[#323130] text-xs">
                          About this comparison
                        </h5>
                        <button
                          onClick={() => setIsSocialNormPopoverOpen(false)}
                          className="text-[#605E5C] hover:text-[#323130] p-1 rounded hover:bg-[#F3F2F1] cursor-pointer"
                          aria-label="Close"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="space-y-2 text-[#605E5C] leading-relaxed">
                        <p>
                          This comparison shows how managers facing similar AI-related workforce decisions have approached workforce planning.
                        </p>
                        <p className="text-[11px] text-[#605E5C] pt-1.5 border-t border-[#EDEBE9]">
                          The statistic is illustrative prototype data and is included to demonstrate the proposed social-norm intervention.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Nudge 2 Action Controls */}
            <div className="pt-4 border-t border-[#EDEBE9] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                {hasViewedAlternatives && (
                  <span className="text-xs text-[#107C41] bg-[#DFF6DD] px-2.5 py-1 rounded border border-[#92C353]/30 flex items-center gap-1.5 font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    Internal redeployment alternatives reviewed (3 roles identified)
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={onContinueRecommendation}
                  className="text-[#323130] hover:bg-[#F3F2F1] border border-[#EDEBE9] px-4 py-2 rounded text-xs font-semibold transition-colors cursor-pointer"
                >
                  Continue with current recommendation
                </button>

                <button
                  onClick={onExploreAlternatives}
                  className="bg-[#0078d4] text-white px-5 py-2 rounded text-xs font-semibold hover:bg-[#106ebe] transition-colors flex items-center space-x-1.5 cursor-pointer shadow-xs"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Explore alternatives</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* If Scenario A or B is selected */}
      {selectedScenario !== 'reduce' && (
        <div className="bg-white border border-[#EDEBE9] p-5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="text-xs text-[#605E5C]">
            Selected recommendation: <strong className="text-[#323130]">{currentScenarioObj.subtitle} ({currentScenarioObj.employeeCount} employees)</strong>
          </div>

          <button
            onClick={onContinueRecommendation}
            className="bg-[#0078d4] text-white px-5 py-2 rounded text-xs font-semibold hover:bg-[#106ebe] transition-colors flex items-center space-x-1.5 cursor-pointer shadow-xs"
          >
            <span>Proceed to plan summary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
