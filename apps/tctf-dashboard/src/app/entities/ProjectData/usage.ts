import { useTable, usePagination, useSortBy, Column, TableInstance, TableState } from "react-table";

type DataType = {
  name?: string;
  age?: number;
  status?: string;
  category?: string;
  code?: string;
  createDate?: string;
  id?: string;
  secondaryRole?: string;
  jobTitle?: string;
  role?: string;
  joindate?: string;
  projectid?: string;
};

const columns: Column<DataType>[] = [];
const data: DataType[] = [
  {
    name: "Serverless Image Processor",
    age: 25,
    status: "Active",
    category: "Serverless",
    code: "420984",
    createDate: "2021-01-01",
    id: "56",
  },
  {
    name: "Video Streaming engine",
    age: 30,
    status: "Inactive",
    category: "Data Analytics",
    code: "420985",
    createDate: "2021-02-01",
    id: "87",
  },
  {
    name: "Billing Management",
    age: 35,
    status: "Active",
    category: "Designer",
    code: "420993",
    createDate: "2021-03-01",
    id: "98",
  },
  {
    name: "Serverless Image Processor",
    age: 40,
    status: "Inactive",
    category: "Developer",
    code: "202265",
    createDate: "2021-04-01",
    id: "36",
  },
];

type TableInstanceWithPagination<T extends object> = TableInstance<T> & {
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageOptions: number[];
  nextPage: () => void;
  previousPage: () => void;
  state: TableState<T> & { pageIndex: number };
  page: T[];
};

export interface MyDataTableInterface {
  getTableProps: () => any;
  getTableBodyProps: () => any;
  headerGroups: any[];
  prepareRow: (row: any) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageOptions: number[];
  nextPage: () => void;
  previousPage: () => void;
  state: { pageIndex: number };
  page: any[];
}

const dataTableInterface: MyDataTableInterface = useTable<DataType>(
  {
    columns,
    data,
    initialState: { pageIndex: 0 } as Partial<TableState<DataType> & { pageIndex: number }>,
  },
  useSortBy,
  usePagination,
) as TableInstanceWithPagination<DataType>;

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  canPreviousPage,
  canNextPage,
  pageOptions,
  nextPage,
  previousPage,
  state: { pageIndex },
  page,
} = dataTableInterface;

console.log(getTableProps); // "a"
console.log(getTableBodyProps); // "b"
console.log(headerGroups); // "c"
console.log(prepareRow);
console.log(canPreviousPage);

console.log(canNextPage);
console.log(pageOptions);
console.log(nextPage);
console.log(previousPage);
console.log(pageIndex);
console.log(page); // This will log the current page data
