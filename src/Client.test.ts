import { Report, Components, HybiscusClient } from "./index";

jest.mock('cross-fetch', () => require('fetch-mock-jest').sandbox())
const fetchMock = require('cross-fetch')

afterEach(() => {
    fetchMock.mockReset();
})

test("Build PDF report", async () => {
    const apiKey = "P09U8Y7G";
    const taskID = "apoafajfiqwu38r";
    const client = new HybiscusClient(apiKey);
    const postResponse = {
        data: {
            task_id: taskID,
            status: "QUEUED",
        },
    };
    const getResponse = {
        data: {
            task_id: taskID,
            status: "SUCCESS",
        },
    };
    const report = new Report({
        reportTitle: "Report title",
        reportByline: "Report byline",
    }).addComponent(new Components.Text({ text: "Text component" }));
    fetchMock.post('https://api.hybiscus.dev/api/v1/build-report', postResponse)
    fetchMock.post('https://api.hybiscus.dev/api/v1/get-task-status', getResponse)
    const result = await client.buildReport({ report });
    expect(fetchMock).toHaveFetched('https://api.hybiscus.dev/api/v1/build-report');
    expect(fetchMock).toHaveFetched('https://api.hybiscus.dev/api/v1/get-task-status');
    expect(result).toStrictEqual({
        taskID: getResponse.data.task_id,
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
        data: {
            task_id: taskID,
            status: "QUEUED",
        },
    };
    const getResponse = {
        data: {
            task_id: taskID,
            status: "SUCCESS",
        },
    };
    const report = new Report({
        reportTitle: "Report title",
        reportByline: "Report byline",
    }).addComponent(new Components.Text({ text: "Text component" }));
    fetchMock.post('https://api.hybiscus.dev/api/v1/preview-report', postResponse)
    fetchMock.post('https://api.hybiscus.dev/api/v1/get-task-status', getResponse)
    const result = await client.previewReport({ report });
    expect(fetchMock).toHaveFetched('https://api.hybiscus.dev/api/v1/preview-report');
    expect(fetchMock).toHaveFetched('https://api.hybiscus.dev/api/v1/get-task-status');
    expect(result).toStrictEqual({
        taskID: getResponse.data.task_id,
        status: "SUCCESS",
        errorMessage: null,
        url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${result.taskID}&api_key=${apiKey}`,
    });
});
