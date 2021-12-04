import { Report, Components, HybiscusClient } from "./index";

// eslint-disable-next-line @typescript-eslint/no-var-requires
jest.mock("cross-fetch", () => require("fetch-mock-jest").sandbox());
import fetchMock from "cross-fetch";

afterEach(() => {
    fetchMock.mockReset();
});

test("Build PDF report", async () => {
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
    const report = new Report({
        reportTitle: "Report title",
        reportByline: "Report byline",
    }).addComponent(new Components.Text({ text: "Text component" }));
    const getURL = `https://api.hybiscus.dev/api/v1/get-task-status?api_key=${apiKey}&task_id=${taskID}`;
    fetchMock.post(
        "https://api.hybiscus.dev/api/v1/build-report",
        postResponse
    );
    fetchMock.get(getURL, getResponse);
    const result = await client.buildReport({ report });
    expect(fetchMock).toHaveFetched(
        "https://api.hybiscus.dev/api/v1/build-report"
    );
    expect(fetchMock).toHaveFetched(getURL);
    expect(result).toStrictEqual({
        taskID: getResponse.task_id,
        status: "SUCCESS",
        errorMessage: null,
        url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${result.taskID}&api_key=${apiKey}`,
    });
});

test("Preview PDF report", async () => {
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
    const report = new Report({
        reportTitle: "Report title",
        reportByline: "Report byline",
    }).addComponent(new Components.Text({ text: "Text component" }));
    const getURL = `https://api.hybiscus.dev/api/v1/get-task-status?api_key=${apiKey}&task_id=${taskID}`;
    fetchMock.post(
        "https://api.hybiscus.dev/api/v1/preview-report",
        postResponse
    );
    fetchMock.get(getURL, getResponse);
    const result = await client.previewReport({ report });
    expect(fetchMock).toHaveFetched(
        "https://api.hybiscus.dev/api/v1/preview-report"
    );
    expect(fetchMock).toHaveFetched(getURL);
    expect(result).toStrictEqual({
        taskID: getResponse.task_id,
        status: "SUCCESS",
        errorMessage: null,
        url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${result.taskID}&api_key=${apiKey}`,
    });
});
