import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/Models/Category';
import { Publication } from 'src/app/Models/Publication';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { PublicationService } from 'src/app/Services/Publication/publication.service';
import { UserService } from 'src/app/Services/user.service';




@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.scss']
})
export class AddPublicationComponent implements OnInit {
  selectedValue: any;
  categories!: Category[];
  public publication: Publication = {
    publicationId: 0,
     userIdPublish:this.user.thisUser.id,
    publicationDate: new Date(),
    closingDate: undefined,
    publicationContent: '',
    ifStar: false,
    categoryIdNeed: 0,
    userIdReceived: 0,
    postTitle: '',
    
  };
  
  constructor(private Publication: PublicationService, dialogRef: MatDialogRef<AddPublicationComponent>,

    private Category: CategoryService, private user : UserService) {}

  ngOnInit(): void {
    this.publication.userIdPublish=this.user.thisUser.id;
    console.log(this.publication)
    this.Category.GetAllCategories().subscribe((x) => {
      console.log(x)
      this.categories = x
    })
  }

  public dialogRef!: MatDialogRef<AddPublicationComponent>;
  @Inject(MAT_DIALOG_DATA) public data: any

  Publish(publication: Publication) {
    this.Publication.AddPublication(publication).subscribe(res => {
      if (res) {
        this.dialogRef.close();
      }
    
})
  }
  

}
