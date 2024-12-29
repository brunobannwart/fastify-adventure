export function toInteger (value: string): number {
  return parseInt(value, 10);
}

export function randomNumber (max: number): number {
  return Math.floor(Math.random() * max);
}

export function keepOnlyNumber (value: string): string {
  if (!value) return '';

  return value.replace(/\D/g, '');
}

export function formatCurrency (
  value: number,
  currency: string,
  locale = 'pt-BR'
): string {
  return value.toLocaleString(locale, {
    style: 'currency',
    currency,
  });
}