import { Component, IComponentDefinition } from "./components/base";
import { Text, Image, VerticalSpacer, Row } from "./components/core";
import {
    MarginValue,
    ColorThemeVariable,
    ColorTheme,
    TypographyTheme,
} from "./components/types";

interface ICloudStorage {
    s3?: string;
    azure_blob_storage?: string;
    google_cloud_storage?: string;
}

interface IWebhooks {
    url: string;
    auth_header: string | null;
}

interface IFontConfig {
    family?: string | null;
    weight?: string | null;
}

interface IGoogleReportsConfig {
    headings?: IFontConfig;
    paragraph?: IFontConfig;
}

interface IHighlightedColorThemeOverride {
    headline?: string | null;
    "sub-headline"?: string | null;
    accent?: string | null;
    paragraph?: string | null;
    "background-default"?: string | null;
    "background-muted"?: string | null;
    "background-subtle"?: string | null;
    "background-faded"?: string | null;
    "light-background"?: string | null;
    background?: string | null;
    highlight?: string | null;
    "highlight-text"?: string | null;
}

interface IColorThemeOverride {
    headline?: string | null;
    "sub-headline"?: string | null;
    accent?: string | null;
    paragraph?: string | null;
    "background-default"?: string | null;
    "background-muted"?: string | null;
    "background-subtle"?: string | null;
    "background-faded"?: string | null;
    "light-background"?: string | null;
    background?: string | null;
    highlight?: string | null;
    "highlight-text"?: string | null;
    "custom-1"?: string | null;
    "custom-2"?: string | null;
    "custom-3"?: string | null;
    highlighted?: IHighlightedColorThemeOverride | null;
}

interface IReportConfig {
    n_pages?: number;
    enable_multi_page?: boolean;
    enable_pagination?: boolean;
    landscape?: boolean;
    color_theme?: ColorTheme;
    colour_theme?: ColorTheme;
    typography_theme?: TypographyTheme;
    google_fonts?: IGoogleReportsConfig;
    override_color_theme?: IColorThemeOverride;
    override_colour_theme?: IColorThemeOverride;
    cloud_storage?: ICloudStorage;
    webhooks?: Array<IWebhooks>;
    enable_header?: boolean;
}

interface IReportOptions {
    report_title?: string | null;
    report_byline?: string | null;
    enable_header?: boolean;
    logo_url?: string | null;
    version_number?: string | null;
    footer_text?: string | null;
    vertical_margin?: MarginValue;
    horizontal_margin?: MarginValue;
}

interface ICoverPage {
    bg_color?: ColorThemeVariable;
    bg_image?: string | null;
    align?: "start" | "center" | "end";
    vertical_margin?: MarginValue | null;
    horizontal_margin?: MarginValue | null;
    components?: Array<IComponentDefinition>;
}
interface IReportDefinition {
    type?: string;
    options?: IReportOptions;
    config?: IReportConfig;
    cover_page?: ICoverPage | null;
    components?: Array<IComponentDefinition>;
}

class Report {
    options: IReportOptions;
    config: IReportConfig;
    cover_page?: ICoverPage;
    components: Component[];
    coverPageComponents: Component[];

    constructor(options: IReportOptions = {}, config: IReportConfig = {}) {
        this.options = options;
        this.config = config;
        this.components = [];
        this.coverPageComponents = [];
        return this;
    }

    /**
     * Adds a component to the report
     * @param component Component to add
     */
    addComponent(component: Component): Report {
        if (!this.components) return this;
        this.components.push(component);
        return this;
    }

    /**
     * Adds multiple components to the report
     * @param components Components to add to the report
     */
    addComponents(components: Array<Component>): Report {
        if (!this.components) return this;
        this.components.push(...components);
        return this;
    }

    addCoverPage(options: ICoverPage): Report {
        this.cover_page = options;
        return this;
    }
    addCoverPageComponent(
        component: Text | Image | VerticalSpacer | Row,
    ): Report {
        this.coverPageComponents.push(component);
        return this;
    }

    getDefinition(): IReportDefinition {
        if (this.cover_page) {
            this.cover_page.components = this.coverPageComponents.map((c) =>
                c.getDefinition(),
            );
        }
        const reportDefinition: IReportDefinition = {
            type: "Report",
            options: this.options,
            config: this.config,
            cover_page: this.cover_page || null,
            components: this.components?.map((c) => c.getDefinition()) || [],
        };
        return reportDefinition;
    }
}

export { Report, IReportDefinition };
