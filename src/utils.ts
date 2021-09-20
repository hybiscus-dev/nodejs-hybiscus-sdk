import axios from "axios";
import { IReportDefinition } from "./Report";

interface IBuildReportResponse {
    taskID: string | null;
    status: string;
}

interface ITaskStatusResponse {
    status: string | null;
    errorMessage: string | null;
}

const submitBuildReportJob = async (
    reportDefinition: IReportDefinition,
    apiKey: string
): Promise<IBuildReportResponse> => {
    let response;
    try {
        response = await axios.post(
            `https://api.hybiscus.dev/api/v1/build-report`,
            {
                ...reportDefinition,
            },
            {
                headers: {
                    "X-API-KEY": apiKey,
                },
            }
        );
    } catch (error) {
        console.log(error);
        return {
            taskID: null,
            status: "FAILED",
        };
    }
    return {
        taskID: response?.data?.task_id || null,
        status: response?.data?.status || null,
    };
};

const getTaskStatus = async (
    taskID: string,
    apiKey: string
): Promise<ITaskStatusResponse> => {
    try {
        const response = await axios.get(
            "https://api.hybiscus.dev/api/v1/get-task-status",
            {
                params: {
                    task_id: taskID,
                },
                headers: {
                    "X-API-KEY": apiKey,
                },
            }
        );
        return {
            status: response?.data?.status || null,
            errorMessage: response?.data?.error_message || null,
        };
    } catch (error) {
        return {
            status: null,
            errorMessage: "Error retrieving task status!",
        };
    }
};

const waitForTaskSuccess = async (
    taskID: string,
    apiKey: string
): Promise<ITaskStatusResponse> => {
    return new Promise((resolve, reject) => {
        const interval: ReturnType<typeof setInterval> = setInterval(
            async () => {
                const { status, errorMessage } = await getTaskStatus(
                    taskID,
                    apiKey
                );
                if (status === "SUCCESS") {
                    clearInterval(interval);
                    resolve({
                        status,
                        errorMessage,
                    });
                    return;
                } else if (status === "FAILED") {
                    reject({
                        status,
                        errorMessage,
                    });
                    return;
                }
            },
            750
        );
    });
};

export { submitBuildReportJob, getTaskStatus, waitForTaskSuccess };
