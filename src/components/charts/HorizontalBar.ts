import { Component } from "../base";
import { WidthType, IData, IOptions } from "../types";

export interface IHorizontalBarChartOptions extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    color_scheme: string;
    font_size: number;
    aspect_ratio: number;
    chart_title: string | null;
    caption: string | null;
    width: WidthType;
}

class HorizontalBarChart extends Component {
    /**
     * Horizontal bar chart constructor
     * @param config Component config
     * @param config.data Data to plot in the chart
     * @param config.xLabel X-axis label
     * @param config.ylabel Y-axis label
     * @param config.colorScheme Color scheme to use to plot the data
     * @param config.fontSize The font size of the labels
     * @param config.aspectRatio Aspect ratio of the plot as a decimal
     * @param config.chartTitle Title of the chart. Optional.
     * @param config.caption Caption to add below chart. Optional.
     * @param config.width Width of the component
     */
    constructor(
        options: IHorizontalBarChartOptions = <IHorizontalBarChartOptions>{},
        componentType = "Chart.HorizontalBar"
    ) {
        super(options, componentType);
    }
}

export { HorizontalBarChart };
