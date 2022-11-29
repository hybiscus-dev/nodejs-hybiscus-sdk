import { Component } from "../base";
import { WidthType, IData, IOptions } from "../types";

export interface IBarChartV2Options extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    color_scheme?: string;
    font_size?: number;
    aspect_ratio?: number;
    grouped_bars?: boolean;
    horizontal_margin?: number;
    vertical_margin?: number;
    margin?: number;
    chart_title?: string | null;
    caption?: string | null;
    width?: WidthType;
}

class BarChartV2 extends Component {
    constructor(
        options: IBarChartV2Options = <IBarChartV2Options>{},
        componentType = "BarChart"
    ) {
        super(options, componentType);
    }
}

export { BarChartV2 };
