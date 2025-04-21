import { Component } from "../base";
import { ColorThemeVariable, FontSize, IComponentOptions } from "../types";

export interface ISparkChartRingOptions extends IComponentOptions {
    value: number;
    title: string;
    subtitle: string;
    title_font_size?: FontSize;
    subtitle_font_size?: FontSize;
    radius?: number;
    stroke_width?: number;
    button_link?: string;
    button_text?: string;
    border?: boolean;
    chart_color?: ColorThemeVariable;
    bg_color?: ColorThemeVariable;
}

class SparkChartRing extends Component {
    constructor(
        options: ISparkChartRingOptions = <ISparkChartRingOptions>{},
        componentType = "SparkChart.Ring",
    ) {
        super(options, componentType);
    }
}

export { SparkChartRing };
