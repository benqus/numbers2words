function format(words: Array<string>): string;
function format(words: string): string;
function format(words: any): string {
  if (Array.isArray(words)) {
    if (words.length > 1) {
      const last: string = words.pop();
      words.push(`and ${last}`);
    }
    return words.join(' ');
  }
  return words;
}

export default format;