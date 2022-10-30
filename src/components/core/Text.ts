import { Component } from "../base";
import { WidthType, IOptions } from "../types";

export interface ITextOptions extends IOptions {
    text: string;
    width?: WidthType;
    horizontal_margin?: number;
    vertical_margin?: number;
    align?: "left" | "centre" | "right";
    size?: "sm" | "xs" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    colour?: string | null;
    bg_colour?: string | null;
    inner_padding?: number | null;
}

class Text extends Component {

    /**
     * Text constructor
     * @param config Component config
     * @param config.text Text to add inside the component
     * @param config.width Width of the component
     */
    constructor(
        options: ITextOptions = <ITextOptions>{},
        componentType = "Text"
    ) {
        super(options, componentType);
    }
}

export { Text };
