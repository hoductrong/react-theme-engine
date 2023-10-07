export function flatObject<T extends Object>(arg: T): Record<string, string> {
  const result: Record<string, string> = {};

  Object.entries(arg).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(flatObject(value)).forEach(
        ([nestedKey, nestedValue]) => {
          result[`${key}-${nestedKey}`] = nestedValue;
        }
      );
    } else {
      result[key] = value as string;
    }
  });

  return result;
};