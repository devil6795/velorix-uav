export interface UavSystem {
  id: string;
  name: string;
  type: string;
  status: 'DEVELOPMENT' | 'PROTOTYPE' | 'PRODUCTION';
  description: string;
  imagePath: string;
  slug: string;
}

export const systems: UavSystem[] = [
  {
    id: 'system-01',
    name: 'SYSTEM 01',
    type: 'MULTIROTOR PLATFORM',
    status: 'DEVELOPMENT',
    description: 'A scalable multirotor platform currently in active development, focusing on modularity and mission adaptability.',
    imagePath: '/media/uav/system-01.webp',
    slug: 'system-01'
  },
  {
    id: 'system-02',
    name: 'SYSTEM 02',
    type: 'HEAVY LIFT CONFIGURATION',
    status: 'DEVELOPMENT',
    description: 'Engineering concepts directed towards a robust configuration prioritizing structural strength and stable flight dynamics.',
    imagePath: '/media/uav/system-02.webp',
    slug: 'system-02'
  },
  {
    id: 'system-03',
    name: 'SYSTEM 03',
    type: 'INTEGRATED TESTBED',
    status: 'DEVELOPMENT',
    description: 'An experimental platform designed for iterative testing of novel propulsion and avionic architectures.',
    imagePath: '/media/uav/system-03.webp',
    slug: 'system-03'
  }
];
