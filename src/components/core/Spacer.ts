import { Component } from "../base";
import { IOptions } from "../types";

export interface ISpacerOptions extends IOptions {
    space: number;
}

class Spacer extends Component {

    /**
     * Spacer constructor
     * @param config Component config
     * @param config.space Amount of vertical spacing to add
     */
    constructor(
        options: ISpacerOptions = <ISpacerOptions>{},
        componentType = "Spacer"
    ) {
        super(options, componentType);
    }
}

export { Spacer };
