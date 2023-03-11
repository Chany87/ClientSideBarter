import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/Models/Category';
import { CreatePublication } from 'src/app/Models/CreatePublication';
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
  addPublicationForm!: FormGroup
  newPublication!: Publication
  selectedValue: any;
  categories!: Category[];
  public publication: Publication = {
    publicationId: 0,
    userIdPublish: this.user.getCurrentUser().id,
    publicationDate: new Date(),
    closingDate: undefined,
    publicationContent: '',
    ifStar: false,
    categoryIdNeed: 0,
    userIdReceived: 0,
    postTitle: '',

  };
  @Inject(MAT_DIALOG_DATA) public data: any

  constructor(private Publication: PublicationService, private dialogRef: MatDialogRef<AddPublicationComponent>,

    private Category: CategoryService, private user: UserService) { }

  ngOnInit(): void {

    this.addPublicationForm = new FormGroup({
      postTitle: new FormControl("", Validators.required),
      ifStar: new FormControl(false),
      publicationContent: new FormControl("", Validators.required),

    })
  }

  addPublish() {

    this.newPublication = new Publication(
      //  this.addPublicationForm.value.publicationId = 
      this.user.getCurrentUser().id,
      //  this.addPublicationForm.value.userIdReceived,
      new Date(),
      this.addPublicationForm.value.publicationContent,
      this.addPublicationForm.value.ifStar,
      2,
      this.addPublicationForm.value.postTitle,

    );

    console.log(this.newPublication);
    // this.dialogRef.close();



    this.Publication.AddPublication(this.newPublication).subscribe(res => {
      if (res) {
        this.dialogRef.close();
      }

    })
  }

}






