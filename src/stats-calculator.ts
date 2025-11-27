export class StatsCalculator {
  public static calculate(arr: number[]) {
    const sorted = arr.sort((a, b) => a - b);

    return {
      min: sorted[0],
      max: sorted[sorted.length - 1],
      avg: sorted.reduce((acc, num) => acc + num, 0) / sorted.length,
      count: sorted.length,
    };
  }
}
