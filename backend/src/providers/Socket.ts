import * as http from 'http';
import * as io from "socket.io";
import { IBot } from "src/models/IBot";
import Queue from "./Queue";

class Socket {
    private io;
    private server: http.Server;
    private queue: Queue;
    
    constructor(server: http.Server) {
        this.queue = Queue.getQueueInstance();
        this.init(server);
        this.start();
    }

    init(server) {
        this.io = new io.Server(server, {
            cors: {
                origin: `${process.env.SERVER_URI}:${process.env.BACKEND_PORT}`
            }
        });
    }

    start() {
        console.log("socket");
        
        this.io.on('connection', (socket) => {
            console.log('a user connected');
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
            socket.on('new_tasks', (bot: IBot) => {
                console.log(bot);
                
                console.log('Bot name: ' + bot.name);
                this.queue.enQueue(bot.tasks);
            });
            socket.emit("finished_task")
        });
    }
}

export default Socket;