'use client';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Pencil } from 'lucide-react';
import { Doc } from '@/convex/_generated/dataModel';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { useState } from 'react';

const standingsSchema = z.object({
  gamesPlayed: z.number().min(0, {
    message: 'Games played must be at least 0.',
  }),
  gamesWon: z.number().min(0, {
    message: 'Games won must be at least 0.',
  }),
  gamesDrawn: z.number().min(0, {
    message: 'Games drawn must be at least 0.',
  }),
  gamesLost: z.number().min(0, {
    message: 'Games lost must be at least 0.',
  }),
  goalsScored: z.number().min(0, {
    message: 'Goals scored must be at least 0.',
  }),
  goalsAgainst: z.number().min(0, {
    message: 'Goals against must be at least 0.',
  }),
  goalDifference: z.number(),
  points: z.number().min(0, {
    message: 'Points must be at least 0.',
  }),
});

const getChangedValues = <T extends Record<string, any>>(
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
      gamesPlayed: standing.gamesPlayed,
      gamesWon: standing.gamesWon,
      gamesDrawn: standing.gamesDrawn,
      gamesLost: standing.gamesLost,
      goalsScored: standing.goalsScored,
      goalsAgainst: standing.goalsAgainst,
      goalDifference: standing.goalDifference,
      points: standing.points,
    },
  });

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
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger className="cursor-pointer">
        <Pencil className="size-3 lg:size-3.5 cursor-pointer hover:text-blue-500" />
      </AlertDialogTrigger>
      <AlertDialogContent className="overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>{standing.team}</AlertDialogTitle>
          <AlertDialogDescription className="sr-only">
            Update the standings for {standing.team}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between w-full">
                <FormField
                  control={form.control}
                  name="gamesPlayed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Games Played</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full"
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gamesWon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Games Won</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full"
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <FormField
                  control={form.control}
                  name="gamesDrawn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Games Played</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full"
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gamesLost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Games Lost</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full"
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <FormField
                  control={form.control}
                  name="goalsScored"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Goals Scored</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full"
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="goalsAgainst"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Games Lost</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full"
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <FormField
                  control={form.control}
                  name="goalDifference"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Goal Difference</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full"
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="points"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Points</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full"
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={!form.formState.isDirty}
            >
              Update
            </Button>
          </form>
        </Form>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
