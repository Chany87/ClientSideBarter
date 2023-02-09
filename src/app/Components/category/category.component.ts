import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { Publication } from 'src/app/Models/Publication';
import { user } from 'src/app/Models/User';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { PublicationService } from 'src/app/Services/Publication/publication.service';
import { UserService } from 'src/app/Services/user.service';
import { AddPublicationComponent } from '../add-publication/add-publication.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private MyActive: ActivatedRoute, private categoryService: CategoryService, public dialog: MatDialog,
    private publication : PublicationService,private userService: UserService) { }

  Id!: number
  thisCategory!: Category
  Publications!:Publication[]
  Members!:user[]

  ngOnInit(): void {
    this.MyActive.params.subscribe(
      data => {
        this.Id = data['id']
      })
    console.log(this.Id)


    this.categoryService.getCategoryById(this.Id).subscribe((x) => {
      console.log(x);
      this.thisCategory = x
    })
  
        this.publication.GetPublicationsByCategoryId(this.Id).subscribe((x)=>{
        console.log(x);
        this.Publications=x
       })

 

  }

  addPublication() {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddPublicationComponent, {
      width: '45%',
      height: '300px',
       panelClass: 'custom-container' ,
      data: {
        id: 2
      },
    });

        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
         // this.patientOfUbdate = result;
        });
      }
      show:boolean=false
      showPublicationMembers(){
        this.show=!this.show;
      }
      
      openPublication(id:number){
      console.log(id)
      
      }
      }
      
      
