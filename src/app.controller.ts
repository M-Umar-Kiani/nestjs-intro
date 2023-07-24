import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    // public bookService : BookService = new BookService();
    constructor(private bookService: BookService){}

  //Add Book
  @Post('/add')
  addBook(): string {
    return this.bookService.addBook();
  }
  //Delete Book
  @Delete('/delete')
  deleteBook(): String {
    return this.bookService.deleteBook();
  }

  //Update Book
  @Put('/update')
  updateBook(): string {
    return this.bookService.updateBook();
  }

  //FindAll Book
  @Get('/findAll')
  findAllBooks(): string {
    return this.bookService.FindAllBook();
  }

  @Get('/findBookById/:bookId')
  findBookById(@Param() params: any): string {
    console.log(params.bookId);
    return `This action returns a book for id number ${params.bookId}`;
  }
}
