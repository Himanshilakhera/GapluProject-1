import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Gaplu';


  headerVisible = false;
  constructor(private router: Router,
    private spinner: NgxSpinnerService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/' || event['url'] == '/verifyEmail' || event['url'] == '/popup') {

          this.headerVisible = false;
        } else {
          this.headerVisible = true;
        }
      }
    })


  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);


  }
}




