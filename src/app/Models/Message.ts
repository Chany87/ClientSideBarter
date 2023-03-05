export class Message {
    public id!: number;
    public userName!: string;
    public usreIdReceived!: number;
    public userIdGiven!: number;
    public phone!: string;
    public messageContent!: string;
    public image!: string;
    public messageDate!: Date;
    constructor(
        usreIdReceived: number,
        userIdGiven: number,
        messageContent: string,
        image: string,
        messageDate: Date,
    ) {
        this.usreIdReceived = usreIdReceived;
        this.userIdGiven = userIdGiven;
        this.messageContent = messageContent;
        this.image = image;
        this.messageDate = messageDate;
    }
}