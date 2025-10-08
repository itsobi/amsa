'use client';

import { Button } from '@/components/ui/button';
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
import { Input } from '@/components/ui/input';
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import { convertDate } from '@/lib/helpers';
import { useMutation } from 'convex/react';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function DeleteMatch({ match }: { match: Doc<'matches'> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmText, setConfirmText] = useState('');
  const deleteMatch = useMutation(api.matches.deleteMatch);

  const handleDeleteMatch = async () => {
    setIsLoading(true);
    const result = await deleteMatch({ matchId: match._id });
    if (result.success) {
      toast.success(result.message);
      setIsOpen(false);
      setIsLoading(false);
    } else {
      toast.error(result.message);
      setIsLoading(false);
    }
    setConfirmText('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Trash2 className="size-3 lg:size-3.5 text-destructive cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the match
            from our system.
          </DialogDescription>
        </DialogHeader>

        <div>
          <div className="text-sm mb-4">
            <div className="text-sm text-center text-muted-foreground">
              <span>{convertDate(match.date)} - </span>
              <span className="font-semibold">
                {match.homeTeam} vs. {match.awayTeam}
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmText"
              className="text-sm text-muted-foreground"
            >
              Type <span className="italic">Delete</span> to confirm
            </label>

            <Input
              id="confirmText"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="Delete"
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => setConfirmText('')}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            disabled={confirmText !== 'Delete'}
            onClick={handleDeleteMatch}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
