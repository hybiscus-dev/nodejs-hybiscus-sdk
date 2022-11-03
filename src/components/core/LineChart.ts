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

    /**
     * Line chart constructor
     * @param config Component config
     * @param config.data Data to plot in the chart
     * @param config.xLabel X-axis label
     * @param config.ylabel Y-axis label
     * @param config.colourBy Key in data object to colour line plots by.
     * Optional.
     * @param config.chartTitle Title of the chart. Optional.
     * @param config.caption Caption to add below chart. Optional.
     * @param config.width Width of the component
     */
    constructor(
        options: ILineChartOptions = <ILineChartOptions>{},
        componentType = "LineChart"
    ) {
        super(options, componentType);
    }
}

export { LineChart };
