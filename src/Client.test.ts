import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import fetch from "jest-fetch-mock";
import { Report, Components, HybiscusClient } from "./";
const {
    Core: { Text },
} = Components;

beforeEach(() => {
    fetch.resetMocks();
});

describe("Testing Client", () => {
    it("Build PDF report", async () => {
        const apiKey = "P09U8Y7G";
        const taskID = "apoafajfiqwu38r";
        const postResponse = {
            task_id: taskID,
            status: "QUEUED",
        };
        const getResponse = {
            task_id: taskID,
            status: "SUCCESS",
        };
        fetch
            .once(JSON.stringify(postResponse))
            .once(JSON.stringify(getResponse));

        const client = new HybiscusClient(apiKey);
        const report = new Report({
            report_title: "Report title",
            report_byline: "Report byline",
        }).addComponent(new Text({ text: "Text component" }));
        const result = await client.buildReport({ report });

        expect(result).toStrictEqual({
            taskID: getResponse.task_id,
            status: "SUCCESS",
            errorMessage: null,
            url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${result.taskID}&api_key=${apiKey}`,
        });
    });

    it("Preview PDF report", async () => {
        const apiKey = "P09U8Y7G";
        const taskID = "apoafajfiqwu38r";
        const client = new HybiscusClient(apiKey);
        const postResponse = {
            task_id: taskID,
            status: "QUEUED",
        };
        const getResponse = {
            task_id: taskID,
            status: "SUCCESS",
        };
        fetch
            .once(JSON.stringify(postResponse))
            .once(JSON.stringify(getResponse));

        const report = new Report({
            report_title: "Report title",
            report_byline: "Report byline",
        }).addComponent(new Text({ text: "Text component" }));
        const result = await client.previewReport({ report });

        expect(result).toStrictEqual({
            taskID: getResponse.task_id,
            status: "SUCCESS",
            errorMessage: null,
            url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${result.taskID}&api_key=${apiKey}`,
        });
    });
});
