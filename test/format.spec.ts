import { expect } from 'chai';
import format from '../src/format';

describe('format', () => {
  it('string returns string', () => {
    expect(format('hakuna matata')).to.equal('hakuna matata');
  });

  it('array returns string, insert "and" before last array item', () => {
    expect(format(['hakuna', 'matata'])).to.equal('hakuna and matata');
    expect(format(['lorem', 'ipsum', 'dolor', 'sit', 'amet'])).to.equal('lorem ipsum dolor sit and amet');
  });
});