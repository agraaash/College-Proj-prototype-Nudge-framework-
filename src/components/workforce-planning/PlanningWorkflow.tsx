import React, { useState } from 'react';
import { PlanningStep, AIEffectSelection, Scenario, InternalOpportunity } from '../../types';
import { Step1TeamAssessment } from './Step1TeamAssessment';
import { Step2AIImpact } from './Step2AIImpact';
import { Step3Scenarios } from './Step3Scenarios';
import { Step4ReviewSubmit } from './Step4ReviewSubmit';
import { Step5Confirmation } from './Step5Confirmation';
import { AlternativesDrawer } from './AlternativesDrawer';
import { RoleDetailModal } from './RoleDetailModal';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface PlanningWorkflowProps {
  isAcademicMode: boolean;
  onNavigateTab: (tab: any) => void;
}

export const PlanningWorkflow: React.FC<PlanningWorkflowProps> = ({
  isAcademicMode,
  onNavigateTab
}) => {
  const [currentStep, setCurrentStep] = useState<PlanningStep>('assessment');
  const [aiSelections, setAiSelections] = useState<AIEffectSelection>({
    automate: true,
    augment: true,
    redesign: true,
    noChange: false
  });
  const [selectedScenario, setSelectedScenario] = useState<Scenario['id']>('reduce');
  const [isAlternativesOpen, setIsAlternativesOpen] = useState(false);
  const [selectedModalRole, setSelectedModalRole] = useState<InternalOpportunity | null>(null);
  const [hasViewedAlternatives, setHasViewedAlternatives] = useState(false);

  const handleToggleAiSelection = (key: keyof AIEffectSelection) => {
    setAiSelections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleOpenAlternatives = () => {
    setIsAlternativesOpen(true);
    setHasViewedAlternatives(true);
  };

  const handleResetPlanning = () => {
    setCurrentStep('assessment');
    setSelectedScenario('reduce');
    setHasViewedAlternatives(false);
  };

  const stepsList: { id: PlanningStep; label: string; number: number }[] = [
    { id: 'assessment', label: '1. Team Assessment', number: 1 },
    { id: 'ai-impact', label: '2. AI Impact', number: 2 },
    { id: 'scenarios', label: '3. Scenarios', number: 3 },
    { id: 'review', label: '4. Plan Summary', number: 4 },
    { id: 'confirmation', label: '5. Confirmation', number: 5 },
  ];

  const getStepIndex = (step: PlanningStep) => {
    return stepsList.findIndex(s => s.id === step);
  };

  const currentIdx = getStepIndex(currentStep);

  return (
    <div className="space-y-6">
      {/* Workflow Stepper / Progress Ribbon */}
      <div className="fluent-card p-3 bg-white border border-[#edebe9] rounded-lg shadow-2xs">
        <div className="flex items-center justify-between overflow-x-auto gap-2 py-1 px-1">
          {stepsList.map((step, idx) => {
            const isCompleted = idx < currentIdx;
            const isCurrent = idx === currentIdx;

            return (
              <React.Fragment key={step.id}>
                <div 
                  onClick={() => {
                    // Allow navigating back to previous steps
                    if (idx < currentIdx && currentStep !== 'confirmation') {
                      setCurrentStep(step.id);
                    }
                  }}
                  className={`flex items-center space-x-2 px-2.5 py-1 rounded text-xs shrink-0 cursor-default ${
                    isCurrent
                      ? 'bg-[#eff6fc] text-[#0078d4] font-bold border border-[#c7e0f4]'
                      : isCompleted
                      ? 'text-[#242424] hover:bg-[#f3f2f1] cursor-pointer'
                      : 'text-[#a19f9d]'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isCurrent
                      ? 'bg-[#0078d4] text-white'
                      : isCompleted
                      ? 'bg-[#107c41] text-white'
                      : 'bg-[#edebe9] text-[#605e5c]'
                  }`}>
                    {isCompleted ? '✓' : step.number}
                  </span>
                  <span>{step.label}</span>
                </div>

                {idx < stepsList.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-[#c8c6c4] shrink-0 hidden sm:block" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      {currentStep === 'assessment' && (
        <Step1TeamAssessment
          aiSelections={aiSelections}
          onToggleSelection={handleToggleAiSelection}
          onContinue={() => setCurrentStep('ai-impact')}
          isAcademicMode={isAcademicMode}
        />
      )}

      {currentStep === 'ai-impact' && (
        <Step2AIImpact
          onBack={() => setCurrentStep('assessment')}
          onContinue={() => setCurrentStep('scenarios')}
          isAcademicMode={isAcademicMode}
        />
      )}

      {currentStep === 'scenarios' && (
        <Step3Scenarios
          selectedScenario={selectedScenario}
          onSelectScenario={setSelectedScenario}
          onExploreAlternatives={handleOpenAlternatives}
          onContinueRecommendation={() => setCurrentStep('review')}
          onBack={() => setCurrentStep('ai-impact')}
          isAcademicMode={isAcademicMode}
          hasViewedAlternatives={hasViewedAlternatives}
        />
      )}

      {currentStep === 'review' && (
        <Step4ReviewSubmit
          selectedScenario={selectedScenario}
          aiSelections={aiSelections}
          hasViewedAlternatives={hasViewedAlternatives}
          onBack={() => setCurrentStep('scenarios')}
          onSubmit={() => setCurrentStep('confirmation')}
          isAcademicMode={isAcademicMode}
        />
      )}

      {currentStep === 'confirmation' && (
        <Step5Confirmation
          selectedScenario={selectedScenario}
          onReset={handleResetPlanning}
          onNavigateToTeam={() => onNavigateTab('my-team')}
          onNavigateToInsights={() => onNavigateTab('workforce-insights')}
          isAcademicMode={isAcademicMode}
        />
      )}

      {/* Side Panel: Alternatives Drawer */}
      <AlternativesDrawer
        isOpen={isAlternativesOpen}
        onClose={() => setIsAlternativesOpen(false)}
        onSelectRole={(role) => setSelectedModalRole(role)}
        onReturnToPlan={() => {
          setIsAlternativesOpen(false);
          setCurrentStep('review');
        }}
      />

      {/* Modal: View Role Details */}
      <RoleDetailModal
        role={selectedModalRole}
        onClose={() => setSelectedModalRole(null)}
      />
    </div>
  );
};
