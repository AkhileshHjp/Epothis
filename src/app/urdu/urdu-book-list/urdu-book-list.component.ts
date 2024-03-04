import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-urdu-book-list',
  templateUrl: './urdu-book-list.component.html',
  styleUrls: ['./urdu-book-list.component.css']
})
export class UrduBookListComponent implements  OnInit {
  num: any = 1
  books: any
  constructor(
    private _crud: CrudService,
    private _router: Router
  ) {
  }
  ngOnInit(): void {
     this._crud.class_id.subscribe(
      (res:any)=>{
        console.log(res);
         this.num =  res
        
      }
     )
    this._crud.get_books(this.num , 'Urdu').subscribe(
      (res: any) => {
        console.log(res);
        this.books = res
      },
      (error) => {
        console.log(error);
      }
    )
  }



  onView(pdf_url: any) {
    // console.log(pdf_url);
    this._router.navigate(['eng/engBook/openBook'], pdf_url)
  }

  onDownlode() {

  }
}
