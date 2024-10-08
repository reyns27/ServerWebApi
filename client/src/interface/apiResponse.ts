export interface ApiResponse<T> {
    success: boolean;
    statusCode: number;
    data: T;
    message: string;
    metadata: {
        timestamp: string;
        endPoint: string;
    };
}


