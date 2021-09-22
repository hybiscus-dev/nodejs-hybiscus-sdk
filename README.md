<div align="center">
    <a href="https://hybiscus.dev">
    <img width="40%" src="https://hybiscus.dev/public/img/Wordmark.svg" alt="Hybiscus logo"/>
    </a>
</div>

<div align="center">
    Hybiscus is a cloud based service for building PDF reports using pre-designed components that look impressive without any effort. Simply define the content using a simple JSON API and get a PDF in return in a matter of seconds.
</div>

---

# 🌺 Hybiscus SDK (NodeJS)
> NodeJS SDK for interacting with the Hybiscus API

## 🪛 Requirements
- NodeJS 12.X or newer

## 🛠 Installation
The library can be installed via `npm` as follows:

```shell
$   npm install @hybiscus/web-api
```

## 🚀 Usage
The NodeJS SDK provides a declarative API for building up the report and the components inside it. Below is a simple example to get you started:

> **Note** To use the Hybiscus API, you require an API key which you can get by signing up at [https://hybiscus.dev/signup](https://hybiscus.dev/signup) with a **Forever Free** plan. For more details on plans, see [here](https://hybiscus.dev/plans).

```js
const { HybiscusClient, Report, Components } = require("@hybiscus/web-api");
const { Row, Section, Table } = Components;

const section = new Section({ sectionTitle: "title" }).addComponents([
    new Row({ width: "2/3" }),
    new Row({ width: "2/3" }).addComponents([
        new Table({
            title: "Table title",
            headings: ["URL", "Page views"],
            rows: [
                ["google.com", "500"],
                ["bing.com", "50"],
            ]
        }),
    ]),
]);
const report = new Report({
    reportTitle: "Report title",
    reportByline: "The byline" 
}).addComponent(section);

const client = new HybiscusClient(process.env.HYBISCUS_API_KEY);
client
    .buildReport({report })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => console.error(error));
```

---
&copy; 2021, Hybiscus