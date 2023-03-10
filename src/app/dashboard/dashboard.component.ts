import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { GapluServiceService } from '../services/gaplu-service.service';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationServiceService } from '../services/notification-service.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: any;
  email: any;
  first_name: any;
  last_name: any;
  image: any;
  user_profile: any;
  response: any = [];
  order: any = [];
  ngOnInit(): void {

    let data = localStorage.getItem('currentUser') as string;
    this.currentUser = JSON.parse(data);

    this.email = this.currentUser.response.email;

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }


  formData = {
    firstname: '',
    lastname: '',
    image: ''
  };
  previewImage: any;

  isShowMyOrders: boolean = false;
  isShowMyFav: boolean = false;
  isShowTrackOrder: boolean = false;
  isShowAccountDetails: boolean = false;
  isShowEditButton: boolean = true;
  isShowDetails: boolean = true;
  isFillDetail: boolean = false;
  isShowSaveButton: boolean = false;

  constructor(private gapluService: GapluServiceService,
    private dialog: MatDialog,
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private notifyService: NotificationServiceService) { }

  myOrder() {

    this.isShowMyOrders = true;
    this.isShowMyFav = false;
    this.isShowTrackOrder = false;
    this.isShowAccountDetails = false;

    let url = `${environment.baseUrl}api/orders/list/`
    this.gapluService.get(url).subscribe((Response: any) => {
      this.order = Response.results
    })
  }

  myFavourites() {

    this.isShowMyFav = true;
    this.isShowMyOrders = false;
    this.isShowTrackOrder = false;
    this.isShowAccountDetails = false;

    let url = `${environment.baseUrl}api/favourites/`
    this.gapluService.get(url).subscribe((Response: any) => {

      this.response = Response;
    })
  }

  trackOrders() {
    this.isShowTrackOrder = true;
    this.isShowMyOrders = false;
    this.isShowMyFav = false;
    this.isShowAccountDetails = false;
  }

  selectedFile: any = null;


  accountDetails() {
    this.isShowAccountDetails = true;
    this.isShowMyOrders = false;
    this.isShowMyFav = false;
    this.isShowTrackOrder = false;

    let url = `${environment.baseUrl}api/users/user-details/`
    this.gapluService.get(url).subscribe((res: any) => {
debugger
      this.first_name = res.first_name;
      this.last_name = res.last_name;
      this.user_profile = res.user_profile.image_url;
    })

  }



  onFileSelected(event: any): void {

    const file = event.target.files[0];
    this.formData.image = `gaplu_img/${event.target.files[0].name}`;
    if (file) {

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewImage = reader.result as string;
      };
    }
  }

  submitForm(): void {

    const payload = {
      first_name: this.formData.firstname,
      last_name: this.formData.lastname,
      image: this.formData.image

    }
    let url = `${environment.baseUrl}api/users/user-update/`
    this.gapluService.post(url, payload).subscribe((res: any) => {

      this.notifyService.showSuccess("UserProfile updated successfully..!")

      this.isShowEditButton = true;
    }, error => {
      this.notifyService.showError(error)
    })
  }

  editDetails() {
    this.isShowDetails = false;
    this.isFillDetail = true;
    this.isShowSaveButton = true;
    this.isShowEditButton = false;
  }
}
