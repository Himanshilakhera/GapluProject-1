import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GapluServiceService } from '../services/gaplu-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationServiceService } from '../services/notification-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private gapluService: GapluServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private notifyService: NotificationServiceService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  get f() { return this.form.controls; }

  submit() {

    const payload = {
      email: this.form.value.email
    };

    let url = `${environment.baseUrl}api/users/signup/`
    this.gapluService.post(url, payload).subscribe({
      next: () => {
        this.notifyService.showInfo("OTP sent successfully..!")
        this.router.navigate(['/verifyEmail', { Params: this.form.value.email }], { relativeTo: this.route });
      },
      error: (error: any) => {
        this.notifyService.showError(error.error.email)
      }
    }
    )

  }
}
