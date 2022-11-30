import * as http from 'http';
import * as io from "socket.io";

import JobBuilder from '../builders/JobBuilder';
import { IBot } from "../models/IBot";
import { IJob } from '../models/IJob';
import Queue from "./Queue";
import { SOCKET_CONSTANTS } from '../constants/socketConstants';
import Logger from '../config/Logger';

class Socket {
    private io;
    private queue: Queue;
    static socket;
    private server: http.Server;
    
    constructor(server: http.Server) {
        this.server = server;
        this.queue = Queue.getQueueInstance();
        this.init();
        this.start();
    }

    init() {
        this.io = new io.Server(this.server, {
            cors: {
                origin: `${process.env.SERVER_URI}:${process.env.CLIENT_PORT}`
            }
        });
    }

    start() {
        Logger.logger.info("Socket started");
        
        this.io.on('connection', (socket) => {
            Logger.logger.info("User connected %s", socket.id);
            
            socket.on('disconnect', () => {
                Logger.logger.warn("User Disconnected %s", socket.id);
            });
            
            socket.on(SOCKET_CONSTANTS.NEW_TASKS, (bot: IBot) => {
                this.queue.enQueue(JobBuilder.builder(bot));
            });
            
            Socket.socket = socket;
        });
    }
    
    static emit(job: IJob) {
        Socket.socket.emit(SOCKET_CONSTANTS.FINISHED_TASKS, job);
        Logger.logger.info(`%s - Job | %s | finished.`,  new Date(), job.botId);
    }
}

export default Socket;