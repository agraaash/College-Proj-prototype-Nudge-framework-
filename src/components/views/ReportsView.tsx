import React from 'react';
import { FileText, Download, Share2, Sparkles, CheckCircle2, TrendingUp, Compass } from 'lucide-react';
import { TEAM_INFO } from '../../data/teamData';

interface ReportsViewProps {
  onStartPlanning: () => void;
}

export const ReportsView: React.FC<ReportsViewProps> = ({ onStartPlanning }) => {
  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#242424] tracking-tight">
            Workforce Planning Reports
          </h1>
          <p className="text-xs text-[#605e5c] mt-0.5">
            Executive summaries and structural transition forecasts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="fluent-card p-5 bg-white border border-[#edebe9] rounded-lg shadow-2xs space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded bg-[#eff6fc] text-[#0078d4]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#242424]">
                  FY27 AI Workforce Evolution Strategy
                </h3>
                <p className="text-[11px] text-[#605e5c]">
                  Team: Customer Analytics (20 FTEs)
                </p>
              </div>
            </div>

            <span className="text-[11px] bg-[#dff6dd] text-[#107c41] px-2 py-0.5 rounded font-semibold">
              Ready
            </span>
          </div>

          <p className="text-xs text-[#605e5c] leading-relaxed">
            Detailed breakdown of task re-allocations, capacity growth from AI agents, and internal talent mobility roadmaps.
          </p>

          <div className="pt-2 border-t border-[#f3f2f1] flex items-center justify-between">
            <span className="text-[11px] text-[#605e5c]">Format: PDF / Excel</span>
            <button 
              onClick={onStartPlanning}
              className="fluent-btn-primary px-3 py-1.5 text-xs rounded flex items-center space-x-1"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Modify in Planning</span>
            </button>
          </div>
        </div>

        <div className="fluent-card p-5 bg-white border border-[#edebe9] rounded-lg shadow-2xs space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded bg-[#f3f9fd] text-[#0078d4]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#242424]">
                  Skills Horizon & Telemetry Report
                </h3>
                <p className="text-[11px] text-[#605e5c]">
                  Emerging skills vs legacy reporting tasks
                </p>
              </div>
            </div>

            <span className="text-[11px] bg-[#eff6fc] text-[#0078d4] px-2 py-0.5 rounded font-semibold">
              Monthly
            </span>
          </div>

          <p className="text-xs text-[#605e5c] leading-relaxed">
            Highlights the rapid increase in demand for prompt engineering, telemetry validation, and predictive modeling over standardized DAX reports.
          </p>

          <div className="pt-2 border-t border-[#f3f2f1] flex items-center justify-between">
            <span className="text-[11px] text-[#605e5c]">Updated: 2 days ago</span>
            <button className="fluent-btn-secondary px-3 py-1.5 text-xs rounded flex items-center space-x-1">
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
