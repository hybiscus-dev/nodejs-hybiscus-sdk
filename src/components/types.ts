export type WidthType =
    | "1/3"
    | "2/3"
    | "1/4"
    | "2/4"
    | "3/4"
    | "1/5"
    | "2/5"
    | "3/5"
    | "4/5"
    | "1/6"
    | "2/6"
    | "3/6"
    | "4/6"
    | "5/6"
    | null;

export type FontSize =
    | "3xs"
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl";

export type ColorScheme =
    | "Category10"
    | "Accent"
    | "Dark2"
    | "Paired"
    | "Pastel1"
    | "Pastel2"
    | "Set1"
    | "Set2"
    | "Set3"
    | "Tableau10"
    | null;

export type CurveFormat =
    | "Linear"
    | "Step"
    | "Basis"
    | "StepBefore"
    | "StepAfter"
    | "Natural"
    | "Cardinal"
    | "CatmullRom"
    | "MonotoneX";

export type MarginValue =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32;

export type ColorThemeVariable =
    | "headline"
    | "sub-headline"
    | "accent"
    | "paragraph"
    | "background-default"
    | "background-muted"
    | "background-subtle"
    | "highlight"
    | "highlight-text"
    | "background"
    | "light-background"
    | "background-faded"
    | "custom-1"
    | "custom-2"
    | "custom-3";

export type ColorTheme =
    | "default"
    | "summer"
    | "forest"
    | "corporate"
    | "ember"
    | "twilight"
    | "key-lime"
    | "purples"
    | "neon"
    | "candy"
    | "electric"
    | "royal"
    | "crimson"
    | "surfboard";

export type TypographyTheme =
    | "default"
    | "geometric"
    | "slab"
    | "grotesque"
    | "jost"
    | "looped"
    | "newspaper"
    | "albert-barlow"
    | "abril-lato"
    | "fjalla-source"
    | "raleway-lora"
    | "bebas-montserrat"
    | "jakarta"
    | "ibm-plex"
    | "outfit"
    | "prompt-inter"
    | "urbanist"
    | "google-fonts";

export interface IData {
    x: string | number;
    y: number;
    label?: string | null;
    color?: string | null;
}

export interface IDoughnutRingData {
    end: number;
    start: number;
    label: string | null;
    colour: string | null;
}

export interface IComponentOptions {
    width?: WidthType;
}

export interface VerticalMargin {
    vertical_margin?: MarginValue;
}

export interface HorizontalMargin {
    horizontal_margin?: MarginValue;
}

export interface Margin {
    margin?: MarginValue;
}
