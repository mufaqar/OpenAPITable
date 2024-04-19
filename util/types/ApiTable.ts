export interface IOpenAPITableData {
    title: string,
    version: string,
    domain: string,
    updated: string,
    tag: string
}
export interface IOpenAPITableProps {
  MarketingSalesAPIs: IOpenAPITableData[];
  CustomerAPIs: IOpenAPITableData[];
  ProductAPIs: IOpenAPITableData[];
}
