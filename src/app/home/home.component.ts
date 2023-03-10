import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { GapluServiceService } from '../services/gaplu-service.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss' ]
})
export class HomeComponent implements OnInit{
  userId: any;
  Response: any = [];
  currentUser: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private gapluService: GapluServiceService,
    private spinner: NgxSpinnerService){}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.userId = params['Params'];
      });

      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);

      this.testimonials();
}

openDialog(): void {
  const dialogRef = this.dialog.open(PopupComponent, {
    data: {},
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    
  });
}
testimonials(){

  let url = `${environment.baseUrl}api/testimonials/testimonials/`
  this.gapluService.get(url).subscribe((res: any) =>{
   
    this.Response = res;
  })
}
}
