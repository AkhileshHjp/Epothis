import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { Browser } from '@capacitor/browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hindi-book-list',
  templateUrl: './hindi-book-list.component.html',
  styleUrls: ['./hindi-book-list.component.css']
})
export class HindiBookListComponent implements OnInit {
  num: any = 1
  class: any
  books: any
  base_url = 'https://scert-up.in/EBook/'
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
      bookname: 'कलरव बृज कक्षा 1',
      file_nmae: '1कलरव.pdf'
    },

    {
      class: 2,
      subjet: 'hindi',
      bookname: 'कलरव बृज कक्षा 2',
      file_nmae: 'कलरव-bhoj-2.pdf'
    },
    {
      class: 1,
      subjet: 'hindi',
      bookname: 'सहज अवधी कक्षा 1',
      file_nmae: 'सहज-अवधी-1.pdf'
    },
    {
      class: 2,
      subjet: 'hindi',
      bookname: 'सहज अवधी कक्षा 2',
      file_nmae: 'सहज-अवधी-2.pdf'
    },

    {
      class: 1,
      subjet: 'hindi',
      bookname: 'कलरव भोज कक्षा 1',
      file_nmae: 'KALRAV-Class-1.pdf'
    },
    {
      class: 2,
      subjet: 'hindi',
      bookname: 'कलरव भोज कक्षा 2',
      file_nmae: 'KALRAV-Class-2.pdf'
    },
    {
      class: 1,
      subjet: 'hindi',
      bookname: 'कक्षा-बुंदेली कक्षा 1',
      file_nmae: 'kaksha-bundeli-1.pdf'
    },
    {
      class: 2,
      subjet: 'hindi',
      bookname: 'कक्षा-बुंदेली कक्षा 2',
      file_nmae: 'kaksha-bundeli-2.pdf'
    },

    {
      class: 3,
      subjet: 'hindi',
      bookname: 'गिनतारा कक्षा 2 ',
      file_nmae: 'Gintara-3.pdf'
    },
    {
      class: 3,
      subjet: 'hindi',
      bookname: 'हमारा परिवेश कक्षा ',
      file_nmae: 'hamara-parivesh-3.pdf'
    },
    {
      class: 7,
      subjet: 'hindi',
      bookname: 'मंजरी कक्षा 7',
      file_nmae: 'manjari-7.pdf'
    },
    {
      class: 8,
      subjet: 'hindi',
      bookname: 'मंजरी कक्षा 8',
      file_nmae: 'manjari-8.pdf'
    },

    {
      class: 3,
      subjet: 'hindi',
      bookname: 'संस्कृत कक्षा 3',
      file_nmae: 'Sanskrit-3.pdf'
    },
    {
      class: 4,
      subjet: 'hindi',
      bookname: 'गिनतारा कक्षा 4',
      file_nmae: 'गिनतारा-4.pdf'
    },

    {
      class: 4,
      subjet: 'hindi',
      bookname: 'संस्कृत-पीयूषम् कक्षा 4',
      file_nmae: 'संस्कृत-पीयूषम्-4.pdf'
    },

    {
      class: 2,
      subjet: 'hindi',
      bookname: 'गिनतारा कक्षा 2',
      file_nmae: 'gintara-2.pdf'
    },

    {
      class: 7,
      subjet: 'hindi',
      bookname: 'हमारा इतिहास और नागरिक जीवन कक्षा 7',
      file_nmae: 'his-7.pdf'
    },

    {
      class: 8,
      subjet: 'hindi',
      bookname: 'गणित कक्षा 8',
      file_nmae: 'गणत-ककष-Class-8.pdf'
    },
    {
      class: 7,
      subjet: 'hindi',
      bookname: 'गणित कक्षा 7',
      file_nmae: 'maths-Class-7.pdf'
    },
    {
      class: 6,
      subjet: 'hindi',
      bookname: 'विज्ञान - कक्षा 6',
      file_nmae: 'science-Class-6.pdf'
    },
    {
      class: 7,
      subjet: 'hindi',
      bookname: 'विज्ञान -  कक्षा 7',
      file_nmae: 'science-Class-6.pdf'
    },
    {
      class: 6,
      subjet: 'hindi',
      bookname: 'गणित- कक्षा 6',
      file_nmae: 'maths-Class-6.pdf'
    },

    {
      class: 5,
      subjet: 'hindi',
      bookname: 'गिनतारा- कक्षा 5',
      file_nmae: 'Gintara-Class-5.pdf'
    },
    {
      class: 6,
      subjet: 'hindi',
      bookname: 'मंजरी- कक्षा 6',
      file_nmae: 'manjari-Class-6.pdf'
    },
    {
      class: 5,
      subjet: 'hindi',
      bookname: 'कलरव - कक्षा 5',
      file_nmae: 'pdf-KALRAV-Class-5.pdf'
    },

    {
      class: 5,
      subjet: 'hindi',
      bookname: 'EVS कक्षा 5',
      file_nmae: 'Evs-Class-5.pdf'
    },
    {
      class: 6,
      subjet: 'hindi',
      bookname: 'गृह शिल्प कक्षा 6',
      file_nmae: 'gruh-shilp-Class-6.pdf'
    },
    {
      class: 7,
      subjet: 'hindi',
      bookname: 'गृह शिल्प कक्षा 7',
      file_nmae: 'gruh-shilp-class-7.pdf'
    },

    {
      class: 8,
      subjet: 'hindi',
      bookname: 'गृह शिल्प कक्षा 8',
      file_nmae: 'gruh-shilp-class-8.pdf'
    },
    {
      class: 4,
      subjet: 'hindi',
      bookname: 'हमारा परिवेश कक्षा 4',
      file_nmae: 'HAMARA-PARIVESH-4.pdf'
    },
    {
      class: 1,
      subjet: 'hindi',
      bookname: 'कलरव कक्षा 1',
      file_nmae: 'KALRAV-Class-1.pdf'
    },
    {
      class: 2,
      subjet: 'hindi',
      bookname: 'कलरव कक्षा 2',
      file_nmae: 'KALRAV-CLASS-2.pdf'
    },
    {
      class: 3,
      subjet: 'hindi',
      bookname: 'कलरव कक्षा 3',
      file_nmae: 'Kalrav-class-3.pdf'
    },
    {
      class: 4,
      subjet: 'hindi',
      bookname: 'कलरव कक्षा 4',
      file_nmae: 'kalrav-Class-4.pdf'
    },

    {
      class: 4,
      subjet: 'hindi',
      bookname: 'खेल और स्वास्थ्य ',
      file_nmae: 'khel-aur-swashthy.pdf'
    },
    {
      class: 6,
      subjet: 'hindi',
      bookname: 'कृषि विज्ञानं कक्षा 6',
      file_nmae: 'krishi-Class-6.pdf'
    },
    {
      class: 8,
      subjet: 'hindi',
      bookname: 'कृषि विज्ञानं कक्षा 8',
      file_nmae: 'krishi-Class-8.pdf'
    },
    {
      class: 7,
      subjet: 'hindi',
      bookname: 'कृषि विज्ञानं कक्षा 7',
      file_nmae: 'krishi-vigyan-Class-7.pdf'
    },


    {
      class: 0,
      subjet: 'hindi',
      bookname: 'पर्यावरण उच्च प्राथमिक स्तर हेतु',
      file_nmae: 'पर्यावरण-उच्च-प्राथमिक-स्तर-हेतु.pdf'
    },

    {
      class: 8,
      subjet: 'hindi',
      bookname: 'पृथ्वी और हमारा जीवन कक्षा 6',
      file_nmae: 'पृथ्वी-और-हमारा-जीवन-6.pdf'
    },
    {
      class: 7,
      subjet: 'hindi',
      bookname: 'पृथ्वी और हमारा जीवन कक्षा 7',
      file_nmae: 'पृथ्वी-और-हमारा-जीवन-7.pdf'
    },
    {
      class: 8,
      subjet: 'hindi',
      bookname: 'पृथ्वी और हमारा जीवन कक्षा 8',
      file_nmae: 'पृथ्वी-और-हमारा-जीवन-8.pdf'
    },

    {
      class: 6,
      subjet: 'hindi',
      bookname: 'महान व्यक्तित्व कक्षा 6',
      file_nmae: 'महान-व्यक्तित्व-कक्षा-6.pdf'
    },
    {
      class: 7,
      subjet: 'hindi',
      bookname: 'महान व्यक्तित्व कक्षा 7',
      file_nmae: 'महान-व्यक्तित्व-कक्षा-7.pdf'
    },
    {
      class: 8,
      subjet: 'hindi',
      bookname: 'महान व्यक्तित्व कक्षा 8',
      file_nmae: 'महान-व्यक्तित्व-कक्षा-8.pdf'
    },
    {
      class: 5,
      subjet: 'hindi',
      bookname: 'संस्कृत पीयूषम् कक्षा 5',
      file_nmae: 'संस्कृत-पीयूषम्-कक्षा-5.pdf'
    },
    {
      class: 6,
      subjet: 'hindi',
      bookname: 'संस्कृत पीयूषम् कक्षा 6',
      file_nmae: 'संस्कृत-पीयूषम्-कक्षा-6.pdf'
    },

    {
      class: 7,
      subjet: 'hindi',
      bookname: 'संस्कृत पीयूषम् कक्षा 7',
      file_nmae: 'संस्कृत-पीयूषम्%20-कक्षा-7.pdf'
    },
    {
      class: 8,
      subjet: 'hindi',
      bookname: 'संस्कृत पीयूषम् कक्षा 8',
      file_nmae: 'संस्कृत-पीयूषम्-कक्षा-8.pdf'
    },
    {
      class: 6,
      subjet: 'hindi',
      bookname: 'स्काउट गाइड उच्च प्राथमिक स्तर हेतु',
      file_nmae: 'स्काउट-गाइड-उच्च-प्राथमिक-स्तर-हेतु.pdf'
    },
    {
      class: 7,
      subjet: 'hindi',
      bookname: 'स्काउट गाइड उच्च प्राथमिक स्तर हेतु',
      file_nmae: 'स्काउट-गाइड-उच्च-प्राथमिक-स्तर-हेतु.pdf'
    },
    {
      class: 8,
      subjet: 'hindi',
      bookname: 'स्काउट गाइड उच्च प्राथमिक स्तर हेतु',
      file_nmae: 'स्काउट-गाइड-उच्च-प्राथमिक-स्तर-हेतु.pdf'
    },
    {
      class: 6,
      subjet: 'hindi',
      bookname: 'हमारा इतिहास और नागरिक जीवन कक्षा ६',
      file_nmae: 'हमारा-इतिहास-और-नागरिक-जीवन-कक्षा-६.pdf'
    },
    {
      class: 7,
      subjet: 'hindi',
      bookname: 'हमारा इतिहास और नागरिक जीवन कक्षा ८',
      file_nmae: 'हमारा-इतिहास-और-नागरिक-जीवन-कक्षा-८.pdf'
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
    this._router.navigate(['hindi/hindiBook/openBook'])
  }

  downloadFile(filename: string): void {
    window.open(`https://scert-up.in/api/ViewPdf?filename=${filename}`)
  }

}
