import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-open-tm',
  templateUrl: './open-tm.component.html',
  styleUrls: ['./open-tm.component.css']
})
export class OpenTMComponent {
  url = ''
  base_url: string = 'https://scert-up.in/api/ViewContect?filename='
  cls: any = 1
  constructor(
    private _crud: CrudService,
    private spinner: NgxSpinnerService
  ) { }



  ngOnInit(): void {
    this.spinner.show();
    this._crud.openBook.subscribe(
      (res: any) => {
        console.log(res);
        this.cls = res.class
        const filename = res.url
        this.url = this.base_url + filename
        console.log(this.url);

      }
    )

  }

  afterLoadComplete(): void {
    this.spinner.hide();
  }


  zoom = 1.0; // Initial zoom level

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  ngAfterViewInit(): void {
    this.setupZoomEvents();
  }

  setupZoomEvents(): void {
    const pdfViewerElement = this.pdfViewer.nativeElement;
    pdfViewerElement.addEventListener('wheel', this.handleZoom.bind(this));
  }

  handleZoom(event: WheelEvent): void {
    event.preventDefault();
    const zoomStep = 0.1;
    if (event.deltaY < 0) {
      this.zoom += zoomStep; // Zoom in
    } else {
      if (this.zoom > zoomStep) {
        this.zoom -= zoomStep; // Zoom out, with a minimum zoom level
      }
    }
  }



  zoomIn(): void {
    this.zoom += 0.1;
  }

  zoomOut(): void {
    if (this.zoom > 0.2) { // Limit minimum zoom level
      this.zoom -= 0.1;
    }
  }

}
