export interface Capability {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    id: 'uav-platforms',
    number: '01',
    title: 'UAV PLATFORMS',
    shortDescription: 'Advanced airframes and multirotor configurations.',
    description: 'Design and optimization of aerospace-grade airframes. Our focus spans structural integrity, aerodynamics, and scalable multirotor configurations tailored for complex aerial operations.'
  },
  {
    id: 'propulsion',
    number: '02',
    title: 'PROPULSION',
    shortDescription: 'High-performance powertrains and motor systems.',
    description: 'Engineering robust powertrains combining high-efficiency motors, electronic speed controllers (ESC), and aerodynamic propellers. Designed for optimal thrust-to-weight ratios and thermal management.'
  },
  {
    id: 'flight-systems',
    number: '03',
    title: 'FLIGHT SYSTEMS',
    shortDescription: 'Avionics, sensors, and control architectures.',
    description: 'Development of low-latency flight controllers, comprehensive sensor suites, and redundant control architectures ensuring precise and reliable aerial navigation and stability.'
  },
  {
    id: 'autonomy',
    number: '04',
    title: 'AUTONOMY',
    shortDescription: 'Perception and intelligent flight algorithms.',
    description: 'Integration of spatial perception, advanced navigation algorithms, and intelligent flight logic to enable semi-autonomous and autonomous mission profiles in dynamic environments.'
  },
  {
    id: 'payload-integration',
    number: '05',
    title: 'PAYLOAD INTEGRATION',
    shortDescription: 'Modular mission payload architecture.',
    description: 'Designing modular interfaces for seamless integration of specialized mission payloads. Ensuring mechanical stability, electrical compatibility, and data bandwidth for high-fidelity sensors and equipment.'
  },
  {
    id: 'mission-systems',
    number: '06',
    title: 'MISSION SYSTEMS',
    shortDescription: 'End-to-end platform solutions.',
    description: 'Comprehensive integration of airframe, avionics, and payloads into cohesive, mission-specific platforms. Tailored configurations designed to execute demanding operational requirements.'
  }
];
