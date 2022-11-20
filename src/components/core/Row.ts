import { ComponentExtendable } from "../base";
import { WidthType, IOptions } from "../types";

export interface IRowOptions extends IOptions {
    width?: WidthType;
    columns?: number | null;
    align?: "left" | "centre" | "right";
    horizontal_margin?: number;
    vertical_margin?: number;
    column_spacing?: number;
}

class Row extends ComponentExtendable {
    constructor(options: IRowOptions = <IRowOptions>{}, componentType = "Row") {
        super(options, componentType);
    }
}

export { Row };
