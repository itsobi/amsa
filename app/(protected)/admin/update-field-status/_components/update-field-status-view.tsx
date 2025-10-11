'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OCSCForm } from './ocsc-form';
import { SEMPForm } from './semp-form';
import { NEMPForm } from './nemp-form';
import { EMPForm } from './emp-form';
import { Preloaded, usePreloadedQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

export function UpdateFieldStatusView({
  preloadedFields,
}: {
  preloadedFields: Preloaded<typeof api.fields.getFields>;
}) {
  const fields = usePreloadedQuery(preloadedFields);

  const ocscField = fields.find(
    (field) => field.field === 'Onion Creek Soccer Complex'
  );
  const sempField = fields.find(
    (field) => field.field === 'Southeast Metropolitan Field'
  );
  const nempField = fields.find(
    (field) => field.field === 'Northeast Metropolitan Field'
  );
  const empField = fields.find(
    (field) => field.field === 'East Metropolitan Park'
  );

  return (
    <Tabs defaultValue="ocsc" className="">
      <TabsList className="w-[300px] lg:w-[400px]">
        <TabsTrigger value="ocsc">OCSC</TabsTrigger>
        <TabsTrigger value="semp">SEMP</TabsTrigger>
        <TabsTrigger value="nemp">NEMP</TabsTrigger>
        <TabsTrigger value="emp">EMP</TabsTrigger>
      </TabsList>
      <TabsContent value="ocsc">
        <OCSCForm field={ocscField} />
      </TabsContent>
      <TabsContent value="semp">
        <SEMPForm field={sempField} />
      </TabsContent>
      <TabsContent value="nemp">
        <NEMPForm field={nempField} />
      </TabsContent>
      <TabsContent value="emp">
        <EMPForm field={empField} />
      </TabsContent>
    </Tabs>
  );
}
