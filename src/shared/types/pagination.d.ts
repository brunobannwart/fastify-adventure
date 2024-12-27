export interface IPagination<T> {
  rows: T[];
  count: number;
}

export interface ICount {
  count: number;
}

export interface ISearchParameterBase {
  offset?: number;
  orderBy?: string;
  isDESC?: boolean;
  limit?: number;
}