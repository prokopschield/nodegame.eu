import { Server } from "socket.io";

import http from "../http";

export const server = new Server(http.server, {
	allowEIO3: true,
	cors: { origin: true },
});
