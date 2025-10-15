'use client';

import { Loader, Pencil } from 'lucide-react';
import { Doc } from '@/convex/_generated/dataModel';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { useEffect, useState } from 'react';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const standingsSchema = z.object({
  gamesPlayed: z.number().min(0).optional(),
  gamesWon: z.number().min(0).optional(),
  gamesDrawn: z.number().min(0).optional(),
  gamesLost: z.number().min(0).optional(),
  goalsScored: z.number().min(0).optional(),
  goalsAgainst: z.number().min(0).optional(),
  goalDifference: z.number().optional(),
  points: z.number().min(0).optional(),
});

const getChangedValues = <T extends Record<string, number>>(
  values: T,
  defaultValues: T
): Partial<T> => {
  const changed: Partial<T> = {};
  for (const key in values) {
    if (values[key] !== defaultValues[key]) {
      changed[key] = values[key];
    }
  }
  return changed;
};

export function UpdateStandingsDialog({
  standing,
}: {
  standing: Doc<'standings'>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const updateStandingsStats = useMutation(api.standings.updateStandingsStats);
  const form = useForm<z.infer<typeof standingsSchema>>({
    resolver: zodResolver(standingsSchema),
    defaultValues: {
      gamesPlayed: standing.gamesPlayed ?? 0,
      gamesWon: standing.gamesWon ?? 0,
      gamesDrawn: standing.gamesDrawn ?? 0,
      gamesLost: standing.gamesLost ?? 0,
      goalsScored: standing.goalsScored ?? 0,
      goalsAgainst: standing.goalsAgainst ?? 0,
      goalDifference: standing.goalDifference ?? 0,
      points: standing.points ?? 0,
    },
  });

  useEffect(() => {
    form.reset({
      gamesPlayed: standing.gamesPlayed ?? 0,
      gamesWon: standing.gamesWon ?? 0,
      gamesDrawn: standing.gamesDrawn ?? 0,
      gamesLost: standing.gamesLost ?? 0,
      goalsScored: standing.goalsScored ?? 0,
      goalsAgainst: standing.goalsAgainst ?? 0,
      goalDifference: standing.goalDifference ?? 0,
      points: standing.points ?? 0,
    });
  }, [standing, form]);

  const onSubmit = async (values: z.infer<typeof standingsSchema>) => {
    const changedValues = getChangedValues(values, standing);

    if (Object.keys(changedValues).length === 0) {
      toast.error('No changes made');
      return;
    }
    const result = await updateStandingsStats({
      id: standing._id,
      team: standing.team,
      values: changedValues,
    });
    if (result.success) {
      toast.success(result.message);
      setIsOpen(false);
    } else {
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
      <DialogTrigger className="cursor-pointer">
        <Pencil className="size-3 lg:size-3.5 cursor-pointer hover:text-blue-500" />
      </DialogTrigger>
      <DialogContent className="overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{standing.team}</DialogTitle>
          <DialogDescription className="sr-only">
            Update the standings for {standing.team}
          </DialogDescription>
        </DialogHeader>

        <form id="update-standings" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="grid grid-cols-2 gap-4 mb-4">
            <Controller
              control={form.control}
              name="gamesPlayed"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-standings-games-played">
                    Games Played
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
              control={form.control}
              name="gamesWon"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-standings-games-won">
                    Games Won
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

          <FieldGroup className="grid grid-cols-2 gap-4 mb-4">
            <Controller
              control={form.control}
              name="gamesDrawn"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-standings-games-drawn">
                    Games Drawn
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
              control={form.control}
              name="gamesLost"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-standings-games-lost">
                    Games Lost
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

          <FieldGroup className="grid grid-cols-2 gap-4 mb-4">
            <Controller
              control={form.control}
              name="goalsScored"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-standings-goals-scored">
                    Goals Scored
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
              control={form.control}
              name="goalsAgainst"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-standings-goals-against">
                    Goals Against
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

          <FieldGroup className="grid grid-cols-2 gap-4 mb-4">
            <Controller
              control={form.control}
              name="goalDifference"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-standings-goal-difference">
                    Goal Difference
                  </FieldLabel>
                  <Input
                    {...field}
                    type="number"
                    value={field.value ?? ''}
                    onChange={(e) => {
                      const value =
                        e.target.value === '' ? null : e.target.valueAsNumber;
                      if (!isNaN(value as number) || value === null) {
                        field.onChange(value);
                      }
                    }}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="points"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="update-standings-points">
                    Points
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

          <Button
            type="submit"
            form="update-standings"
            className="w-full"
            disabled={!form.formState.isDirty || form.formState.isLoading}
          >
            {form.formState.isLoading ? (
              <Loader className="size-4 animate-spin" />
            ) : (
              'Update'
            )}
          </Button>
        </form>
        <DialogClose asChild>
          <Button variant="outline" onClick={() => form.reset()}>
            Cancel
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
