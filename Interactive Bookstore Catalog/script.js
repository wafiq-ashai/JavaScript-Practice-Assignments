let bookStore = {
    books:[],
    addBook: function(book) {
        this.books.push(book)
        console.log('Book added successfully:', book.title )
    },
    findBook: function(title) {
        for(let i = 0; i < this.books.length ; i++) {
            if (title.toLowerCase() === this.books[i].title.toLowerCase()) {
                return this.books[i]
            }
        } 
        return `Book not Found`
    },
    checkAvailability: function(title) {
        let check = this.findBook(title)
        if (check === 'Book not Found') {
            return `Book not found in our store`
        }

        if(check.stock > 0) {
            return `In stock: ${check.stock} pcs available`
        } else {
            return `Out of stock`
        }
    },

    getSummary: function(title) {
        let check = this.findBook(title)
        if(check === 'Book not Found') {
            return `Book not Found`
        } else {
            return `${check.title} by ${check.author} - Price: Rs ${check.price} - Current Stock: ${check.stock} - Category: ${check.category}`
        }     
    },

    filterBooks: function(category) {
        let results = []
        for(let i = 0; i < this.books.length; i++) {
            if (category.toLowerCase() === this.books[i].category.toLowerCase()) {
                results.push(this.books[i])
            }
        }
        if(results.length === 0) {
            return `No books found in this category`
        }
        return results
    }
}

