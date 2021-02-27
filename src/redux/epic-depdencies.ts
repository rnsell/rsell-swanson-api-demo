import { getRonSwonsonQuotes } from "../services";

export type EpicDependencies = {
  getRonSwonsonQuotes: (numberofQuotes?: number) => Promise<string[]>;
};

export const generateEpicDependencies = (): EpicDependencies => {
  return {
    getRonSwonsonQuotes: getRonSwonsonQuotes(),
  };
};
