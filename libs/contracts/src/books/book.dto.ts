import { IsString, IsNumber, IsOptional, IsISBN, IsDate } from 'class-validator';

export class CreateBookDto {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsOptional()
    @IsString()
    publisher?: string;

    @IsOptional()
    @IsISBN()
    isbn?: string;

    @IsOptional()
    @IsDate()
    publishedDate?: Date;

    @IsOptional()
    @IsNumber()
    price?: number;
}

export class UpdateBookDto extends CreateBookDto {
    @IsNumber()
    id: number;
}

export class BookDto extends CreateBookDto { }