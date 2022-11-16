import { Report } from "./Report";
import { Core } from "./components";
const { Section, Card, Text, Row, Table, VerticalSpacer } = Core;

describe("Test making reports", () => {
    it("Example report", () => {
        const report = new Report(
            {
                report_title: "Example.com",
                report_byline: "Monthly analytics report",
                version_number: "v0.1.0",
            },
            {
                colour_theme: "forest",
                typography_theme: "newspaper",
            }
        ).addComponents([
            new Section({
                section_title: "Overviews and KPI metrics",
                highlighted: true,
                columns: 3,
            }).addComponents([
                new Card({
                    title: "Unique views",
                    value: 987,
                    units: "views",
                    icon: "comet",
                }),
                new Card({
                    title: "Total sales",
                    value: "53,476",
                    units: "$",
                    icon: "coin",
                }),
                new Card({
                    title: "Product views",
                    value: "1,362",
                    units: "views",
                    icon: "building-store",
                }),
                new Card({
                    title: "New customers",
                    value: "321",
                    icon: "users",
                }),
                new Card({
                    title: "Returning customers",
                    value: "98",
                    icon: "user-check",
                }),
                new Card({
                    title: "Bounce rate",
                    value: "0.89",
                    units: "%",
                    icon: "arrow-back",
                }),
            ]),
            new Section({
                section_title: "Electronics product category",
            }).addComponents([
                new Text({
                    width: "1/3",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae provident ipsa culpa officiis illum commodi voluptas, sequi repellat veniam adipisci laboriosam amet nesciunt nam explicabo.",
                }),
                new Row({
                    columns: 2,
                    width: "2/3",
                }).addComponents([
                    new Card({
                        title: "Click through rate",
                        value: "5",
                        units: "%",
                        icon: "click",
                    }),
                    new Card({
                        title: "Impressions",
                        value: "1,364",
                        units: "views",
                        icon: "chart-area-line",
                        highlighted: true,
                    }),
                    new Card({
                        title: "Total sales",
                        value: "3,567",
                        units: "$",
                        icon: "coin",
                    }),
                    new Card({
                        title: "Product views",
                        value: "1,018",
                        units: "views",
                        icon: "building-store",
                    }),
                ]),
            ]),
            new Section({
                section_title: "Key performing pages",
            }).addComponent(
                new Table({
                    title: "",
                    headings: ["URL", "Page title", "Views"],
                    striped: true,
                    rows: [
                        ["/products/arduino", "Arduino accessories", "9,342"],
                        [
                            "/products/raspberry-pi",
                            "Raspberry Pi accessories",
                            "5,674",
                        ],
                        ["/products/keyboards", "Keyboards", "2,248"],
                        ["/products/graphics-cards", "Graphics cards", "973"],
                    ],
                }),
                
            ).addComponent(
                new VerticalSpacer({
                    space: 0.5
                })
            ),
            new Section({
                section_title: "Top performing referrers",
                highlighted: true,
            }).addComponent(
                new Table({
                    title: "",
                    headings: ["Referrer", "URL", "Count"],
                    striped: true,
                    rows: [
                        [
                            "Google",
                            "google.com/search?s=raspberryi+pi",
                            "13,934",
                        ],
                        ["Bing", "bing.com/search?s=raspberry+pi", "9,231"],
                        ["Facebook", "facebook.com", "3,673"],
                        ["Twitter", "twitter.com", "2,190"],
                    ],
                })
            ),
        ]);
        const reportSchema = report.getDefinition();

        const output = {
            type: "Report",
            options: {
                report_title: "Example.com",
                report_byline: "Monthly analytics report",
                version_number: "v0.1.0",
            },
            config: {
                colour_theme: "forest",
                typography_theme: "newspaper",
            },
            components: [
                {
                    type: "Section",
                    options: {
                        section_title: "Overviews and KPI metrics",
                        highlighted: true,
                        columns: 3,
                    },
                    components: [
                        {
                            type: "Card",
                            options: {
                                title: "Unique views",
                                value: 987,
                                units: "views",
                                icon: "comet",
                            },
                        },
                        {
                            type: "Card",
                            options: {
                                title: "Total sales",
                                value: "53,476",
                                units: "$",
                                icon: "coin",
                            },
                        },
                        {
                            type: "Card",
                            options: {
                                title: "Product views",
                                value: "1,362",
                                units: "views",
                                icon: "building-store",
                            },
                        },
                        {
                            type: "Card",
                            options: {
                                title: "New customers",
                                value: "321",
                                icon: "users",
                            },
                        },
                        {
                            type: "Card",
                            options: {
                                title: "Returning customers",
                                value: "98",
                                icon: "user-check",
                            },
                        },
                        {
                            type: "Card",
                            options: {
                                title: "Bounce rate",
                                value: "0.89",
                                units: "%",
                                icon: "arrow-back",
                            },
                        },
                    ],
                },
                {
                    type: "Section",
                    options: {
                        section_title: "Electronics product category",
                    },
                    components: [
                        {
                            type: "Text",
                            options: {
                                width: "1/3",
                                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae provident ipsa culpa officiis illum commodi voluptas, sequi repellat veniam adipisci laboriosam amet nesciunt nam explicabo.",
                            },
                        },
                        {
                            type: "Row",
                            options: {
                                columns: 2,
                                width: "2/3",
                            },
                            components: [
                                {
                                    type: "Card",
                                    options: {
                                        title: "Click through rate",
                                        value: "5",
                                        units: "%",
                                        icon: "click",
                                    },
                                },
                                {
                                    type: "Card",
                                    options: {
                                        title: "Impressions",
                                        value: "1,364",
                                        units: "views",
                                        icon: "chart-area-line",
                                        highlighted: true,
                                    },
                                },
                                {
                                    type: "Card",
                                    options: {
                                        title: "Total sales",
                                        value: "3,567",
                                        units: "$",
                                        icon: "coin",
                                    },
                                },
                                {
                                    type: "Card",
                                    options: {
                                        title: "Product views",
                                        value: "1,018",
                                        units: "views",
                                        icon: "building-store",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "Section",
                    options: {
                        section_title: "Key performing pages",
                    },
                    components: [
                        {
                            type: "Table",
                            options: {
                                title: "",
                                headings: ["URL", "Page title", "Views"],
                                striped: true,
                                rows: [
                                    [
                                        "/products/arduino",
                                        "Arduino accessories",
                                        "9,342",
                                    ],
                                    [
                                        "/products/raspberry-pi",
                                        "Raspberry Pi accessories",
                                        "5,674",
                                    ],
                                    [
                                        "/products/keyboards",
                                        "Keyboards",
                                        "2,248",
                                    ],
                                    [
                                        "/products/graphics-cards",
                                        "Graphics cards",
                                        "973",
                                    ],
                                ],
                            },
                        },
                        {
                            "type": "VerticalSpacer",
                            "options": {
                                "space": 0.5
                            }
                        }
                    ],
                },
                {
                    type: "Section",
                    options: {
                        section_title: "Top performing referrers",
                        highlighted: true,
                    },
                    components: [
                        {
                            type: "Table",
                            options: {
                                title: "",
                                headings: ["Referrer", "URL", "Count"],
                                striped: true,
                                rows: [
                                    [
                                        "Google",
                                        "google.com/search?s=raspberryi+pi",
                                        "13,934",
                                    ],
                                    [
                                        "Bing",
                                        "bing.com/search?s=raspberry+pi",
                                        "9,231",
                                    ],
                                    ["Facebook", "facebook.com", "3,673"],
                                    ["Twitter", "twitter.com", "2,190"],
                                ],
                            },
                        },
                    ],
                },
            ],
        };

        expect(reportSchema).toStrictEqual(output);
    });
});
