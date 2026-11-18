import React from 'react';
import { 
  BarChart3, 
  Sparkles, 
  Users, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2,
  Compass,
  Layers,
  FileCheck
} from 'lucide-react';
import { TEAM_INFO } from '../../data/teamData';

interface WorkforceInsightsOverviewProps {
  onStartPlanning: () => void;
}

export const WorkforceInsightsOverview: React.FC<WorkforceInsightsOverviewProps> = ({
  onStartPlanning
}) => {
  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-[#242424] tracking-tight">
              Workforce Insights Overview
            </h1>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#eff6fc] text-[#0078d4] px-2 py-0.5 rounded border border-[#c7e0f4]">
              Copilot Agent
            </span>
          </div>
          <p className="text-xs text-[#605e5c] mt-0.5">
            Real-time organizational composition, capability mapping, and workforce trajectory.
          </p>
        </div>

        <button
          onClick={onStartPlanning}
          className="fluent-btn-primary px-4 py-2 text-xs rounded-md flex items-center space-x-2 shrink-0 self-start sm:self-auto shadow-xs"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Open AI Workforce Planning</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Copilot Synthesis Hero Card */}
      <div className="fluent-card p-5 bg-linear-to-r from-[#f0f6ff] to-[#ffffff] border border-[#c7e0f4] rounded-lg shadow-xs space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded bg-[#0078d4] text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-[#004578]">
                Workforce Insights Agent • Executive Briefing
              </h2>
              <span className="text-[10px] text-[#605e5c]">Generated for Customer Analytics</span>
            </div>
          </div>

          <span className="text-[11px] text-[#107c41] bg-[#dff6dd] px-2 py-0.5 rounded border border-[#92c353] font-semibold">
            Health: High (91/100)
          </span>
        </div>

        <p className="text-xs text-[#242424] leading-relaxed">
          Organizational telemetry suggests that <strong>45% of current team hours</strong> in Customer Analytics are concentrated in routine reporting and standardized dashboard refreshes. As AI agents and Copilot queries automate these operational streams, the team is primed to pivot capacity toward <strong>high-margin predictive modeling, experimentation, and strategic partner advisory</strong> to absorb the +18% projected FY27 workload demand.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
          <button
            onClick={onStartPlanning}
            className="text-xs font-bold text-[#0078d4] hover:underline flex items-center gap-1"
          >
            <span>Model 12-month structural evolution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3 Core Analytical Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pillar 1: Skills Alignment */}
        <div className="fluent-card p-5 bg-white border border-[#edebe9] rounded-lg space-y-3 shadow-2xs">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#242424]">
            <Cpu className="w-4 h-4 text-[#0078d4]" />
            <h3>Skills & Capability Health</h3>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-[#605e5c]">
              <span>Core Analytics Proficiency</span>
              <span className="font-bold text-[#242424]">86%</span>
            </div>
            <div className="w-full h-1.5 bg-[#edebe9] rounded-full overflow-hidden">
              <div className="w-[86%] bg-[#0078d4] h-full" />
            </div>

            <div className="flex justify-between text-[#605e5c]">
              <span>AI & Telemetry Readiness</span>
              <span className="font-bold text-[#242424]">62%</span>
            </div>
            <div className="w-full h-1.5 bg-[#edebe9] rounded-full overflow-hidden">
              <div className="w-[62%] bg-[#107c41] h-full" />
            </div>
          </div>

          <p className="text-[11px] text-[#605e5c] pt-2 border-t border-[#f3f2f1]">
            12 core skills tracked across 20 full-time employees.
          </p>
        </div>

        {/* Pillar 2: Organizational Structure */}
        <div className="fluent-card p-5 bg-white border border-[#edebe9] rounded-lg space-y-3 shadow-2xs">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#242424]">
            <Layers className="w-4 h-4 text-[#0078d4]" />
            <h3>Organizational Composition</h3>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-[#605e5c]">
              <span>Reporting Stream</span>
              <span className="font-bold text-[#242424]">6 FTEs (30%)</span>
            </div>
            <div className="flex justify-between text-[#605e5c]">
              <span>Data Analysis</span>
              <span className="font-bold text-[#242424]">6 FTEs (30%)</span>
            </div>
            <div className="flex justify-between text-[#605e5c]">
              <span>Customer Insights</span>
              <span className="font-bold text-[#242424]">4 FTEs (20%)</span>
            </div>
            <div className="flex justify-between text-[#605e5c]">
              <span>Strategic & Experimentation</span>
              <span className="font-bold text-[#242424]">4 FTEs (20%)</span>
            </div>
          </div>

          <p className="text-[11px] text-[#605e5c] pt-2 border-t border-[#f3f2f1]">
            Span of control: 1 Manager to 19 Individual Contributors.
          </p>
        </div>

        {/* Pillar 3: Workload Trajectory */}
        <div className="fluent-card p-5 bg-white border border-[#edebe9] rounded-lg space-y-3 shadow-2xs">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#242424]">
            <TrendingUp className="w-4 h-4 text-[#107c41]" />
            <h3>FY27 Workload Demand</h3>
          </div>

          <div className="text-center py-2">
            <div className="text-2xl font-bold text-[#107c41]">
              +18% Surge
            </div>
            <p className="text-[11px] text-[#605e5c] mt-0.5">
              Projected customer analytics requests
            </p>
          </div>

          <p className="text-[11px] text-[#605e5c] pt-2 border-t border-[#f3f2f1]">
            Can be accommodated through AI task automation and strategic role redesign without increasing headcount budget.
          </p>
        </div>
      </div>
    </div>
  );
};
