import { Component, IComponentDefinition } from "../base";
import { WidthType } from "../types";


class Image extends Component {
    imageURL: string | null;
    base64: string | null;
    base64Extension: string;
    width: WidthType;

    /**
     * Image constructor
     * @param config Component config
     * @param config.imageURL Image URL
     * @param config.base64 Base64 encoded image
     * @param config.base64Extension Base64 extension
     * @param config.width Image width
     */
    constructor({
        imageURL = null,
        base64 = null,
        base64Extension = "jpeg",
        width = null,
    }: {
        imageURL: string | null;
        base64: string | null;
        base64Extension: string;
        width: WidthType;
    }) {
        super({ type: "Image" });
        this.imageURL = imageURL;
        this.base64 = base64;
        this.base64Extension = base64Extension;
        this.width = width;
    }

    getDefinition(): IComponentDefinition {
        return {
            type: this.type,
            options: {
                image_url: this.imageURL,
                base64: this.base64,
                base64_extension: this.base64Extension,
                width: this.width,
            }
        };
    }
}

export { Image };
