//creating a JSON obect variable
let book = {
                title : "The Lord of the Rings",
                description: "Percy Jackson is about to be kicked out of boarding school... again. And that's the least of his troubles. Lately, mythological monsters and the gods of Mount Olympus seem to be walking straight out of the pages of his Greek mythology textbook and into his life. Worse, he's angered a few of them. A lightning bolt has been stolen, and Percy is the prime suspect.",
                author: "J.R.R Tolkein",
                pageCount: 423
            }

//print individual data from object   
console.log("********** Printing individual data from object **********"); 
console.log("Title: ", book.title);
console.log("Description: ", book.description);
console.log("Author: ", book.author);
console.log("Number of pages: ", book.pageCount);

//print object as a whole
console.log("Book Object: ", book);

//book description updated
console.log("********** Printing Updated description on object **********"); 
book.description = "The first volume of J.R.R. Tolkien's epic high fantasy novel, The Lord of the Rings."
console.log("Updated Book Object==> ", book);

//creating 5 book object in array
console.log("********** Creating 5 objects into a single array variable**********"); 
let bookArray = [
  {
    title: "The Great Gatsby",
    description: "A novel illustrating the Jazz Age in 1920s America through the eyes of narrator Nick Carraway and his wealthy neighbor Jay Gatsby.",
    author: "F. Scott Fitzgerald",
    pageCount: 180
  },
  {
    title: "To Kill a Mockingbird",
    description: "A story set in the American South during the 1930s, exploring themes of racial injustice and childhood innocence through the perspective of Scout Finch.",
    author: "Harper Lee",
    pageCount: 281
  },
  {
    title: "1984",
    description: "A dystopian social science fiction novel depicting a totalitarian regime and the individual's struggle against surveillance and manipulation.",
    author: "George Orwell",
    pageCount: 328
  },
  {
    title: "Pride and Prejudice",
    description: "A classic novel of manners and romance, following the emotional development of Elizabeth Bennet and Mr. Darcy in early 19th-century England.",
    author: "Jane Austen",
    pageCount: 279
  },
  {
    title: "The Hobbit",
    description: "A fantasy novel chronicling the adventures of Bilbo Baggins as he journeys to reclaim treasure guarded by the dragon Smaug.",
    author: "J.R.R. Tolkien",
    pageCount: 310
  }
];

//printing the book array with 5 book objects
console.log(bookArray[0])