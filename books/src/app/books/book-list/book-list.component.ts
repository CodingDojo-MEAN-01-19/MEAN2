import { Component, OnInit } from '@angular/core';

import { Book } from '../../models';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    console.log(this.bookService);
    this.bookService.getBooks().subscribe(books => {
      console.log(this);
      this.books = books;
    });
  }

  onSelect(book: Book) {
    console.log('selecting a book', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(book: Book) {
    console.log('creating book', book);

    this.bookService.createBook(book).subscribe(newBook => {
      this.books = [...this.books, newBook];
    });
  }

  onDelete(book: Book) {
    console.log('deleting book', book);

    this.bookService.removeBook(book._id).subscribe(deletedBook => {
      console.log(deletedBook);
      this.books = this.books.filter(b => b._id !== deletedBook._id);
    });
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log('clicking ');
  }
}
