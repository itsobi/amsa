import {
  Ban,
  BookMarked,
  Calendar,
  Car,
  CircleAlert,
  ClipboardList,
  CloudRain,
  Drone,
  IdCardLanyard,
  Info,
  Mail,
  NotebookPen,
  NotebookText,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Table,
  Trees,
  Users,
  UtensilsCrossed,
  Zap,
} from 'lucide-react';

export const sheetNavigationItems = [
  {
    label: 'League',
    href: '/league',
    icon: ClipboardList,
    subItems: [
      { label: 'Schedules', href: '/schedules', icon: Calendar },
      { label: 'Standings', href: '/standings', icon: Table },
      {
        label: 'AMSA Appeals',
        href: '/appeals',
        icon: NotebookPen,
      },
      { label: 'AMSA Rules', href: '/rules', icon: NotebookText },
      {
        label: 'AMSA Policies',
        href: '/policies',
        icon: BookMarked,
        subItems: [
          {
            label: 'Zero Tolerance Policy',
            href: '/policies/zero-tolerance',
          },
          {
            label: 'Onion Creek Soccer Complex Field Use Policy',
            href: '/policies/ocsc-use-policy',
          },
          { label: 'Barbeque Policy', href: '/policies/barbeque' },
          { label: 'OCSC Drone Policy', href: '/policies/drones' },
          { label: 'Lightning Policy', href: '/policies/lightning' },
          { label: 'Mailing Policy', href: '/policies/mailing' },
          {
            label: 'OCSC Open Carry Policy',
            href: '/policies/open-carry',
          },
          { label: 'OCSC Parking Policy', href: '/policies/parking' },
          { label: 'OCSC Rainout Policy', href: '/policies/rainout' },
          {
            label: 'Team and Player Registration Policy',
            href: '/policies/registration',
          },
        ],
      },
    ],
  },
  {
    label: 'Team Registration',
    icon: Users,
    href: '/team-registration',
  },
  {
    label: 'Recruitment',
    icon: Phone,
    href: '/recruitment',
  },
  {
    label: 'Fields',
    icon: Trees,
    href: '/fields',
  },
  {
    label: 'Referees',
    icon: IdCardLanyard,
    href: '/referees',
  },
  {
    label: 'About',
    icon: Info,
    href: '/about',
  },
];

export const leagueNavigationItems = [
  { label: 'Schedule', href: '/schedules', icon: Calendar },
  { label: 'Standings', href: '/standings', icon: Table },
  {
    label: 'AMSA Appeals',
    href: '/appeals',
    icon: NotebookPen,
  },
  { label: 'AMSA Rules', href: '/rules', icon: NotebookText },
];

export const AMSAPoliciesNavigationItems = [
  {
    label: 'Zero Tolerance Policy',
    href: '/policies/zero-tolerance',
    icon: CircleAlert,
  },
  {
    label: 'Onion Creek Soccer Complex Field Use Policy',
    href: '/policies/ocsc-use-policy',
    icon: ShieldAlert,
  },
  {
    label: 'Barbeque Policy',
    href: '/policies/barbeque',
    icon: UtensilsCrossed,
  },
  { label: 'OCSC Drone Policy', href: '/policies/drones', icon: Drone },
  { label: 'Lightning Policy', href: '/policies/lightning', icon: Zap },
  { label: 'Mailing Policy', href: '/policies/mailing', icon: Mail },
  {
    label: 'OCSC Open Carry Policy',
    href: '/policies/open-carry',
    icon: Ban,
  },
  { label: 'OCSC Parking Policy', href: '/policies/parking', icon: Car },

  {
    label: 'OCSC Rainout Policy',
    href: '/policies/rainout',
    icon: CloudRain,
  },
  {
    label: 'Team and Player Registration Policy',
    href: '/policies/registration',
    icon: Users,
  },
];
