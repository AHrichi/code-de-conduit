import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CHAPTERS_DATA } from '../../data/chapters.data';

@Component({
  selector: 'app-report',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  chapters = signal(CHAPTERS_DATA);
  private sanitizer = inject(DomSanitizer);

  printReport(): void {
    window.print();
  }

  isSvg(content: string | undefined): boolean {
    return content?.trim().startsWith('<svg') ?? false;
  }

  sanitizeHtml(content: string | undefined): SafeHtml | null {
    if (!content) return null;
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
