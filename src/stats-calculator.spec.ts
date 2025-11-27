import { StatsCalculator } from "./stats-calculator";

describe("Stats calculator", () => {
  it("returns min, max, count, average in the result", () => {
    const sequence = [2, 4, 21, -8, 53, 40];

    const result = StatsCalculator.calculate(sequence);

    expect(result.min).toBeDefined();
    expect(result.max).toBeDefined();
    expect(result.avg).toBeDefined();
    expect(result.count).toBeDefined();
  });

  it("returns -8 as the minimum value for sequence [2, 4, 21, -8, 53, 40]", () => {
    const sequence = [2, 4, 21, -8, 53, 40];
    const result = StatsCalculator.calculate(sequence);
    expect(result.min).toBe(-8);
  });

  it("returns 53 as the maximum value for sequence [2, 4, 21, -8, 53, 40]", () => {
    const sequence = [2, 4, 21, -8, 53, 40];
    const result = StatsCalculator.calculate(sequence);
    expect(result.max).toBe(53);
  });

  it("returns 6 as the total number of elements for sequence [2, 4, 21, -8, 53, 40]", () => {
    const sequence = [2, 4, 21, -8, 53, 40];
    const result = StatsCalculator.calculate(sequence);
    expect(result.count).toBe(6);
  });

  it("return 18.666666666667 as the average value for sequence [2, 4, 21, -8, 53, 40]", () => {
    const sequence = [2, 4, 21, -8, 53, 40];
    const result = StatsCalculator.calculate(sequence);
    expect(result.avg).toBeCloseTo(18.666666666667);
  });
});
