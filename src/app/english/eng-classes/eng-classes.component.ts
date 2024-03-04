import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-eng-classes',
  templateUrl: './eng-classes.component.html',
  styleUrls: ['./eng-classes.component.css']
})
export class EngClassesComponent implements OnInit {


  constructor(
    private _router:Router,
    private _crud: CrudService
  ){}

  ngOnInit() {
  }


  onBook(id:any){
    this._router.navigate(['/eng/engBook'])
    localStorage.setItem('classno', id)
  }
  
}
