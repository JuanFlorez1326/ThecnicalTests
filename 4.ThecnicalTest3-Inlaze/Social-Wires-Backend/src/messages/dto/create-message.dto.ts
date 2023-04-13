import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, MinLength } from "class-validator";

export class CreateMessageDto {
    
    @ApiProperty({
        required: true,
        description: 'Message Title',
        example: 'Carajillo Euro',
        nullable: false,
        minLength: 4,
    })
    @IsString()
    @MinLength(4)
    title: string;

    @ApiProperty({
        required: true,
        example: 'Pedirte un carajillo mientras golpeas insistentemente el mostrador con el canto de un euro.',
        description: 'Enter Your Message',
        nullable: false,
    })
    @IsString()
    msg: string;
}