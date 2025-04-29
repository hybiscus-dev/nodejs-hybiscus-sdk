/**
 * @module Client HybiscusClient for API calls
 */

import { IReportDefinition, Report } from "./Report";
import crossFetch from "cross-fetch";
import { API, IAPIError } from "./utils/api";

export type TaskStatus =
    | "CREATED"
    | "SUCCESS"
    | "FAILED"
    | "RUNNING"
    | "QUEUED"
    | null;

export interface IBuildReportRequest {
    report?: Report | null;
    reportJSON?: IReportDefinition | null;
}
export interface IBuildReportResponse {
    url: string | null;
    taskID: string | null;
    status: TaskStatus;
}

export interface IHybiscusClientError {
    status: TaskStatus;
    error: string | object | null;
}

export type IPreviewReportRequest = IBuildReportRequest;
export type IPreviewReportResponse = IBuildReportResponse;

class HybiscusClient {
    api: API;
    apiKey: string;

    /**
     * Constructor for HybiscusClient
     * @param apiKey API key for Hybiscus API
     * @param fetchInstance Optional user-provided fetch instance
     */
    constructor(apiKey: string, fetchInstance?: typeof crossFetch) {
        this.api = new API(apiKey, fetchInstance);
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
        reportJSON = null,
    }: IBuildReportRequest): Promise<IBuildReportResponse> {
        const reportDefinition = report?.getDefinition() || reportJSON;
        try {
            const buildReportResponse =
                await this.api.buildReport(reportDefinition);
            const taskID = buildReportResponse.taskID;
            if (taskID === null) {
                throw {
                    status: null,
                    error: "No task ID returned.",
                } as IHybiscusClientError;
            }
            const taskStatusResponse = await this.api.getTaskStatus(taskID);
            if (taskStatusResponse.status === "SUCCESS") {
                return {
                    taskID,
                    url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${taskID}&api_key=${this.apiKey}`,
                    status: "SUCCESS",
                };
            }
            await this.api.waitForTaskSuccess(taskID);
            return {
                taskID,
                url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${taskID}&api_key=${this.apiKey}`,
                status: "SUCCESS",
            };
        } catch (error) {
            const errorResponse = error as IAPIError;
            throw {
                status: "FAILED",
                error: errorResponse.error,
            } as IHybiscusClientError;
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
        reportJSON = null,
    }: IPreviewReportRequest): Promise<IPreviewReportResponse> {
        const reportDefinition = report?.getDefinition() || reportJSON;
        try {
            const previewReportResponse =
                await this.api.previewReport(reportDefinition);
            const taskID = previewReportResponse.taskID;
            if (taskID === null) {
                throw {
                    status: previewReportResponse.status,
                    error: "No task ID returned.",
                } as IHybiscusClientError;
            }
            const taskStatusResponse = await this.api.getTaskStatus(taskID);
            if (taskStatusResponse.status === "SUCCESS") {
                return {
                    taskID,
                    url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${taskID}&api_key=${this.apiKey}`,
                    status: "SUCCESS",
                };
            }
            await this.api.waitForTaskSuccess(taskID);
            return {
                taskID,
                url: `https://api.hybiscus.dev/api/v1/get-report?task_id=${taskID}&api_key=${this.apiKey}`,
                status: "SUCCESS",
            };
        } catch (error) {
            const errorResponse = error as IAPIError;
            throw {
                status: "FAILED",
                error: errorResponse.error,
            };
        }
    }
}

export { HybiscusClient };
