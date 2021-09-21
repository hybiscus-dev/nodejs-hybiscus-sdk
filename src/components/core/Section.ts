import { ComponentExtendable, IComponentDefinition } from "../base";

class Section extends ComponentExtendable {
    sectionTitle: string;
    highlighted = false;
    icon: string | null;
    columns: number | null;

    /**
     * 
     * @param config Component config
     * @param config.sectionTitle Section title
     * @param config.highlighted Whether the section is highlighted
     * @param config.icon Section icon
     * @param config.columns Number of columns to divide the section into
     */
    constructor({
        sectionTitle,
        highlighted = false,
        icon = null,
        columns = null,
    }: {
        sectionTitle: string;
        highlighted: boolean;
        icon: string | null;
        columns: number | null;
    }) {
        super({ type: "Section" });
        this.sectionTitle = sectionTitle;
        this.highlighted = highlighted;
        this.icon = icon;
        this.columns = columns;
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {
                section_title: this.sectionTitle,
                highlighted: this.highlighted,
                icon: this.icon,
                columns: this.columns,
            },
            components: this.components.map((c) => c.getDefinition()),
        };
    }
}

export { Section };
