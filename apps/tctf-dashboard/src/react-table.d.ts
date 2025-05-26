import { Row } from "react-table";

declare module "react-table" {
  export interface TableInstance<D extends object = unknown> {
    canPreviousPage: boolean;
    canNextPage: boolean;
    page: Row<D>[];
    nextPage: () => void;
    previousPage: () => void;
  }
}
