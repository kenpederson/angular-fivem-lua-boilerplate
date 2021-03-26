import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NuiEvent } from '../nui/nui-event';
import { NuiService } from '../nui/nui.service';

@Injectable()
export class DisplayService implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private visibility$ = new BehaviorSubject<boolean>(false);

  constructor(private nuiService: NuiService) {
    this.nuiService.getEventsObservable().pipe(
      takeUntil(this.unsubscribe$),
      filter(e => e.service === 'DisplayService'),
    ).subscribe((event) => this.nuiEventHandler(event));
  }

  nuiEventHandler(event: NuiEvent) {
    switch (event.method) {
      case 'toggleVisibility':
        this.toggleVisibility();
        break;
    
      default:
        console.debug('Unhandled service method call event:', event);
        break;
    }
  }

  toggleVisibility() {
    this.visibility$.next(!this.visibility$.value);
  }

  getVisibility() {
    return this.visibility$.asObservable();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
