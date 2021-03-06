interface IComponentDefinition {
    type: string;
    options: Record<string, unknown>;
    components?: Array<IComponentDefinition>;
}

abstract class Component {
    type: string;

    /**
     * Constructor for the component
     * @param config
     * @param config.type - Component type
     */
    constructor({ type }: { type: string }) {
        this.type = type;
    }

    abstract getDefinition(): IComponentDefinition;
}

class ComponentExtendable extends Component {
    components: Component[];

    /**
     * Constructor for ComponentExtendable
     * @param config
     * @param config.type - Component type
     */
    constructor({ type }: { type: string }) {
        super({ type });
        this.components = [];
    }

    /**
     * Generates the schema definition for the Component
     * @returns The Component schema definition
     */
    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {},
            components: [],
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
