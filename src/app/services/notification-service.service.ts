import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: any) {
    this.toastr.success(message)
  }

  showError(message: any) {

    this.toastr.error(message)
  }

  showInfo(message: any) {
    this.toastr.info(message)
  }

  showWarning(message: any) {
    this.toastr.warning(message)
  }
}
