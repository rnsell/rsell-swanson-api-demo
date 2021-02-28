import { getRonSwonsonQuotes } from "../services";
import { message } from "antd";

export type EpicDependencies = {
  getRonSwonsonQuotes: (numberofQuotes?: number) => Promise<string[]>;
  message: any;
};

export const generateEpicDependencies = (): EpicDependencies => {
  return {
    getRonSwonsonQuotes: getRonSwonsonQuotes(),
    message,
  };
};
