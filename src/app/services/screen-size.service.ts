import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private isScreenSmall = new BehaviorSubject<boolean>(window.innerWidth <= 992);
  screenSizeChange = this.isScreenSmall.asObservable();

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log(event);
    
    this.checkScreenSize();
  }

  private checkScreenSize() {
    const isSmall = window.innerWidth <= 992;
    this.isScreenSmall.next(isSmall);
  }
}
