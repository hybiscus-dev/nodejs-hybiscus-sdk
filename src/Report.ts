import { Component, IComponentDefinition } from "./components/base";

interface IReportDefinition {
    type: string;
    options: Record<string, unknown>;
    config: Record<string, unknown>;
    components: Array<IComponentDefinition>;
}

interface IReportConfig {
    colourTheme: string | null;
    typographyTheme: string | null;
    overrideColourTheme: Record<string, unknown>;
}

class Report {
    reportTitle: string;
    reportByline: string;
    versionNumber: string;
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
        nPages = 1,
        reportConfig = {
            colourTheme: "default",
            typographyTheme: "default",
            overrideColourTheme: {},
        },
    }: {
        reportTitle: string;
        reportByline: string;
        versionNumber: string;
        nPages: number;
        reportConfig: IReportConfig;
    }) {
        this.reportTitle = reportTitle;
        this.reportByline = reportByline;
        this.versionNumber = versionNumber;
        this.nPages = nPages;
        this.reportConfig = reportConfig;
        this.components = [];
        return this;
    }

    /**
     * Adds a component to the report
     * @param component Component to add
     */
    addComponent(component: Component): void {
        this.components.push(component);
    }

    /**
     * Adds multiple components to the report
     * @param components Components to add to the report
     */
    addComponents(components: Array<Component>): void {
        this.components.push(...components);
    }
    
    getDefinition(): IReportDefinition {
        return {
            type: "Report",
            options: {
                report_title: this.reportTitle,
                report_byline: this.reportByline,
                version_number: this.versionNumber,
            },
            config: {
                n_pages: 1,
                colour_theme: this.reportConfig.colourTheme,
                typography_theme: this.reportConfig.typographyTheme,
                override_colour_theme: this.reportConfig.overrideColourTheme,
            },
            components: this.components.map((c) => c.getDefinition()),
        };
    }
}

export { Report, IReportDefinition };
