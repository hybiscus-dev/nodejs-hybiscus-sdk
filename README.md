<div align="center">
    <a href="https://hybiscus.dev">
    <img width="40%" src="https://hybiscus.dev/public/img/Wordmark.svg" alt="Hybiscus logo"/>
    </a>
</div>

<div align="center">
    Hybiscus is a REST API for generating professional looking PDF reports using a simple JSON definition. Choose from a selection pre-designed components, providing only the content, to generate high quality PDFs without the need for design skills.
</div>

---

# Hybiscus SDK (NodeJS)

![](https://img.shields.io/github/stars/hybiscus-dev/nodejs-hybiscus-sdk?style=social)
[![npm version](https://badge.fury.io/js/@hybiscus%2Fweb-api.svg)](https://badge.fury.io/js/@hybiscus%2Fweb-api)
![CI workflow](https://github.com/hybiscus-dev/nodejs-hybiscus-sdk/actions/workflows/ci.yml/badge.svg)
![](https://img.shields.io/github/license/hybiscus-dev/nodejs-hybiscus-sdk)
![](https://img.shields.io/npm/dm/@hybiscus/web-api)
![GitHub package.json version](https://img.shields.io/github/package-json/v/hybiscus-dev/nodejs-hybiscus-sdk)

> NodeJS SDK for interacting with the Hybiscus API

---

### ⚠️ Breaking changes in v2
- `reportSchema` option from `Client.HybiscusClient.buildReport` and `Client.HybiscusClient.previewReport` changed to `reportJSON`, in alignment with terminology update on API docs
- `Client.HybiscusClient.buildReport` / `Client.HybiscusClient.previewReport` throw an error if there is an error received from the API, instead of resolving with the error in the attribute `errorMessage`
- The return from `Client.HybiscusClient.buildReport` / `Client.HybiscusClient.previewReport` no longer contains the attribute `errorMessage`. Instead, the error thrown is typed with the interface `Report.IHybiscusClientError`
- Minimum version of NodeJS v20.X required

### ⚠️ Breaking changes in v1

The `v1` release of this library contains breaking changes from the `v0.X` version. The most major change is the shift from `camelCase` for the variable naming inside the options for Reports and Components, to `snake_case`, which closely aligns with the API variable naming style. This means the documentation on [Hybiscus Docs](https://hybiscus.dev/docs) can be used directly with this library, without needing to know to convert between formats.

---

## 🪛 Requirements

- NodeJS **20**.X or newer

## 🛠 Installation

The library can be installed via `npm` as follows:

```shell
$   npm install @hybiscus/web-api
```

## 🚀 Usage

The NodeJS SDK provides a declarative API for building up the report and the components inside it. Below is a simple example to get you started:

> **Note**
> To use the Hybiscus API, you will require an API key which you can get by signing up at [https://hybiscus.dev/signup](https://hybiscus.dev/signup) for a **Free trial**. For more details of the plans on offer, see [here](https://hybiscus.dev/plans).

### Quick start

```js
import { HybiscusClient, Report, Components } from "@hybiscus/web-api";
const { Core } = Components;
const { Section, Table, Row } = Core;

const section = new Section({ section_title: "title" }).addComponents([
    new Row({ width: "1/3" }),
    new Row({ width: "2/3" }).addComponents([
        new Table({
            title: "Table title",
            headings: ["URL", "Page views"],
            rows: [
                ["google.com", "500"],
                ["bing.com", "50"],
            ],
        }),
    ]),
]);

const report = new Report(
    {
        report_title: "Report title",
        report_byline: "The byline",
    },
    {
        color_theme: "forest",
    },
);
report.addComponent(section);

const client = new HybiscusClient("<<API_KEY>>");
try {
    const response = await client.buildReport({ report });
    console.log(response);
} catch (error) {
    console.error(error);
}
```

The Promise returned by `client.buildReport` resolves to an object, which contains the URL for the generated PDF. The response has the following interface:

```ts
interface IPDFReport {
    url: string | null;
    taskID: string | null;
    status: "SUCCESS" | "FAILED" | "RUNNING" | "QUEUED";
    errorMessage: string | null;
}
```

### Components

Classes are available for each of the components in the Hybiscus API. All component classes follow the same basic principle, where they must be instantiated using the options defined in the [API docs](https://hybiscus.dev/docs).

> **Note**
> As of `v1.x`, the variable naming format is maintained as
> `snake_case` in line with the API format.

Components which are specified as extendable in the API docs, have the optional method `.addComponents` or `.addComponent`, which you can use to add components within them. Components can be deeply nested through this way, giving a lot flexibility.

```js
import { Components } from "@hybiscus/web-api";
const { Core } = Components;
const { Section, Text } = Components;

const section = new Section({ section_title: "title" })
    .addComponents([
        new Section({ section_title: "Sub-section" })
            .addComponents([
                new Text({ text: "Example text" }),
                new Text({ text: "More example text" }),
            ]);
        new Section({ section_title: "Sub-section" })
            .addComponents([
                new Text({ text: "Example text" }),
                new Text({ text: "More example text" }),
            ]);
    ])
```

This forms part of the declarative API, which lets you define the report contents without worrying about layout and design, and focusing on content.

### Client

The client `HybiscusClient` is initialised with your API token. Two functions are available which correspond to the two API endpoints:

- Build report (`.buildReport`)
- Preview report (`.previewReport`)

The `.previewReport` function generates a low resolution JPEG preview of the report, which doesn't count against your monthly quota.

Both functions accept either an instance of the `Report` class for the
`report` parameter, or an object in the `reportJSON` parameter, which
has the report defined according to the [API documentation online](https://hybiscus.dev/docs/).

```js
import { HybiscusClient } from "@hybiscus/web-api";

const client = new HybiscusClient(process.env.HYBISCUS_API_KEY);

const reportJSON = {
    type: "Report",
    options: {
        report_title: "Report title"
    },
    components: [
        {
            type: "Text",
            options: {
                text: "Lorem ipsum dolor sit amet"
            }
        }
    ]
};
try {
    const response = await client.previewReport({ reportJSON });
    console.log(response);
} catch (error) {
    console.error(error);
}
```

### Using a custom HTTP client

By default Hybiscus will use native `fetch`, falling back to `cross-fetch` if no native implementation is available. You can use an alternative fetch implementation by passing an instance of it as the second argument of the `HybiscusClient` constructor. This client must support the Fetch API.

```js
import nodeFetch from "node-fetch";

const client = new HybiscusClient("<<API_KEY>>", nodeFetch);
```

## 📖 Documentation

Documentation can be autogenerated using `jsdoc` by running `npm run doc`. This will generate HTML documentation in the `docs/` folder which can be viewed directly in a browser without the need for a web server.

---

&copy; 2025, Hybiscus
