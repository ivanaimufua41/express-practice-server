import Message, { IMessage } from '../../entities/Message';
import { MockDaoMock } from '@daos/MockDb/MockDao.mock';
import { getRandomInt } from '@shared/functions';

export interface IMessageDao {
    getAllMessages: () => Promise<IMessage[]>;
    addOrUpdateMessage: (message: Message) => Promise<void>;
    deleteMessage: (id: number) => Promise<void>;

}

// remove JSDoc stuff were using typescript now
class MessageDao extends MockDaoMock{
    // /***
    // *  @param none
    // *
    // */
    // public async getAllMessages(): Promise<IMessage[]> {
    //     try {
    //         const database = await super.openDb();
    //         const messages = database.messages;
    //         return messages;
    //     } catch (error) {
    //         const emptyMessages = [] as IMessage[];
    //         return emptyMessages;
    //     }
    // }

    // /***
    //  *  @param message
    //  */
    // public async addOrUpdateMessage(message: Message): Promise<void> {
    //     try {
    //         const database = await super.openDb();
    //         const messages = database.messages;
    //         let updatedMessages = [] as Message[];
    //         const foundMessage: Message = messages.find((msg: Message) => msg.id === message.id);
    //         if (foundMessage) {
    //             const updatedMessage = { ...foundMessage, ...message };
    //             updatedMessages = [...messages, updatedMessage];
    //         } else {
    //             message.id = getRandomInt();
    //             updatedMessages = [...messages, message];
    //         }
    //         database.messages = updatedMessages;
    //         await super.saveDb(database);
    //         return;
    //     } catch (err) {
    //         throw err;
    //     }

    // }


    // public async deleteMessage(id: number): Promise<void> {
    //     try {
    //         const database = await super.openDb();
    //         const messages = database.messages;
    //         const updatedMessages = messages.filter((msg: Message) => msg.id !== id);

    //         database.messages = updatedMessages;
    //         super.saveDb(database);

    //     } catch (err) {
    //         throw err;
    //     }
    // }
}

export default MessageDao;