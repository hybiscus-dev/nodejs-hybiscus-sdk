import { Component } from "../base";
import { WidthType, IData, IOptions } from "../types";

export interface ILineChartV2Options extends IOptions {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    color_scheme?: string;
    font_size?: number;
    aspect_ratio?: number;
    plot_dots?: boolean;
    chart_title?: string | null;
    caption?: string | null;
    width?: WidthType;
}

class LineChartV2 extends Component {
    constructor(
        options: ILineChartV2Options = <ILineChartV2Options>{},
        componentType = "Chart.Line"
    ) {
        super(options, componentType);
    }
}

export { LineChartV2 };
