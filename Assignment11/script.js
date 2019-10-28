bookIndex = 0;

class book {
    book(){
    source = "Unsupplied";
    title = "Unsupplied";
    author = "Unsupplied";
    genre = "Unsupplied";
    year = "Unsupplied";
    rating = "Unsupplied";
        }
}

let books = [];

books.push(new book());
books.push(new book());
books.push(new book());
books.push(new book());
books.push(new book());

books[0].source = "images/AndThenNone.jpg";
books[0].title = "And Then There Were None";
books[0].author = "Agatha Christie"
books[0].genre = "Mystery";
books[0].year = "1939";
books[0].rating = "5/5"

books[1].source = "images/MurderExpress.jpg";
books[1].title = "Murder on the Orient Express";
books[1].author = "Agatha Christie"
books[1].genre = "Mystery";
books[1].year = "1934";
books[1].rating = "4.5/5"

books[2].source = "images/1984.jpg";
books[2].title = "1984";
books[2].author = "George Orwell"
books[2].genre = "Science Fiction";
books[2].year = "1949";
books[2].rating = "5/5"

books[3].source = "images/AsFar.jpg";
books[3].title = "As Far as my Feet Will Carry Me";
books[3].author = "Josef M Bauer"
books[3].genre = "Biography";
books[3].year = "2001";
books[3].rating = "3/5"

books[4].source = "images/Twilight.jpg";
books[4].title = "Twilight";
books[4].author = "Stephenie Meyer";
books[4].genre = "Romance";
books[4].year = "2005";
books[4].rating = "2/5"

window.onload = function()
{
    console.log(toString(books[0]));
    console.log(toString(books[1]));
    console.log(toString(books[2]));
    console.log(toString(books[3]));
    console.log(toString(books[4]));
    this.setInterval(postBook, 5000);
} 

function toString(book)
{
    return `${book.title} by ${book.author}, Genre: ${book.genre}, written in ${book.year}, Rating: ${book.rating}`
}

function postBook()
{
    const header = this.document.getElementById("book-title");
    
    if(bookIndex > books.length)
    {
        return;
    }
    let bookPara = toString(books[bookIndex]);
    let bookCover = document.createElement("img");
    const br = document.createElement("br");
    bookCover.src = books[bookIndex].source;
    header.after(bookCover, bookPara, br);
    
    bookIndex++;
}
