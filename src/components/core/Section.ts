import { ComponentExtendable } from "../base";
import { IOptions } from "../types";

export interface ISectionOptions extends IOptions {
    section_title: string;
    highlighted: boolean;
    icon: string | null;
    columns: number | null;
}

class Section extends ComponentExtendable {
    /**
     *
     * @param config Component config
     * @param config.sectionTitle Section title
     * @param config.highlighted Whether the section is highlighted
     * @param config.icon Section icon
     * @param config.columns Number of columns to divide the section into
     */
    constructor(
        options: ISectionOptions = <ISectionOptions>{},
        componentType = "Section"
    ) {
        super(options, componentType);
    }
}

export { Section };
