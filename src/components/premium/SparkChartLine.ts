import { Component } from "../base";
import { ColorThemeVariable, FontSize, IComponentOptions } from "../types";

export interface ISparkChartLineOptions extends IComponentOptions {
    data: Array<number>;
    title: string;
    subtitle: string;
    title_font_size?: FontSize;
    subtitle_font_size?: FontSize;
    aspect_ratio?: number;
    chart_height?: number;
    perc_change?: "-" | "+" | null;
    perc_diff?: number;
    button_link?: string;
    button_text?: string;
    border?: boolean;
    chart_color?: ColorThemeVariable;
    bg_color?: ColorThemeVariable;
}

class SparkChartLine extends Component {
    constructor(
        options: ISparkChartLineOptions = <ISparkChartLineOptions>{},
        componentType = "SparkChart.Line",
    ) {
        super(options, componentType);
    }
}

export { SparkChartLine };
