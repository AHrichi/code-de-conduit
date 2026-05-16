import { Component, ChangeDetectionStrategy, input, computed, inject, signal } from '@angular/core';
import { RuleItem } from '../../models/content.models';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ProgressStore } from '../../store/progress.store';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-rule-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './rule-card.component.html',
  styleUrl: './rule-card.component.scss'
})
export class RuleCardComponent {
  private sanitizer = inject(DomSanitizer);
  data = input.required<RuleItem>();
  hideInformation = input<boolean>(false);
  isRevealed = signal(false);

  private progressStore = inject(ProgressStore);
  isMemorized = computed(() => this.progressStore.isMemorized(this.data().title));

  toggleMemorized(event: Event): void {
    event.stopPropagation();
    this.progressStore.toggleMemorized(this.data().title);
  }

  isSvg = computed(() => this.data().imageOrSvg?.trim().startsWith('<svg') ?? false);
  
  safeSvgUrl = computed<SafeHtml | null>(() => {
    const svg = this.data().imageOrSvg;
    if (!svg || !this.isSvg()) return null;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  });

  alertColorClass = computed(() => {
    switch (this.data().alertType) {
      case 'danger': return 'bg-danger-light border-danger text-danger';
      case 'warning': return 'bg-warning-light border-warning text-warning';
      case 'success': return 'bg-success-light border-success text-success';
      case 'info': return 'bg-info-light border-info text-info';
      default: return 'bg-card border-color text-heading';
    }
  });
  
  iconClass = computed(() => {
    switch (this.data().alertType) {
      case 'danger': return 'text-danger';
      case 'warning': return 'text-warning';
      case 'success': return 'text-success';
      case 'info': return 'text-info';
      default: return 'text-muted';
    }
  });
}

