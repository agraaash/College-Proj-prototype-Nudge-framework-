import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { TEAM_EMPLOYEES, TEAM_INFO } from '../../data/teamData';
import { Employee } from '../../types';

interface MyTeamViewProps {
  onStartPlanning: () => void;
}

export const MyTeamView: React.FC<MyTeamViewProps> = ({ onStartPlanning }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFunction, setSelectedFunction] = useState<string>('All');

  const functions = ['All', 'Reporting', 'Data Analysis', 'Customer Insights', 'Strategic Work'];

  const filteredEmployees = TEAM_EMPLOYEES.filter((emp) => {
    const matchesSearch = 
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFunc = 
      selectedFunction === 'All' || 
      emp.functionCategory === selectedFunction;

    return matchesSearch && matchesFunc;
  });

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#242424] tracking-tight">
            My Team — {TEAM_INFO.name}
          </h1>
          <p className="text-xs text-[#605e5c] mt-0.5">
            20 Team members • Data & Analytics • Redmond / Hybrid
          </p>
        </div>

        <button
          onClick={onStartPlanning}
          className="fluent-btn-primary px-4 py-2 text-xs rounded-md flex items-center space-x-2 shrink-0 self-start sm:self-auto shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Launch AI Workforce Planning</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="fluent-card p-4 bg-white border border-[#edebe9] rounded-lg shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-[#605e5c] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, role, or skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#f3f2f1] text-xs text-[#242424] pl-8 pr-3 py-1.5 rounded border border-transparent focus:border-[#0078d4] focus:bg-white focus:outline-none"
          />
        </div>

        {/* Function category filters */}
        <div className="flex items-center space-x-1 overflow-x-auto w-full sm:w-auto">
          {functions.map((fn) => (
            <button
              key={fn}
              onClick={() => setSelectedFunction(fn)}
              className={`px-3 py-1 text-xs rounded-md transition-colors shrink-0 ${
                selectedFunction === fn
                  ? 'bg-[#0078d4] text-white font-medium'
                  : 'bg-[#faf9f8] text-[#605e5c] hover:bg-[#edebe9]'
              }`}
            >
              {fn}
            </button>
          ))}
        </div>
      </div>

      {/* Team Roster Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEmployees.map((emp) => (
          <div
            key={emp.id}
            className="fluent-card p-4 bg-white border border-[#edebe9] rounded-lg hover:border-[#0078d4] transition-all space-y-3 shadow-2xs"
          >
            {/* Employee Profile Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-9 h-9 rounded-full text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-2xs"
                  style={{ backgroundColor: emp.avatarColor }}
                >
                  {emp.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#242424]">
                    {emp.name}
                  </h3>
                  <p className="text-[11px] text-[#605e5c] leading-tight">
                    {emp.role} • {emp.level}
                  </p>
                </div>
              </div>

              <span className="text-[10px] bg-[#faf9f8] text-[#605e5c] px-2 py-0.5 rounded border border-[#edebe9]">
                {emp.tenure}
              </span>
            </div>

            {/* Function & AI Augmentation Potential */}
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-[#605e5c] flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#0078d4]" />
                {emp.functionCategory}
              </span>

              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                emp.aiAugmentationPotential === 'Transformative'
                  ? 'bg-[#eff6fc] text-[#0078d4] border border-[#c7e0f4]'
                  : 'bg-[#faf9f8] text-[#424242] border border-[#edebe9]'
              }`}>
                AI Impact: {emp.aiAugmentationPotential}
              </span>
            </div>

            {/* Skills */}
            <div>
              <div className="text-[10px] font-semibold text-[#605e5c] uppercase tracking-wider mb-1">
                Verified Skills
              </div>
              <div className="flex flex-wrap gap-1">
                {emp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] bg-[#f3f2f1] text-[#323130] px-1.5 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hours Allocation Breakdown */}
            <div className="pt-2 border-t border-[#f3f2f1] text-[10px] text-[#605e5c]">
              <div className="flex justify-between mb-1">
                <span>Task Distribution:</span>
                <span>Reporting {emp.currentHoursAllocation.reporting}% • Strategic {emp.currentHoursAllocation.strategic}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#edebe9] rounded-full overflow-hidden flex">
                <div style={{ width: `${emp.currentHoursAllocation.reporting}%` }} className="bg-[#0078d4] h-full" />
                <div style={{ width: `${emp.currentHoursAllocation.analysis}%` }} className="bg-[#107c41] h-full" />
                <div style={{ width: `${emp.currentHoursAllocation.insights}%` }} className="bg-[#5c2d91] h-full" />
                <div style={{ width: `${emp.currentHoursAllocation.strategic}%` }} className="bg-[#d83b01] h-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
