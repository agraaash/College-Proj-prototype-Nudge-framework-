import React from 'react';
import { 
  ArrowLeft, 
  Check, 
  Send, 
  RotateCcw, 
  Sparkles, 
  Users, 
  Briefcase, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { Scenario, AIEffectSelection } from '../../types';
import { SCENARIOS, TEAM_INFO } from '../../data/teamData';

interface Step4Props {
  selectedScenario: Scenario['id'];
  aiSelections: AIEffectSelection;
  hasViewedAlternatives: boolean;
  onBack: () => void;
  onSubmit: () => void;
  isAcademicMode: boolean;
}

export const Step4ReviewSubmit: React.FC<Step4Props> = ({
  selectedScenario,
  aiSelections,
  hasViewedAlternatives,
  onBack,
  onSubmit,
  isAcademicMode
}) => {
  const currentScenario = SCENARIOS.find(s => s.id === selectedScenario) || SCENARIOS[0];

  const alternativesList = [
    { 
      label: 'Automation', 
      active: true, 
      detail: 'Automating routine metric compilation and standardized reports' 
    },
    { 
      label: 'AI augmentation', 
      active: true, 
      detail: 'Copilot SQL assistance and faster data anomaly discovery' 
    },
    { 
      label: 'Role redesign', 
      active: true, 
      detail: 'Realigning analyst capacity toward predictive modeling and experimentation' 
    },
    { 
      label: 'Reskilling / redeployment', 
      active: true, 
      detail: '3 high-alignment internal AI product & strategy roles identified (~71% avg match)' 
    },
  ];

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
            <span>Back to scenarios</span>
          </button>
          <h1 className="text-2xl font-semibold text-[#323130] tracking-tight">
            Your workforce plan
          </h1>
          <p className="text-sm text-[#605E5C]">
            Review your proposed FY27 workforce configuration before saving the recommendation.
          </p>
        </div>

        <div className="flex items-center space-x-2 self-start sm:self-center">
          <span className="text-xs font-semibold text-[#0078d4] bg-[#EBF3FC] px-3 py-1.5 rounded-full border border-[#C7E0F4]">
            Plan Summary
          </span>
        </div>
      </div>

      {/* Main Review Card */}
      <div className="p-6 bg-white border border-[#EDEBE9] rounded-lg shadow-xs space-y-6">
        {/* Headcount Transition Metric Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#FAF9F8] rounded-lg border border-[#EDEBE9]">
          <div className="text-center sm:text-left sm:border-r border-[#EDEBE9] sm:pr-4">
            <span className="text-xs text-[#605E5C] font-semibold uppercase tracking-wider">Current team</span>
            <div className="text-2xl font-bold text-[#323130] mt-1">
              {TEAM_INFO.currentHeadcount} <span className="text-xs font-normal text-[#605E5C]">employees</span>
            </div>
            <span className="text-[11px] text-[#605E5C]">FY26 Baseline</span>
          </div>

          <div className="text-center sm:text-left sm:border-r border-[#EDEBE9] sm:pr-4">
            <span className="text-xs text-[#605E5C] font-semibold uppercase tracking-wider">Proposed team</span>
            <div className="text-2xl font-bold text-[#0078d4] mt-1">
              {currentScenario.employeeCount} <span className="text-xs font-normal text-[#605E5C]">employees</span>
            </div>
            <span className="text-[11px] text-[#0078d4] font-medium">{currentScenario.subtitle}</span>
          </div>

          <div className="text-center sm:text-left">
            <span className="text-xs text-[#605E5C] font-semibold uppercase tracking-wider">Change</span>
            <div className={`text-2xl font-bold mt-1 ${
              currentScenario.workforceDelta < 0 ? 'text-[#a4262c]' : 'text-[#107C41]'
            }`}>
              {currentScenario.workforceDelta === 0 ? '0' : `${currentScenario.workforceDelta}`} <span className="text-xs font-normal text-[#605E5C]">positions</span>
            </div>
            <span className="text-[11px] text-[#605E5C]">Over 12 months</span>
          </div>
        </div>

        {/* Selected Scenario Details */}
        <div className="p-4 rounded-lg border border-[#C7E0F4] bg-[#EBF3FC]">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#004578] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#0078d4]" />
            <span>Selected Strategy: {currentScenario.title} — {currentScenario.subtitle}</span>
          </div>
          <p className="text-xs text-[#323130] leading-relaxed">
            {currentScenario.description}
          </p>
          <div className="mt-2 text-[11px] text-[#0078d4] font-semibold">
            Strategic focus: {currentScenario.focusArea}
          </div>
        </div>

        {/* Alternatives Considered Checklist (Key Behavioral Reflection) */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#605E5C] mb-3">
            Alternatives considered during planning
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {alternativesList.map((alt) => (
              <div
                key={alt.label}
                className="p-3.5 bg-[#FAF9F8] border border-[#EDEBE9] rounded-md flex items-start space-x-3"
              >
                <div className="w-4 h-4 rounded-full bg-[#107C41] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#323130]">
                    {alt.label}
                  </div>
                  <div className="text-[11px] text-[#605E5C] mt-0.5 leading-relaxed">
                    {alt.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reinforcing Note */}
        <div className="p-3.5 bg-[#FAF9F8] border border-[#EDEBE9] rounded-lg text-xs text-[#605E5C] space-y-1">
          <div className="flex items-center space-x-2 text-[#323130] font-semibold">
            <Info className="w-3.5 h-3.5 text-[#0078d4] shrink-0" />
            <span>Your final decision remains unchanged unless you choose to revise it.</span>
          </div>
          <p className="text-[11px] pl-5 text-[#605E5C]">
            Concept prototype — proposed extension to Microsoft Workforce Insights. Illustrative data only.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#EDEBE9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <button
            onClick={onBack}
            className="text-[#323130] hover:bg-[#F3F2F1] border border-[#EDEBE9] px-4 py-2 text-xs font-semibold rounded transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Review plan</span>
          </button>

          <button
            onClick={onSubmit}
            className="bg-[#0078d4] text-white px-6 py-2 text-xs font-semibold rounded hover:bg-[#106ebe] transition-colors flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Save workforce plan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
