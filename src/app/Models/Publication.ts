export class Publication{
publicationId!:number;
userIdPublish!:number;
publicationDate?:Date;
closingDate?:Date;
publicationContent!:string;
ifStar!:boolean;
categoryIdNeed!:number;
userIdReceived!:number;
postTitle! :string;

constructor(userIdPublish:number, publicationDate:Date, publicationContent:string,ifStar: boolean, categoryIdNeed: number ,postTitle: string ){
    this.userIdPublish=userIdPublish;
    this.publicationDate=publicationDate;
    this.publicationContent = publicationContent;
    this.ifStar = ifStar;
    this.categoryIdNeed = categoryIdNeed;
    this.postTitle = postTitle;
}
}
