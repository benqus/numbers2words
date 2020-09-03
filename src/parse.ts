import NUMERALS from './numerals';
import format from './format';

function getTens(number): string {
  const tens = Math.floor(number / 10) * 10;
  const words = [NUMERALS[tens]];
  const num = number - tens;
  if (num > 0) {
    words.push(NUMERALS[num]);
  }

  return words.join('-');
}

function getHundreds(n: number): Array<string> {
  const hundreds = Math.floor(n / 100);
  const remainder = n - (hundreds * 100);
  const words = [`${NUMERALS[hundreds]} hundred`];
  if (remainder > 0) {
    return words.concat(parse(remainder));
  }
  return words;
}

function getThousands(n: number): Array<string> {
  const thousands = Math.floor(n / 1000);
  const remainder = n - (thousands * 1000);
  const word = NUMERALS[thousands] || getTens(thousands) || getHundreds(thousands)
  const words = [`${word} thousand`];
  if (remainder > 0) {
    return words.concat(parse(remainder));
  }
  return words;
}

function parse(n: number): Array<string>;
function parse(n: number): string;
function parse(n: number = 0): any {
  if (NUMERALS[n]) return NUMERALS[n];
  if (n < 100) return getTens(n);
  if (n < 1000) return getHundreds(n);
  if (n < 1000000) return getThousands(n);
}

export default function (n: number = 0): string {
  if (n < 0 || n > 100000) {
    throw new Error('Number out of range');
  }
  return format(parse(n));
}
