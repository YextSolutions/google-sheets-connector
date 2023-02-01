export function replaceCommas(str: string): string {
  let inQuotes = false;
  let result = '';

  for (let i=0; i < str.length; i++) {
    if (str[i] === '"') {
      inQuotes = !inQuotes;
    } else if (str[i] === ',' && inQuotes) {
      result += '';
    } else {
      result += str[i];
    }
  }
  return result;
}