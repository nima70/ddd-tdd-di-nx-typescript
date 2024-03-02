// ddd.test/src/lib/sum.spec.ts

import { ISum } from '@ddd/ddd.core';
import { Sum } from '@ddd/ddd.services';

describe('Sum', () => {
  it('should sum', async () => {
    const sum: ISum = new Sum();
    const result = await sum.sum(1, 2);
    expect(result).toBe(3);
  });
});
