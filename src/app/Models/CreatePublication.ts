export class CreatePublication{
    constructor(
 
  public userIdPublish:number,
  public publicationDate:Date,
  //public closingDate?:Date,
  public publicationContent:string='',
  public ifStar:boolean=false,
  public categoryIdNeed?:number,
  //public userIdReceived?:number,
  public postTitle:string='',
   ){}
   

   }