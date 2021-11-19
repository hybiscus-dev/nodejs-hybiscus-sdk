import crossFetch from 'cross-fetch';
import { IReportDefinition } from "./Report";

interface IBuildReportResponse {
    taskID: string | null;
    status: string;
}

interface ITaskStatusResponse {
    status: string | null;
    errorMessage: string | null;
}

export class HttpTransport {
    apiKey: string;
    fetch: Function;

    /**
     * Constructor for HttpTransport
     * @param fetchInstance Optional user-provided fetch instance
     */
    constructor(apiKey: string, fetchInstance?: Function) {
        this.apiKey = apiKey;

        /**
         * User supplied value takes precedence, followed by global fetch if available and finally
         * falls back to cross-fetch
         */ 
        if (fetchInstance) {
            this.fetch = fetchInstance;
        } else if (typeof fetch === 'function') {
            this.fetch = fetch;
        } else {
            this.fetch = crossFetch;
        }
    }

    /**
     * Submits a build report task to the Hybiscus API for processing
     * @param reportSchema Report schema
     * @returns The task ID and task status
     */
    async submitBuildReportJob(reportSchema: IReportDefinition): Promise<IBuildReportResponse> {
        const req = await this.fetch(`https://api.hybiscus.dev/api/v1/build-report`, {
            method: "POST",
            body: JSON.stringify(reportSchema),
            headers: {
                "X-API-KEY": this.apiKey,
            },
        });

        if (!req.ok) {
            return {
                taskID: null,
                status: "FAILED",
            };
        }

        const response = await req.json();

        return {
            taskID: response.data?.task_id || null,
            status: response.data?.status || null,
        };
    }


    /**
     * Submits a preview report task to the Hybiscus API for processing
     * @param reportSchema Report schema
     * @returns The task ID and task status
     */
    async submitPreviewReportJob(reportSchema: IReportDefinition): Promise<IBuildReportResponse> {
        const req = await this.fetch(`https://api.hybiscus.dev/api/v1/preview-report`, {
            method: "POST",
            body: JSON.stringify(reportSchema),
            headers: {
                "X-API-KEY": this.apiKey,
            },
        });

        if (!req.ok) {
            return {
                taskID: null,
                status: "FAILED",
            };
        }

        const response = await req.json();

        return {
            taskID: response.data?.task_id || null,
            status: response.data?.status || null,
        };
    }


    /**
     * Gets the task status for the task ID
     * @param taskID Task ID to check
     * @returns Task status and any error message if task has failed
     */
    async getTaskStatus(taskID: string): Promise<ITaskStatusResponse> {
        const req = await this.fetch(`https://api.hybiscus.dev/api/v1/get-task-status`, {
            method: "POST",
            body: JSON.stringify({
                task_id: taskID,
            }),
            headers: {
                "X-API-KEY": this.apiKey,
            }, 
        });

        if (!req.ok) {
            return {
                status: null,
                errorMessage: "Error retrieving task status!",
            };
        }

        const response = await req.json();

        return {
            status: response.data?.status || null,
            errorMessage: response.data?.error_message || null,
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
                    const { status, errorMessage } = await this.getTaskStatus(taskID);
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
    }
}