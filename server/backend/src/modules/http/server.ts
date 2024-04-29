import http from "http";

import { config } from "../config";
import { app } from "../express";

export const server = http.createServer(app);

server.listen(config.http.port);
