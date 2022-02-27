import { Component, IComponentDefinition } from "../base";
import { WidthType, IDoughnutRingData } from "../types";


class DoughnutRing extends Component {
    data: Array<IDoughnutRingData>;
    margin: number;
    chartRadiusPercent: number;
    arcThicknessPercent: number;
    minVal: number;
    maxVal: number;
    ticksCount: number;
    backgroundRingColour: string;
    fontSize: number;
    insideTitle: string | null;
    insideSubtitle: string | null;
    chartTitle: string | null;
    caption: string | null;
    width: WidthType;

    /**
     * Doughnut ring chart constructor
     * @param config Component config
     * @param config.data Data to plot in the chart
     * @param config.margin Margin on the chart
     * @param config.chartRadiusPercent What percent of the charting area the
     * ring occupies
     * @param config.arcThicknessPercent What percent of the chart width should
     * the thickness of the arc rings be.
     * @param config.minVal Minimum value on axis
     * @param config.maxVal Maximum value on axis
     * @param config.ticksCount Number of ticks on chart
     * @param config.backgroundRingColour Background ring colour
     * @param config.fontSize Font size in pixels
     * @param config.insideTitle Inside title
     * @param config.insideSubtitle Inside subtitle
     * @param config.chartTitle Title of the chart. Optional.
     * @param config.caption Caption to add below chart. Optional.
     * @param config.width Width of the component
     */
    constructor({
        data,
        margin = 10,
        chartRadiusPercent = 0.9,
        arcThicknessPercent = 0.33,
        minVal = 0,
        maxVal = 100,
        ticksCount = 10,
        backgroundRingColour = "#f0f0f0",
        fontSize = 12,
        insideTitle = null,
        insideSubtitle = null,
        chartTitle = null,
        caption = null,
        width = null,
    }: {
        data: Array<IDoughnutRingData>,
        margin: number,
        chartRadiusPercent: number,
        arcThicknessPercent: number,
        minVal: number,
        maxVal: number,
        ticksCount: number,
        backgroundRingColour: string,
        fontSize: number,
        insideTitle: string | null,
        insideSubtitle: string | null,
        chartTitle: string | null,
        caption: string | null,
        width: WidthType,
    }) {
        super({ type: "DoughnutRing" });
        this.data = data;
        this.margin = margin;
        this.maxVal = maxVal;
        this.minVal = minVal;
        this.chartRadiusPercent = chartRadiusPercent;
        this.arcThicknessPercent = arcThicknessPercent;
        this.ticksCount = ticksCount;
        this.backgroundRingColour = backgroundRingColour;
        this.fontSize = fontSize;
        this.insideTitle = insideTitle;
        this.insideSubtitle = insideSubtitle;
        this.chartTitle = chartTitle;
        this.caption = caption;
        this.width = width;
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {
                data: this.data,
                margin: this.margin,
                min_val: this.minVal,
                max_val: this.maxVal,
                chart_radius_percent: this.chartRadiusPercent,
                arc_thickness_percent: this.arcThicknessPercent,
                ticks_count: this.ticksCount,
                background_ring_colour: this.backgroundRingColour,
                font_size: this.fontSize,
                inside_title: this.insideTitle,
                inside_subtitle: this.insideSubtitle,
                chart_title: this.chartTitle,
                caption: this.caption,
                width: this.width,
            }
        };
    }
}

export { DoughnutRing };
