import { Component } from "../base";
import { IOptions } from "../types";

export interface IVerticalSpacerOptions extends IOptions {
    space: number;
}

class VerticalSpacer extends Component {
    constructor(
        options: IVerticalSpacerOptions = <IVerticalSpacerOptions>{},
        componentType = "VerticalSpacer"
    ) {
        super(options, componentType);
    }
}

export { VerticalSpacer };
