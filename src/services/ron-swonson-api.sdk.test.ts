import { getRonSwonsonQuotes, ApiErrors } from "./ron-swonson-api.sdk";

describe("ron-swonson-api.ts", () => {
  it("Should get 10 quotes", async () => {
    const api = getRonSwonsonQuotes();
    const quotes = await api();

    expect(quotes.length).toBe(10);
  });

  it("Should throw a parameter error", async () => {
    const api = getRonSwonsonQuotes();
    try {
      const quotes = await api(-1);
    } catch (ex) {
      expect(ex.message).toBe(ApiErrors.PARAMETER_ERROR);
    }
  });

  // stub out axios maybe
});
