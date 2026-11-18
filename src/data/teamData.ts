import { Employee, InternalOpportunity, Scenario } from '../types';

export const TEAM_INFO = {
  name: 'Customer Analytics',
  department: 'Data & Analytics',
  location: 'Redmond / Hybrid',
  currentHeadcount: 20,
  functionsCount: 4,
  keySkillsCount: 12,
  projectedWorkloadGrowth: '+18%',
  currentQuarter: 'FY27 Q1',
  focusAreas: 'Customer insights, reporting, experimentation, and predictive analytics',
};

export const TEAM_EMPLOYEES: Employee[] = [
  {
    id: 'emp-1',
    name: 'Sarah Chen',
    role: 'Principal Analytics Lead',
    level: 'IC6',
    functionCategory: 'Strategic Work',
    tenure: '4.2 yrs',
    skills: ['Predictive Analytics', 'A/B Testing', 'Stakeholder Storytelling', 'Python', 'SQL'],
    aiAugmentationPotential: 'Transformative',
    currentHoursAllocation: { reporting: 10, analysis: 30, insights: 25, strategic: 35 },
    avatarColor: '#0078d4'
  },
  {
    id: 'emp-2',
    name: 'Marcus Vance',
    role: 'Senior Analytics Engineer',
    level: 'IC5',
    functionCategory: 'Data Analysis',
    tenure: '3.5 yrs',
    skills: ['SQL', 'Data Pipeline ETL', 'DAX/Tabular', 'Python', 'Machine Learning Foundations'],
    aiAugmentationPotential: 'High',
    currentHoursAllocation: { reporting: 20, analysis: 50, insights: 15, strategic: 15 },
    avatarColor: '#107c41'
  },
  {
    id: 'emp-3',
    name: 'Elena Rostova',
    role: 'Customer Insights Specialist II',
    level: 'IC4',
    functionCategory: 'Customer Insights',
    tenure: '2.8 yrs',
    skills: ['Customer Segmentation', 'SQL', 'Power BI', 'Stakeholder Storytelling'],
    aiAugmentationPotential: 'High',
    currentHoursAllocation: { reporting: 25, analysis: 25, insights: 40, strategic: 10 },
    avatarColor: '#5c2d91'
  },
  {
    id: 'emp-4',
    name: 'Devon Miller',
    role: 'Senior Reporting Analyst',
    level: 'IC4',
    functionCategory: 'Reporting',
    tenure: '3.1 yrs',
    skills: ['Power BI', 'SQL', 'DAX/Tabular', 'Data Pipeline ETL'],
    aiAugmentationPotential: 'Transformative',
    currentHoursAllocation: { reporting: 65, analysis: 20, insights: 10, strategic: 5 },
    avatarColor: '#008272'
  },
  {
    id: 'emp-5',
    name: 'Priya Patel',
    role: 'Experimentation Data Scientist',
    level: 'IC5',
    functionCategory: 'Strategic Work',
    tenure: '2.1 yrs',
    skills: ['A/B Testing', 'Statistical Modeling', 'Python', 'Machine Learning Foundations'],
    aiAugmentationPotential: 'Transformative',
    currentHoursAllocation: { reporting: 10, analysis: 30, insights: 20, strategic: 40 },
    avatarColor: '#d83b01'
  },
  {
    id: 'emp-6',
    name: 'Jordan Hayes',
    role: 'BI & Reporting Analyst II',
    level: 'IC3',
    functionCategory: 'Reporting',
    tenure: '1.6 yrs',
    skills: ['Power BI', 'SQL', 'DAX/Tabular', 'Reporting Automation'],
    aiAugmentationPotential: 'High',
    currentHoursAllocation: { reporting: 60, analysis: 25, insights: 10, strategic: 5 },
    avatarColor: '#004e8c'
  },
  {
    id: 'emp-7',
    name: 'Amina Al-Mansoor',
    role: 'Product Analytics Manager',
    level: 'M1',
    functionCategory: 'Strategic Work',
    tenure: '5.0 yrs',
    skills: ['Stakeholder Storytelling', 'Predictive Analytics', 'SQL', 'Customer Segmentation'],
    aiAugmentationPotential: 'Moderate',
    currentHoursAllocation: { reporting: 15, analysis: 20, insights: 30, strategic: 35 },
    avatarColor: '#744da9'
  },
  {
    id: 'emp-8',
    name: 'Tyler Brooks',
    role: 'Data Analyst II',
    level: 'IC3',
    functionCategory: 'Data Analysis',
    tenure: '2.0 yrs',
    skills: ['SQL', 'Python', 'Power BI', 'Statistical Modeling'],
    aiAugmentationPotential: 'High',
    currentHoursAllocation: { reporting: 30, analysis: 45, insights: 15, strategic: 10 },
    avatarColor: '#0078d4'
  },
  {
    id: 'emp-9',
    name: 'Clara Wu',
    role: 'Insights & Behavior Analyst',
    level: 'IC4',
    functionCategory: 'Customer Insights',
    tenure: '2.5 yrs',
    skills: ['Customer Segmentation', 'SQL', 'Stakeholder Storytelling', 'A/B Testing'],
    aiAugmentationPotential: 'High',
    currentHoursAllocation: { reporting: 20, analysis: 25, insights: 45, strategic: 10 },
    avatarColor: '#b4009e'
  },
  {
    id: 'emp-10',
    name: 'Lucas Ferreira',
    role: 'Reporting Operations Specialist',
    level: 'IC3',
    functionCategory: 'Reporting',
    tenure: '1.9 yrs',
    skills: ['Power BI', 'SQL', 'DAX/Tabular', 'Excel Advanced'],
    aiAugmentationPotential: 'Transformative',
    currentHoursAllocation: { reporting: 70, analysis: 15, insights: 10, strategic: 5 },
    avatarColor: '#005b70'
  },
  {
    id: 'emp-11',
    name: 'Rachel Kim',
    role: 'Senior Data Scientist',
    level: 'IC5',
    functionCategory: 'Strategic Work',
    tenure: '3.8 yrs',
    skills: ['Statistical Modeling', 'Python', 'Machine Learning Foundations', 'Predictive Analytics'],
    aiAugmentationPotential: 'Transformative',
    currentHoursAllocation: { reporting: 5, analysis: 35, insights: 20, strategic: 40 },
    avatarColor: '#038387'
  },
  {
    id: 'emp-12',
    name: 'David Okafor',
    role: 'Data Analyst II',
    level: 'IC3',
    functionCategory: 'Data Analysis',
    tenure: '1.7 yrs',
    skills: ['SQL', 'Power BI', 'Python', 'Data Pipeline ETL'],
    aiAugmentationPotential: 'High',
    currentHoursAllocation: { reporting: 35, analysis: 40, insights: 15, strategic: 10 },
    avatarColor: '#498205'
  },
  {
    id: 'emp-13',
    name: 'Sophia Martin',
    role: 'Customer Insights Analyst',
    level: 'IC3',
    functionCategory: 'Customer Insights',
    tenure: '1.4 yrs',
    skills: ['Customer Segmentation', 'Power BI', 'SQL', 'Stakeholder Storytelling'],
    aiAugmentationPotential: 'Moderate',
    currentHoursAllocation: { reporting: 25, analysis: 25, insights: 40, strategic: 10 },
    avatarColor: '#c239b3'
  },
  {
    id: 'emp-14',
    name: 'Liam Gallagher',
    role: 'Analytics Engineer II',
    level: 'IC4',
    functionCategory: 'Data Analysis',
    tenure: '2.3 yrs',
    skills: ['Data Pipeline ETL', 'SQL', 'Python', 'DAX/Tabular'],
    aiAugmentationPotential: 'High',
    currentHoursAllocation: { reporting: 25, analysis: 50, insights: 15, strategic: 10 },
    avatarColor: '#0078d4'
  },
  {
    id: 'emp-15',
    name: 'Hanna Lindstrom',
    role: 'BI Reporting Analyst',
    level: 'IC2',
    functionCategory: 'Reporting',
    tenure: '1.1 yrs',
    skills: ['Power BI', 'SQL', 'Excel Advanced', 'DAX/Tabular'],
    aiAugmentationPotential: 'Transformative',
    currentHoursAllocation: { reporting: 65, analysis: 20, insights: 10, strategic: 5 },
    avatarColor: '#8e562e'
  },
  {
    id: 'emp-16',
    name: 'Kevin Zhao',
    role: 'Experimentation Analyst',
    level: 'IC3',
    functionCategory: 'Strategic Work',
    tenure: '1.8 yrs',
    skills: ['A/B Testing', 'SQL', 'Python', 'Statistical Modeling'],
    aiAugmentationPotential: 'Moderate',
    currentHoursAllocation: { reporting: 15, analysis: 35, insights: 20, strategic: 30 },
    avatarColor: '#2b579a'
  },
  {
    id: 'emp-17',
    name: 'Maya Jackson',
    role: 'Senior Customer Insights Specialist',
    level: 'IC5',
    functionCategory: 'Customer Insights',
    tenure: '3.4 yrs',
    skills: ['Stakeholder Storytelling', 'Customer Segmentation', 'Predictive Analytics', 'SQL'],
    aiAugmentationPotential: 'High',
    currentHoursAllocation: { reporting: 15, analysis: 25, insights: 35, strategic: 25 },
    avatarColor: '#6b69d6'
  },
  {
    id: 'emp-18',
    name: 'Nate Henderson',
    role: 'Reporting Operations Analyst',
    level: 'IC2',
    functionCategory: 'Reporting',
    tenure: '0.9 yrs',
    skills: ['Power BI', 'SQL', 'DAX/Tabular', 'Data Pipeline ETL'],
    aiAugmentationPotential: 'Transformative',
    currentHoursAllocation: { reporting: 70, analysis: 15, insights: 10, strategic: 5 },
    avatarColor: '#008272'
  },
  {
    id: 'emp-19',
    name: 'Ananya Roy',
    role: 'Data & Analytics Specialist II',
    level: 'IC4',
    functionCategory: 'Data Analysis',
    tenure: '2.6 yrs',
    skills: ['SQL', 'Python', 'A/B Testing', 'Data Pipeline ETL'],
    aiAugmentationPotential: 'High',
    currentHoursAllocation: { reporting: 20, analysis: 50, insights: 15, strategic: 15 },
    avatarColor: '#004b50'
  },
  {
    id: 'emp-20',
    name: 'Ethan Ross',
    role: 'Strategic Analytics Partner',
    level: 'IC5',
    functionCategory: 'Strategic Work',
    tenure: '3.9 yrs',
    skills: ['Stakeholder Storytelling', 'Predictive Analytics', 'Business Strategy', 'SQL'],
    aiAugmentationPotential: 'Moderate',
    currentHoursAllocation: { reporting: 10, analysis: 25, insights: 25, strategic: 40 },
    avatarColor: '#4a154b'
  }
];

