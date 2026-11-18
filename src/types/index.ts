export interface Employee {
  id: string;
  name: string;
  role: string;
  level: string;
  functionCategory: 'Reporting' | 'Data Analysis' | 'Customer Insights' | 'Strategic Work';
  tenure: string;
  skills: string[];
  aiAugmentationPotential: 'High' | 'Moderate' | 'Transformative';
  currentHoursAllocation: {
    reporting: number;
    analysis: number;
    insights: number;
    strategic: number;
  };
  avatarColor: string;
}

export type PlanningStep = 
  | 'assessment'      // Step 1: Team summary & Nudge 1
  | 'ai-impact'       // Step 2: Current vs AI allocation
  | 'scenarios'       // Step 3: Scenarios & Nudge 2
  | 'review'          // Step 4: Final Plan Summary
  | 'confirmation';   // Step 5: Submitted confirmation

export interface AIEffectSelection {
  automate: boolean;
  augment: boolean;
  redesign: boolean;
  noChange: boolean;
}

export interface Scenario {
  id: 'maintain' | 'redesign' | 'reduce';
  title: string;
  subtitle: string;
  employeeCount: number;
  workforceDelta: number;
  description: string;
  focusArea: string;
  strategicImpact: string;
  riskProfile: string;
}

export interface InternalOpportunity {
  id: string;
  title: string;
  department: string;
  alignmentScore: number;
  openings: number;
  description: string;
  requiredSkills: string[];
  matchedSkills: string[];
  gapSkills: string[];
  estimatedTransitionWeeks: number;
  recommendedTraining: string[];
}

export type ActiveNavTab = 'home' | 'workforce-insights' | 'my-team' | 'skills' | 'workforce-planning' | 'reports';
