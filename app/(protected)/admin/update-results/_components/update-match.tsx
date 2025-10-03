'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Loader, Pencil } from 'lucide-react';
import { Match } from './matches-columns';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

const formSchema = z.object({
  homeTeamScore: z.string().min(1, {
    message: 'Home team score must be at least 1 character.',
  }),
  awayTeamScore: z.string().min(1, {
    message: 'Away team score must be at least 1 character.',
  }),
});

export function UpdateMatch({ match }: { match: Match }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateMatch = useMutation(api.matches.updateMatch);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      homeTeamScore: match.homeTeamScore,
      awayTeamScore: match.awayTeamScore,
    },
  });

  const closeDialog = () => {
    setIsOpen(false);
    form.reset();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (
      values.homeTeamScore === match.homeTeamScore &&
      values.awayTeamScore === match.awayTeamScore
    ) {
      toast.error('No changes made');
      return;
    }
    setIsLoading(true);
    const result = await updateMatch({
      match: {
        _id: match._id,
        homeTeamScore: values.homeTeamScore,
        awayTeamScore: values.awayTeamScore,
      },
    });

    if (result.success) {
      setIsLoading(false);
      toast.success(result.message);
      setIsOpen(false);
    } else {
      setIsLoading(false);
      toast.error(result.message);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Pencil className="size-3 lg:size-3.5 cursor-pointer hover:text-blue-500" />
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
                name="homeTeamScore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{match.homeTeam}</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" type="number" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="awayTeamScore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{match.awayTeam}</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
