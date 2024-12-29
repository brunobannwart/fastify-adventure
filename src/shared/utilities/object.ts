import { DataType } from '@shared/enum';
import { logError } from '@shared/logging/local';
import { IDictionary } from '@shared/types';

export function parseByDataType (
  data: string,
  type: DataType
): string | number | boolean {
  if (type === DataType.STRING) {
    return data;
  }

  if (type === DataType.NUMBER) {
    return Number(data);
  }

  if (type === DataType.BOOLEAN) {
    return data === 'true';
  }

  if (type === DataType.ARRAY) {
    return JSON.parse(data);
  }

  if (type === DataType.OBJECT) {
    return JSON.parse(data);
  }
}

export function overshadowRecursively (data: Record<string, unknown>, sensitiveKeys: string[]) {
  const toOvershadow = Object.assign({}, data);

  Object
    .keys(data)
    .filter(key => data[key])
    .forEach((key) => {
      if (typeof data[key] === 'object') {
        toOvershadow[key] = overshadowRecursively(data[key] as Record<string, unknown>, sensitiveKeys);
      } else if (sensitiveKeys.includes(key)) {
        toOvershadow[key] = '*******';
      } else {
        toOvershadow[key] = data[key];
      }
    });

  return toOvershadow;
}

export function tryToJSON (raw: string): IDictionary {
  let response = null;

  try {
    response = JSON.parse(raw);
  } catch (err) {
    if (err instanceof Error) {
      logError(err.message);
    }
  }

  return response;
}