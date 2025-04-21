import { Component } from "../base";
import { IData, IComponentOptions } from "../types";

export interface IBarChartOptions extends IComponentOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    chart_title?: string | null;
    caption?: string | null;
}

class BarChart extends Component {
    constructor(
        options: IBarChartOptions = <IBarChartOptions>{},
        componentType = "BarChart",
    ) {
        super(options, componentType);
    }
}

export { BarChart };
