import { Component } from "../base";
import { IChartV2Options } from "./common";

export interface IBarChartV2Options extends IChartV2Options {
    grouped_bars?: boolean;
    format_y_ticks?: boolean;
    y_ticks_decimals?: number;
}

class BarChartV2 extends Component {
    constructor(
        options: IBarChartV2Options = <IBarChartV2Options>{},
        componentType = "Chart.Bar",
    ) {
        super(options, componentType);
    }
}

export { BarChartV2 };
