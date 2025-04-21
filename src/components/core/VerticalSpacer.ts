import { Component } from "../base";
import { IComponentOptions } from "../types";

export interface IVerticalSpacerOptions extends IComponentOptions {
    space: number;
}

class VerticalSpacer extends Component {
    constructor(
        options: IVerticalSpacerOptions = <IVerticalSpacerOptions>{},
        componentType = "VerticalSpacer",
    ) {
        super(options, componentType);
    }
}

export { VerticalSpacer };
