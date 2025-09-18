import { Button } from './ui/button';
import { SquarePen } from 'lucide-react';
import Link from 'next/link';

interface Props {
  title: string;
}

export function PageHeading({ title }: Props) {
  return <h1 className="text-4xl font-semibold mb-10">{title}</h1>;
}
