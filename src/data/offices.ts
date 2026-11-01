export interface IndiaCampus {
  id: string;
  city: string;
  state: string;
  region: "North" | "South" | "West" | "East";
  campusName: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  headcount: string;
  coords: { x: number; y: number }; // Percentage relative to India Map (0-100)
}

export const indiaCampuses: IndiaCampus[] = [
  // SOUTH
  {
    id: "blr-ec",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South",
    campusName: "Global Technology & AI Campus",
    type: "Global Headquarters & AI Center of Excellence",
    address: "Campus 4B, Phase 1, Electronic City, Hosur Road, Bengaluru, Karnataka 560100",
    phone: "+91 80 4000 5000",
    email: "bengaluru@adpulse-digital.com",
    headcount: "18,500+ Engineers",
    coords: { x: 42, y: 74 },
  },
  {
    id: "hyd-hitec",
    city: "Hyderabad",
    state: "Telangana",
    region: "South",
    campusName: "Cloud & Enterprise Systems Campus",
    type: "Cloud Infrastructure Center",
    address: "Tower 2, Mindspace Madhapur, HITEC City, Hyderabad, Telangana 500081",
    phone: "+91 40 4000 7000",
    email: "hyderabad@adpulse-digital.com",
    headcount: "12,000+ Specialists",
    coords: { x: 44, y: 61 },
  },
  {
    id: "che-omr",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    campusName: "Automotive & Connected Systems Center",
    type: "Engineering R&D Hub",
    address: "Ascendas Tech Park, CSIR Road, Taramani, OMR, Chennai, Tamil Nadu 600113",
    phone: "+91 44 4000 8000",
    email: "chennai@adpulse-digital.com",
    headcount: "7,500+ Engineers",
    coords: { x: 49, y: 76 },
  },
  {
    id: "koc-info",
    city: "Kochi",
    state: "Kerala",
    region: "South",
    campusName: "Digital Operations & Analytics Center",
    type: "Analytics & Cloud Operations Hub",
    address: "Infopark Phase 2, Kakkanad, Kochi, Kerala 682042",
    phone: "+91 484 400 3000",
    email: "kochi@adpulse-digital.com",
    headcount: "3,200+ Specialists",
    coords: { x: 39, y: 84 },
  },

  // WEST
  {
    id: "pun-hinj",
    city: "Pune",
    state: "Maharashtra",
    region: "West",
    campusName: "Executive Technology Center",
    type: "Software Innovation & Microservices Hub",
    address: "Plot No. 1, Rajiv Gandhi Infotech Park, Phase 3, Hinjawadi, Pune, Maharashtra 411057",
    phone: "+91 20 6000 7000",
    email: "pune@adpulse-digital.com",
    headcount: "14,000+ Innovators",
    coords: { x: 29, y: 59 },
  },
  {
    id: "mum-bkc",
    city: "Mumbai",
    state: "Maharashtra",
    region: "West",
    campusName: "Fintech & Media Technology Hub",
    type: "Banking & Media Practice Campus",
    address: "The Capital, 14th Floor, G-Block, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051",
    phone: "+91 22 6000 9000",
    email: "mumbai@adpulse-digital.com",
    headcount: "9,000+ Consultants",
    coords: { x: 26, y: 56 },
  },
  {
    id: "ahm-gift",
    city: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    campusName: "GIFT City Financial Technology Center",
    type: "Fintech SEZ & Capital Markets Practice",
    address: "Brigade International Financial Centre, GIFT City SEZ, Gandhinagar / Ahmedabad, Gujarat 382355",
    phone: "+91 79 4000 2000",
    email: "ahmedabad@adpulse-digital.com",
    headcount: "2,800+ Fintech Engineers",
    coords: { x: 23, y: 44 },
  },

  // NORTH
  {
    id: "del-ggn",
    city: "Delhi NCR / Gurugram",
    state: "Haryana",
    region: "North",
    campusName: "Northern Regional Headquarters",
    type: "Enterprise Digital & Public Sector Practice",
    address: "DLF Cyber City, Building 10, Tower B, Phase 2, Gurugram, Haryana 122002",
    phone: "+91 124 400 9000",
    email: "delhi.ncr@adpulse-digital.com",
    headcount: "11,500+ Professionals",
    coords: { x: 38, y: 28 },
  },
  {
    id: "noi-sec62",
    city: "Noida",
    state: "Uttar Pradesh",
    region: "North",
    campusName: "Digital Engineering Delivery Center",
    type: "Platform Engineering Campus",
    address: "A-8A, Knowledge Boulevard, Sector 62, Noida, Uttar Pradesh 201309",
    phone: "+91 120 400 6000",
    email: "noida@adpulse-digital.com",
    headcount: "6,500+ Engineers",
    coords: { x: 40, y: 29 },
  },
  {
    id: "chd-it",
    city: "Chandigarh",
    state: "Punjab / Haryana",
    region: "North",
    campusName: "Technology Development Center",
    type: "Software R&D Facility",
    address: "Rajiv Gandhi Chandigarh Technology Park, Kishangarh, Chandigarh 160101",
    phone: "+91 172 400 1000",
    email: "chandigarh@adpulse-digital.com",
    headcount: "2,100+ Engineers",
    coords: { x: 36, y: 22 },
  },

  // EAST
  {
    id: "kol-salt",
    city: "Kolkata",
    state: "West Bengal",
    region: "East",
    campusName: "Eastern Regional Innovation Center",
    type: "Enterprise Telecom & Life Sciences Hub",
    address: "Infinity Think Tank, Tower II, Sector V, Salt Lake, Kolkata, West Bengal 700091",
    phone: "+91 33 4000 6000",
    email: "kolkata@adpulse-digital.com",
    headcount: "5,800+ Specialists",
    coords: { x: 74, y: 45 },
  },
  {
    id: "bhu-info",
    city: "Bhubaneswar",
    state: "Odisha",
    region: "East",
    campusName: "Digital Systems Center",
    type: "Cloud Delivery Campus",
    address: "DLF Cybercity, Idco Info Park, Chandaka Industrial Estate, Bhubaneswar, Odisha 751024",
    phone: "+91 674 400 5000",
    email: "bhubaneswar@adpulse-digital.com",
    headcount: "2,400+ Engineers",
    coords: { x: 67, y: 53 },
  },
];

export const indiaClusters = [
  { id: "cl-south", count: 24, label: "South Tech Corridor (Bengaluru, Chennai, Kochi)", x: 42, y: 74 },
  { id: "cl-west", count: 18, label: "Western Hub (Pune, Mumbai, GIFT City)", x: 28, y: 58 },
  { id: "cl-north", count: 14, label: "North Capital Region (Delhi NCR, Noida, Chandigarh)", x: 39, y: 28 },
  { id: "cl-hyd", count: 12, label: "Telangana Engineering (Hyderabad)", x: 44, y: 61 },
  { id: "cl-east", count: 8, label: "East Regional Center (Kolkata, Bhubaneswar)", x: 72, y: 47 },
];
