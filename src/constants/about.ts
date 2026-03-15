import { Users, Target, MapPin, Clock } from 'lucide-react';

export const ABOUT_CONTENT = {
  badge: 'About PhysioCenter',
  heading: 'Your Partner in Recovery',
  paragraphs: [
    'For over 15 years, PhysioCenter has been at the forefront of rehabilitation medicine, helping thousands of patients regain their strength, mobility, and confidence. Our evidence-based approach combines cutting-edge techniques with compassionate care.',
    'We believe that every patient deserves personalized attention and a treatment plan that addresses their unique goals. Our state-of-the-art facility is equipped with the latest technology and our team stays current with the newest research and techniques in physiotherapy.',
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
