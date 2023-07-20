// Define your Book class here:
class Book{
    constructor(Title,Author,CopyrightDate,ISBN,numberOfPages,checkOutTotal, discardedTotal){
        this.title = Title;
        this.author = Author;
        this.copyrightDate = CopyrightDate; 
        this.isbn = ISBN;
        this.numberOfPages = numberOfPages;
        this.checkOutTotal = checkOutTotal;
        this.discarded = discardedTotal;
    }

}

class Manual extends Book{
    constructor(Title,Author,CopyrightDate,ISBN,numberOfPages,checkOutTotal, discardedTotal){
        super(Title,Author,CopyrightDate,ISBN,numberOfPages,checkOutTotal, discardedTotal);
    }
    dispose(year){
        if (year-this.copyrightDate > 5){
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book{
    constructor(Title,Author,CopyrightDate,ISBN,numberOfPages,checkOutTotal, discardedTotal){
        super(Title,Author,CopyrightDate,ISBN,numberOfPages,checkOutTotal, discardedTotal);
    }
    dispose(){
        if(this.checkOutTotal > 100){
            this.discarded = 'Yes'
        }
    }
}


// Declare the objects for exercises 2 and 3 here:
let book1 = new Novel ('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No' );
let book2 = new Manual ('Top Secret Shuttle Building Manual', 'Redacted',2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:
book2.dispose(2023)
console.log(book2)

book1.dispose(5)
console.log(book1)