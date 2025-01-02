export function msToTime (s: number): string {
  function pad (n: number, z = 2) {
    return `00${n}`.slice(-z);
  }

  s = (s - (s % 1000)) / 1000;
  const secs = s % 60;

  s = (s - secs) / 60;
  const mins = s % 60;

  return `${pad((s - mins) / 60)}:${pad(mins)}:${pad(secs)}`;
}
