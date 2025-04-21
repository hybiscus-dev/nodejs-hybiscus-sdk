import { ComponentExtendable } from "../base";
import { IComponentOptions } from "../types";

export interface IRowOptions extends IComponentOptions {
    columns?: number | null;
    align?: "left" | "centre" | "center" | "right";
    column_spacing?: number;
}

class Row extends ComponentExtendable {
    constructor(options: IRowOptions = <IRowOptions>{}, componentType = "Row") {
        super(options, componentType);
    }
}

export { Row };
