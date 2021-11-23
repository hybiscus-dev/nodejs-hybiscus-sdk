import { Component, IComponentDefinition } from "../base";

class PageBreak extends Component {
    /**
     * PageBreak constructor
     */
    constructor() {
        super({ type: "PageBreak" });
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {},
        };
    }
}

export { PageBreak };
