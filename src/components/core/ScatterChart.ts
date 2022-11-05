import { Component } from "../base";
import { WidthType, IData, IOptions } from "../types";

export interface IScatterChartOptions extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    colour_by?: string | null;
    chart_title?: string | null;
    caption?: string | null;
    width?: WidthType;
}

class ScatterChart extends Component {
    constructor(
        options: IScatterChartOptions = <IScatterChartOptions>{},
        componentType = "ScatterChart"
    ) {
        super(options, componentType);
    }
}

export { ScatterChart };
