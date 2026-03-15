import { Award, Users, TrendingUp } from 'lucide-react';

export const STATS_LIST = [
  {
    value: '15+',
    label: 'Years Experience',
    icon: Award,
  },
  {
    value: '5000+',
    label: 'Patients Treated',
    icon: Users,
  },
  {
    value: '98%',
    label: 'Success Rate',
    icon: TrendingUp,
  },
] as const;
