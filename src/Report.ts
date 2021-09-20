import { Component, IComponentDefinition } from './components/base';


interface IReportDefinition {
    type: string,
    options: Record<string, unknown>,
    config: Record<string, unknown>,
    components: Array<IComponentDefinition>
}


class Report {
    reportTitle: string;
    reportByline: string;
    versionNumber: string;
    nPages: number;
    components: Array<Component>;

    constructor(
        reportTitle: string,
        reportByline = "",
        versionNumber = "",
        nPages = 1
    ) {
        this.reportTitle = reportTitle;
        this.reportByline = reportByline;
        this.versionNumber = versionNumber;
        this.nPages = nPages;
        this.components = [];
        return this;
    }

    addComponent(component: Component): void {
        this.components.push(component)
    }

    addComponents(components: Array<Component>): void {
        this.components.push(...components)
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
                colour_theme: 'default',
                typography_theme: 'default'
            },
            components: this.components.map(c => c.getDefinition())
        };
    }
}

export { Report, IReportDefinition };
