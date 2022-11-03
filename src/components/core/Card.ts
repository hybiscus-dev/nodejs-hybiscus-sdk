import { Component } from "../base";
import { WidthType, IOptions } from "../types";

export interface ICardOptions extends IOptions {
    title: string;
    value: string | number;
    units?: string;
    icon?: string | null;
    highlighted?: boolean;
    width?: WidthType;
}

class Card extends Component {

    constructor(
        options: ICardOptions = <ICardOptions>{},
        componentType = "Card"
    ) {
        super(options, componentType);
    }
}

export { Card };
