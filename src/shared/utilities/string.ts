import slugify from 'slugify';

slugify.extend({ '.': '-' });
slugify.extend({ '/': '-' });
slugify.extend({ '\\': '-' });

export function decodeBase64 (base64: string): string {
  const buffer = Buffer.from(base64, 'base64');
  return buffer.toString('ascii');
}

export function encodeBase64 (data: string): string {
  const buffer = Buffer.from(data, 'ascii');
  return buffer.toString('base64');
}

export function removeSpecialCharacters (data: string): string {
  if (!data) return '';

  return data
    .replace(/[^A-Za-z0-9]/g, '')
    .replace(/\/s/g, '');
}

export function isBlank (str: string): boolean {
  if (!str || /^\s*$/.test(str)) return true;

  return false;
}

export function keepOnlyText (text: string): string {
  if (!text) return '';

  return text.replace(/[^A-Za-z\s]/g, '');
}

export function normalize (text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function normalizeText (text: string, search: string | RegExp, replace: string): string {
  return text.replace(search, replace);
}

export function getFirstWordFromText (text: string) {
  const words = text.split(' ');
  const [ firstWord ] = words;
  return firstWord;
}

export function getLastWordFromText (text: string) {
  const words = text.split(' ');
  const lastWord = words[words.length - 1];
  return lastWord;
}

export function slug (text = '', replacement = '-', lower = true) {
  return slugify(text, { lower, replacement, strict: true });
}
