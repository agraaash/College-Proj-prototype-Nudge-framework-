import React from 'react';
import { 
  Users, 
  Sparkles, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Check, 
  Info,
  ArrowRight,
  Bot,
  UserCheck,
  RefreshCw,
  MinusCircle
} from 'lucide-react';
import { AIEffectSelection } from '../../types';
import { TEAM_INFO } from '../../data/teamData';

interface Step1Props {
  aiSelections: AIEffectSelection;
  onToggleSelection: (key: keyof AIEffectSelection) => void;
  onContinue: () => void;
  isAcademicMode: boolean;
}

export const Step1TeamAssessment: React.FC<Step1Props> = ({
  aiSelections,
  onToggleSelection,
  onContinue,
  isAcademicMode
}) => {
  const atLeastOneSelected = 
    aiSelections.automate || 
    aiSelections.augment || 
    aiSelections.redesign || 
    aiSelections.noChange;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-in fade-in duration-300">
      {/* Top Header */}
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold text-[#323130] mb-1">
              Workforce Planning
            </h1>
            <p className="text-[#605E5C] text-sm">
              Plan your team's capabilities and structure for the next 12 months.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-[#EDEBE9] rounded-full shadow-xs text-xs font-medium text-[#323130]">
            <span className="text-[#0078d4]">✦ Copilot</span>
            <span>AI Insights Active</span>
          </div>
        </div>
      </div>

      {/* Grid: Team Summary & Projected Workload */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Team Summary Card */}
        <div className="col-span-12 md:col-span-5 bg-white p-5 rounded-lg border border-[#EDEBE9] shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#605E5C] mb-3">
              Team Summary
            </h3>
            <div className="flex items-end gap-2 mb-3">
              <span className="text-3xl font-bold text-[#323130]">{TEAM_INFO.currentHeadcount}</span>
              <span className="text-sm text-[#605E5C] mb-1">Employees</span>
            </div>
          </div>

          <div className="text-xs text-[#605E5C] flex flex-col gap-2 pt-3 border-t border-[#EDEBE9]">
            <div className="flex justify-between">
              <span>Department</span>
              <span className="font-medium text-[#323130]">{TEAM_INFO.department}</span>
            </div>
            <div className="flex justify-between">
              <span>Functions</span>
              <span className="font-medium text-[#323130]">{TEAM_INFO.functionsCount} Units</span>
            </div>
            <div className="flex justify-between">
              <span>Key Skills</span>
              <span className="font-medium text-[#323130]">{TEAM_INFO.keySkillsCount} Identified</span>
            </div>
            <div className="flex justify-between">
              <span>Workload</span>
              <span className="font-medium text-[#0078d4]">{TEAM_INFO.projectedWorkloadGrowth} Projected</span>
            </div>
          </div>
        </div>

        {/* Quick Context Card */}
        <div className="col-span-12 md:col-span-7 bg-white p-5 rounded-lg border border-[#EDEBE9] shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#605E5C] mb-3">
              Planning Context & Dynamics
            </h3>
            <div className="text-xs text-[#323130] space-y-2 leading-relaxed">
              <p>
                <strong>{TEAM_INFO.name}</strong> operates across {TEAM_INFO.focusAreas} with {TEAM_INFO.currentHeadcount} dedicated analysts.
              </p>
              <p className="text-[#605E5C]">
                An anticipated +18% growth in analytics demands in FY27 requires evaluating task automation and capacity shifts before adjusting baseline staffing.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#EDEBE9] flex items-center justify-between text-xs text-[#605E5C]">
            <span>Confidence Index</span>
            <span className="font-semibold text-[#107C41] bg-[#DFF6DD] px-2 py-0.5 rounded border border-[#92C353]/40">
              High (94% Verified)
            </span>
          </div>
        </div>
      </div>

      {/* 
        Inline Reflection Card: Focus on Work Before Workforce
      */}
      <div className="relative">
        <div className="bg-white p-6 rounded-lg border border-[#EDEBE9] shadow-xs">
          {/* Card Header with Question */}
          <div className="flex items-start space-x-3 mb-4">
            <div className="p-2 rounded bg-[#EBF3FC] text-[#0078d4] shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#323130]">
                Before planning your future team structure
              </h3>
              <p className="text-xs text-[#605E5C] mt-0.5">
                How do you expect AI to change the work performed by your team?
              </p>
            </div>
          </div>

          {/* Four Selectable Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {/* Card 1: Automate */}
            <div
              onClick={() => onToggleSelection('automate')}
              className={`p-4 rounded-lg border cursor-pointer transition-colors select-none flex items-start space-x-3 ${
                aiSelections.automate
                  ? 'border-[#0078d4] bg-[#EBF3FC]'
                  : 'border-[#EDEBE9] bg-white hover:border-[#c8c6c4] hover:bg-[#FAF9F8]'
              }`}
              role="checkbox"
              aria-checked={aiSelections.automate}
              tabIndex={0}
            >
              <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                aiSelections.automate
                  ? 'bg-[#0078d4] border-[#0078d4] text-white'
                  : 'border-[#8a8886] bg-white'
              }`}>
                {aiSelections.automate && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-1.5">
                  <Bot className="w-3.5 h-3.5 text-[#0078d4]" />
                  <span className="text-xs font-bold text-[#323130]">Automate</span>
                </div>
                <p className="text-[11px] text-[#605E5C] mt-1 leading-relaxed">
                  AI can perform some existing tasks.
                </p>
                <div className="mt-2 text-[10px] text-[#605E5C] bg-white/80 px-2 py-0.5 rounded border border-[#EDEBE9] inline-block">
                  Example: Routine dashboards, standard reports
                </div>
              </div>
            </div>

            {/* Card 2: Augment */}
            <div
              onClick={() => onToggleSelection('augment')}
              className={`p-4 rounded-lg border cursor-pointer transition-colors select-none flex items-start space-x-3 ${
                aiSelections.augment
                  ? 'border-[#0078d4] bg-[#EBF3FC]'
                  : 'border-[#EDEBE9] bg-white hover:border-[#c8c6c4] hover:bg-[#FAF9F8]'
              }`}
              role="checkbox"
              aria-checked={aiSelections.augment}
              tabIndex={0}
            >
              <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                aiSelections.augment
                  ? 'bg-[#0078d4] border-[#0078d4] text-white'
                  : 'border-[#8a8886] bg-white'
              }`}>
                {aiSelections.augment && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-[#107C41]" />
                  <span className="text-xs font-bold text-[#323130]">Augment</span>
                </div>
                <p className="text-[11px] text-[#605E5C] mt-1 leading-relaxed">
                  AI can help employees perform existing tasks more effectively.
                </p>
                <div className="mt-2 text-[10px] text-[#605E5C] bg-white/80 px-2 py-0.5 rounded border border-[#EDEBE9] inline-block">
                  Example: Copilot SQL assistance, faster anomaly discovery
                </div>
              </div>
            </div>

            {/* Card 3: Redesign */}
            <div
              onClick={() => onToggleSelection('redesign')}
              className={`p-4 rounded-lg border cursor-pointer transition-colors select-none flex items-start space-x-3 ${
                aiSelections.redesign
                  ? 'border-[#0078d4] bg-[#EBF3FC]'
                  : 'border-[#EDEBE9] bg-white hover:border-[#c8c6c4] hover:bg-[#FAF9F8]'
              }`}
              role="checkbox"
              aria-checked={aiSelections.redesign}
              tabIndex={0}
            >
              <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                aiSelections.redesign
                  ? 'bg-[#0078d4] border-[#0078d4] text-white'
                  : 'border-[#8a8886] bg-white'
              }`}>
                {aiSelections.redesign && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#5C2D91]" />
                  <span className="text-xs font-bold text-[#323130]">Redesign</span>
                </div>
                <p className="text-[11px] text-[#605E5C] mt-1 leading-relaxed">
                  Roles may shift toward higher-value work.
                </p>
                <div className="mt-2 text-[10px] text-[#605E5C] bg-white/80 px-2 py-0.5 rounded border border-[#EDEBE9] inline-block">
                  Example: Reporting analysts becoming strategic business partners
                </div>
              </div>
            </div>

            {/* Card 4: No Material Change */}
            <div
              onClick={() => onToggleSelection('noChange')}
              className={`p-4 rounded-lg border cursor-pointer transition-colors select-none flex items-start space-x-3 ${
                aiSelections.noChange
                  ? 'border-[#0078d4] bg-[#EBF3FC]'
                  : 'border-[#EDEBE9] bg-white hover:border-[#c8c6c4] hover:bg-[#FAF9F8]'
              }`}
              role="checkbox"
              aria-checked={aiSelections.noChange}
              tabIndex={0}
            >
              <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                aiSelections.noChange
                  ? 'bg-[#0078d4] border-[#0078d4] text-white'
                  : 'border-[#8a8886] bg-white'
              }`}>
                {aiSelections.noChange && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-1.5">
                  <MinusCircle className="w-3.5 h-3.5 text-[#605E5C]" />
                  <span className="text-xs font-bold text-[#323130]">No material change</span>
                </div>
                <p className="text-[11px] text-[#605E5C] mt-1 leading-relaxed">
                  AI is not expected to materially change this work.
                </p>
                <div className="mt-2 text-[10px] text-[#605E5C] bg-white/80 px-2 py-0.5 rounded border border-[#EDEBE9] inline-block">
                  Example: Specialized stakeholder arbitration
                </div>
              </div>
            </div>
          </div>

          {/* Small Supporting Text & Continue Button */}
          <div className="mt-5 pt-4 border-t border-[#EDEBE9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-col space-y-0.5 text-xs text-[#605E5C]">
              <div className="flex items-center space-x-1.5 font-medium text-[#323130]">
                <Info className="w-3.5 h-3.5 text-[#0078d4] shrink-0" />
                <span>Consider how the work will change before deciding how the workforce should change.</span>
              </div>
              <span className="text-[11px] text-[#605E5C] pl-5">
                This step focuses on the work—not headcount.
              </span>
            </div>

            <button
              onClick={onContinue}
              disabled={!atLeastOneSelected}
              className="bg-[#0078d4] text-white px-5 py-2 rounded text-xs font-semibold hover:bg-[#106ebe] transition-colors flex items-center justify-center space-x-1.5 shrink-0 self-end sm:self-auto cursor-pointer disabled:bg-[#EDEBE9] disabled:text-[#A19F9D] disabled:cursor-not-allowed"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
