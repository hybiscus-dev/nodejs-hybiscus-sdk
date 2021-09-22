import { Component, IComponentDefinition } from "../base";
import { WidthType } from "../types";


class Text extends Component {
    text: string;
    width: WidthType;

    /**
     * Text constructor
     * @param config Component config
     * @param config.text Text to add inside the component
     * @param config.width Width of the component
     */
    constructor({
        text,
        width = null,
    }: {
        text: string;
        width: WidthType;
    }) {
        super({ type: "Text" });
        this.text = text;
        this.width = width;
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {
                text: this.text,
                width: this.width,
            },
            components: this.components.map((c) => c.getDefinition()),
        };
    }
}

export { Text };
