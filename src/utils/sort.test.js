import sortNum from './sort.js';

describe('sort: sorts an array of numbers', () => {
  describe('sorting the numbers', () => {
    it('sorts an empty array', () => {
      expect(sortNum([], true)).toEqual([]);
    });
    it('sorts from smallest to largest', () => {
      expect(sortNum([4, 2, 3, 1], true)).toEqual([1, 2, 3, 4]);
    });
    it('sorts from smallest to largest (by default)', () => {
      expect(sortNum([5, 7, 2])).toEqual([2, 5, 7]);
    });
    it('can sort from largest to smallest', () => {
      expect(sortNum([5, -3, 7, 2], false)).toEqual([7, 5, 2, -3]);
    });
  });
  describe('avoiding side-effects', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = sortNum(arg);
      expect(arg !== returned).toEqual(true);
    });
    it('does not modify the argument when sorting up', () => {
      const arg = [3, 1, 2];
      sortNum(arg);
      expect(arg).toEqual([3, 1, 2]);
    });
    it('does not modify the argument when sorting down', () => {
      const arg = [3, 1, 2];
      sortNum(arg, false);
      expect(arg).toEqual([3, 1, 2]);
    });
  });
});