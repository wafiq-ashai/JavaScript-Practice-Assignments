bookStore.addBook({
    title: 'Book A',
    author: 'Author A',
    price: 150,
    stock: 10,
    category: 'science'
})

bookStore.addBook({
    title: 'Book B',
    author: 'Author B',
    price: 150,
    stock: 9,
    category: 'management'
})

bookStore.addBook({
    title: 'Book C',
    author: 'Author C',
    price: 250,
    stock: 8,
    category: 'full stack'
})

bookStore.addBook({
    title: 'Book D',
    author: 'Author D',
    price: 190,
    stock: 11,
    category: 'full stack'
})

bookStore.addBook({
    title: 'Book E',
    author: 'Author E',
    price: 100,
    stock: 0,
    category: 'science'
})

console.log(bookStore.books);
console.log(bookStore.findBook('book a'));
console.log(bookStore.findBook('Book A'));

//checkAvailability

console.log(bookStore.checkAvailability('any book'));
console.log(bookStore.checkAvailability('book c'));
console.log(bookStore.checkAvailability('Book E')); // out of stock

// getSummary
console.log(bookStore.getSummary('any book'));
console.log(bookStore.getSummary('book b'));

//filterBooks
console.log(bookStore.filterBooks('science'));
console.log(bookStore.filterBooks('SCIENCE'));
console.log(bookStore.filterBooks('anyCategory'));







