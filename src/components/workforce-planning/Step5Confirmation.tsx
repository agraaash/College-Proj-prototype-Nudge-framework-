import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  RotateCcw, 
  Users, 
  Layers, 
  Info
} from 'lucide-react';
import { Scenario } from '../../types';
import { SCENARIOS } from '../../data/teamData';

interface Step5Props {
  selectedScenario: Scenario['id'];
  onReset: () => void;
  onNavigateToTeam: () => void;
  onNavigateToInsights: () => void;
  isAcademicMode: boolean;
}

export const Step5Confirmation: React.FC<Step5Props> = ({
  selectedScenario,
  onReset,
  onNavigateToTeam,
  onNavigateToInsights,
  isAcademicMode
}) => {
  const currentScenario = SCENARIOS.find(s => s.id === selectedScenario) || SCENARIOS[0];

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-12 animate-in zoom-in-95 duration-300">
      {/* Success Card */}
      <div className="p-8 bg-white border border-[#EDEBE9] rounded-lg shadow-xs text-center space-y-6">
        {/* Check Icon */}
        <div className="w-14 h-14 bg-[#DFF6DD] text-[#107C41] rounded-full flex items-center justify-center mx-auto border-2 border-[#92C353]/60 shadow-2xs">
          <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
        </div>

        {/* Title & Status */}
        <div>
          <h1 className="text-2xl font-bold text-[#323130] tracking-tight">
            Workforce plan saved
          </h1>
          <p className="text-xs text-[#605E5C] mt-1 max-w-md mx-auto">
            Your proposed workforce structure has been recorded for review with Organizational Leadership & HR Business Partners.
          </p>
        </div>

        {/* Summary Metric Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <div className="p-4 bg-[#FAF9F8] border border-[#EDEBE9] rounded-lg">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#605E5C] block">
              Scenario
            </span>
            <div className="text-sm font-bold text-[#323130] mt-1">
              {currentScenario.subtitle}
            </div>
            <span className="text-[11px] text-[#605E5C]">
              Target: {currentScenario.employeeCount} FTEs
            </span>
          </div>

          <div className="p-4 bg-[#FAF9F8] border border-[#EDEBE9] rounded-lg">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#605E5C] block">
              Alternatives considered
            </span>
            <div className="text-sm font-bold text-[#0078d4] mt-1">
              4 pathways
            </div>
            <span className="text-[11px] text-[#605E5C]">
              Reskill, Redesign, Augment, Automate
            </span>
          </div>

          <div className="p-4 bg-[#FAF9F8] border border-[#EDEBE9] rounded-lg">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#605E5C] block">
              Potential redeployment
            </span>
            <div className="text-sm font-bold text-[#107C41] mt-1">
              3 internal roles
            </div>
            <span className="text-[11px] text-[#605E5C]">
              Avg. 71% skill alignment
            </span>
          </div>
        </div>

        {/* Prototype Disclaimer */}
        <div className="p-3 bg-[#FAF9F8] border border-[#EDEBE9] rounded-lg text-xs text-[#605E5C] text-left flex items-start space-x-2">
          <Info className="w-4 h-4 text-[#0078d4] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#323130] block">
              Illustrative Prototype Data
            </span>
            <span>
              This session demonstrated the proposed AI Workforce Planning extension for Microsoft Workforce Insights.
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-[#EDEBE9] flex flex-col sm:flex-row sm:items-center justify-center gap-3">
          <button
            onClick={onReset}
            className="bg-[#0078d4] text-white px-5 py-2 text-xs font-semibold rounded hover:bg-[#106ebe] transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Start new planning cycle</span>
          </button>

          <button
            onClick={onNavigateToTeam}
            className="border border-[#EDEBE9] bg-white text-[#323130] hover:bg-[#F3F2F1] px-4 py-2 text-xs font-semibold rounded transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <Users className="w-3.5 h-3.5" />
            <span>View team roster</span>
          </button>

          <button
            onClick={onNavigateToInsights}
            className="border border-[#EDEBE9] bg-white text-[#323130] hover:bg-[#F3F2F1] px-4 py-2 text-xs font-semibold rounded transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Workforce Insights overview</span>
          </button>
        </div>
      </div>
    </div>
  );
};
