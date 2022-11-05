import { Component } from "../base";
import { IOptions } from "../types";

export interface ISpacerOptions extends IOptions {
    space: number;
}

class Spacer extends Component {
    constructor(
        options: ISpacerOptions = <ISpacerOptions>{},
        componentType = "Spacer"
    ) {
        super(options, componentType);
    }
}

export { Spacer };
