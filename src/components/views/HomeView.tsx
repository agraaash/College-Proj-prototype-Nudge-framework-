import React from 'react';
import { Sparkles, Users, Compass, BarChart3, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { TEAM_INFO } from '../../data/teamData';

interface HomeViewProps {
  onStartPlanning: () => void;
  onNavigateTab: (tab: any) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onStartPlanning, onNavigateTab }) => {
  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Welcome Card */}
      <div className="fluent-card p-6 bg-white border border-[#edebe9] rounded-lg shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0078d4]">
                Microsoft Workforce Insights
              </span>
            </div>
            <h1 className="text-xl font-bold text-[#242424]">
              Welcome back, Alex
            </h1>
            <p className="text-xs text-[#605e5c] max-w-xl leading-relaxed">
              Your team, <strong>{TEAM_INFO.name}</strong>, is preparing for FY27 workforce evolution. Explore organizational skills, analyze AI task transformations, and configure scenario models.
            </p>
          </div>

          <button
            onClick={onStartPlanning}
            className="fluent-btn-primary px-5 py-2.5 text-xs rounded-md flex items-center space-x-2 shrink-0 shadow-xs font-semibold"
          >
            <Compass className="w-4 h-4" />
            <span>Launch Workforce Planning</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Access Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          onClick={() => onNavigateTab('workforce-planning')}
          className="fluent-card p-5 bg-white border border-[#edebe9] rounded-lg hover:border-[#0078d4] cursor-pointer transition-all shadow-2xs space-y-2 group"
        >
          <div className="w-8 h-8 rounded-md bg-[#eff6fc] text-[#0078d4] flex items-center justify-center group-hover:bg-[#0078d4] group-hover:text-white transition-colors">
            <Compass className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold text-[#242424]">
            AI Workforce Planning
          </h3>
          <p className="text-[11px] text-[#605e5c] leading-relaxed">
            Plan your team's capabilities and structure for the next 12 months as AI reshapes tasks.
          </p>
        </div>

        <div 
          onClick={() => onNavigateTab('my-team')}
          className="fluent-card p-5 bg-white border border-[#edebe9] rounded-lg hover:border-[#0078d4] cursor-pointer transition-all shadow-2xs space-y-2 group"
        >
          <div className="w-8 h-8 rounded-md bg-[#eff6fc] text-[#0078d4] flex items-center justify-center group-hover:bg-[#0078d4] group-hover:text-white transition-colors">
            <Users className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold text-[#242424]">
            My Team Roster
          </h3>
          <p className="text-[11px] text-[#605e5c] leading-relaxed">
            View the 20 team members in Customer Analytics, their verified skills, and AI exposure potential.
          </p>
        </div>

        <div 
          onClick={() => onNavigateTab('workforce-insights')}
          className="fluent-card p-5 bg-white border border-[#edebe9] rounded-lg hover:border-[#0078d4] cursor-pointer transition-all shadow-2xs space-y-2 group"
        >
          <div className="w-8 h-8 rounded-md bg-[#eff6fc] text-[#0078d4] flex items-center justify-center group-hover:bg-[#0078d4] group-hover:text-white transition-colors">
            <BarChart3 className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold text-[#242424]">
            Workforce Insights Agent
          </h3>
          <p className="text-[11px] text-[#605e5c] leading-relaxed">
            Review organizational composition, capability mapping, and projected demand metrics.
          </p>
        </div>
      </div>
    </div>
  );
};
