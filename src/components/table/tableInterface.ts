export interface ColumnProps {
  key: string;
  title: string;
  align?: string;
}

export interface FiltersProps {
  type: string;
  title: string;
  key: string;
  value?: string[] | string;
  placeholder?: string;
  className?: string;
}

export interface PaginationProps {
  active?: boolean;
  step?: boolean;
  extrem?: boolean;
  limiter?: number[];
}

export interface TableProps {
  columns: ColumnProps[];
  data: object[];
  maxData?: number;
  filters?: FiltersProps[];
  sortable?: string[];
  pagination?: PaginationProps;
}
