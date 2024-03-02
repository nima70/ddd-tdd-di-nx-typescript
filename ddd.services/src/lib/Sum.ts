// ddd.services/src/lib/sum.ts
import { ISum } from '@ddd/ddd.core';

export class Sum implements ISum {
  async sum(a: number, b: number): Promise<number> {
    return a + b;
  }
}
