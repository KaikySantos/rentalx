import "reflect-metadata";
import "./shared/container";

import express from "express";
import SwaggerUi from "swagger-ui-express";

import createConnection from "./database";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server is running!"));
