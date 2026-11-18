import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  BarChart2, 
  Info
} from 'lucide-react';
import { WORK_ALLOCATION } from '../../data/teamData';

interface Step2Props {
  onBack: () => void;
  onContinue: () => void;
  isAcademicMode: boolean;
}

export const Step2AIImpact: React.FC<Step2Props> = ({
  onBack,
  onContinue,
  isAcademicMode
}) => {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(0);

  const categories = [
    { name: 'Reporting', current: 35, ai: 10, color: '#0078d4', hexBar: '#0078d4', delta: -25 },
    { name: 'Data Analysis', current: 30, ai: 25, color: '#2B88D8', hexBar: '#2B88D8', delta: -5 },
    { name: 'Customer Insights', current: 20, ai: 25, color: '#5CA6E5', hexBar: '#5CA6E5', delta: +5 },
    { name: 'Strategic Work', current: 15, ai: 40, color: '#91C3F1', hexBar: '#91C3F1', delta: +25 },
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
            <span>Back to team assessment</span>
          </button>
          <h1 className="text-2xl font-semibold text-[#323130] tracking-tight">
            How AI could reshape your team's work
          </h1>
          <p className="text-sm text-[#605E5C]">
            Based on your assessment, here's an illustrative view of how your team's capacity could shift.
          </p>
        </div>

        <div className="flex items-center space-x-2 self-start sm:self-center">
          <span className="text-xs text-[#0078d4] bg-[#EBF3FC] px-3 py-1.5 rounded-full border border-[#C7E0F4] font-medium">
            ✦ Based on your assessment
          </span>
        </div>
      </div>

      {/* Main Simulation Comparison Card */}
      <div className="bg-white p-6 rounded-lg border border-[#EDEBE9] shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#605E5C]">
            Capacity Allocation Comparison
          </h3>
          <span className="text-xs text-[#605E5C] bg-[#FAF9F8] px-2.5 py-1 rounded border border-[#EDEBE9]">
            Illustrative scenario
          </span>
        </div>

        {/* 2-Column Comparison: Current vs AI-Enabled */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current Allocation Column */}
          <div className="p-4 bg-[#FAF9F8] border border-[#EDEBE9] rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#323130]">
                Current allocation
              </span>
              <span className="text-[10px] text-[#605E5C] bg-white px-2 py-0.5 rounded border border-[#EDEBE9]">
                100% total time
              </span>
            </div>

            {/* Stacked Visual Bar */}
            <div className="h-8 w-full bg-[#F3F2F1] rounded flex overflow-hidden mb-4">
              <div className="bg-[#0078d4]" style={{ width: '35%' }} title="Reporting (35%)"></div>
              <div className="bg-[#2B88D8]" style={{ width: '30%' }} title="Data Analysis (30%)"></div>
              <div className="bg-[#5CA6E5]" style={{ width: '20%' }} title="Customer Insights (20%)"></div>
              <div className="bg-[#91C3F1]" style={{ width: '15%' }} title="Strategic Work (15%)"></div>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2">
              {categories.map((cat, idx) => (
                <div 
                  key={cat.name}
                  onClick={() => setSelectedTaskIndex(idx)}
                  className={`p-2 rounded-md border cursor-pointer transition-colors flex items-center justify-between text-xs ${
                    selectedTaskIndex === idx
                      ? 'border-[#0078d4] bg-white shadow-xs'
                      : 'border-transparent hover:bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full shrink-0" 
                      style={{ backgroundColor: cat.color }} 
                    />
                    <span className="font-medium text-[#323130]">{cat.name}</span>
                  </div>
                  <span className="font-bold text-[#323130]">{cat.current}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Potential AI-Enabled Allocation Column */}
          <div className="p-4 bg-[#EBF3FC]/60 border border-[#0078d4]/30 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0078d4]" />
                <span className="text-xs font-bold text-[#0078d4]">
                  Potential AI-enabled allocation
                </span>
              </div>
              <span className="text-[10px] text-[#0078d4] bg-white px-2 py-0.5 rounded border border-[#C7E0F4]">
                Illustrative scenario
              </span>
            </div>

            {/* Stacked Visual Bar */}
            <div className="h-8 w-full bg-[#F3F2F1] rounded flex overflow-hidden mb-4">
              <div className="bg-[#0078d4]" style={{ width: '10%' }} title="Reporting (10%)"></div>
              <div className="bg-[#2B88D8]" style={{ width: '25%' }} title="Data Analysis (25%)"></div>
              <div className="bg-[#5CA6E5]" style={{ width: '25%' }} title="Customer Insights (25%)"></div>
              <div className="bg-[#91C3F1]" style={{ width: '40%' }} title="Strategic Work (40%)"></div>
            </div>

            {/* Breakdown List with Deltas */}
            <div className="space-y-2">
              {categories.map((cat, idx) => (
                <div 
                  key={cat.name}
                  onClick={() => setSelectedTaskIndex(idx)}
                  className={`p-2 rounded-md border cursor-pointer transition-colors flex items-center justify-between text-xs ${
                    selectedTaskIndex === idx
                      ? 'border-[#0078d4] bg-white shadow-xs'
                      : 'border-transparent hover:bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full shrink-0" 
                      style={{ backgroundColor: cat.color }} 
                    />
                    <span className="font-medium text-[#323130]">{cat.name}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className={`text-[11px] font-semibold ${
                      cat.delta > 0 ? 'text-[#107C41]' : 'text-[#605E5C]'
                    }`}>
                      {cat.delta > 0 ? `+${cat.delta}%` : `${cat.delta}%`}
                    </span>
                    <span className="font-bold text-[#323130] w-8 text-right">{cat.ai}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Task Stream Deep-Dive */}
        {selectedTaskIndex !== null && (
          <div className="p-4 bg-[#FAF9F8] border border-[#EDEBE9] rounded-lg text-xs space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#323130] flex items-center space-x-2">
                <span 
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ backgroundColor: categories[selectedTaskIndex].color }} 
                />
                <span>Stream Details: {WORK_ALLOCATION.taskDetails[selectedTaskIndex].category}</span>
              </span>
              <span className="text-[11px] text-[#605E5C]">
                Shift: {categories[selectedTaskIndex].current}% → {categories[selectedTaskIndex].ai}%
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-[#323130]">
              <div>
                <span className="font-semibold text-[#605E5C] block text-[11px]">Current baseline:</span>
                <p className="text-[11px] mt-0.5 text-[#605E5C]">{WORK_ALLOCATION.taskDetails[selectedTaskIndex].description}</p>
              </div>
              <div>
                <span className="font-semibold text-[#0078d4] block text-[11px]">AI impact driver:</span>
                <p className="text-[11px] mt-0.5 text-[#605E5C]">{WORK_ALLOCATION.taskDetails[selectedTaskIndex].aiShift}</p>
              </div>
            </div>
          </div>
        )}

        {/* Informational Clarification & Bridge */}
        <div className="p-3.5 bg-[#F0F6FF] border border-[#C7E0F4] rounded-lg flex items-start space-x-2.5 text-xs text-[#004578]">
          <Info className="w-4 h-4 text-[#0078d4] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">
              The purpose is to show how AI may change the composition of work—not to predict a specific headcount requirement.
            </p>
            <p className="text-[#323130] text-[11px]">
              Because AI reshapes task allocation (reducing routine reporting while expanding strategic capacity), you can now consider how your team should be structured.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-[#EDEBE9] flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-[#323130] border border-[#EDEBE9] hover:bg-[#F3F2F1] px-4 py-2 text-xs font-semibold rounded transition-colors flex items-center space-x-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <button
            onClick={onContinue}
            className="bg-[#0078d4] text-white px-5 py-2 text-xs font-semibold rounded hover:bg-[#106ebe] transition-colors flex items-center space-x-1.5 cursor-pointer shadow-xs"
          >
            <span>Continue to workforce scenarios</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

