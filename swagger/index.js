const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const route = require("./routes/route");

const app = express();

app.use(express.json());

const options = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "My apis in swagger",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8090",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerSpecs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Hello World..");
});

app.listen(8090, () => {
  console.log("Listening to the port..");
});
