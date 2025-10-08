'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader, Pencil } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
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

const formSchema = z.object({
  matchStatus: z.enum(['completed', 'postponed', 'cancelled', 'forfeit'], {
    message: 'Match status is required',
  }),
  homeTeamScore: z.number().min(0),
  awayTeamScore: z.number().min(0),
  time: z.string().min(4, {
    message: 'Time is required and must be in the format HH:MM',
  }),
  venue: z.string().min(1, {
    message: 'Venue is required',
  }),
});

export function UpdateMatch({ match }: { match: Doc<'matches'> }) {
  console.log(match);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateMatch = useMutation(api.matches.updateMatch);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      matchStatus: match.matchStatus ?? 'completed',
      homeTeamScore: match.homeTeamScore ?? 0,
      awayTeamScore: match.awayTeamScore ?? 0,
      time: match.time,
      venue: match.venue,
    },
  });

  React.useEffect(() => {
    form.reset({
      matchStatus: match.matchStatus ?? 'completed',
      homeTeamScore: match.homeTeamScore,
      awayTeamScore: match.awayTeamScore,
      time: match.time,
      venue: match.venue,
    });
  }, [match, form]);

  const watchedMatchStatus = form.watch('matchStatus');

  const closeDialog = () => {
    setIsOpen(false);
    form.reset();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const changedValues: Partial<z.infer<typeof formSchema>> = {};
    // Compare each field and add to changedValues if different
    if (values.homeTeamScore !== match.homeTeamScore) {
      changedValues.homeTeamScore = values.homeTeamScore;
    }
    if (values.awayTeamScore !== match.awayTeamScore) {
      changedValues.awayTeamScore = values.awayTeamScore;
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
        <Pencil className="size-3 lg:size-3.5 text-blue-500 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Match Result</DialogTitle>
          <DialogDescription className="sr-only">
            Update the result for {match.homeTeam} vs {match.awayTeam}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex items-center justify-between gap-4 w-full">
              <FormField
                control={form.control}
                name="matchStatus"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Match Status</FormLabel>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
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
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full flex-1" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {watchedMatchStatus === 'completed' ||
            watchedMatchStatus === 'forfeit' ? (
              <div className="flex items-center justify-between gap-4 w-full">
                <FormField
                  control={form.control}
                  name="homeTeamScore"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>{match.homeTeam}</FormLabel>
                      <FormControl>
                        <Input {...field} className="w-full" type="number" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="awayTeamScore"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>{match.awayTeam}</FormLabel>
                      <FormControl>
                        <Input {...field} className="w-full" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            ) : (
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">
                  {watchedMatchStatus === 'postponed'
                    ? 'This match has been postponed. Scores are not required.'
                    : 'This match has been cancelled. Scores are not required.'}
                </p>
              </div>
            )}

            <FormField
              control={form.control}
              name="venue"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Venue</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full flex-1" />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={closeDialog}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full"
                disabled={!form.formState.isDirty || isLoading}
              >
                {isLoading ? (
                  <Loader className="size-4 animate-spin" />
                ) : (
                  'Update'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
