import { Component } from "../base";
import { WidthType, IData, IOptions } from "../types";

export interface IBarCharOptions extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    chart_title: string | null;
    caption: string | null;
    width: WidthType;
}
class BarChart extends Component {

    /**
     * Bar chart constructor
     * @param config Component config
     * @param config.data Data to plot in the chart
     * @param config.xLabel X-axis label
     * @param config.ylabel Y-axis label
     * @param config.chartTitle Title of the chart. Optional.
     * @param config.caption Caption to add below chart. Optional.
     * @param config.width Width of the component
     */
    constructor(
        options: IBarCharOptions = <IBarCharOptions>{},
        componentType = "BarChart"
    ) {
        super(options, componentType);
    }
}

export { BarChart };
