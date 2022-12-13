export class Count {
  count: number = 0

  constructor(private newCount: number) {
    this.count = this.newCount
  }

  canDecrement(): boolean {
    return this.count > 0
  }

  static createCounter(count: number): Count {
    return new Count(count)
  }
}
