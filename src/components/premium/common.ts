import {
    ColorScheme,
    IData,
    IComponentOptions,
    FontSize,
    HorizontalMargin,
    VerticalMargin,
    Margin,
} from "../types";

export interface IChartV2Options
    extends IComponentOptions,
        HorizontalMargin,
        VerticalMargin,
        Margin {
    data: Array<IData>;
    x_label: string;
    y_label: string;
    font_size?: FontSize;
    aspect_ratio?: number;
    color_scheme?: ColorScheme;
    chart_title?: string | null;
    caption?: string | null;
}
