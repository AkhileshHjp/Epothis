import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-open-book-eng',
  templateUrl: './open-book-eng.component.html',
  styleUrls: ['./open-book-eng.component.css']
})
export class OpenBookEngComponent implements OnInit {
  url =''
  base_url : string = 'https://scert-up.in/api/ViewPdf?filename='
  cls :any = 1
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private spinner : NgxSpinnerService
  ) {}



  ngOnInit(): void {
    this.spinner.show();
    this._crud.openBook.subscribe(
      (res:any)=>{
        console.log(res);
        this.cls =  res.class
        const filename =  res.url
        this.url= this.base_url+filename
        console.log(this.url);
        
      }
    )
    
  }

  afterLoadComplete(): void {
    // This function will be called when the PDF file is fully loaded
    this.spinner.hide();
  }
  zoom = 1.0; // Initial zoom level

  zoomIn(): void {
    this.zoom += 0.1;
  }

  zoomOut(): void {
    if (this.zoom > 0.2) { // Limit minimum zoom level
      this.zoom -= 0.1;
    }
  }


}

