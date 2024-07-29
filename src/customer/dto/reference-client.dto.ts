import { ApiProperty } from "@nestjs/swagger";

class referenceObject  {
    @ApiProperty()
    reference_type:string;
    @ApiProperty()
    name:string;
    @ApiProperty()
    phone:string;
}

export class referenceCLient {
    @ApiProperty({type:[referenceObject]})
    references:referenceObject[]
      
}