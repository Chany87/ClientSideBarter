import {CategoryUser} from './CategoryUser'

export class user {
    constructor(
        public id: number,
        public stars: number,
        public email: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public phoneNumber?: string, 
        public cityId?: number,
       
        public allowingAccess?: 0|1|2,
        public category_User?:CategoryUser
 
    ) { }
}

