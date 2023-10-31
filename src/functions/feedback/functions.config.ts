export const feedbackFunctions = {
    createFeedback: {
        handler: './src/functions/feedback/createFeedback.handler',
        events: [
          {
            http: {
              method: 'post',
              path: 'feedback',
              cors: {
                origin: "*",
                headers: [
                  "Accept",
                  "Content-Type",
                  "Content-Length",
                  "Authorization"
                ]
              }
            },
          },
        ]
      },
      getFeedback: {
        handler: './src/functions/feedback/getFeedback.handler',
        events: [
          {
            http: {
              method: 'get',
              path: 'feedback',
              cors: {
                origin: "*",
                headers: [
                  "Accept",
                  "Content-Type",
                  "Content-Length",
                  "Authorization"
                ]
              }
            },
          },
        ]
      },
}