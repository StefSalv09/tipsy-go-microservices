import { IsNotEmpty, IsOptional } from "class-validator"

export class CreateBooksDto {
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    author: string

    @IsNotEmpty()
    @IsOptional()
    description: string

    @IsNotEmpty()
    price: number
}
export class UpdateBooksDto extends CreateBooksDto {
    id: number
}