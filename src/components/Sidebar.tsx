import React from 'react';
import { 
  Home, 
  BarChart3, 
  Users, 
  Cpu, 
  Compass, 
  FileText
} from 'lucide-react';
import { ActiveNavTab } from '../types';

interface SidebarProps {
  activeTab: ActiveNavTab;
  onSelectTab: (tab: ActiveNavTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelectTab }) => {
  const navItems = [
    { id: 'home' as ActiveNavTab, label: 'Home', icon: Home },
    { id: 'workforce-insights' as ActiveNavTab, label: 'Workforce Insights', icon: BarChart3 },
    { id: 'my-team' as ActiveNavTab, label: 'My Team', icon: Users },
    { id: 'skills' as ActiveNavTab, label: 'Skills', icon: Cpu },
    { 
      id: 'workforce-planning' as ActiveNavTab, 
      label: 'Workforce Planning', 
      icon: Compass
    },
    { id: 'reports' as ActiveNavTab, label: 'Reports', icon: FileText },
  ];

  return (
    <aside className="w-[240px] bg-white border-r border-[#EDEBE9] flex flex-col justify-between shrink-0 select-none min-h-[calc(100vh-88px)]">
      {/* Top Navigation Items */}
      <nav className="p-3 space-y-1">
        <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#605E5C]">
          Workforce
        </div>

        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <div
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex items-center gap-3 px-3.5 py-2 text-sm rounded-md cursor-pointer mb-1 transition-all ${
                isActive
                  ? 'font-semibold bg-[#EBF3FC] text-[#0078d4]'
                  : 'text-[#323130] opacity-75 hover:opacity-100 hover:bg-[#F3F2F1]'
              }`}
            >
              <div className="w-4 h-4 flex items-center justify-center shrink-0">
                {isActive ? (
                  <div className="w-3.5 h-3.5 border-2 border-[#0078d4] rounded-xs" />
                ) : (
                  <div className="w-3.5 h-3.5 border border-current rounded-xs" />
                )}
              </div>
              <span className="truncate">{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* Bottom Prototype Mode Active Info */}
      <div className="p-4 border-t border-[#EDEBE9] text-[10px] text-[#605E5C] bg-[#FAF9F8]">
        <div className="mb-1.5 flex items-center gap-2 font-semibold text-[#323130]">
          <div className="w-2 h-2 rounded-full bg-[#107c41]"></div>
          <span>Prototype Mode Active</span>
        </div>
        <span className="leading-tight block text-[#605E5C]">
          Concept prototype — Illustrative data only.
        </span>
      </div>
    </aside>
  );
};

