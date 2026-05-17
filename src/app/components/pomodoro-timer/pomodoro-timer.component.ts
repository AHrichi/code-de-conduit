import { Component, ChangeDetectionStrategy, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pomodoro-timer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-black transition-all cursor-pointer shadow-sm select-none"
         [ngClass]="{
           'bg-red-500/10 border-red-500/20 text-red-600': mode() === 'work' && isRunning(),
           'bg-green-500/10 border-green-500/20 text-green-600': mode() === 'break' && isRunning(),
           'bg-slate-500/10 border-slate-500/20 text-slate-500': !isRunning()
         }"
         (click)="toggleTimer()"
         title="تقنية بومودورو (25 دقيقة دراسة / 5 دقائق راحة)">
      <i class="fa-solid" [ngClass]="mode() === 'work' ? 'fa-brain' : 'fa-mug-hot'"></i>
      <span class="font-mono tracking-widest w-12 text-center">{{ formatTime(timeRemaining()) }}</span>
      @if (!isRunning()) {
        <i class="fa-solid fa-play text-xs opacity-70"></i>
      } @else {
        <i class="fa-solid fa-pause text-xs opacity-70"></i>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PomodoroTimerComponent implements OnDestroy {
  WORK_TIME = 25 * 60;
  BREAK_TIME = 5 * 60;

  mode = signal<'work' | 'break'>('work');
  timeRemaining = signal<number>(this.WORK_TIME);
  isRunning = signal<boolean>(false);

  private interval: any;

  toggleTimer() {
    if (this.isRunning()) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.isRunning.set(true);
    this.interval = setInterval(() => {
      const current = this.timeRemaining();
      if (current > 0) {
        this.timeRemaining.set(current - 1);
      } else {
        // Switch modes
        if (this.mode() === 'work') {
          this.mode.set('break');
          this.timeRemaining.set(this.BREAK_TIME);
          new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3').play().catch(() => {});
        } else {
          this.mode.set('work');
          this.timeRemaining.set(this.WORK_TIME);
          new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3').play().catch(() => {});
        }
      }
    }, 1000);
  }

  pauseTimer() {
    this.isRunning.set(false);
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  ngOnDestroy() {
    this.pauseTimer();
  }
}
