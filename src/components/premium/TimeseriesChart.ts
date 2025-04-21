import { Component } from "../base";
import { CurveFormat } from "../types";
import { IChartV2Options } from "./common";

export interface ITimeseriesChartOptions extends IChartV2Options {
    time_format?: string;
    tick_format?: string;
    plot_dots?: boolean;
    curve_format?: CurveFormat;
    format_y_ticks?: boolean;
    y_ticks_decimals?: number;
}

class TimeseriesChart extends Component {
    constructor(
        options: ITimeseriesChartOptions = <ITimeseriesChartOptions>{},
        componentType = "Chart.Timeseries",
    ) {
        super(options, componentType);
    }
}

export { TimeseriesChart };
