import { ComponentExtendable } from "../base";
import { IOptions } from "../types";

export interface ISectionOptions extends IOptions {
    section_title: string;
    highlighted?: boolean;
    icon?: string | null;
    columns?: number | null;
}

class Section extends ComponentExtendable {
    constructor(
        options: ISectionOptions = <ISectionOptions>{},
        componentType = "Section"
    ) {
        super(options, componentType);
    }
}

export { Section };
