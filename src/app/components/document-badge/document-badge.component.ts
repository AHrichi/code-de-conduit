import { Component, input, signal, inject, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { ProgressStore } from '../../store/progress.store';

@Component({
  selector: 'app-document-badge',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="document-badge relative group flex items-center gap-3 px-5 py-3 rounded-xl border-2 transition-all duration-300"
         [ngClass]="{
           'border-green-500 bg-green-50 opacity-80': isMemorized(),
           'border-color bg-card hover:border-primary hover:shadow-md': !isMemorized(),
           'cursor-pointer': hideInformation()
         }"
         (mouseenter)="isRevealed.set(true)"
         (mouseleave)="isRevealed.set(false)"
         (click)="isRevealed.set(!isRevealed())">
      
      <!-- Memorization Toggle -->
      <button 
        class="absolute -top-2 -left-2 z-10 w-6 h-6 rounded-full bg-card border shadow-sm flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        [ngClass]="isMemorized() ? 'text-green-600 border-green-500' : 'text-muted border-color hover:text-green-500'"
        (click)="toggleMemorized($event)">
        <i [class]="isMemorized() ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-check'"></i>
      </button>

      <div class="content flex items-center gap-3 transition-all duration-300"
           [ngClass]="{'blur-md select-none opacity-20': hideInformation() && !isRevealed()}">
        @if (icon()) {
          <i class="fa-solid text-primary text-lg" [class]="icon()"></i>
        }
        <span class="font-black text-heading text-sm md:text-base">{{ title() }}</span>
      </div>

      @if (hideInformation() && !isRevealed()) {
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <i class="fa-solid fa-eye-slash text-primary/40 text-sm"></i>
        </div>
      }
    </div>
  `,
  styles: [`
    :host { display: inline-block; }
    .document-badge {
      user-select: none;
    }
  `]
})
export class DocumentBadgeComponent {
  title = input.required<string>();
  icon = input<string>();
  hideInformation = input<boolean>(false);
  isRevealed = signal(false);

  private progressStore = inject(ProgressStore);
  isMemorized = computed(() => this.progressStore.isMemorized(this.title()));

  toggleMemorized(event: Event): void {
    event.stopPropagation();
    this.progressStore.toggleMemorized(this.title());
  }
}
