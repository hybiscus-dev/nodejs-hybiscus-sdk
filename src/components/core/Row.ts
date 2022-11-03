import { ComponentExtendable } from "../base";
import { WidthType, IOptions } from "../types";

export interface IRowOptions extends IOptions {
    width?: WidthType;
    columns?: number | null;
    align?: "left" | "centre" | "right";
}

class Row extends ComponentExtendable {

    /**
     * Row constructor
     * @param config Component config
     * @param config.width Width of the row
     * @param config.columns Number of columns to divide the section into
     * @param config.align Alignment of content within the component
     */
    constructor(options: IRowOptions = <IRowOptions>{}, componentType = "Row") {
        super(options, componentType);
    }
}

export { Row };
