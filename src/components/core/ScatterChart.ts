import { Component, IComponentDefinition } from "../base";
import { WidthType, IData } from "../types";


class ScatterChart extends Component {
    data: Array<IData>;
    xLabel: string;
    yLabel: string;
    colourBy: string | null;
    chartTitle: string | null;
    caption: string | null;
    width: WidthType;

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
        chartTitle: string | null,
        colourBy: string | null,
        caption: string | null,
        width: WidthType,
    }) {
        super({ type: "ScatterChart" });
        this.data = data;
        this.xLabel = xLabel;
        this.yLabel = yLabel;
        this.chartTitle = chartTitle;
        this.colourBy = colourBy;
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
                chart_title: this.chartTitle,
                colour_by: this.colourBy,
                caption: this.caption,
                width: this.width,
            }
        };
    }
}

export { ScatterChart };