export const WORK_ALLOCATION = {
  current: {
    reporting: 35,
    analysis: 30,
    insights: 20,
    strategic: 15
  },
  aiEnabled: {
    reporting: 10,
    analysis: 25,
    insights: 25,
    strategic: 40
  },
  taskDetails: [
    {
      category: 'Reporting',
      currentPct: 35,
      aiPct: 10,
      delta: -25,
      description: 'Routine metric compilation, weekly dashboards, and standardized report generation.',
      aiShift: 'Automated data refreshes, Copilot natural language report generation, self-serve executive querying.'
    },
    {
      category: 'Data analysis',
      currentPct: 30,
      aiPct: 25,
      delta: -5,
      description: 'Ad-hoc data extractions, exploratory slicing, data validation, and query tuning.',
      aiShift: 'AI-assisted SQL/Python generation and anomaly detection allow faster root-cause discovery.'
    },
    {
      category: 'Customer insights',
      currentPct: 20,
      aiPct: 25,
      delta: +5,
      description: 'Behavioral segmentation, churn analysis, journey mapping, and qualitative feedback synthesis.',
      aiShift: 'Synthesizing multi-modal customer feedback and continuous cohort clustering.'
    },
    {
      category: 'Strategic work',
      currentPct: 15,
      aiPct: 40,
      delta: +25,
      description: 'Predictive forecasting, high-impact experimentation, executive advisory, and AI product integration.',
      aiShift: 'Managers and analysts partner with product teams to design data-driven AI systems and strategic bets.'
    }
  ]
};

