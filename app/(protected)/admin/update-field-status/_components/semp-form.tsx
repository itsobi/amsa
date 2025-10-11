'use client';

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Form } from '@/components/ui/form';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Loader, Phone } from 'lucide-react';
import { Doc } from '@/convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { useState } from 'react';

const formSchema = z.object({
  status: z.string().min(1, { message: 'Status is required' }),
  phone: z.string().length(10, { message: 'Phone number must be 10 digits' }),
  statusNotes: z
    .string()
    .min(2, { message: 'Status notes must be more than 2 characters' })
    .max(500, { message: 'Status notes must be less than 500 characters' }),
});

export function SEMPForm({ field }: { field: Doc<'fields'> | undefined }) {
  const updateField = useMutation(api.fields.updateFieldStatus);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: field?.status ?? '',
      phone: field?.phone ?? '',
      statusNotes: field?.statusNotes ?? '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!field?._id) return;

    if (
      data.status.trim() === field?.status &&
      data.phone.trim() === field?.phone &&
      data.statusNotes.trim() === field?.statusNotes
    ) {
      toast.error('No changes made');
      return;
    }

    const updates: Record<string, string | undefined> = {};

    if (data.status.trim() !== field.status) {
      updates.status = data.status;
    }
    if (data.phone.trim() !== field.phone) {
      updates.phone = data.phone;
    }
    if (data.statusNotes.trim() !== field.statusNotes) {
      updates.statusNotes = data.statusNotes;
    }
    setIsLoading(true);
    try {
      const response = await updateField({
        fieldId: field._id,
        values: updates,
      });

      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error('Error updating field status:', error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to update field status'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FieldSet className="mt-4">
          <FieldLegend>South East Metropolitan Field</FieldLegend>
          <FieldDescription>Update the field status of SEMP.</FieldDescription>
          <FieldGroup>
            <Controller
              name="status"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Status</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger aria-invalid={fieldState.invalid}>
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                      <SelectItem value="n/a">N/A</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Phone</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      type="number"
                      placeholder="5123422516"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon>
                      <Phone />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="statusNotes"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Status Notes</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      placeholder="Status notes"
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/500 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
        <Button
          type="submit"
          className="w-full"
          disabled={!form.formState.isDirty || isLoading}
        >
          {isLoading ? (
            <Loader className="size-4 animate-spin" />
          ) : (
            'Update Field Status'
          )}
        </Button>
      </form>
    </Form>
  );
}
