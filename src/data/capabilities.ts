export interface Capability {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
}

export const capabilities: Capability[] = [
  {
    id: 'uav-platforms',
    number: '01',
    title: 'UAV PLATFORMS',
    shortDescription: 'Advanced airframes and multirotor configurations.',
    description: 'Airframe engineering, structural optimization, aerodynamic considerations and modular multirotor configurations.',
    image: '/media/capabilities/uav-platforms.jpg'
  },
  {
    id: 'propulsion',
    number: '02',
    title: 'PROPULSION',
    shortDescription: 'High-performance powertrains and motor systems.',
    description: 'Motor, ESC, propeller and power-system integration for efficient and reliable flight.',
    image: '/media/capabilities/propulsion.jpg'
  },
  {
    id: 'flight-systems',
    number: '03',
    title: 'FLIGHT SYSTEMS',
    shortDescription: 'Avionics, sensors, and control architectures.',
    description: 'Flight controllers, sensors, navigation hardware and control architecture.',
    image: '/media/capabilities/flight-systems.jpg'
  },
  {
    id: 'autonomy',
    number: '04',
    title: 'AUTONOMY',
    shortDescription: 'Perception and intelligent flight algorithms.',
    description: 'Perception, navigation, intelligent decision-making and autonomous mission logic.',
    image: '/media/capabilities/autonomy.jpg'
  },
  {
    id: 'payload-integration',
    number: '05',
    title: 'PAYLOAD INTEGRATION',
    shortDescription: 'Modular mission payload architecture.',
    description: 'Integration of cameras, sensors and mission-specific payload systems with the aircraft.',
    image: '/media/capabilities/payload.jpg'
  },
  {
    id: 'mission-systems',
    number: '06',
    title: 'MISSION SYSTEMS',
    shortDescription: 'End-to-end platform solutions.',
    description: 'System-level integration connecting aircraft, electronics, software, communications and payloads around the mission.',
    image: '/media/capabilities/mission.jpg'
  }
];
