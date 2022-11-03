import { Component } from "../base";
import { WidthType, IDoughnutRingData, IOptions } from "../types";

export interface IDoughnutRingOptions extends IOptions {
    data: Array<IDoughnutRingData>;
    margin?: number;
    chart_radius_percent?: number;
    arc_thickness_percent?: number;
    min_val?: number;
    max_val?: number;
    ticks_count?: number;
    background_ring_colour?: string;
    font_size?: number;
    inside_title?: string | null;
    inside_subtitle?: string | null;
    chart_title?: string | null;
    caption?: string | null;
    width?: WidthType;
}

class DoughnutRing extends Component {
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
    constructor(
        options: IDoughnutRingOptions = <IDoughnutRingOptions>{},
        componentType = "DoughnutRing"
    ) {
        super(options, componentType);
    }
}

export { DoughnutRing };
