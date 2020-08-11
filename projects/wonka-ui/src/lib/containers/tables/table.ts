export interface TableColumnItem {
    columnName: string;
    width?: number;
}

export interface TableItem {
    id: string;
    tableHeader: string;
    cols: TableColumnItem[];
    data: string[][];
}
