import { Bone, Brain, Heart, Trophy, Zap, Shield } from 'lucide-react';

export const SPECIALTIES_CONTENT = {
  heading: 'Our Specialties',
  subheading: 'Comprehensive Care for Every Need',
  description:
    'Our team of certified physiotherapists offers a wide range of specialized treatments to help you recover, strengthen, and thrive.',
  ctaButton: {
    text: 'View All Services',
    href: '#contact',
  },
} as const;

export const SPECIALTIES_LIST = [
  {
    title: 'Orthopedic Therapy',
    description:
      'Specialized treatment for bone, joint, and muscle injuries to restore optimal function and mobility.',
    icon: Bone,
  },
  {
    title: 'Neurological Rehabilitation',
    description:
      'Expert care for stroke, spinal cord injuries, and neurological conditions to maximize recovery.',
    icon: Brain,
  },
  {
    title: 'Cardiovascular Rehab',
    description:
      'Heart-healthy exercise programs designed to improve cardiovascular fitness and prevent disease.',
    icon: Heart,
  },
  {
    title: 'Sports Medicine',
    description:
      'Performance optimization and injury prevention for athletes at all levels of competition.',
    icon: Trophy,
  },
  {
    title: 'Pain Management',
    description:
      'Advanced techniques to reduce chronic pain and improve quality of life through targeted therapy.',
    icon: Zap,
  },
  {
    title: 'Injury Prevention',
    description:
      'Proactive programs to strengthen your body and prevent future injuries before they occur.',
    icon: Shield,
  },
] as const;
