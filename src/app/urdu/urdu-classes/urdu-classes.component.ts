import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-urdu-classes',
  templateUrl: './urdu-classes.component.html',
  styleUrls: ['./urdu-classes.component.css']
})
export class UrduClassesComponent implements  OnInit {


constructor(
  private _router : Router,
  private _crud: CrudService
){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onBook(id:any){
    this._router.navigate(['/urdu/urduBook'])
     this._crud.class_id.next(id)
  }
}
