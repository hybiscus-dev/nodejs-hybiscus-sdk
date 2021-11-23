import { Component, IComponentDefinition } from "../base";


class Spacer extends Component {
    space: number;

    /**
     * Spacer constructor
     * @param config Component config
     * @param config.space Amount of vertical spacing to add
     */
    constructor({
        space,
    }: {
        space: number;
    }) {
        super({ type: "Spacer" });
        this.space = space;
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {
                space: this.space,
            }
        };
    }
}

export { Spacer };
