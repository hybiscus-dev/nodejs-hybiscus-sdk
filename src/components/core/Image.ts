import { Component } from "../base";
import { WidthType, IOptions } from "../types";

export interface IImageOptions extends IOptions {
    image_url: string | null;
    base64?: string | null;
    base64_extension?: string | null;
    width: WidthType;
    caption?: string;
    horizontal_margin?: number;
    vertical_margin?: number;
    text_size?: string;
    text_colour?: string;
    rounded?: boolean;
    bg_colour?: string;
    border_colour?: string;
    enable_border?: boolean;
}

class Image extends Component {
    constructor(
        options: IImageOptions = <IImageOptions>{},
        componentType = "Image"
    ) {
        super(options, componentType);
    }
}

export { Image };
