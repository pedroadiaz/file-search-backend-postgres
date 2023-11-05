export const classFunctions = {
    createClass: {
        handler: './src/functions/class/createClass.handler',
        events: [
            {
                http: {
                    method: 'post',
                    path: 'class',
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
    getClasses: {
        handler: './src/functions/class/getClasses.handler',
        events: [
             {
                http: {
                    method: 'get',
                    path: 'class',
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
    getClassById: {
        handler: './src/functions/class/getClassById.handler',
        events: [
             {
                http: {
                    method: 'get',
                    path: 'class/{id}',
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
    getClassByUserId: {
        handler: './src/functions/class/getClassByUser.handler',
        events: [
             {
                http: {
                    method: 'get',
                    path: 'class/user/{userId}',
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
    deleteClassById: {
        handler: './src/functions/class/deleteById.handler',
        events: [
             {
                http: {
                    method: 'delete',
                    path: 'class/{id}',
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
    updateClassById: {
        handler: './src/functions/class/updateClass.handler',
        events: [
             {
                http: {
                    method: 'put',
                    path: 'class',
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