export const SCENARIOS: Scenario[] = [
  {
    id: 'maintain',
    title: 'Scenario A',
    subtitle: 'Maintain current team',
    employeeCount: 20,
    workforceDelta: 0,
    description: 'Keep all 20 team members in their existing role frameworks while equipping them with Copilot and AI analytics tools.',
    focusArea: 'Equip existing team with Copilot and AI analytics tools.',
    strategicImpact: 'Absorbs projected workload surge with zero onboarding friction; preserves organizational domain memory.',
    riskProfile: 'Low disruption risk; requires structured AI adoption upskilling.'
  },
  {
    id: 'redesign',
    title: 'Scenario B',
    subtitle: 'Redesign team',
    employeeCount: 20,
    workforceDelta: 0,
    description: 'Redefine job responsibilities and team composition so that employees can focus more on experimentation, predictive modelling and strategic analytical work.',
    focusArea: 'Shift roles toward higher-value analytical and strategic work.',
    strategicImpact: 'Maximizes business value by realigning capacity to strategic initiatives (+25% strategic work capacity).',
    riskProfile: 'Moderate role transition learning curve; high organizational value creation.'
  },
  {
    id: 'reduce',
    title: 'Scenario C',
    subtitle: 'Reduce team size',
    employeeCount: 17,
    workforceDelta: -3,
    description: 'Automate selected routine reporting tasks and reduce capacity requirements by 3 positions.',
    focusArea: 'Automate selected tasks and reduce capacity requirements.',
    strategicImpact: 'Direct short-term cost reduction; may constrain capacity if workload growth exceeds +18%.',
    riskProfile: 'Higher risk of institutional knowledge loss and potential bandwidth strain during peak demand.'
  }
];

