import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import BotList from '../Bots/BotList';
import Controls from '../Controls/Controls';
import Socket from '../../services/Socket';
import IBot from '../../models/IBot';
import IJob from '../../models/IJob';
import { SOCKET_CONSTANTS } from '../../constants/socketConstants';

const socket = Socket();

const BotKeeper = () => {
    const [bots, setBots] = useState<IBot[]>([]);

    const updateBotTask = (job: IJob) => {
        const botsCopy = [...bots];        
        const index = botsCopy.findIndex(bot => bot.id === job.botId);

        botsCopy[index]?.tasks.forEach(task => {
            if (task?.id === job.task.id) {
                task.status = job.task.status;
            }
        });
        
        setBots(botsCopy);
    }
    
    useEffect(() => {
        socket.socket.on(SOCKET_CONSTANTS.FINISHED_TASKS, (jobResponse: IJob) => {
            updateBotTask(jobResponse);
        });
    }, [bots]);

    const addNewBot = (newBot: IBot) => {
        setBots([...bots, newBot]);
    }    

    return (
        <>
            <Header />
            <Controls handleAddNewBot={addNewBot} socket={socket} />
            <BotList bots={bots} />
        </>
    )
}

export default BotKeeper;