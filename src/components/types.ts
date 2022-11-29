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
    | "MonotoneX"
    | null;

export interface IData {
    x: string | number;
    y: number;
    [key: string]: string | number | null;
}

export interface IDoughnutRingData {
    end: number;
    start: number;
    label: string | null;
    colour: string | null;
}

export type IOptions = Record<string, unknown>;
