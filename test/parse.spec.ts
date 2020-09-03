import { expect } from 'chai';
import parse from '../src/parse';

describe('parse', () => {
  describe('Numerals', () => {
    it('0', () => {
      expect(parse(0)).to.equal('zero');
    });
    
    it('9', () => {
      expect(parse(9)).to.equal('nine');
    });

    it('20', () => {
      expect(parse(20)).to.equal('twenty');
    });

    it('90', () => {
      expect(parse(90)).to.equal('ninety');
    });
  })

  describe('Tens', () => {
    it('55', () => {
      expect(parse(55)).to.equal('fifty-five');
    });
  
    it('39', () => {
      expect(parse(39)).to.equal('thirty-nine');
    });
  });

  describe('Hundreds', () => {
    it('101', () => {
      expect(parse(101)).to.equal('one hundred and one');
    });
  
    it('352', () => {
      expect(parse(352)).to.equal('three hundred and fifty-two');
    });  
  })

  describe('Thousands', () => {
    it('1000', () => {
      expect(parse(1000)).to.equal('one thousand');
    });
  
    it('4567', () => {
      expect(parse(4567)).to.equal('four thousand five hundred and sixty-seven');
    });
  
    it('9999', () => {
      expect(parse(9999)).to.equal('nine thousand nine hundred and ninety-nine');
    });
  })

  describe('Tens/Hundreds Thousands', () => {
    it('55000', () => {
      expect(parse(55000)).to.equal('fifty-five thousand');
    });
  
    it('94352', () => {
      expect(parse(94352)).to.equal('ninety-four thousand three hundred and fifty-two');
    });
  
    it('100000', () => {
      expect(parse(100000)).to.equal('one hundred thousand');
    });
  });

  describe('Out of range', () => {
    it('-1', () => {
      expect(() => parse(-1)).to.throw();
    });
  
    it('100001', () => {
      expect(() => parse(100001)).to.throw();
    });
  });

});