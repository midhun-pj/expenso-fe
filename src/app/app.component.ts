import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

import { ScreenSizeService } from './services/screen-size.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isScreenSmall = signal(false);
  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit() {
    this.screenSizeService.screenSizeChange.subscribe((isSmall) => {
      this.isScreenSmall.set(isSmall);
    });
  }
}
