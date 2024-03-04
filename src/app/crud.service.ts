import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiBaseUrl = 'https://www.scert-up.in';

  class_id =  new BehaviorSubject<number>(1)
  book_file_name =  new BehaviorSubject<string>('')


  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  base_url = 'https://www.scert-up.in/api/GetEbookApi'
  url: string = 'https://www.scert-up.in'
  pdf_url: string = 'https://www.africau.edu/images/default/sample.pdf'
  
    openBook = new  BehaviorSubject<object>({})

  getSafeResourceUrl(): SafeResourceUrl {
    // Replace the URL with your actual PDF URL
    const pdfUrl = 'https://www.scert-up.in/EBook/1कलरव.pdf';

    // Sanitize and trust the URL
    return this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
  }

  get_book() {
    return this.http.get(`${this.base_url}`)
  }
  
  get_books(id:any, lang:any){
    return  this.http.get(`${this.base_url}/${id}?lang=${lang}`)
    
  }
}
