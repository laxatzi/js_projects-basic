// create a book class. The constructor accepts the book title and the author.
// Then  create the respective getters and a title setter in the class, to obtain  the book title, and the author.
class Book{
   constructor(title, author){
      this.title = title;
      this.author = author;
   }

   // getters 
   get booktitle(){
      return this.title;
   }

   get bookauthor(){
      return this.author;
   }
   // setter
   set booktitle(updater){
      this.title = updater;
   }
}

nextBook = new Book("La nome de la rosa", "Umberto Echo");
console.log(nextBook.title); // La nome de la rossa
console.log(nextBook.author); // Umberto Echo
nextBook.title = "Baudolino";
console.log(nextBook.title); // Baudolino