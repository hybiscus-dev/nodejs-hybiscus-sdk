import { Component } from "../base";
import { IComponentOptions } from "../types";

class PageBreak extends Component {
    /**
     * PageBreak constructor
     */
    constructor(
        options: IComponentOptions = <IComponentOptions>{},
        componentType = "PageBreak",
    ) {
        super(options, componentType);
    }
}

export { PageBreak };
