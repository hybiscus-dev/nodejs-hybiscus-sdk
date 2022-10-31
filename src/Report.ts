import { Component, IComponentDefinition } from "./components/base";



interface ICloudStorage {
    s3?: string;
    azure_blob_storage?: string;
    google_cloud_storage?: string;
}

interface IWebhooks {
    url: string;
    auth_header: string | null;
}

interface IReportOptions {
    report_title: string;
    logo_url?: string;
    report_byline?: string;
    version_number?: string;
    enable_header?: boolean;
}

interface IReportDefinition {
    type: string;
    options: IReportOptions;
    config: IReportConfig;
    components: Array<IComponentDefinition>;
}

interface IReportConfig {
    n_pages?: number;
    enable_header?: boolean;
    colour_theme?: string;
    landscape?: boolean;
    typography_theme?: string;
    enable_pagination?: boolean;
    override_colour_theme?: Record<string, unknown>;
    cloud_storage: ICloudStorage;
    webhooks: Array<IWebhooks>;
}

class Report {
    options: IReportOptions;
    config: IReportConfig;
    components: Component[];

    constructor(
        options: IReportOptions = <IReportOptions>{},
        config: IReportConfig = <IReportConfig>{}
    ) {
        this.options = options;
        this.config = config;
        this.components = [];
        return this;
    }

    /**
     * Adds a component to the report
     * @param component Component to add
     */
    addComponent(component: Component): Report {
        this.components.push(component);
        return this;
    }

    /**
     * Adds multiple components to the report
     * @param components Components to add to the report
     */
    addComponents(components: Array<Component>): Report {
        this.components.push(...components);
        return this;
    }

    getDefinition(): IReportDefinition {
        return {
            type: "Report",
            options: {
                ...this.options,
            },
            config: {
                ...this.config,
            },
            components: this.components.map((c) => c.getDefinition()),
        };
    }
}

export { Report, IReportDefinition };
