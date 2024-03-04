import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-eng-book-lisx',
  templateUrl: './eng-book-lisx.component.html',
  styleUrls: ['./eng-book-lisx.component.css']
})
export class EngBookLisxComponent implements  OnInit {
  num : any = 1
  books :any
  filter_book :any
  base_url :string = 'https://scert-up.in/api/ViewPdf?filename='
  constructor(
    private _crud :CrudService,
    private _router : Router
  ){ 
   this.books =  localStorage.getItem('classno')
   this.num =  this.books
  }

  booklist = [
   
    {
      class: 3,
      subjet: 'english',
      bookname: 'Rainbow Class 3',
      file_nmae: 'pdf-RAINBOW-Class-3.pdf'
    },
    
    {
      class: 4,
      subjet: 'english',
      bookname: 'Rainbow Class 4',
      file_nmae: 'rainbow.pdf'
    },
    {
      class: 6,
      subjet: 'english',
      bookname: 'Rainbow Class 6',
      file_nmae: 'Rainbow-class-6.pdf'
    },
    {
      class: 7,
      subjet: 'english',
      bookname: 'Rainbow Class 7',
      file_nmae: 'rainbow-Class-7.pdf'
    },

    {
      class: 8,
      subjet: 'english',
      bookname: 'Rainbow Class 8',
      file_nmae: 'Rainbow-class-8.pdf'
    },





  ]
  ngOnInit(): void {
     this.filter_book =  this.booklist.filter((b)=>(b.class == this.num))
  }



  onView(pdf_url:any, cls:any){
    // console.log(pdf_url);
    console.log(pdf_url);
    const da = {
      url: pdf_url,
      class: cls
    }

    this._crud.openBook.next(da)
      this._router.navigate(['eng/engBook/openBook'] , pdf_url)
      
  }

  onDownlode(file:any){
    console.log(file);
    window.open(`https://scert-up.in/api/ViewPdf?filename=${file}`)
  }
}
