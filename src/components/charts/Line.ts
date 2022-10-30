import { Component, IComponentDefinition } from "../base";
import { WidthType, IData } from "../types";


class LineChartv2 extends Component {
    data: Array<IData>;
    xLabel: string;
    yLabel: string;
    colorScheme: string;
    fontSize: number;
    aspectRatio: number;
    plotDots: boolean;
    chartTitle: string | null;
    caption: string | null;
    width: WidthType;

    /**
     * Line chart constructor
     * @param config Component config
     * @param config.data Data to plot in the chart
     * @param config.xLabel X-axis label
     * @param config.ylabel Y-axis label
     * @param config.colorScheme Color scheme to use to plot the data
     * @param config.fontSize The font size of the labels
     * @param config.aspectRatio Aspect ratio of the plot as a decimal
     * @param config.plotDots Whether to plot dots on the line
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
        plotDots,
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
        plotDots: boolean,
        chartTitle: string | null,
        caption: string | null,
        width: WidthType,
    }) {
        super({ type: "Chart.Line" });
        this.data = data;
        this.xLabel = xLabel;
        this.yLabel = yLabel;
        this.colorScheme = colorScheme;
        this.aspectRatio = aspectRatio;
        this.fontSize = fontSize;
        this.plotDots = plotDots;
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
                plot_dots: this.plotDots,
                chart_title: this.chartTitle,
                caption: this.caption,
                width: this.width,
            }
        };
    }
}

export { LineChartv2 };
