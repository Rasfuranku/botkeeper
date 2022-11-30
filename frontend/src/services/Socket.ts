import { io } from "socket.io-client";
import { SOCKET_CONSTANTS } from "../constants/socketConstants";
import IBot from "../models/IBot";

const Socket = () => {
    const uri = `${process.env.REACT_APP_SERVER_URI}:${process.env.REACT_APP_SOCKET_PORT}`
    const socket = io(uri);

    socket.on("connect", () => {
        console.log(socket.connected); // true
    });

    socket.on("disconnect", () => {
        console.log(socket.connected); // false
    });    

    const emit = (bot: IBot) => {        
        socket.emit(SOCKET_CONSTANTS.NEW_TASKS, bot);
    };

    return {
        emit,
        socket,
    }
}

export default Socket;