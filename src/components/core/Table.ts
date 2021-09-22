import { Component, IComponentDefinition } from "../base";

class Table extends Component {
    title: string | null;
    headings: Array<string>;
    rows: Array<Array<string>>;
    striped: boolean;

    /**
     * Table constructor
     * @param config Component config
     * @param config.title Table title
     * @param config.headings Table headings
     * @param config.rows Table rows
     * @param config.striped Whether table is striped
     */
    constructor({
        title,
        headings,
        rows,
        striped
    }: {
        title: string,
        headings: Array<string>,
        rows: Array<Array<string>>,
        striped: boolean,
    }) {
        super({ type: "Table" });
        this.title = title;
        this.headings = headings;
        this.rows = rows;
        this.striped = striped;
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {
                title: this.title,
                headings: this.headings,
                rows: this.rows,
                striped: this.striped,
            },
            components: this.components.map((c) => c.getDefinition()),
        };
    }
}

export { Table };
