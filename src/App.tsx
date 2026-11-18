import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { AcademicModeModal } from './components/AcademicModeModal';
import { PlanningWorkflow } from './components/workforce-planning/PlanningWorkflow';
import { MyTeamView } from './components/views/MyTeamView';
import { WorkforceInsightsOverview } from './components/views/WorkforceInsightsOverview';
import { SkillsTaxonomyView } from './components/views/SkillsTaxonomyView';
import { ReportsView } from './components/views/ReportsView';
import { HomeView } from './components/views/HomeView';
import { ActiveNavTab } from './types';
import { FlaskConical, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveNavTab>('workforce-planning');
  const [isAcademicModalOpen, setIsAcademicModalOpen] = useState(false);
  const [isAcademicBannerVisible, setIsAcademicBannerVisible] = useState(true);

  return (
    <div className="min-h-screen bg-[#F3F2F1] text-[#323130] flex flex-col font-sans selection:bg-[#c7e0f4] selection:text-[#004578]">
      {/* Microsoft 365 Header */}
      <Header 
        onOpenAcademicModal={() => setIsAcademicModalOpen(true)}
        currentStepIndex={0}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex flex-row overflow-hidden">
        {/* Microsoft 365 Sidebar */}
        <Sidebar 
          activeTab={activeTab} 
          onSelectTab={(tab) => setActiveTab(tab)} 
        />

        {/* Center Content Stage */}
        <main className="flex-1 overflow-y-auto px-6 sm:px-10 py-7 max-w-6xl">
          {/* Top Product Banner */}
          {isAcademicBannerVisible && (
            <div className="mb-6 p-4 bg-white border border-[#EDEBE9] rounded-lg shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded bg-[#EBF3FC] text-[#0078d4] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-[#C7E0F4]">
                  AI
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-[#323130]">
                      AI Workforce Planning
                    </h2>
                    <span className="text-[10px] font-semibold bg-[#EBF3FC] text-[#0078d4] px-2 py-0.5 rounded border border-[#C7E0F4]">
                      Prototype
                    </span>
                  </div>
                  <p className="text-xs text-[#605E5C] mt-0.5 leading-relaxed">
                    A proposed extension to Microsoft Workforce Insights for exploring how AI may reshape work and workforce options.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                <button
                  onClick={() => setIsAcademicModalOpen(true)}
                  className="text-xs font-semibold text-[#0078d4] hover:underline bg-[#F3F2F1] hover:bg-[#EDEBE9] px-3 py-1.5 rounded-md border border-[#EDEBE9] shadow-xs cursor-pointer flex items-center space-x-1.5 transition-colors"
                >
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>View research details</span>
                </button>
                <button
                  onClick={() => setIsAcademicBannerVisible(false)}
                  className="text-[#605E5C] hover:text-[#323130] p-1.5 rounded hover:bg-[#F3F2F1] cursor-pointer transition-colors"
                  title="Dismiss banner"
                  aria-label="Dismiss banner"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Active View Container */}
          {activeTab === 'workforce-planning' && (
            <PlanningWorkflow 
              isAcademicMode={true}
              onNavigateTab={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'home' && (
            <HomeView 
              onStartPlanning={() => setActiveTab('workforce-planning')}
              onNavigateTab={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'my-team' && (
            <MyTeamView 
              onStartPlanning={() => setActiveTab('workforce-planning')}
            />
          )}

          {activeTab === 'workforce-insights' && (
            <WorkforceInsightsOverview 
              onStartPlanning={() => setActiveTab('workforce-planning')}
            />
          )}

          {activeTab === 'skills' && (
            <SkillsTaxonomyView />
          )}

          {activeTab === 'reports' && (
            <ReportsView 
              onStartPlanning={() => setActiveTab('workforce-planning')}
            />
          )}

          {/* Mandatory Footer Realism & Concept Prototype Notice */}
          <footer className="mt-12 pt-6 border-t border-[#EDEBE9] text-center text-xs text-[#605E5C] space-y-1">
            <p className="font-medium text-[#323130]">
              Concept prototype — proposed extension to Microsoft Workforce Insights. Illustrative data only.
            </p>
            <p className="text-[11px] text-[#605E5C]">
              Built with Fluent 2 design language principles for behavioral decision science research. Not an official Microsoft commercial product.
            </p>
          </footer>
        </main>
      </div>

      {/* Academic / Experimental Modal */}
      <AcademicModeModal
        isOpen={isAcademicModalOpen}
        onClose={() => setIsAcademicModalOpen(false)}
        highlightedNudge={null}
      />
    </div>
  );
}

