// Central data for all 9 product types
export interface ProductData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  applications: string[];
  features: string[];
  specs: { label: string; value: string }[];
  images: string[];        // [hero, thumb2, thumb3]
  heroImage: string;
}

export const PRODUCTS: ProductData[] = [
  {
    slug: 'pcc-panel',
    name: 'Power Control Centre Panel',
    shortName: 'PCC Panel',
    tagline: 'Centralized Power Management',
    description:
      'Our Power Control Centre panels are engineered for heavy industrial environments, providing centralized control and distribution of electrical power across large facilities. Built with industrial-grade busbars, robust enclosures, and advanced protection relays.',
    applications: [
      'Steel & Cement Plants',
      'Petrochemical Industries',
      'Large Manufacturing Units',
      'Power Generation Plants',
      'Mining Operations',
    ],
    features: [
      'Form 4 Type 7 Segregated Busbar',
      'Motorized & Manual Changeover',
      'Advanced Numerical Relay Protection',
      'IP54 / IP65 Enclosure Rating',
      'Short Circuit Withstand Capacity up to 50kA',
      'Full-voltage & Soft-start options',
    ],
    specs: [
      { label: 'Voltage Rating', value: 'Up to 11kV' },
      { label: 'Current Rating', value: 'Up to 6300A' },
      { label: 'Fault Level', value: 'Up to 50kA' },
      { label: 'Degree of Protection', value: 'IP54 / IP65' },
      { label: 'Standards', value: 'IEC 61439, IS 8623' },
    ],
    images: ['/panels/pcc-panel-1.png', '/panels/pcc-panel-2.png', '/panels/pcc-panel-3.png'],
    heroImage: '/panels/pcc-panel-1.png',
  },
  {
    slug: 'mcc-panel',
    name: 'Motor Control Centre Panel',
    shortName: 'MCC Panel',
    tagline: 'Precision Motor Management',
    description:
      'Our MCC panels integrate intelligent motor protection and control in a modular, drawer-type architecture. Each feeder is fully withdrawable for zero-downtime maintenance, ideal for process industries with critical motor-driven loads.',
    applications: [
      'Water & Wastewater Treatment',
      'HVAC Systems',
      'Pumping Stations',
      'Chemical & Pharma Plants',
      'Food Processing Units',
    ],
    features: [
      'Withdrawable Drawer-type Modules',
      'SCADA-Ready Communication Ports',
      'Integrated Motor Protection Relays',
      'DOL, Star-Delta & Soft Starter Options',
      'Busbar Trunking Compatibility',
      'Remote Monitoring via Ethernet/Modbus',
    ],
    specs: [
      { label: 'Voltage Rating', value: '415V ±10%' },
      { label: 'Current Rating', value: 'Up to 2500A' },
      { label: 'Fault Level', value: 'Up to 50kA' },
      { label: 'Degree of Protection', value: 'IP54' },
      { label: 'Standards', value: 'IEC 61439-2, IS 8623' },
    ],
    images: ['/panels/mcc-panel-1.png', '/panels/mcc-panel-2.png', '/panels/mcc-panel-3.png'],
    heroImage: '/panels/mcc-panel-1.png',
  },
  {
    slug: 'vfd-panel',
    name: 'Variable Frequency Drive Panel',
    shortName: 'VFD Panel',
    tagline: 'Intelligent Speed Control',
    description:
      'VFD panels from Pratiksha Technologies combine world-class drives with precision engineering to give you full speed control of AC motors, dramatically reducing energy consumption and mechanical wear across all load types.',
    applications: [
      'Pumps & Fans (Energy Savings)',
      'Conveyors & Hoists',
      'Compressors',
      'CNC Machines',
      'HVAC Air Handling Units',
    ],
    features: [
      'Compatible with All Major Drive Brands',
      'Input Choke & Output Filters',
      'Harmonic Mitigation (Active Front-End)',
      'By-Pass Provision (Manual/Auto)',
      'PLC Integration Ready',
      'Energy Monitoring Dashboard',
    ],
    specs: [
      { label: 'Voltage', value: '415V / 690V 3Ph' },
      { label: 'Power Range', value: '0.37kW to 2MW' },
      { label: 'Control Mode', value: 'V/F, Sensorless Vector, FOC' },
      { label: 'Protection', value: 'IP54' },
      { label: 'Standards', value: 'IEC 61800-5-1' },
    ],
    images: ['/panels/vfd-panel-1.png', '/panels/vfd-panel-2.png', '/panels/vfd-panel-3.png'],
    heroImage: '/panels/vfd-panel-1.png',
  },
  {
    slug: 'apfc-panel',
    name: 'Automatic Power Factor Correction Panel',
    shortName: 'APFC Panel',
    tagline: 'Optimal Power Factor Automatically',
    description:
      'Our APFC panels continuously monitor and correct power factor in real-time, eliminating reactive power penalties from utilities and significantly reducing your energy bill. Microprocessor-based controllers ensure seamless, step-wise capacitor switching.',
    applications: [
      'Industrial Manufacturing Plants',
      'Commercial Complexes',
      'Hospitals & Data Centres',
      'Textile & Spinning Mills',
      'Infrastructure Projects',
    ],
    features: [
      'Microprocessor-based PF Controller',
      'Automatic Step-wise Capacitor Switching',
      'Detuned Reactor (5.7% / 7%) Options',
      'Harmonic Filtering Capacitors',
      'Real-time kVAR Monitoring',
      'Surge Protection & Over-voltage Disconnect',
    ],
    specs: [
      { label: 'Voltage', value: '415V ±10%' },
      { label: 'Capacitor Banks', value: 'Up to 2000 kVAR' },
      { label: 'Steps', value: '4 to 24 Steps' },
      { label: 'Target PF', value: '0.95–0.99 Lagging' },
      { label: 'Standards', value: 'IEC 60831, IS 13925' },
    ],
    images: ['/panels/apfc-panel-1.png', '/panels/apfc-panel-2.png', '/panels/apfc-panel-3.png'],
    heroImage: '/panels/apfc-panel-1.png',
  },
  {
    slug: 'plc-panel',
    name: 'PLC Control Panel',
    shortName: 'PLC Panel',
    tagline: 'Intelligent Automation Control',
    description:
      'Pratiksha Technologies designs and manufactures custom PLC-based automation panels for complete process control. From simple relay-logic replacements to complex SCADA-integrated systems, we deliver robust, future-ready automation solutions.',
    applications: [
      'Process Automation Lines',
      'Packaging Machinery',
      'Boiler & Furnace Control',
      'Water Treatment Automation',
      'Material Handling Systems',
    ],
    features: [
      'Compatible: Siemens, Allen-Bradley, Mitsubishi, Delta',
      'HMI Touch-screen Integration',
      'SCADA / OPC-UA Connectivity',
      'Redundant CPU Options',
      'Remote I/O Expansion',
      'UPS Backed Control Supply',
    ],
    specs: [
      { label: 'PLC Brands', value: 'Siemens / AB / Mitsubishi' },
      { label: 'I/O Points', value: 'Up to 10,000+' },
      { label: 'Communication', value: 'Modbus, Profibus, Ethernet' },
      { label: 'Protection', value: 'IP54 / IP65' },
      { label: 'HMI', value: '7" to 21" Touch Panel' },
    ],
    images: ['/panels/plc-panel-1.png', '/panels/plc-panel-2.png', '/panels/plc-panel-3.png'],
    heroImage: '/panels/plc-panel-1.png',
  },
  {
    slug: 'feeder-pillar',
    name: 'Feeder Pillar Panel',
    shortName: 'Feeder Pillar',
    tagline: 'Robust Outdoor Power Distribution',
    description:
      'Our feeder pillars are purpose-built for outdoor power distribution in infrastructure, township, and utility applications. Heavy-gauge GI or SS enclosures with weatherproof ratings make them suitable for the harshest environments.',
    applications: [
      'Street Lighting Networks',
      'Outdoor Advertising Boards',
      'Township Power Distribution',
      'Construction Site Temporary Power',
      'Irrigation Pump Distribution',
    ],
    features: [
      'IP65 Weatherproof Enclosure',
      'Hot-dip Galvanized / SS 304 Body',
      'MCB / MCCB / RCCB Protection',
      'Energy Meter & Tamper Alarm',
      'Anti-corrosion Powder Coating',
      'Padlock Provisions & Security Sealing',
    ],
    specs: [
      { label: 'Voltage', value: '415V 3Ph / 240V 1Ph' },
      { label: 'Current', value: '63A to 400A Incomer' },
      { label: 'Outgoing Ways', value: '4 to 24 Feeders' },
      { label: 'Protection', value: 'IP65' },
      { label: 'Mounting', value: 'Pole / Pedestal / Wall' },
    ],
    images: ['/panels/feeder-panel-1.png', '/panels/feeder-panel-2.png', '/panels/feeder-panel-3.png'],
    heroImage: '/panels/feeder-panel-1.png',
  },
  {
    slug: 'amf-panel',
    name: 'Auto Mains Failure Panel',
    shortName: 'AMF Panel',
    tagline: 'Seamless Generator Changeover',
    description:
      'Our AMF panels provide fully automatic changeover between mains supply and diesel generator sets within seconds of a power failure. With configurable time delays and remote monitoring, they are ideal for critical installations requiring zero downtime.',
    applications: [
      'Hospitals & Healthcare',
      'Data Centres & Server Rooms',
      'Banks & Financial Institutions',
      'Hotels & Hospitality',
      'Telecom & Broadcasting',
    ],
    features: [
      'Automatic Mains Failure Detection (<0.5s)',
      'Configurable Delay Timers',
      'Generator Auto-start & Synchronization',
      'ATSE (Automatic Transfer Switch)',
      'Load Shedding on Generator',
      'GSM/SMS Alert Integration',
    ],
    specs: [
      { label: 'Voltage', value: '415V 3Ph / 240V 1Ph' },
      { label: 'Transfer Time', value: '<10 seconds' },
      { label: 'DG Range', value: '10 kVA to 2500 kVA' },
      { label: 'Control Supply', value: 'Battery Backed UPS' },
      { label: 'Standards', value: 'IEC 60947-6-1' },
    ],
    images: ['/panels/amf-panel-1.png', '/panels/amf-panel-2.png', '/panels/amf-panel-3.png'],
    heroImage: '/panels/amf-panel-1.png',
  },
  {
    slug: 'pdb-panel',
    name: 'Power Distribution Board',
    shortName: 'PDB Panel',
    tagline: 'Safe & Efficient Power Distribution',
    description:
      "Pratiksha Technologies' power distribution boards are engineered for safe, reliable distribution of electrical power to multiple sub-circuits. Available in surface-mount, flush-mount, and free-standing configurations for every application.",
    applications: [
      'Commercial Office Buildings',
      'Residential Complexes',
      'Industrial Workshops',
      'Shopping Malls & Retail',
      'Educational Institutions',
    ],
    features: [
      'Modular MCB / RCCB / ELCB Outgoings',
      'Copper Busbar with Tinned Terminals',
      'Colour-coded Phase Indication',
      'Lockable Door with Transparent Cover',
      'DIN Rail Mounted Components',
      'Label Holders for Circuit ID',
    ],
    specs: [
      { label: 'Voltage', value: '415V 3Ph / 240V 1Ph' },
      { label: 'Incomer', value: '100A to 800A' },
      { label: 'Ways', value: '4 to 48 Ways' },
      { label: 'Protection', value: 'IP43 / IP54' },
      { label: 'Mounting', value: 'Surface / Flush / Floor' },
    ],
    images: ['/panels/pdb-panel-1.png', '/panels/pdb-panel-2.png', '/panels/pdb-panel-3.png'],
    heroImage: '/panels/pdb-panel-1.png',
  },
  {
    slug: 'fire-panel',
    name: 'Fire Alarm Control Panel',
    shortName: 'Fire Panel',
    tagline: 'Protecting Lives & Assets',
    description:
      'Our fire alarm control panels are designed to the highest safety standards, offering addressable and conventional fire detection with instant alarm, fault monitoring, and suppression system integration for comprehensive fire safety.',
    applications: [
      'Commercial & High-rise Buildings',
      'Industrial Plants',
      'Hospitals & Schools',
      'Hotels & Warehouses',
      'Underground Car Parks',
    ],
    features: [
      'Addressable / Conventional Zones',
      'LCD Mimic Panel with Zone Map',
      'Integration with Suppression Systems',
      'Voice Evacuation System Compatible',
      'Battery Backup (72-hour standby)',
      'BMS / Building Automation Integration',
    ],
    specs: [
      { label: 'Zones', value: '2 to 512 Addressable Zones' },
      { label: 'Loop Devices', value: 'Up to 254 per Loop' },
      { label: 'Battery Backup', value: '72 Hours Standby' },
      { label: 'Standards', value: 'EN 54, NBC 2016, IS 2189' },
      { label: 'Certification', value: 'UL Listed / LPCB' },
    ],
    images: ['/panels/fire-panel-1.png', '/panels/fire-panel-2.png', '/panels/fire-panel-3.png'],
    heroImage: '/panels/fire-panel-1.png',
  },
];

export const getProductBySlug = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug) ?? null;
