'use client';

import { LoadingScreen } from '@/components/loading-screen';
import { PageInfoContainer } from '@/components/page-info-container';

import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import { formatPhoneNumber } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { useQuery } from 'convex/react';
import Image from 'next/image';

function FieldRow({ field }: { field: Doc<'fields'> }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">{field.field}</h4>

        <div
          className={cn(
            'uppercase font-semibold px-2 py-1 rounded',
            field.status === 'open'
              ? 'bg-green-500'
              : field.status === 'closed'
              ? 'bg-red-500'
              : 'bg-gray-500'
          )}
        >
          <p className={cn('text-white')}>{field.status}</p>
        </div>
      </div>
      <p>Phone: {formatPhoneNumber(field.phone)}</p>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">
          Status Notes: {field.statusNotes}
        </p>
        {!!field.updatedAt && (
          <p className="text-xs text-muted-foreground">
            Last Updated: {new Date(field.updatedAt as number).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}

export function FieldsView() {
  const fields = useQuery(api.fields.getFields, {});

  if (fields === undefined) {
    return <LoadingScreen />;
  }
  return (
    <PageInfoContainer>
      {fields.map((field) => (
        <FieldRow key={field._id} field={field} />
      ))}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Onion Creek Soccer Complex (OCSC)</CardTitle>
            <CardDescription>
              5600 E William Cannon Dr, Austin, TX 78744
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/ocsc.jpeg"
              alt="Onion Creek Soccer Complex"
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </CardContent>
          <CardFooter className="mt-auto">
            <a
              href="https://www.google.com/maps/place/Onion+Creek+Soccer+Complex/@30.1771112,-97.744797,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b3a713d1604f:0xc3aa88085ae438b4!8m2!3d30.1771066!4d-97.7403123?shorturl=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline underline-offset-4"
            >
              Google Maps
            </a>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>North East Metropolitan Park (NEMP)</CardTitle>
            <CardDescription>
              NE Metro Pk Rd, Pflugerville, TX 78660
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/nemp.webp"
              alt="North East Metropolitan Park"
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </CardContent>
          <CardFooter className="mt-auto">
            <a
              href="https://www.google.com/maps/place/NE+Metro+Pk+Rd,+Pflugerville,+TX+78660/@30.4119075,-97.5929837,17z/data=!3m1!4b1!4m6!3m5!1s0x8644c5e8bfe8ef05:0xe750763c3d50e25a!8m2!3d30.4119075!4d-97.590795!16s%2Fg%2F11rhq86m_w?coh=164777&entry=tt&shorturl=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline underline-offset-4"
            >
              Google Maps
            </a>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>East Metropolitan Park (EMP)</CardTitle>
            <CardDescription>
              9080 Burleson Manor Rd, Manor, TX 78653
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/emp.webp"
              alt="East Metropolitan Park"
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </CardContent>
          <CardFooter className="mt-auto">
            <a
              href="https://www.google.com/maps/place/9080+Burleson+Manor+Rd,+Manor,+TX+78653/@30.280942,-97.5228255,17z/data=!3m1!4b1!4m5!3m4!1s0x8644bf33c812fe7d:0x4e4d06406e176ac7!8m2!3d30.2809374!4d-97.5206368?shorturl=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline underline-offset-4"
            >
              Google Maps
            </a>
          </CardFooter>
        </Card>
      </div>
    </PageInfoContainer>
  );
}
