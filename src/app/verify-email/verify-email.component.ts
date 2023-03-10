import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GapluServiceService } from '../services/gaplu-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationServiceService } from '../services/notification-service.service';
import { error } from 'jquery';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  form: FormGroup;
  email: any;
  res: any;

  constructor(private formBuilder: FormBuilder,
    private gapluService: GapluServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private notifyService: NotificationServiceService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.email = params['Params'];
    });

    this.form = this.formBuilder.group({
      otp: ['']
    });

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  submit() {
    const payload = {
      otp: this.form.value.otp,
      email: this.email
    };

    let url = `${environment.baseUrl}api/users/verify-email/`
    this.gapluService.post(url, payload).subscribe((Response: any) => {
      this.notifyService.showSuccess("Email verified successfully..!")

      this.res = Response;

      localStorage.setItem('currentUser', JSON.stringify({ response: this.res }));
      this.router.navigate(['/home']);
    }, error => {
      this.notifyService.showError(error.error.message)
    })

  }
}

