import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  EventEmitter,
  Output,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Input
} from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { GapluServiceService } from "../services/gaplu-service.service";


@Component({
  selector: 'heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent implements OnInit, AfterViewInit {
  private _ngUnsubscribe: Subject<void> = new Subject<void>();
  private heartList: any;
  @Input() status: boolean = false; // defaults to 'have not hearted this post'
  @Input() hearts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  @Output() heartAction = new EventEmitter<boolean>();

  @Input() PId: any;
  currentUser: any;
  UId: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2,
    private gapluService: GapluServiceService) { }

  public ngOnInit() {

    let data = localStorage.getItem('currentUser') as string;
    this.currentUser = JSON.parse(data);

    this.UId = this.currentUser.response.id;
  }

  public ngAfterViewInit(): void {
    this.heartList = this.elementRef.nativeElement.querySelectorAll('icon');

  }


  public heartClick() {

    if (this.elementRef.nativeElement.classList.contains('active')) {
      this.unheart();
    } else {
      this.hearted();
    }
  }

  public hearted() {

    this.renderer.addClass(this.elementRef.nativeElement, "active"); // for click
    this.renderer.removeClass(this.elementRef.nativeElement, "unhearted");

    for (let i = 0, j = this.heartList.length; i < j; i++) {

      if (!this.heartList[i].classList.contains('heart__main')) {
        this.renderer.setStyle(this.heartList[i], 'offset-path', `path('M 12 -${(i + 1) * 24}')`);
      }
    }

    const payload = {
      user_id: this.UId,
      id: this.PId
    }

    let url = `${environment.baseUrl}api/favourites/`
    this.gapluService.post(url, payload).subscribe((res: any) => {

    })
  }

  public unheart() {

    this.renderer.addClass(this.elementRef.nativeElement, "unhearted");
    this.renderer.removeClass(this.elementRef.nativeElement, "active");

    for (let i = 0, j = this.heartList.length; i < j; i++) {
      if (!this.heartList[i].classList.contains('heart__main')) {
        this.renderer.setStyle(this.heartList[i], 'offset-path', `path('M 12 12')`);
      }
    }
  }

  public ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}

