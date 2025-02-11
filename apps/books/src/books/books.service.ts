import { Injectable } from '@nestjs/common';
import { } from './book.dto';
import { CreateBookDto, UpdateBookDto } from '@app/contracts/books/book.dto';

@Injectable()
export class BooksService {
  private books: CreateBookDto[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publisher: 'Scribner',
      isbn: '9780743273565',
      publishedDate: new Date('1925-04-10'),
      price: 10.99,
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      publisher: 'Secker & Warburg',
      isbn: '9780451524935',
      publishedDate: new Date('1949-06-08'),
      price: 8.99,
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publisher: 'J.B. Lippincott & Co.',
      isbn: '9780061120084',
      publishedDate: new Date('1960-07-11'),
      price: 12.99,
    },
    {
      id: 4,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      publisher: 'Little, Brown and Company',
      isbn: '9780316769488',
      publishedDate: new Date('1951-07-16'),
      price: 9.99,
    },
    {
      id: 5,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      publisher: 'Harper & Brothers',
      isbn: '9781503280786',
      publishedDate: new Date('1851-10-18'),
      price: 15.99,
    },
  ];


  create(createBookDto: CreateBookDto) {
    const newBook: CreateBookDto = {
      ...createBookDto,
      id: this.books.length + 1
    }
    this.books.push(newBook);
    return newBook;
  }

  async findAll() {
    console.log('this.books :>> ', this.books);
    return await this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {

  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
