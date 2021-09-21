import { ComponentExtendable, IComponentDefinition } from "../base";
import { WidthType } from "../types";


class Row extends ComponentExtendable {
    width: WidthType;
    columns: number | null;

    /**
     * Row constructor
     * @param config Component config
     * @param config.width Width of the row
     * @param config.columns Number of columns to divide the section into
     */
    constructor({
        width = null,
        columns = null,
    }: {
        width: WidthType;
        columns: number | null;
    }) {
        super({ type: "Row" });
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
            components: this.components.map((c) => c.getDefinition()),
        };
    }
}

export { Row };
