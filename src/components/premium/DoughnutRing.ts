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
    constructor(
        options: IDoughnutRingOptions = <IDoughnutRingOptions>{},
        componentType = "DoughnutRing"
    ) {
        super(options, componentType);
    }
}

export { DoughnutRing };
