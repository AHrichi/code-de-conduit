import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AppStore } from './store/app.store';
import { ProgressStore } from './store/progress.store';
import { NgClass } from '@angular/common';
import { PomodoroTimerComponent } from './components/pomodoro-timer/pomodoro-timer.component';
import { GlobalSearchComponent } from './components/global-search/global-search.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass, PomodoroTimerComponent, GlobalSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  store = inject(AppStore);
  progressStore = inject(ProgressStore);

  constructor() {
    this.progressStore.updateStreak();
  }
}