export const INTERNAL_OPPORTUNITIES: InternalOpportunity[] = [
  {
    id: 'opp-1',
    title: 'AI Product Analyst',
    department: 'Cloud & AI Platform Org',
    alignmentScore: 78,
    openings: 4,
    description: 'Collaborate with AI product teams to evaluate model telemetry, user prompt patterns, and feature engagement metrics.',
    requiredSkills: ['Data analysis', 'Python', 'Experimentation', 'Prompt telemetry', 'SQL'],
    matchedSkills: ['Data analysis', 'Python', 'Experimentation', 'SQL'],
    gapSkills: ['Prompt telemetry'],
    estimatedTransitionWeeks: 4,
    recommendedTraining: ['Applied Prompt Engineering for Analysts', 'Azure AI Telemetry Foundations', 'Product Analytics at Scale']
  },
  {
    id: 'opp-2',
    title: 'AI Strategy Analyst',
    department: 'Enterprise Strategy & Operations',
    alignmentScore: 71,
    openings: 2,
    description: 'Conduct strategic market analysis, competitive intelligence modeling, and executive decision-support for AI investment portfolios.',
    requiredSkills: ['Analytics', 'Business strategy', 'Stakeholder management', 'Financial modeling', 'Storytelling'],
    matchedSkills: ['Analytics', 'Business strategy', 'Stakeholder management', 'Storytelling'],
    gapSkills: ['Financial modeling'],
    estimatedTransitionWeeks: 6,
    recommendedTraining: ['Strategic Business Valuation', 'Executive Stakeholder Communications', 'Scenario Forecasting']
  },
  {
    id: 'opp-3',
    title: 'Product Analytics Manager',
    department: 'Microsoft 365 Core Experience',
    alignmentScore: 64,
    openings: 3,
    description: 'Lead cross-functional analytics pods driving user retention, feature adoption, and user journey optimization.',
    requiredSkills: ['Analytics', 'Customer insights', 'Project management', 'Team mentoring', 'Experimentation'],
    matchedSkills: ['Analytics', 'Customer insights', 'Project management'],
    gapSkills: ['Team mentoring', 'Cross-org product roadmaps'],
    estimatedTransitionWeeks: 8,
    recommendedTraining: ['People Leadership Essentials', 'Agile Product Analytics Framework', 'Customer Journey Telemetry']
  }
];

export const SKILLS_LIST = [
  { name: 'SQL & Database Querying', category: 'Core Analytics', proficiency: 92, demandTrend: 'Stable' },
  { name: 'Python & Statistical Computing', category: 'Core Analytics', proficiency: 78, demandTrend: '+24%' },
  { name: 'Power BI & Visual Modeling', category: 'BI & Reporting', proficiency: 88, demandTrend: '-12%' },
  { name: 'A/B Testing & Experimentation', category: 'Advanced Methods', proficiency: 82, demandTrend: '+35%' },
  { name: 'Predictive & Machine Learning', category: 'Advanced Methods', proficiency: 65, demandTrend: '+48%' },
  { name: 'Customer Segmentation', category: 'Customer Domain', proficiency: 84, demandTrend: '+15%' },
  { name: 'Stakeholder Storytelling', category: 'Leadership & Strategy', proficiency: 76, demandTrend: '+40%' },
  { name: 'Data Pipeline ETL', category: 'Engineering', proficiency: 72, demandTrend: 'Stable' },
  { name: 'DAX / Tabular Modeling', category: 'BI & Reporting', proficiency: 80, demandTrend: '-18%' },
  { name: 'Prompt & AI Agent Telemetry', category: 'Emerging AI', proficiency: 42, demandTrend: '+110%' },
  { name: 'Business Strategy Alignment', category: 'Leadership & Strategy', proficiency: 68, demandTrend: '+28%' },
  { name: 'Automated Copilot Workflows', category: 'Emerging AI', proficiency: 54, demandTrend: '+95%' }
];
