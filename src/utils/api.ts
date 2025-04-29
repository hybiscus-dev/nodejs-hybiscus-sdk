import crossFetch from "cross-fetch";
import { IReportDefinition } from "../Report";
import { version } from "../version";

export type TaskStatus =
    | "CREATED"
    | "SUCCESS"
    | "FAILED"
    | "RUNNING"
    | "QUEUED"
    | null;

export interface IBuildReportResponse {
    taskID: string | null;
    status: TaskStatus;
}

export type IPreviewReportResponse = IBuildReportResponse;

export interface ITaskStatusResponse {
    status: TaskStatus;
}

export interface IAPIError {
    taskID: string | null;
    status: TaskStatus;
    error: string | object | null;
}

export class API {
    apiKey: string;
    fetch: typeof crossFetch;

    /**
     * Constructor for API
     * @param fetchInstance Optional user-provided fetch instance
     */
    constructor(apiKey: string, fetchInstance?: typeof crossFetch) {
        this.apiKey = apiKey;

        /**
         * User supplied value takes precedence, followed by global fetch if available and finally
         * falls back to cross-fetch
         */
        if (fetchInstance) {
            this.fetch = fetchInstance;
        } else if (typeof fetch === "function") {
            this.fetch = fetch;
        } else {
            this.fetch = crossFetch;
        }
    }

    /**
     * Submits a build report task to the Hybiscus API for processing
     * @param reportJSON Report schema
     * @returns The task ID and task status
     */
    async buildReport(
        reportJSON: IReportDefinition,
    ): Promise<IBuildReportResponse> {
        const _response = await this.fetch(
            "https://api.hybiscus.dev/api/v1/build-report",
            {
                method: "POST",
                body: JSON.stringify(reportJSON),
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": this.apiKey,
                    "X-HYB-CLIENT": `hybiscus-nodejs-sdk-v${version}`,
                },
            },
        );
        const response = await _response.json();
        if (!_response.ok) {
            const error = response.detail ?? null;
            throw {
                taskID: null,
                status: "FAILED",
                error: error,
            } as IAPIError;
        }
        return {
            taskID: response.task_id || null,
            status: response.status || null,
        };
    }

    /**
     * Submits a preview report task to the Hybiscus API for processing
     * @param reportJSON Report schema
     * @returns The task ID and task status
     */
    async previewReport(
        reportJSON: IReportDefinition,
    ): Promise<IPreviewReportResponse> {
        const _response = await this.fetch(
            "https://api.hybiscus.dev/api/v1/preview-report",
            {
                method: "POST",
                body: JSON.stringify(reportJSON),
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": this.apiKey,
                    "X-HYB-CLIENT": `hybiscus-nodejs-sdk-v${version}`,
                },
            },
        );
        const response = await _response.json();
        if (!_response.ok) {
            const errorMessage = response.detail ?? null;
            throw {
                taskID: null,
                status: "FAILED",
                error: errorMessage,
            } as IAPIError;
        }
        return {
            taskID: response.task_id || null,
            status: response.status || null,
        };
    }

    /**
     * Gets the task status for the task ID
     * @param taskID Task ID to check
     * @returns Task status and any error message if task has failed
     */
    async getTaskStatus(taskID: string): Promise<ITaskStatusResponse> {
        const _response = await this.fetch(
            "https://api.hybiscus.dev/api/v1/get-task-status?" +
                new URLSearchParams({
                    task_id: taskID,
                }),
            {
                method: "GET",
                headers: {
                    "X-API-KEY": this.apiKey,
                    "X-HYB-CLIENT": `hybiscus-nodejs-sdk-v${version}`,
                },
            },
        );
        if (!_response.ok) {
            throw {
                status: null,
                error: "Error retrieving task status!",
            } as IAPIError;
        }
        const response = await _response.json();
        if (response.error_message !== null) {
            throw {
                status: null,
                error: response.error_message,
            } as IAPIError;
        }
        return {
            status: response.status || null,
        };
    }

    /**
     * Returns a Promise that only resolves once the task reaches SUCCESS status or
     * FAILED status.
     * @param taskID Task ID to check
     * @returns Task status and any error message if task fails
     */
    async waitForTaskSuccess(taskID: string): Promise<ITaskStatusResponse> {
        return new Promise((resolve, reject) => {
            const interval: ReturnType<typeof setInterval> = setInterval(
                async () => {
                    try {
                        const { status } = await this.getTaskStatus(taskID);
                        if (status === "SUCCESS") {
                            clearInterval(interval);
                            resolve({
                                status,
                            });
                        }
                    } catch (error) {
                        clearInterval(interval);
                        reject({
                            status: null,
                            error,
                        });
                    }
                },
                750,
            );
        });
    }
}
