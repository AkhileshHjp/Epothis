import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-teacher-book-list',
  templateUrl: './teacher-book-list.component.html',
  styleUrls: ['./teacher-book-list.component.css']
})
export class TeacherBookListComponent {
  num: any = 1
  class: any
  books: any
  base_url = 'https://scert-up.in/OtherContent/'
  filter_data: any
  constructor(
    private _crud: CrudService,
    private _router: Router,
    private http: HttpClient

  ) {
    this.class = localStorage.getItem('classno')
    this.num = this.class
  }

  booklist = [
    {
      class: 1,
      subjet: 'hindi',
      bookname: 'Cutting Concerns',
      file_nmae: 'mod-1.pdf'
    },
    {
      class: 1,
      subjet: 'hindi',
      bookname: 'Art Integrated Learning',
      file_nmae: 'mod-3.pdf'
    },
    {
      class: 1,
      subjet: 'hindi',
      bookname: 'School Based Assessment',
      file_nmae: 'mod-4.pdf'
    },

  ]



  ngOnInit(): void {
    console.log(this.booklist);

    this.filter_data = this.booklist.filter((a: any) => (a.class == this.num))
  }


  onView(pdf_url: any, cls: any) {
    console.log(pdf_url);
    const da = {
      url: pdf_url,
      class: cls
    }

    this._crud.openBook.next(da)
    this._router.navigate(['/teacher/openTM'])
  }

  downloadFile(filename: string): void {
    window.open(`https://scert-up.in/api/ViewPdf?filename=${filename}`)
  }
}
