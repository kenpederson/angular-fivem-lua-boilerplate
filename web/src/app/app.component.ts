import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NuiService } from './nui/nui.service';
import { DisplayService } from './display/display.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  title = 'web';
  visibility = false;

  constructor(private nuiService: NuiService,
              private displayService: DisplayService) { }

  ngOnInit() {
    this.displayService.getVisibility().pipe(
      takeUntil(this.unsubscribe$),
    ).subscribe((visibility) => {
      this.visibility = visibility;
    });
  }

  @HostListener('window:message', ['$event'])
  handleWindowMessageEvent(event: MessageEvent) {
    const { app, service, method, data } = event.data;
    if (app && service &&  method && data !== undefined) {
      this.nuiService.handleWindowMessageEvent({ service, method, data });
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
