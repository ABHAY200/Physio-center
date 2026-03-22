import { Users, Target, MapPin, Clock } from 'lucide-react';

export const ABOUT_CONTENT = {
  badge: 'About Total Care Injury Rehab',
  heading: 'Your Partner in Recovery',
  paragraphs: [
    'Total Care Injury Rehab Centre Inc is dedicated to helping patients regain their strength, mobility, and confidence. We accept all insurance companies, including Motor Vehicle Accident (MVA), Slip and fall, and EHC (Extended Health) clients.',
    'We offer a wide variety of services including Physiotherapy, Chiropractic Services, Massage, Acupuncture, Orthotics, Compression Hose Stockings, and Braces. We treat numerous conditions such as Sciatica, Osteoarthritis, Spondylitis, Tennis Elbow, and general joint/muscle pains.',
  ],
  highlights: [
    'Evidence-Based Treatment',
    'Advanced Technology',
    'Compassionate Care',
  ],
  teamSection: {
    heading: 'Meet Our Team',
  },
} as const;

export const TEAM_FEATURES = [
  {
    title: 'Certified Experts',
    description: 'Licensed physiotherapists with advanced certifications',
    icon: Users,
  },
  {
    title: 'Personalized Care',
    description: 'Individual treatment plans tailored to your specific needs',
    icon: Target,
  },
  {
    title: 'Prime Location',
    description: 'Easily accessible facility with modern equipment',
    icon: MapPin,
  },
  {
    title: 'Flexible Hours',
    description: 'Extended hours to fit your busy schedule',
    icon: Clock,
  },
] as const;
