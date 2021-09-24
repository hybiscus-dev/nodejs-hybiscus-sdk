/**
 * @module Client HybiscusClient for API calls
 */


import { IReportDefinition, Report } from "./Report";
import {
    getTaskStatus,
    submitBuildReportJob,
    submitPreviewReportJob,
    waitForTaskSuccess,
} from "./utils";

interface IPDFReport {
    url: string | null;
    taskID: string | null;
    status: "CREATED" | "SUCCESS" | "FAILED" | "RUNNING" | "QUEUED";
    errorMessage: string | null;
}

class HybiscusClient {
    apiKey: string;

    /**
     * Constructor for HybiscusClient
     * @param apiKey API key for Hybiscus API
     */
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    /**
     * Builds the PDF report defined by the schema
     * @param config Configuration for the build report function
     * @param config.report Instance of Report class
     * @param config.reportSchema Manually generated report schema
     * @returns Promise that resolves to the PDF report URL
     */
    async buildReport({
        report = null,
        reportSchema = null,
    }: {
        report?: Report | null;
        reportSchema?: IReportDefinition | null;
    }): Promise<IPDFReport> {
        let status, taskID, errorMessage;
        let reportDefinition: IReportDefinition = {} as IReportDefinition;
        if (report !== null) {
            reportDefinition = report.getDefinition();
        } else if (reportSchema !== null) {
            reportDefinition = reportSchema;
        }
        {
            const response = await submitBuildReportJob(
                reportDefinition,
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

    /**
     * Allows you to generate a low quality JPEG preview of the report,
     * instead of the final PDF which counts towards your quota.
     * @param config Configuration for the preview report function
     * @param config.report Instance of Report class
     * @param config.reportSchema Manually generated report schema
     * @returns Promise that resolves to the PDF report URL
     */
    async previewReport({
        report = null,
        reportSchema = null,
    }: {
        report?: Report | null;
        reportSchema?: IReportDefinition | null;
    }): Promise<IPDFReport> {
        let status, taskID, errorMessage;
        let reportDefinition: IReportDefinition = {} as IReportDefinition;
        if (report !== null) {
            reportDefinition = report.getDefinition();
        } else if (reportSchema !== null) {
            reportDefinition = reportSchema;
        }
        {
            const response = await submitPreviewReportJob(
                reportDefinition,
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

export { HybiscusClient };
