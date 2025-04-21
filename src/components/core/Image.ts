import { Component } from "../base";
import {
    IComponentOptions,
    FontSize,
    VerticalMargin,
    HorizontalMargin,
    ColorThemeVariable,
} from "../types";

export interface IImageOptions
    extends IComponentOptions,
        VerticalMargin,
        HorizontalMargin {
    image_url: string | null;
    link_url?: string | null;
    base64?: string | null;
    base64_extension?: string | null;
    caption?: string | null;
    text_size?: FontSize;
    text_color?: ColorThemeVariable;
    bg_color?: ColorThemeVariable;
    border_color?: ColorThemeVariable;
    enable_border?: boolean;
}

class Image extends Component {
    constructor(
        options: IImageOptions = <IImageOptions>{},
        componentType = "Image",
    ) {
        super(options, componentType);
    }
}

export { Image };
