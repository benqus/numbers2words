import parse from './parse';

const [ , , number = '0' ]: Array<string> = process.argv;
const parsedNr = parseInt(number);
if (isNaN(parsedNr) || typeof parsedNr !== 'number') {
  // exception for the world to come to a screetching halt!
  throw new TypeError('Please provide a number between 0 and 100000');
}

const parsed = parse(parsedNr);
console.log(parsed);
