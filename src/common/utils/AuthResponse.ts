// src/dto/response.dto.ts
export class AuthResponse {
    user:{};
    token: string;
   
    constructor(user:{}, token:string) {
      this.user = user;
      this.token = token
    }
  }
  