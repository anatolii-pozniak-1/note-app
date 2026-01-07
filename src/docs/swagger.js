import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notes API",
      version: "1.0.0",
      description: "REST API для керування нотатками",
    },
    servers: [
      {
        url: "http://localhost:3030",
        description: "Local server",
      },
    ],
    components: {
      schemas: {
        Note: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "60d21b4667d0d8992e610c85",
            },
            title: {
              type: "string",
              example: "Моя нотатка",
            },
            content: {
              type: "string",
              example: "Текст нотатки",
            },
          },
          required: ["id", "title", "content"],
        },
        NoteInput: {
          type: "object",
          properties: {
            title: {
              type: "string",
              example: "Моя нотатка",
            },
            content: {
              type: "string",
              example: "Текст нотатки",
            },
          },
          required: ["title", "content"],
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // where Swagger will look for docs
});
