import { Component } from "../base";
import { WidthType, IData, IOptions } from "../types";

export interface IScatterChartOptions extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    colour_by: string | null;
    chart_title: string | null;
    caption: string | null;
    width: WidthType;
}

class ScatterChart extends Component {

    /**
     * Scatter chart constructor
     * @param config Component config
     * @param config.data Data to plot in the chart
     * @param config.xLabel X-axis label
     * @param config.ylabel Y-axis label
     * @param config.colourBy Key in `data` to objects to use to colour each
     * point by. Optional.
     * @param config.chartTitle Title of the chart. Optional.
     * @param config.caption Caption to add below chart. Optional.
     * @param config.width Width of the component
     */

    constructor(
        options: IScatterChartOptions = <IScatterChartOptions>{},
        componentType = "ScatterChart"
    ) {
        super(options, componentType);
    }
}

export { ScatterChart };
