
import { ComponentExtendable, IComponentDefinition } from '../base';
import { WidthType } from '../types';


export default class Row extends ComponentExtendable {
    width: WidthType;
    columns: number | null;

    constructor(
        width: WidthType = null,
        columns: number | null = null
    ) {
        super("Row");
        this.width = width;
        this.columns = columns;
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {
                width: this.width,
                columns: this.columns,
            },
            components: this.components.map(c => c.getDefinition())
        };
    }
}
