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
    title: 'Physiotherapy',
    description:
      'Theraband exercises, laser treatment, joint mobilization, and sciatica relief. We treat osteoarthritis, sports injuries, and general pains.',
    icon: Zap,
  },
  {
    title: 'Chiropractic Services',
    description:
      'Specialized, non-invasive treatment focusing on the spine and other joints to restore bodily function and mobility.',
    icon: Bone,
  },
  {
    title: 'Massage Therapy',
    description:
      'Therapeutic massage to relieve stress, lessen muscle tension, and treat conditions like shoulder pain, back pain, knee pain, and ankle pain.',
    icon: Heart,
  },
  {
    title: 'Acupuncture',
    description:
      'Traditional techniques used to stimulate the body and promote natural healing for issues like tennis elbow and spondylitis.',
    icon: Brain,
  },
  {
    title: 'Orthotics',
    description:
      'Custom-made orthotics designed to address foot pain, walking imbalances, and lower limb discomfort.',
    icon: Shield,
  },
  {
    title: 'Braces & Stockings',
    description:
      'We offer custom braces for joint support and compression hose stockings to maintain blood flow and reduce discomfort.',
    icon: Trophy,
  },
] as const;
