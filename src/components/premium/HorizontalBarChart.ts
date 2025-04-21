import { Component } from "../base";
import { IChartV2Options } from "./common";

export interface IHorizontalBarChartOptions extends IChartV2Options {
    format_x_ticks?: boolean;
    x_ticks_decimals?: number;
}

class HorizontalBarChart extends Component {
    constructor(
        options: IHorizontalBarChartOptions = <IHorizontalBarChartOptions>{},
        componentType = "Chart.HorizontalBar",
    ) {
        super(options, componentType);
    }
}

export { HorizontalBarChart };
