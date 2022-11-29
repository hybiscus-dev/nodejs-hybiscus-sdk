import { Component } from "../base";
import { WidthType, CurveFormat, ColorScheme, IData, IOptions } from "../types";

export interface ILineChartV2Options extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    color_scheme?: ColorScheme;
    font_size?: number;
    curve_format?: CurveFormat;
    horizontal_margin?: number;
    vertical_margin?: number;
    margin?: number;
    aspect_ratio?: number;
    plot_dots?: boolean;
    chart_title?: string | null;
    caption?: string | null;
    width?: WidthType;
}

class LineChartV2 extends Component {
    constructor(
        options: ILineChartV2Options = <ILineChartV2Options>{},
        componentType = "Chart.Line"
    ) {
        super(options, componentType);
    }
}

export { LineChartV2 };
