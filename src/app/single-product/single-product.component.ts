import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GapluServiceService } from '../services/gaplu-service.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationServiceService } from '../services/notification-service.service';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  userId: any;
  Response: any;
  currentUser: any;
  productId: any;
  ProductId: any;
  previewImage: any;
  img: File;
  email: any;

  constructor(public gapluService: GapluServiceService,
    public route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private _http: HttpClient,
    private notifyService: NotificationServiceService,
    public dialog: MatDialog,
    private router: Router) { }

  form: FormGroup;
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.productId = params['params'];
    })

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    let url = `${environment.baseUrl}api/products/${this.productId}/`
    this.gapluService.get(url).subscribe((res: any) => {
      this.Response = res;
    })
    let data = localStorage.getItem('currentUser') as string;
    this.currentUser = JSON.parse(data);

    this.userId = this.currentUser.response.id;
    this.ProductId = this.productId;
    this.email = this.currentUser.response.email;

    this.form = this.formBuilder.group({
      phoneNo: [''],
      company: [''],
      logo: [null]
    })

  }

  handleFileInput(event: any) {
    this.img = event.target.files[0];
  }



  submit() {

    const formData = new FormData();
    formData.append('email', this.email);
    formData.append('phone_number', this.form.controls['phoneNo'].value);
    formData.append('company_name', this.form.controls['company'].value);
    formData.append('logo', this.img, this.img?.name);
    formData.append('user', this.userId);
    formData.append('product', this.ProductId);

    let url = `${environment.baseUrl}api/orders/create/`;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    this._http.post(url, formData, { headers }).subscribe((res) => {

      this.notifyService.showSuccess("Your Order has been placed successfully..!!")
      this.router.navigate(['/home'])
    }, error => {
      this.notifyService.showError("invalid..!")

    })

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: { id: this.ProductId }
    });

    dialogRef.afterClosed().subscribe(result => {
    
    });
  }



}