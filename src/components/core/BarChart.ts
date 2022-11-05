import { Component } from "../base";
import { WidthType, IData, IOptions } from "../types";



export interface IBarChartOptions extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    chart_title?: string | null;
    caption?: string | null;
    width?: WidthType;
}


class BarChart extends Component {
    constructor(
        options: IBarChartOptions = <IBarChartOptions>{},
        componentType = "BarChart"
    ) {
        super(options, componentType);
    }
}

export { BarChart };
