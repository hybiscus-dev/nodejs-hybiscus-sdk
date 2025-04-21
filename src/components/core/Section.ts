import { ComponentExtendable } from "../base";
import { FontSize, IComponentOptions } from "../types";

export interface ISectionOptions extends IComponentOptions {
    section_title: string;
    columns?: number | null;
    icon?: string | null;
    highlighted?: boolean;
    column_spacing?: number;
    font_size?: FontSize;
}

class Section extends ComponentExtendable {
    constructor(
        options: ISectionOptions = <ISectionOptions>{},
        componentType = "Section",
    ) {
        super(options, componentType);
    }
}

export { Section };
