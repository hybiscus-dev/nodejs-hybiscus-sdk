import { Component } from "../base";
import { IComponentOptions } from "../types";

export interface ISpacerOptions extends IComponentOptions {
    space: number;
}

class Spacer extends Component {
    constructor(
        options: ISpacerOptions = <ISpacerOptions>{},
        componentType = "Spacer",
    ) {
        super(options, componentType);
    }
}

export { Spacer };
