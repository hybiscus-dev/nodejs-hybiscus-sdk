
import { ComponentExtendable, IComponentDefinition } from '../base';


export default class Section extends ComponentExtendable {
    sectionTitle: string;
    highlighted = false;
    icon: string | null;
    columns: number | null;

    constructor(
        sectionTitle: string,
        highlighted = false,
        icon: string | null = null,
        columns: number | null = null
    ) {
        super("Section");
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
            components: this.components.map(c => c.getDefinition())
        };
    }
}
