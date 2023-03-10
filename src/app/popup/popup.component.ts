import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GapluServiceService } from '../services/gaplu-service.service';
import { HomeComponent } from '../home/home.component';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SingleProductComponent } from '../single-product/single-product.component';
import { NotificationServiceService } from '../services/notification-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})


export class PopupComponent implements OnInit {
  firstName: any;
  form!: FormGroup;
  currentUser: any;


  constructor(public dialog: MatDialog,
    public formBuilder: FormBuilder,
    public gapluService: GapluServiceService,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notifyService: NotificationServiceService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      comment: ['']
    });

    let data = localStorage.getItem('currentUser') as string;
    this.currentUser = JSON.parse(data);
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    const payload = {
      product: this.data.id,
      comment: this.form.value.comment
    }

    let url = `${environment.baseUrl}api/testimonials/testimonials/`
    this.gapluService.post(url, payload).subscribe((Response) => {
      this.dialogRef.close();
      
      this.notifyService.showSuccess("Thanks for your comment..!!")
      this.router.navigate(['/home'])
    }, error => {
      this.notifyService.showError("invalid")
    })
  }

}