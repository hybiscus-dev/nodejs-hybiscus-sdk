import { Component } from "../base";
import { IData, IComponentOptions } from "../types";

export interface IScatterChartOptions extends IComponentOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    chart_title?: string | null;
    caption?: string | null;
    radius?: number | null;
    colour_by?: string | null;
}

class ScatterChart extends Component {
    constructor(
        options: IScatterChartOptions = <IScatterChartOptions>{},
        componentType = "ScatterChart",
    ) {
        super(options, componentType);
    }
}

export { ScatterChart };
