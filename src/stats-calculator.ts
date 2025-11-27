export class StatsCalculator {
  public static calculate(arr: number[]) {
    const sorted = arr.sort((a, b) => a - b);

    return {
      min: sorted[0],
      max: sorted[sorted.length - 1],
      avg: 0,
      count: sorted.length,
    };
  }
}
