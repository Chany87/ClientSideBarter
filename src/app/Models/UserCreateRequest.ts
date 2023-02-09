export class UserCreateRequest{
   
    constructor(
        public email:string='',
        public password:string='',
        public firstName:string='',
        public lastName?:Date,
        public phoneNumber?:string,
        public cityId?:number,
        public categoryUsers?:number[]
        ) {}
        
}


