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
    href: '/',
    icon: ClipboardList,
    subItems: [
      { label: 'Schedules', href: '/', icon: Calendar },
      { label: 'Standings', href: '/', icon: Table },
      { label: 'Suspensions', href: '/', icon: CircleAlert },
      { label: 'AMSA Appeal Process', href: '/', icon: NotebookPen },
      { label: 'AMSA Rules', href: '/', icon: NotebookText },
      {
        label: 'AMSA Policies',
        href: '/',
        icon: BookMarked,
        subItems: [
          { label: 'Zero Tolerance Policy', href: '/' },
          {
            label: 'Onion Creek Soccer Complex Field Use Policy',
            href: '/',
          },
          { label: 'Barbeque Policy', href: '/' },
          { label: 'OCSC Drone Policy', href: '/' },
          { label: 'Lightning Policy', href: '/' },
          { label: 'Mailing Policy', href: '/' },
          { label: 'OCSC Open Carry Policy', href: '/' },
          { label: 'OCSC Parking Policy', href: '/' },
          { label: 'Privacy Policy', href: '/' },
          { label: 'OCSC Rainout Policy', href: '/' },
          { label: 'Team and Player Registration Policy', href: '/' },
        ],
      },
    ],
  },
  {
    label: 'Team Registration',
    icon: Users,
    href: '/',
  },
  {
    label: 'Recruitment',
    icon: Phone,
    href: '/',
  },
  {
    label: 'Fields',
    icon: Trees,
    href: '/',
  },
  {
    label: 'Referees',
    icon: IdCardLanyard,
    href: '/',
  },
  {
    label: 'About',
    icon: Info,
    href: '/',
  },
];

export const leagueNavigationItems = [
  { label: 'Schedule', href: '/', icon: Calendar },
  { label: 'Standings', href: '/', icon: Table },
  { label: 'Suspensions', href: '/', icon: CircleAlert },
  { label: 'AMSA Appeal Process', href: '/', icon: NotebookPen },
  { label: 'AMSA Rules', href: '/', icon: NotebookText },
];

export const AMSAPoliciesNavigationItems = [
  { label: 'Zero Tolerance Policy', href: '/', icon: CircleAlert },
  {
    label: 'Onion Creek Soccer Complex Field Use Policy',
    href: '/',
    icon: ShieldAlert,
  },
  { label: 'Barbeque Policy', href: '/', icon: UtensilsCrossed },
  { label: 'OCSC Drone Policy', href: '/', icon: Drone },
  { label: 'Lightning Policy', href: '/', icon: Zap },
  { label: 'Mailing Policy', href: '/', icon: Mail },
  { label: 'OCSC Open Carry Policy', href: '/', icon: Ban },
  { label: 'OCSC Parking Policy', href: '/', icon: Car },
  { label: 'Privacy Policy', href: '/', icon: ShieldCheck },
  { label: 'OCSC Rainout Policy', href: '/', icon: CloudRain },
  { label: 'Team and Player Registration Policy', href: '/', icon: Users },
];
