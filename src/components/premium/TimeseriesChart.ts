import { Component } from "../base";
import { WidthType, CurveFormat, ColorScheme, IData, IOptions } from "../types";

export interface ITimeseriesChartOptions extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    color_scheme?: ColorScheme;
    font_size?: number;
    time_format?: string;
    tick_format?: string;
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

class TimeseriesChart extends Component {
    constructor(
        options: ITimeseriesChartOptions = <ITimeseriesChartOptions>{},
        componentType = "Chart.Timeseries"
    ) {
        super(options, componentType);
    }
}

export { TimeseriesChart };
