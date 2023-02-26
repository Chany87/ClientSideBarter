export class Message {
    constructor(
        public userName: string = '',
         public usreIdReceived: number,
       public userIdGiven: number,
        public phone: string,
        public messageContent: string,
        public image: string,
       public messageDate:Date,

    ) { }
}