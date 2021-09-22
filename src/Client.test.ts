import axios from "axios";
import { Report, Components, HybiscusClient } from "./index";

const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("axios");

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
    mockedAxios.post.mockResolvedValue(postResponse);
    mockedAxios.get.mockResolvedValue(getResponse);
    const result = await client.buildReport({ report });
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result).toStrictEqual({
        taskID: getResponse.data.task_id,
        status: "SUCCESS",
        errorMessage: null,
        url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${result.taskID}&api_key=${apiKey}`,
    });
});
