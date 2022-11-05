import { Component } from "../base";
import { WidthType, IData, IOptions } from "../types";

export interface ILineChartOptions extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    colour_by?: string | null;
    chart_title?: string | null;
    caption?: string | null;
    width?: WidthType;
}

class LineChart extends Component {
    constructor(
        options: ILineChartOptions = <ILineChartOptions>{},
        componentType = "LineChart"
    ) {
        super(options, componentType);
    }
}

export { LineChart };
