import { useState } from 'react';

import Header from '../Header/Header';
import BotList from '../Bots/BotList';
import { IBot } from '../../models/IBot';
import Controls from '../Controls/Controls';

const BotKeeper = () => {
    const [bots, setBots] = useState<IBot[]>([]);

    const addNewBot = (bot: IBot) => {
        setBots([...bots, bot]);
    }

    return (
        <>
            <Header />
            <Controls handleAddNewBot={addNewBot} />
            <BotList bots={bots} />
        </>
    )
}

export default BotKeeper;