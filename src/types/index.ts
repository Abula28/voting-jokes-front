export interface JokeI {
  _id: string;
  question: string;
  answer: string;
  votes: VoteT[];
  availableVotes: string[];
}

export type VoteT = { value: number; label: string };
