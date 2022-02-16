import { Component, IComponentDefinition } from "../base";
import { WidthType, IData } from "../types";


class HorizontalBarChart extends Component {
    data: Array<IData>;
    xLabel: string;
    yLabel: string;
    colorScheme: string;
    fontSize: number;
    aspectRatio: number;
    chartTitle: string | null;
    caption: string | null;
    width: WidthType;

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
    constructor({
        data,
        xLabel,
        yLabel,
        colorScheme,
        fontSize,
        aspectRatio,
        chartTitle = null,
        caption = null,
        width = null,
    }: {
        data: Array<IData>,
        xLabel: string,
        yLabel: string,
        colorScheme: string,
        fontSize: number,
        aspectRatio: number,
        chartTitle: string | null,
        caption: string | null,
        width: WidthType,
    }) {
        super({ type: "Chart.HorizontalBar" });
        this.data = data;
        this.xLabel = xLabel;
        this.yLabel = yLabel;
        this.colorScheme = colorScheme;
        this.aspectRatio = aspectRatio;
        this.fontSize = fontSize;
        this.chartTitle = chartTitle;
        this.caption = caption;
        this.width = width;
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {
                data: this.data,
                x_label: this.xLabel,
                y_label: this.yLabel,
                color_scheme: this.colorScheme,
                font_size: this.fontSize,
                aspect_ratio: this.aspectRatio,
                chart_title: this.chartTitle,
                caption: this.caption,
                width: this.width,
            }
        };
    }
}

export { HorizontalBarChart };
