import { Component, IComponentDefinition } from "./components/base";

interface IReportDefinition {
    type: string;
    options: Record<string, unknown>;
    config: Record<string, unknown>;
    components: Array<IComponentDefinition>;
}

interface ICloudStorage {
    s3: string | null;
    azureBlobStorage: string | null;
    googleCloudStorage: string | null;
}

interface IWebhooks {
    url: string;
    authHeader: string | null;
}

interface IReportConfig {
    colourTheme: string | null;
    typographyTheme: string | null;
    overrideColourTheme: Record<string, unknown>;
    cloudStorage: ICloudStorage;
    webhooks: Array<IWebhooks>;
}

class Report {
    reportTitle: string;
    reportByline: string;
    versionNumber: string;
    logoUrl: string | null;
    nPages: number;
    reportConfig: IReportConfig;
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
        reportTitle,
        reportByline = "",
        versionNumber = "",
        logoUrl = null,
        nPages = 1,
        reportConfig = {
            colourTheme: "default",
            typographyTheme: "default",
            overrideColourTheme: {},
            cloudStorage: {
                s3: null,
                azureBlobStorage: null,
                googleCloudStorage: null,
            },
            webhooks: []
        },
    }: {
        reportTitle: string;
        reportByline?: string;
        versionNumber?: string;
        logoUrl?: string | null;
        nPages?: number;
        reportConfig?: IReportConfig;
    }) {
        this.reportTitle = reportTitle;
        this.reportByline = reportByline;
        this.versionNumber = versionNumber;
        this.logoUrl = logoUrl;
        this.nPages = nPages;
        this.reportConfig = reportConfig;
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
                report_title: this.reportTitle,
                report_byline: this.reportByline,
                version_number: this.versionNumber,
                logo_url: this.logoUrl,
            },
            config: {
                n_pages: this.nPages,
                colour_theme: this.reportConfig.colourTheme,
                typography_theme: this.reportConfig.typographyTheme,
                override_colour_theme: this.reportConfig.overrideColourTheme,
                cloud_storage: {
                    s3: this.reportConfig.cloudStorage.s3,
                    azure_blob_storage:
                        this.reportConfig.cloudStorage.azureBlobStorage,
                    google_cloud_storage:
                        this.reportConfig.cloudStorage.googleCloudStorage,
                },
                webhooks: this.reportConfig.webhooks
            },
            components: this.components.map((c) => c.getDefinition()),
        };
    }
}

export { Report, IReportDefinition };
