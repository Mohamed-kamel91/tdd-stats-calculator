type StatsResult = {
  min: number;
  max: number;
  count: number;
  avg: number;
};

export class StatsCalculator {
  private static getCount(sequence: number[]): number {
    return sequence.length;
  }

  private static getSum(sequence: number[]): number {
    return sequence.reduce((acc, num) => acc + num, 0);
  }

  private static getMin(sequence: number[]): number {
    return sequence[0];
  }

  private static getMax(sequence: number[]): number {
    const lastIndex = this.getCount(sequence) - 1;
    return sequence[lastIndex];
  }

  private static getAvg(sequence: number[]): number {
    const sum = this.getSum(sequence);
    const count = this.getCount(sequence);
    return sum / count;
  }

  public static calculate(sequence: number[]): StatsResult {
    const filtered = sequence.filter((num) => num != undefined);
    const sorted = filtered.sort((a, b) => a - b);

    return {
      min: this.getMin(sorted),
      max: this.getMax(sorted),
      avg: this.getAvg(sorted),
      count: this.getCount(sorted),
    };
  }
}
