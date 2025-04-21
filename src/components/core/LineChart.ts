import { Component } from "../base";
import { IData, IComponentOptions } from "../types";

export interface ILineChartOptions extends IComponentOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    chart_title?: string | null;
    caption?: string | null;
    colour_by?: string | null;
}

class LineChart extends Component {
    constructor(
        options: ILineChartOptions = <ILineChartOptions>{},
        componentType = "LineChart",
    ) {
        super(options, componentType);
    }
}

export { LineChart };
