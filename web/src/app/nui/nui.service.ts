import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject, Observable } from 'rxjs';
import { NuiEvent } from './nui-event';

@Injectable()
export class NuiService implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private events$ = new Subject<NuiEvent>();

  constructor() { }

  handleWindowMessageEvent(nuiEvent: NuiEvent) {
    console.debug('NUI Service handling event:', nuiEvent);
    this.events$.next(nuiEvent);
  }

  getEventsObservable(): Observable<NuiEvent> {
    return this.events$.asObservable();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
