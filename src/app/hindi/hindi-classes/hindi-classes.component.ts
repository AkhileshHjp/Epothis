import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-hindi-classes',
  templateUrl: './hindi-classes.component.html',
  styleUrls: ['./hindi-classes.component.css']
})
export class HindiClassesComponent  implements OnInit{


  constructor(
    private router : Router,
    private  _crud:CrudService
  ){}

  ngOnInit() {
  }


  onBook(no:any){    
    this.router.navigate(['/hindi/hindiBook'] , no)
    this._crud.class_id.next(no)
    localStorage.setItem('classno', no)
  }


}
