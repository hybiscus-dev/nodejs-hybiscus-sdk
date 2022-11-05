import { Component } from "../base";
import { WidthType, IData, IOptions } from "../types";

export interface IHorizontalBarChartOptions extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    color_scheme?: string;
    font_size?: number;
    aspect_ratio?: number;
    chart_title?: string | null;
    caption?: string | null;
    width?: WidthType;
}

class HorizontalBarChart extends Component {
    constructor(
        options: IHorizontalBarChartOptions = <IHorizontalBarChartOptions>{},
        componentType = "Chart.HorizontalBar"
    ) {
        super(options, componentType);
    }
}

export { HorizontalBarChart };
