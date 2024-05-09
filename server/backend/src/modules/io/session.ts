import { Socket } from "socket.io";

export const socket_session_map = new WeakMap<Socket, Session>();

export class Session {
	id: string;
	socket: Socket;

	constructor(socket: Socket) {
		this.id = socket.id;
		this.socket = socket;

		socket_session_map.set(socket, this);
	}
}
