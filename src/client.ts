import { Report } from "./Report";
import {
    getTaskStatus,
    submitBuildReportJob,
    waitForTaskSuccess,
} from "./utils";

interface IPDFReport {
    url: string | null;
    taskID: string | null;
    status: "SUCCESS" | "FAILED" | "RUNNING" | "QUEUED";
    errorMessage: string | null;
}

export default class HybiscusClient {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async buildReport(report: Report): Promise<IPDFReport> {
        let status, taskID, errorMessage;
        {
            const response = await submitBuildReportJob(
                report.getDefinition(),
                this.apiKey
            );
            status = response.status;
            taskID = response.taskID;
        }
        if (taskID !== null) {
            const response = await getTaskStatus(taskID, this.apiKey);
            status = response?.status;
            errorMessage = response?.errorMessage;
            if (status === "FAILED") {
                return {
                    url: null,
                    taskID,
                    status: "FAILED",
                    errorMessage: errorMessage || null,
                };
            }
            try {
                const response = await waitForTaskSuccess(taskID, this.apiKey);
                status = response?.status;
                errorMessage = response?.errorMessage;
                return {
                    taskID,
                    url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${taskID}&api_key=${this.apiKey}`,
                    status: "SUCCESS",
                    errorMessage: errorMessage || null,
                };
            } catch (error) {
                return {
                    url: null,
                    taskID,
                    status: "FAILED",
                    errorMessage,
                }; 
            }
        } else {
            return {
                url: null,
                taskID,
                status: "FAILED",
                errorMessage: errorMessage || null,
            }; 
        }
    }
}
