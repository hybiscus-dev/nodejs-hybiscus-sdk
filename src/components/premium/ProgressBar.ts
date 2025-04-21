import { Component } from "../base";
import { IComponentOptions } from "../types";

export interface IProgressBarOptions extends IComponentOptions {
    progress: number;
    stages: Array<{ name: string }>;
    title?: string;
}

class ProgressBar extends Component {
    constructor(
        options: IProgressBarOptions = <IProgressBarOptions>{},
        componentType = "ProgressBar",
    ) {
        super(options, componentType);
    }
}

export { ProgressBar };
