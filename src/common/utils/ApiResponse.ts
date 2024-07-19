// src/dto/response.dto.ts
export class ApiResponse<T> {
    isSuccess:boolean;
    status: number;
    message: object;
    data: T;
  
    constructor(isSuccess:boolean,status: number, message: object, data: T) {
      this.isSuccess = isSuccess;
      this.status = status;
      this.message = message;
      this.data = data;
    }
  }
  