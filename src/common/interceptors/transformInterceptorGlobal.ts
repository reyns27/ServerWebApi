import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class TransformInterceptorGlobalResponseApi implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        return next.handle().pipe(
            map((data) => ({
                success: true,
                statusCode:response.statusCode,
                data,
                message:null,
                metadata:{
                    timestamp:new Date().toISOString(),
                    endPoint:request.url,
                }
            }))
        )
    }
}