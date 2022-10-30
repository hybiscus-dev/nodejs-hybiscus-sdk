import { Component, IComponentDefinition } from "./components/base";

interface IReportDefinition {
    type: string;
    options: Record<string, unknown>;
    config: Record<string, unknown>;
    components: Array<IComponentDefinition>;
}

interface ICloudStorage {
    s3: string | null;
    azure_blob_storage: string | null;
    google_cloud_storage: string | null;
}

interface IWebhooks {
    url: string;
    auth_header: string | null;
}

interface IReportConfig {
    colour_theme: string | null;
    typography_theme: string | null;
    override_colour_theme: Record<string, unknown>;
    cloud_storage: ICloudStorage;
    webhooks: Array<IWebhooks>;
}

class Report {
    report_title: string;
    report_byline: string;
    version_number: string;
    logo_url: string | null;
    n_pages: number;
    report_config: IReportConfig;
    components: Array<Component>;

    /**
     *
     * @param config Component config
     * @param config.reportTitle Report title
     * @param config.reportByline Report byline (optional)
     * @param config.versionNumber Report version number (optional)
     * @param config.reportConfig Report config (optional)
     * @param config.nPages Number of pages (optional)
     */
    constructor({
        report_title,
        report_byline = "",
        version_number = "",
        logo_url = null,
        n_pages = 1,
        report_config = {
            colour_theme: "default",
            typography_theme: "default",
            override_colour_theme: {},
            cloud_storage: {
                s3: null,
                azure_blob_storage: null,
                google_cloud_storage: null,
            },
            webhooks: [],
        },
    }: {
        report_title: string;
        report_byline: string;
        version_number: string;
        logo_url: string | null;
        n_pages: number;
        report_config: IReportConfig;
        components: Array<Component>;
    }) {
        this.report_title = report_title;
        this.report_byline = report_byline;
        this.version_number = version_number;
        this.logo_url = logo_url;
        this.n_pages = n_pages;
        this.report_config = report_config;
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
                report_title: this.report_title,
                report_byline: this.report_byline,
                version_number: this.version_number,
                logo_url: this.logo_url,
            },
            config: {
                n_pages: this.n_pages,
                colour_theme: this.report_config.colour_theme,
                typography_theme: this.report_config.typography_theme,
                override_colour_theme: this.report_config.override_colour_theme,
                cloud_storage: this.report_config.cloud_storage,
                webhooks: this.report_config.webhooks,
            },
            components: this.components.map((c) => c.getDefinition()),
        };
    }
}

export { Report, IReportDefinition };
