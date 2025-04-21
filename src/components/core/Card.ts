import { Component } from "../base";
import { IComponentOptions, FontSize, ColorThemeVariable } from "../types";

export interface ICardOptions extends IComponentOptions {
    title: string;
    value: string | number;
    units?: string | null;
    icon?: string | null;
    title_uppercase?: boolean;
    title_size?: FontSize;
    title_color?: ColorThemeVariable;
    value_color?: ColorThemeVariable;
    bg_color?: ColorThemeVariable;
    icon_font_size?: FontSize;
    value_font_size?: FontSize;
    units_font_size?: FontSize;
    highlighted?: boolean;
}

class Card extends Component {
    constructor(
        options: ICardOptions = <ICardOptions>{},
        componentType = "Card",
    ) {
        super(options, componentType);
    }
}

export { Card };
