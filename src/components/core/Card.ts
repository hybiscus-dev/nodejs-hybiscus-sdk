import { Component, IComponentDefinition } from "../base";
import { WidthType } from "../types";


class Card extends Component {
    title: string;
    value: string | number;
    units: string;
    icon: string | null;
    highlighted: boolean;
    width: WidthType;

    /**
     * Card constructor
     * @param config Component config
     * @param config.title Card title
     * @param config.value Card value
     * @param config.units Card units
     * @param config.icon Card icon
     * @param config.highlighted Whether the Card is highlighted
     * @param config.width Width of the card
     */
    constructor({
        title,
        value,
        units,
        icon,
        width = null,
        highlighted = false,
    }: {
        title: string;
        value: string | number;
        units: string;
        icon: string | null;
        highlighted: boolean;
        width: WidthType;
    }) {
        super({ type: "Card" });
        this.title = title;
        this.value = value;
        this.units = units;
        this.icon = icon;
        this.width = width;
        this.highlighted = highlighted;
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {
                title: this.title,
                value: this.value,
                units: this.units,
                icon: this.icon,
                width: this.width,
                highlighted: this.highlighted,
            },
            components: this.components.map((c) => c.getDefinition()),
        };
    }
}

export { Card };
