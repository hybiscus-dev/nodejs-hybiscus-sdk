import { Component } from "../base";
import { WidthType, IOptions } from "../types";

export interface ICellDescription {
    content: string;
    col_span: number;
    col_align: string;
}

export interface RowCellDescription extends ICellDescription {
    col_bg: string;
}

export interface ITableOptions extends IOptions {
    title: string | null;
    headings: Array<string | ICellDescription>;
    width?: WidthType;
    rows: Array<Array<string | RowCellDescription>>;
    striped?: boolean;
    table_border?: boolean;
    horizontal_margin?: number;
    vertical_margin?: number;
    col_border?: boolean;
    col_align?: string[];
    col_width?: number[];
    col_bg?: string[];
}

class Table extends Component {
    constructor(
        options: ITableOptions = <ITableOptions>{},
        componentType = "Table"
    ) {
        super(options, componentType);
    }
}

export { Table };
