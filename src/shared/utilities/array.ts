import { IDictionary } from '@shared/types';
import { randomNumber } from '@shared/utilities/number';

export function isArrayEmpty (arr: (string | JSON | number)[]): boolean {
  if (!arr.length) {
    return true;
  }

  return false;
}

export function uniqueArrayElements<T> (arr: T[]): T[] {
  return Array
    .from(new Set(arr.map((o) => JSON.stringify(o))))
    .map((o) => JSON.parse(o));
}

export function removeDuplicates (arr: string[]): string[] {
  return arr.filter((v, i, a) => a.indexOf(v) === i);
}

export function getLastElementFromArray<T> (arr: T[]): T {
  return arr[arr.length - 1];
}

export function randomElement<T> (arr: T[]): T {
  return arr[randomNumber(arr.length - 1)];
}

export function serializeTextArray (arr: string[]): string[] {
  return arr.filter((val) => val.trim() !== '');
}

export function findElementsNotInArray<T> (source:T[], reference: T[]): T[] {
  const referenceSet = new Set(reference);
  return source.filter((item) => !referenceSet.has(item));
}

export function convertArrayToDictionary<T> (arr: IDictionary<T>[]): IDictionary<T> {
  const dictionary = arr.reduce((acc, curr) => ({ ...acc, ...curr }), {});

  return dictionary;
}