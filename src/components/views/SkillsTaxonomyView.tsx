import React, { useState } from 'react';
import { Cpu, Search, Sparkles, TrendingUp, TrendingDown, ArrowUpRight, Filter } from 'lucide-react';
import { SKILLS_LIST } from '../../data/teamData';

export const SkillsTaxonomyView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Core Analytics', 'BI & Reporting', 'Advanced Methods', 'Customer Domain', 'Leadership & Strategy', 'Emerging AI'];

  const filteredSkills = SKILLS_LIST.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || skill.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h1 className="text-xl font-bold text-[#242424] tracking-tight">
            Skills Taxonomy & Market Demand
          </h1>
          <p className="text-xs text-[#605e5c] mt-0.5">
            Real-time skill proficiency and internal market demand for Customer Analytics.
          </p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="fluent-card p-4 bg-white border border-[#edebe9] rounded-lg shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-[#605e5c] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#f3f2f1] text-xs text-[#242424] pl-8 pr-3 py-1.5 rounded border border-transparent focus:border-[#0078d4] focus:bg-white focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-1 overflow-x-auto w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs rounded-md transition-colors shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#0078d4] text-white font-medium'
                  : 'bg-[#faf9f8] text-[#605e5c] hover:bg-[#edebe9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Table */}
      <div className="fluent-card bg-white border border-[#edebe9] rounded-lg overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#faf9f8] border-b border-[#edebe9] text-[#605e5c] font-semibold">
              <tr>
                <th className="py-3 px-4">Skill Name</th>
                <th className="py-3 px-4">Domain Category</th>
                <th className="py-3 px-4">Team Proficiency</th>
                <th className="py-3 px-4">12-Mo. Demand Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edebe9]">
              {filteredSkills.map((skill) => (
                <tr key={skill.name} className="hover:bg-[#f8f9fa] transition-colors">
                  <td className="py-3 px-4 font-semibold text-[#242424] flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#0078d4]" />
                    <span>{skill.name}</span>
                  </td>
                  <td className="py-3 px-4 text-[#605e5c]">
                    <span className="bg-[#f3f2f1] px-2 py-0.5 rounded text-[11px]">
                      {skill.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-1.5 bg-[#edebe9] rounded-full overflow-hidden">
                        <div 
                          className="bg-[#0078d4] h-full" 
                          style={{ width: `${skill.proficiency}%` }} 
                        />
                      </div>
                      <span className="font-bold text-[#242424] text-[11px]">{skill.proficiency}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-semibold">
                    <span className={`px-2 py-0.5 rounded text-[11px] flex items-center gap-1 w-fit ${
                      skill.demandTrend.startsWith('+') 
                        ? 'bg-[#dff6dd] text-[#107c41]' 
                        : skill.demandTrend.startsWith('-')
                        ? 'bg-[#fdf3f4] text-[#a4262c]'
                        : 'bg-[#f3f2f1] text-[#605e5c]'
                    }`}>
                      {skill.demandTrend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
