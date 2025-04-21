import { Component } from "../base";
import {
    IComponentOptions,
    ColorThemeVariable,
    FontSize,
    VerticalMargin,
    HorizontalMargin,
} from "../types";

export interface ITableCell {
    content: string;
    col_span?: number;
    col_bg?: ColorThemeVariable;
    col_align?: "left" | "centre" | "center" | "right";
    valign?: "top" | "middle" | "bottom";
}

export interface ITableOptions
    extends IComponentOptions,
        VerticalMargin,
        HorizontalMargin {
    rows: Array<Array<string | ITableCell>>;
    title?: string | null;
    headings?: Array<string | ITableCell>;
    striped?: boolean;
    table_border?: boolean;
    col_border?: boolean;
    rows_font_size?: FontSize;
    headings_font_size?: FontSize;
    rows_vertical_padding?: number;
    headings_vertical_padding?: number;
    col_align?: Array<"left" | "centre" | "center" | "right">;
    col_width?: Array<number>;
    col_bg?: Array<ColorThemeVariable>;
}

class Table extends Component {
    constructor(
        options: ITableOptions = <ITableOptions>{},
        componentType = "Table",
    ) {
        super(options, componentType);
    }
}

export { Table };
