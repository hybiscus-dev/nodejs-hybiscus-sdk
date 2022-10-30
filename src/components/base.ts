import { IOptions } from "./types";

interface IComponentDefinition {
    type: string;
    options: IOptions;
    components?: Array<IComponentDefinition>;
}

abstract class Component {
    componentType: string;
    options: IOptions;

    /**
     * Constructor for the component
     * @param config
     * @param config.type - Component type
     */
    constructor(options: IOptions, componentType: string) {
        this.componentType = componentType;
        this.options = options;
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.componentType,
            options: {
                ...this.options,
            },
        };
    }
}

class ComponentExtendable extends Component {
    components: Component[];

    /**
     * Constructor for ComponentExtendable
     * @param config
     * @param config.type - Component type
     */
    constructor(options: IOptions, componentType: string) {
        super(options, componentType);
        this.components = [];
    }

    /**
     * Generates the schema definition for the Component
     * @returns The Component schema definition
     */
    getDefinition(): IComponentDefinition {
        return {
            type: this.componentType,
            options: {
                ...this.options,
            },
            components: this.components.map(c => c.getDefinition()),
        };
    }

    /**
     * Adds a Component to be rendered inside this component
     * @param component Instance of `components.base.Component`
     */
    addComponent(component: Component): ComponentExtendable {
        this.components.push(component);
        return this;
    }

    /**
     * Adds mulitple Components to be rendered inside this component
     * @param component Instance of `components.base.Component`
     */
    addComponents(components: Array<Component>): ComponentExtendable {
        this.components.push(...components);
        return this;
    }
}

export { Component, ComponentExtendable, IComponentDefinition };
