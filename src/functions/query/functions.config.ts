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
}