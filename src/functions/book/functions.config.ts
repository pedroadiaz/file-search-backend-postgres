export const bookFunctions = {
    createBook: {
        handler: './src/functions/book/createBook.handler',
        events: [
            {
                http: {
                    method: 'post',
                    path: 'book',
                    cors: {
                      origin: "*",
                      headers: [
                        "Accept",
                        "Content-Type",
                        "Content-Length",
                        "Authorization"
                      ]
                    }
                }
            }
        ]
    },
    getBooksByClass: {
        handler: './src/functions/book/getBooksByClass.handler',
        events: [
            { 
                http: {
                    method: 'get',
                    path: 'book/class/{classId}',
                    cors: {
                      origin: "*",
                      headers: [
                        "Accept",
                        "Content-Type",
                        "Content-Length",
                        "Authorization"
                      ]
                    }
                }
            }
        ]
    },
    getBooks: {
        handler: './src/functions/book/getBooks.handler',
        events: [
            { 
                http: {
                    method: 'get',
                    path: 'book',
                    cors: {
                      origin: "*",
                      headers: [
                        "Accept",
                        "Content-Type",
                        "Content-Length",
                        "Authorization"
                      ]
                    }
                }
            }
        ]
    },
    deleteBookById: {
        handler: './src/functions/book/deleteById.handler',
        events: [
            { 
                http: {
                    method: 'delete',
                    path: 'book',
                    cors: {
                      origin: "*",
                      headers: [
                        "Accept",
                        "Content-Type",
                        "Content-Length",
                        "Authorization"
                      ]
                    }
                }
            }
        ]
    }
}