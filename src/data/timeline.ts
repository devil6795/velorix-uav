export interface TimelinePhase {
  period: string;
  title: string;
  description: string;
}

export const timeline: TimelinePhase[] = [
  {
    period: '2025',
    title: 'Foundation',
    description: 'Initial conceptualization, company formation, and preliminary research into advanced UAV architectures.'
  },
  {
    period: '2025-2026',
    title: 'System Development',
    description: 'Core engineering focus on airframe design, structural analysis, and propulsion system R&D.'
  },
  {
    period: '2026',
    title: 'Prototyping',
    description: 'Manufacturing and assembly of initial testbed prototypes for subsystem validation.'
  },
  {
    period: '2026-2027',
    title: 'Flight Testing',
    description: 'Systematic and rigorous test campaigns evaluating flight dynamics, avionic stability, and propulsion efficiency.'
  },
  {
    period: '2027+',
    title: 'Next Generation',
    description: 'Iterative refinement and advanced R&D directed towards next-generation autonomous flight platforms.'
  }
];
