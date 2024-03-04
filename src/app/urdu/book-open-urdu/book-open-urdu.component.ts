import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-book-open-urdu',
  templateUrl: './book-open-urdu.component.html',
  styleUrls: ['./book-open-urdu.component.css']
})
export class BookOpenUrduComponent implements  OnInit{
// pdfSrc: any = 'https://www.scert-up.in/EBook/1कलरव.pdf'
  pdfSrc: any = 'https://www.educatorbox.com/demo/book.pdf'

  file_name: any
  // trustedHtml!: SafeResourceUrl;

  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private sanitizer: DomSanitizer
  ) {
    this.file_name = this._routing.getCurrentNavigation()?.extras
}



  ngOnInit(): void {
    // this.pdfSrc = this._crud.getSafeResourceUrl();
    // console.log(this.pdfSrc);
    

    
    // this.pdfSrc = 'https://pdfobject.com/pdf/sample.pdf'
  }
}
