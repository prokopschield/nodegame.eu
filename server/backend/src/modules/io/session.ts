import { Err, Ok, Result } from "ps-std";
import { Socket } from "socket.io";

export const socket_session_map = new WeakMap<Socket, Session>();

export class Session {
	id: string;
	socket: Socket;

	constructor(socket: Socket) {
		this.id = socket.id;
		this.socket = socket;

		this.attach(socket);
	}

	detach() {
		socket_session_map.delete(this.socket);
		this.socket.disconnect(true);
	}

	attach(socket: Socket): Result<this, string> {
		if (socket !== this.socket) {
			this.detach();
		}

		if (socket_session_map.has(socket)) {
			const other = socket_session_map.get(socket);

			if (other !== this) {
				return Err("SOCKET_ALREADY_ATTACHED");
			}
		}

		this.socket = socket;
		socket_session_map.set(socket, this);

		return Ok(this);
	}
}
