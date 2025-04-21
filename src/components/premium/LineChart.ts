import { Component } from "../base";
import { CurveFormat } from "../types";
import { IChartV2Options } from "./common";

export interface ILineChartV2Options extends IChartV2Options {
    plot_dots?: boolean;
    curve_format?: CurveFormat;
    format_y_ticks?: boolean;
    y_ticks_decimals?: number;
}

class LineChartV2 extends Component {
    constructor(
        options: ILineChartV2Options = <ILineChartV2Options>{},
        componentType = "Chart.Line",
    ) {
        super(options, componentType);
    }
}

export { LineChartV2 };
