import { Component } from "../base";
import {
    IComponentOptions,
    MarginValue,
    FontSize,
    ColorThemeVariable,
    VerticalMargin,
    HorizontalMargin,
} from "../types";

export interface ITextOptions
    extends IComponentOptions,
        VerticalMargin,
        HorizontalMargin {
    text: string;
    align?: "left" | "centre" | "center" | "right";
    size?: FontSize;
    color?: ColorThemeVariable;
    bg_color?: ColorThemeVariable;
    inner_padding?:
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16
        | 17;
    markdown_format?: boolean;
    align_list?: boolean;
    headings_margin?: MarginValue;
}

class Text extends Component {
    constructor(
        options: ITextOptions = <ITextOptions>{},
        componentType = "Text",
    ) {
        super(options, componentType);
    }
}

export { Text };
