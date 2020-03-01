export interface IMessage {
    id: number;
    userId: number;
    message: string;
    imagePath: string | null;

}

class Message implements IMessage {

    public id: number;
    public userId: number;
    public message: string;
    public imagePath: string | null;

    constructor(messageDetails: IMessage) {
        this.id = messageDetails.id,
        this.userId = messageDetails.userId,
        this.message = messageDetails.message,
        this.imagePath = messageDetails.imagePath
    }
}

export default Message;
