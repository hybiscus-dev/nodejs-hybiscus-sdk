import { Component, IComponentDefinition } from "../base";
import { WidthType, IData } from "../types";


class LineChart extends Component {
    data: Array<IData>;
    xLabel: string;
    yLabel: string;
    colourBy: string | null;
    chartTitle: string | null;
    caption: string | null;
    width: WidthType;

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
    constructor({
        data,
        xLabel,
        yLabel,
        colourBy = null,
        chartTitle = null,
        caption = null,
        width = null,
    }: {
        data: Array<IData>,
        xLabel: string,
        yLabel: string,
        colourBy: string | null,
        chartTitle: string | null,
        caption: string | null,
        width: WidthType,
    }) {
        super({ type: "LineChart" });
        this.data = data;
        this.xLabel = xLabel;
        this.yLabel = yLabel;
        this.colourBy = colourBy;
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
                colour_by: this.colourBy,
                chart_title: this.chartTitle,
                caption: this.caption,
                width: this.width,
            },
            components: this.components.map((c) => c.getDefinition()),
        };
    }
}

export { LineChart };
