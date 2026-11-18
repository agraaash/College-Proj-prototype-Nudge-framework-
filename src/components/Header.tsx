import React from 'react';
import { 
  Search, 
  Settings, 
  Bell, 
  Grid, 
  FlaskConical, 
  Building2
} from 'lucide-react';

interface HeaderProps {
  onOpenAcademicModal: () => void;
  currentStepIndex: number;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenAcademicModal,
  currentStepIndex
}) => {
  return (
    <header className="bg-white border-b border-[#EDEBE9] sticky top-0 z-30 select-none">
      {/* Top Microsoft 365 Bar */}
      <div className="h-12 px-6 flex items-center justify-between">
        {/* Left: 365 Launcher & Title */}
        <div className="flex items-center space-x-3">
          {/* Microsoft 9-dot Waffle */}
          <button 
            className="p-1.5 rounded text-[#605E5C] hover:text-[#323130] hover:bg-[#F3F2F1] transition-colors"
            title="Microsoft 365 App Launcher"
            aria-label="Microsoft 365 App Launcher"
          >
            <Grid className="w-4 h-4" />
          </button>

          {/* Product Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-[#0078d4] rounded-xs flex items-center justify-center text-white text-[10px] font-bold">
              M
            </div>
            <span className="font-semibold text-sm tracking-tight text-[#323130]">
              Microsoft 365
            </span>
            <span className="text-[#c8c6c4] text-xs">|</span>
            <span className="font-medium text-sm text-[#0078d4]">
              Workforce Insights
            </span>
          </div>
        </div>

        {/* Center: Search Box */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 text-[#605E5C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search team skills, roles, or planning models..."
              className="w-full bg-[#F3F2F1] hover:bg-[#EDEBE9] focus:bg-white text-xs text-[#323130] pl-8 pr-3 py-1.5 rounded-md border border-transparent focus:border-[#0078d4] focus:outline-none transition-colors"
              readOnly
            />
          </div>
        </div>

        {/* Right: Actions, Academic Mode Toggle, Copilot Pill, Profile */}
        <div className="flex items-center space-x-2.5">
          {/* Academic Prototype Mode Button */}
          <button
            onClick={onOpenAcademicModal}
            className="flex items-center space-x-1.5 px-2.5 py-1 text-xs font-medium bg-[#EBF3FC] text-[#0078d4] border border-[#c7e0f4] rounded-md hover:bg-[#deecf9] transition-colors"
            title="View Academic & Research Intervention Context"
          >
            <FlaskConical className="w-3.5 h-3.5 text-[#0078d4]" />
            <span className="hidden sm:inline">Prototype Mode</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0078d4]"></span>
          </button>

          {/* Copilot Agent Status - Clean Utility Pill */}
          <div className="hidden lg:flex items-center gap-1.5 bg-white px-3 py-1 border border-[#EDEBE9] rounded-full shadow-xs text-xs font-medium text-[#323130]">
            <span className="text-[#0078d4] font-semibold">✦ Copilot</span>
            <span className="text-[#605E5C]">AI Insights Active</span>
          </div>

          <div className="h-4 w-px bg-[#EDEBE9] mx-0.5"></div>

          {/* Notifications */}
          <button className="p-1.5 rounded text-[#605E5C] hover:bg-[#F3F2F1] hover:text-[#323130] transition-colors relative" title="Notifications">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#0078d4] rounded-full"></span>
          </button>

          {/* User Profile Avatar */}
          <div className="flex items-center space-x-2 pl-1 cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-[#0078d4] text-white flex items-center justify-center text-xs font-semibold">
              AR
            </div>
            <div className="hidden xl:block text-left">
              <div className="text-xs font-semibold text-[#323130] leading-tight">Alex Rivera</div>
              <div className="text-[10px] text-[#605E5C] leading-tight">Customer Analytics Mgr</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-header / Context Breadcrumb Bar */}
      <div className="h-9 px-6 bg-[#FAF9F8] flex items-center justify-between border-t border-[#EDEBE9] text-xs">
        <div className="flex items-center space-x-2 text-[#605E5C]">
          <Building2 className="w-3.5 h-3.5 text-[#0078d4]" />
          <span className="font-medium text-[#323130]">Data & Analytics Org</span>
          <span className="text-[#c8c6c4]">›</span>
          <span className="font-semibold text-[#0078d4]">Customer Analytics</span>
          <span className="bg-[#EDEBE9] text-[#323130] text-[10px] px-1.5 py-0.5 rounded font-medium">
            20 members
          </span>
        </div>

        <div className="flex items-center space-x-1.5 text-[11px] text-[#605E5C]">
          <span className="w-2 h-2 rounded-full bg-[#107c41]"></span>
          <span>Planning Horizon: <strong className="text-[#323130]">FY27 (12 Months)</strong></span>
        </div>
      </div>
    </header>
  );
};

