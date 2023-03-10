import { Component, OnInit } from '@angular/core';
import { GapluServiceService } from '../services/gaplu-service.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationServiceService } from '../services/notification-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  category: any;
  response: any = [];
  imgArray: any = [];
  list: any = [];
  length: any;
  pageEvent: PageEvent | undefined;
  pageIndex: any;
  pageSize: any;
  datasource: any;
  itemId: any;
  title: any;
  searchValue: string = '';

  constructor(private gapluService: GapluServiceService,
    public dialog: MatDialog,
    private router: Router,
    private spinner: NgxSpinnerService,
    public notifyService: NotificationServiceService) { }

  ngOnInit(): void {
    this.getallProduct();
    this.getCategoryProduct();

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  getallProduct() {
    let url = `${environment.baseUrl}api/products/`
    this.gapluService.get(url).subscribe((res: any) => {
      this.response = res.results;
      this.length = this.response.length
    })

  }

  getCategoryValue(evt: any) {
    this.category = evt.target.value;
  }

  getCategoryProduct() {
    let url = `${environment.baseUrl}api/categorylist/`
    this.gapluService.get(url).subscribe((res: any) => {
      this.list = res;
     
    })
  }

  getItem(item: any) {
    this.itemId = item.id;

    this.router.navigate(['/singleProduct', { params: this.itemId }]);
  }

  public getServerData(event?: PageEvent) {

    if (event?.pageIndex == 0) {
      return;
    }

    let url = `${environment.baseUrl}api/products/?page=${event?.pageIndex}`
    this.gapluService.get(url).subscribe(
      (response: any) => {
  
        this.response = response.results;
        if (response.error) {
          // handle error
        } else {
          this.datasource = response.data;
          this.pageIndex = response.pageIndex;
          this.pageSize = response.pageSize;
        }
      },
      (error: Error) => {
        // handle error
      }
    );
    return event;
  }

  search(event: any) {

    this.title = event.target.value

    let url = `${environment.baseUrl}api/products/?title=${this.title}`
    this.gapluService.get(url).subscribe((res: any) => {
      this.response = res.results
    })
  }
  close() {

    this.searchValue = '';
    this.getallProduct();
    this.getCategoryProduct();
  }
}
