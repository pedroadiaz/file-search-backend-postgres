export const queryFunctions = {
    query: {
        handler: './src/functions/query/queryEmbeddings.handler',
        events: [
            {
                http: {
                    method: 'post',
                    path: 'query',
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
    qanda: {
        handler: './src/functions/query/question-answer.handler',
        timeout: 15,
        events: [
            {
                http: {
                    method: 'post',
                    path: 'qanda',
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
}