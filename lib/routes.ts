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
      { label: 'Suspensions', href: '/suspensions', icon: CircleAlert },
      {
        label: 'AMSA Appeal Process',
        href: '/amsa-appeal-process',
        icon: NotebookPen,
      },
      { label: 'AMSA Rules', href: '/amsa-rules', icon: NotebookText },
      {
        label: 'AMSA Policies',
        href: '/amsa-policies',
        icon: BookMarked,
        subItems: [
          {
            label: 'Zero Tolerance Policy',
            href: '/amsa-policies/zero-tolerance',
          },
          {
            label: 'Onion Creek Soccer Complex Field Use Policy',
            href: '/amsa-policies/field-use',
          },
          { label: 'Barbeque Policy', href: '/amsa-policies/barbeque' },
          { label: 'OCSC Drone Policy', href: '/amsa-policies/drone' },
          { label: 'Lightning Policy', href: '/amsa-policies/lightning' },
          { label: 'Mailing Policy', href: '/amsa-policies/mailing' },
          {
            label: 'OCSC Open Carry Policy',
            href: '/amsa-policies/open-carry',
          },
          { label: 'OCSC Parking Policy', href: '/amsa-policies/parking' },
          { label: 'Privacy Policy', href: '/amsa-policies/privacy' },
          { label: 'OCSC Rainout Policy', href: '/amsa-policies/rainout' },
          {
            label: 'Team and Player Registration Policy',
            href: '/amsa-policies/registration',
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
  { label: 'Suspensions', href: '/suspensions', icon: CircleAlert },
  {
    label: 'AMSA Appeal Process',
    href: '/amsa-appeal-process',
    icon: NotebookPen,
  },
  { label: 'AMSA Rules', href: '/amsa-rules', icon: NotebookText },
];

export const AMSAPoliciesNavigationItems = [
  {
    label: 'Zero Tolerance Policy',
    href: '/amsa-policies/zero-tolerance',
    icon: CircleAlert,
  },
  {
    label: 'Onion Creek Soccer Complex Field Use Policy',
    href: '/amsa-policies/field-use',
    icon: ShieldAlert,
  },
  {
    label: 'Barbeque Policy',
    href: '/amsa-policies/barbeque',
    icon: UtensilsCrossed,
  },
  { label: 'OCSC Drone Policy', href: '/amsa-policies/drone', icon: Drone },
  { label: 'Lightning Policy', href: '/amsa-policies/lightning', icon: Zap },
  { label: 'Mailing Policy', href: '/amsa-policies/mailing', icon: Mail },
  {
    label: 'OCSC Open Carry Policy',
    href: '/amsa-policies/open-carry',
    icon: Ban,
  },
  { label: 'OCSC Parking Policy', href: '/amsa-policies/parking', icon: Car },
  {
    label: 'Privacy Policy',
    href: '/amsa-policies/privacy',
    icon: ShieldCheck,
  },
  {
    label: 'OCSC Rainout Policy',
    href: '/amsa-policies/rainout',
    icon: CloudRain,
  },
  {
    label: 'Team and Player Registration Policy',
    href: '/amsa-policies/registration',
    icon: Users,
  },
];
