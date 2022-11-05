import { Component } from "../base";
import { IOptions } from "../types";

class PageBreak extends Component {
    /**
     * PageBreak constructor
     */
    constructor(options: IOptions = <IOptions>{}, componentType = "PageBreak") {
        super(options, componentType);
    }
}

export { PageBreak };
