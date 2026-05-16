import { Component, ChangeDetectionStrategy, input, computed, inject, signal } from '@angular/core';
import { RuleItem } from '../../models/content.models';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ProgressStore } from '../../store/progress.store';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './sign-card.component.html',
  styleUrl: './sign-card.component.scss'
})
export class SignCardComponent {
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

  isSvg = computed(() => this.data().imageOrSvg?.startsWith('<svg') ?? false);
  
  safeSvgUrl = computed<SafeHtml | null>(() => {
    const svg = this.data().imageOrSvg;
    if (!svg || !svg.startsWith('<svg')) return null;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  });

  getCategoryLabel = computed(() => {
    switch (this.data().signCategory) {
      case 'danger': return 'علامات الخطر';
      case 'priority': return 'علامات الأولوية';
      case 'prohibition': return 'علامات المنع';
      case 'obligation': return 'علامات الإجبار';
      case 'indication': return 'علامات الإرشاد';
      default: return '';
    }
  });

  borderColorClass = computed(() => {
    switch (this.data().signCategory) {
      case 'danger': return 'border-red-200';
      case 'priority': return 'border-orange-200';
      case 'prohibition': return 'border-slate-300';
      case 'obligation': return 'border-blue-200';
      case 'indication': return 'border-green-200';
      default: return 'border-yellow-400 bg-yellow-50';
    }
  });
}


