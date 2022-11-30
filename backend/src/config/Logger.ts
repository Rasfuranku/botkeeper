import { createLogger, format, transports } from "winston";

class Logger {
    constructor() {
        this.init();
    }

    static logger = createLogger({
        level: "info",
        format: format.combine(
            format.timestamp({
                format: "YYYY-MM-DD HH:mm:ss",
            }),
            format.errors({ stack: true }),
            format.splat(),
            format.json()
        ),
        defaultMeta: { service: "BotKeeper" },
        transports: [
            new transports.File({ filename: "../../logs/error.log", level: "error" }),
            new transports.File({ filename: "../../logs/logs-combined.log" }),
        ],
    });

    init() {
        console.log(__dirname );
        
        if (process.env.NODE_ENV !== 'production') {
            Logger.logger.add(new transports.Console({
                format: format.combine(
                    format.colorize(),
                    format.simple()
                )
            }));
        }
    }
}

export default Logger;
