import { Component } from "../base";
import { IDoughnutRingData, IComponentOptions, Margin } from "../types";

export interface IDoughnutRingOptions extends IComponentOptions, Margin {
    data: Array<IDoughnutRingData>;
    chart_radius_percent?: number;
    arc_thickness_percent?: number;
    min_val?: number;
    max_val?: number;
    ticks_count?: number;
    background_ring_color?: string;
    font_size?: number;
    chart_title?: string | null;
    inside_title?: string | null;
    inside_subtitle?: string | null;
    caption?: string | null;
}

class DoughnutRing extends Component {
    constructor(
        options: IDoughnutRingOptions = <IDoughnutRingOptions>{},
        componentType = "DoughnutRing",
    ) {
        super(options, componentType);
    }
}

export { DoughnutRing };
