import { io } from "socket.io-client";
import { IBot } from "../models/IBot";

const Socket = () => {
    const socket = io(`${process.env.REACT_APP_SERVER_URI}:${process.env.REACT_APP_PORT}`);

    socket.on("connect", () => {
        console.log(socket.connected); // true
    });

    socket.on("disconnect", () => {
        console.log(socket.connected); // false
    });

    const emit = (bot: IBot) => socket.emit("new_tasks", bot);

    return {
        emit,
    }
}

export default Socket;