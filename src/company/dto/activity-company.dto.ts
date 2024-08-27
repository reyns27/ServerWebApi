import { ApiProperty } from "@nestjs/swagger";

class ActivityObject {
    @ApiProperty()
    idActivity: number;
    @ApiProperty() 
    description: string;
}

export class ActivityCompany {
    @ApiProperty({ type: [ActivityObject] })
    ActivityCompany: ActivityObject[]

}