import { Component } from "../base";
import {
    ColorThemeVariable,
    FontSize,
    HorizontalMargin,
    IComponentOptions,
    VerticalMargin,
} from "../types";

export interface IDataTableCell {
    data: string | number | Array<number>;
    color?: ColorThemeVariable;
    url_link?: string;
    bar_radius?: number;
    category_color: "green" | "blue" | "red" | "orange" | "yellow" | "gray";
    caption?: string;
}

export interface IDataTableOptions
    extends IComponentOptions,
        VerticalMargin,
        HorizontalMargin {
    rows: Array<Array<IDataTableCell>>;
    col_types: Array<
        "Text" | "SparkLine" | "SparkBar" | "SparkRing" | "Category" | "Button"
    >;
    headings?: Array<string>;
    title?: string;
    striped?: boolean;
    col_borders?: boolean;
    col_bg?: Array<ColorThemeVariable | null>;
    col_align?: Array<"left" | "right" | "center">;
    col_width?: Array<number | null>;
    headings_font_size?: FontSize;
    rows_font_size?: FontSize;
    table_border?: boolean;
}

class DataTable extends Component {
    constructor(options: IDataTableOptions, componentType = "Beta.DataTable") {
        super(options, componentType);
    }
}

export { DataTable };
