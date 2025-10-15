'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Loader, Pencil } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';

const formSchema = z.object({
  matchStatus: z.enum(['completed', 'postponed', 'cancelled', 'forfeit'], {
    message: 'Match status is required',
  }),
  homeTeamScore: z.optional(z.number().min(0)),
  awayTeamScore: z.optional(z.number().min(0)),
  time: z.string().min(4, {
    message: 'Time is required and must be in the format HH:MM',
  }),
  venue: z.string().min(1, {
    message: 'Venue is required',
  }),
});

export function UpdateMatch({ match }: { match: Doc<'matches'> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateMatch = useMutation(api.matches.updateMatch);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      matchStatus: match.matchStatus ?? 'completed',
      homeTeamScore: match.homeTeamScore ?? undefined,
      awayTeamScore: match.awayTeamScore ?? undefined,
      time: match.time,
      venue: match.venue,
    },
  });

  useEffect(() => {
    form.reset({
      matchStatus: match.matchStatus ?? 'completed',
      homeTeamScore: match.homeTeamScore,
      awayTeamScore: match.awayTeamScore,
      time: match.time,
      venue: match.venue,
    });
  }, [match, form]);

  const handleCloseDialog = () => {
    setIsOpen(false);
    form.reset();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const changedValues: {
      matchStatus?: typeof values.matchStatus;
      homeTeamScore?: number | undefined;
      awayTeamScore?: number | undefined;
      time?: string;
      venue?: string;
    } = {};

    if (values.homeTeamScore !== match.homeTeamScore) {
      changedValues.homeTeamScore = values.homeTeamScore ?? undefined;
    }
    if (values.awayTeamScore !== match.awayTeamScore) {
      changedValues.awayTeamScore = values.awayTeamScore ?? undefined;
    }
    if (values.matchStatus !== match.matchStatus) {
      changedValues.matchStatus = values.matchStatus;
    }
    if (values.time !== match.time) {
      changedValues.time = values.time;
    }
    if (values.venue !== match.venue) {
      changedValues.venue = values.venue;
    }
    if (Object.keys(changedValues).length === 0) {
      toast.error('No changes made');
      return;
    }

    setIsLoading(true);

    const result = await updateMatch({
      match: {
        _id: match._id,
        ...changedValues,
      },
    });

    if (result.success) {
      setIsLoading(false);
      toast.success(result.message);
      form.reset();
      setIsOpen(false);
    } else {
      setIsLoading(false);
      toast.error(result.message);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          form.reset();
        }
      }}
    >
      <DialogTrigger>
        <Pencil className="size-3 lg:size-3.5 cursor-pointer text-green-500 lg:text-current lg:hover:text-green-500" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Match Result</DialogTitle>
          <DialogDescription className="sr-only">
            Update the result for {match.homeTeam} vs {match.awayTeam}
          </DialogDescription>
        </DialogHeader>

        <form id="update-match" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="grid grid-cols-2 gap-4 mb-4">
            <Controller
              name="matchStatus"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-match-match-status">
                    Match Status
                  </FieldLabel>
                  <Select
                    {...field}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    aria-invalid={fieldState.invalid}
                  >
                    <SelectTrigger className="w-full flex-1">
                      <SelectValue placeholder="Select match status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="postponed">Postponed</SelectItem>
                      <SelectItem value="forfeit">Forfeit</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="time"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-match-time">Time</FieldLabel>
                  <Input {...field} aria-invalid={fieldState.invalid} />
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup className="grid grid-cols-2 gap-4 mb-4">
            <Controller
              name="homeTeamScore"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-match-home-team-score">
                    {match.homeTeam}
                  </FieldLabel>
                  <Input
                    {...field}
                    type="number"
                    value={field.value ?? ''}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value === '' ? null : e.target.valueAsNumber
                      )
                    }
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                </Field>
              )}
            />
            <Controller
              name="awayTeamScore"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-match-away-team-score">
                    {match.awayTeam}
                  </FieldLabel>
                  <Input
                    {...field}
                    type="number"
                    value={field.value ?? ''}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value === '' ? null : e.target.valueAsNumber
                      )
                    }
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup className="mb-8">
            <Controller
              name="venue"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-match-venue">Venue</FieldLabel>
                  <Input {...field} aria-invalid={fieldState.invalid} />
                </Field>
              )}
            />
          </FieldGroup>

          <Field orientation="horizontal" className="flex justify-end">
            <Button type="button" variant="outline" onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button
              type="submit"
              form="update-match"
              disabled={!form.formState.isDirty || isLoading}
            >
              {isLoading ? (
                <Loader className="size-4 animate-spin" />
              ) : (
                'Update'
              )}
            </Button>
          </Field>
        </form>
      </DialogContent>
    </Dialog>
  );
}
