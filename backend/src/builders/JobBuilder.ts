import { IBot } from "../models/IBot";
import { IJob } from "../models/IJob";

class JobBuilder {
    
    static builder(bot: IBot): IJob[] {
        const { tasks } = bot;

        return tasks.map(task => ({
            botId: bot.id,
            task,
        }));
    }
}

export default JobBuilder;