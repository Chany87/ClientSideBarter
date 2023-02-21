export class AdminMessage{
    constructor(
    public userName:string='',
    public userId:number,
    public phone:string,
    public massageContent:string,
    public image:string
    ){}
    }