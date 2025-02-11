import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  BookDto as ClientBookDto,
  UpdateBookDto as ClientUpdateBookDto,
  CreateBookDto as ClientCreateBookDto
} from '@app/contracts/books/book.dto';
import { BOOKS_PATTERN } from '@app/contracts/books/books.pattern';
@Injectable()
export class BooksService {

  constructor(@Inject('BOOKS_CLIENT') private bookClient: ClientProxy) {
    console.log('BooksService From the Gateway');
  }

  create(createBookDto: ClientCreateBookDto) {
    // return this.bookClient.send('books.create', createBookDto);
    return this.bookClient.send<ClientBookDto, ClientCreateBookDto>(
      BOOKS_PATTERN.CREATE,
      createBookDto
    )
  }

  findAll() {
    console.log('dhruvin and shivam are here   :>> ');
    return this.bookClient.send("books.findAll", {});

    // return this.bookClient.send(
    //   BOOKS_PATTERN.FINDALL,
    //   {}
    // )
  }

  findOne(id: number) {
    // return this.bookClient.send("books.findOne", id);
    return this.bookClient.send<ClientBookDto>(
      BOOKS_PATTERN.FINDONE, {
      id,
    })
  }

  update(id: number, updateBookDto: ClientUpdateBookDto) {
    // return this.bookClient.send('books.update', { id, ...updateBookDto });
    return this.bookClient.send<ClientBookDto, ClientUpdateBookDto>(
      BOOKS_PATTERN.UPDATE,
      {
        id,
        ...updateBookDto
      }
    )
  }

  remove(id: number) {
    // return this.bookClient.send('books.remove', id);
    return this.bookClient.send<ClientBookDto>(
      BOOKS_PATTERN.REMOVE,
      {
        id
      }
    )
  }
}

