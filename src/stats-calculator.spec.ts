import { StatsCalculator } from "./stats-calculator";

const testCases = [
  {
    sequence: [2, 4, 21, -8, 53, 40],
    min: -8,
    max: 53,
    avg: 18.666666666667,
    count: 6,
  },
  {
    sequence: [10, -5, 32, 0, 17, -12, 22],
    min: -12,
    max: 32,
    avg: 9.142857142857142,
    count: 7,
  },
  {
    sequence: [3, 8, 15, 21, 42, 7, 34, 4, 39],
    min: 3,
    max: 42,
    avg: 19.22222222222222,
    count: 9,
  },
];

describe("Stats calculator", () => {
  it("returns min, max, count, average in the result", () => {
    const sequence = [2, 4, 21, -8, 53, 40];

    const result = StatsCalculator.calculate(sequence);

    expect(result.min).toBeDefined();
    expect(result.max).toBeDefined();
    expect(result.avg).toBeDefined();
    expect(result.count).toBeDefined();
  });

  describe("returns the minimum value for a given sequence", () => {
    it.each(testCases)(
      "returns $min for sequence $sequence",
      ({ sequence, min }) => {
        const result = StatsCalculator.calculate(sequence);
        expect(result.min).toBe(min);
      }
    );
  });

  describe("returns the maximum value for a given sequence", () => {
    it.each(testCases)(
      "returns $max for sequence $sequence",
      ({ sequence, max }) => {
        const result = StatsCalculator.calculate(sequence);
        expect(result.max).toBe(max);
      }
    );
  });

  describe("returns the avg value for a given sequence", () => {
    it.each(testCases)(
      "returns $avg for sequence $sequence",
      ({ sequence, avg }) => {
        const result = StatsCalculator.calculate(sequence);
        expect(result.avg).toBeCloseTo(avg);
      }
    );
  });

  describe("returns the total number of element for a given sequence", () => {
    it.each(testCases)(
      "returns $count for sequence $sequence",
      ({ sequence, count }) => {
        const result = StatsCalculator.calculate(sequence);
        expect(result.count).toBe(count);
      }
    );
  });

  describe("returns the correct stats result for a given sequence", () => {
    it.each(testCases)(
      "returns $count for sequence $sequence",
      ({ sequence, min, max, avg, count }) => {
        const result = StatsCalculator.calculate(sequence);

        expect(result.min).toBe(min);
        expect(result.max).toBe(max);
        expect(result.avg).toBeCloseTo(avg);
        expect(result.count).toBe(count);
      }
    );
  });
});
