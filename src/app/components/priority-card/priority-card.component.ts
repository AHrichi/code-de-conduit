import { Component, ChangeDetectionStrategy, input, computed, inject, signal } from '@angular/core';
import { RuleItem } from '../../models/content.models';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { ProgressStore } from '../../store/progress.store';

@Component({
  selector: 'app-priority-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './priority-card.component.html',
  styleUrl: './priority-card.component.scss'
})
export class PriorityCardComponent {
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
  
  safeSvgUrl = computed<SafeUrl | null>(() => {
    const svg = this.data().imageOrSvg;
    if (!svg || !svg.startsWith('<svg')) return null;
    
    // We use a standard data URL to avoid innerHTML while still rendering the dynamic SVG
    const base64Svg = btoa(unescape(encodeURIComponent(svg)));
    return this.sanitizer.bypassSecurityTrustUrl(`data:image/svg+xml;base64,${base64Svg}`);
  });
}

