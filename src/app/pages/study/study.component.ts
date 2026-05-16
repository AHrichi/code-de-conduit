import { Component, ChangeDetectionStrategy, inject, signal, computed, OnInit, DestroyRef } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { AppStore } from '../../store/app.store';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface ChapterNavItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-study',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './study.component.html',
  styleUrl: './study.component.scss'
})
export class StudyComponent implements OnInit {
  store = inject(AppStore);
  router = inject(Router);
  destroyRef = inject(DestroyRef);

  sidebarOpen = signal(true);
  currentUrl = signal('');
  isFullScreen = signal(false);

  chapters = signal<ChapterNavItem[]>([
    { path: 'chapter-1', label: '1. القواعد العامة (الرخص، الأوزان، والفحص الفني)', icon: 'fa-id-card' },
    { path: 'chapter-2', label: '2. التربص، السرعة، وظروف السياقة', icon: 'fa-gauge-high' },
    { path: 'chapter-3', label: '3. تجهيزات العربة، الحمولة، والإضاءة', icon: 'fa-lightbulb' },
    { path: 'chapter-4', label: '4. المسافات، قوانين الفيزياء والفرملة', icon: 'fa-calculator' },
    { path: 'chapter-5', label: '5. الجولان وقواعد الأولوية', icon: 'fa-traffic-light' },
    { path: 'chapter-6', label: '6. الوقوف والتوقف', icon: 'fa-square-parking' },
    { path: 'chapter-7', label: '7. المقاطعة والمجاوزة', icon: 'fa-arrows-turn-right' },
    { path: 'chapter-8', label: '8. الصيانة الوقائية والتحكم في الطاقة', icon: 'fa-wrench' },
    { path: 'chapter-9', label: '9. الإسعافات الأولية', icon: 'fa-kit-medical' },
    { path: 'chapter-10', label: '10. نظام النقاط والمخالفات', icon: 'fa-gavel' },
    { path: 'chapter-11', label: '11. الدليل المرئي لعلامات المرور', icon: 'fa-signs-post' },
  ]);

  ngOnInit() {
    this.currentUrl.set(this.router.url);
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((e: any) => {
      this.currentUrl.set(e.urlAfterRedirects || e.url);
    });

    document.addEventListener('fullscreenchange', () => {
      this.isFullScreen.set(!!document.fullscreenElement);
      if (document.fullscreenElement) {
        this.sidebarOpen.set(false);
      }
    });
  }

  async toggleFullScreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.error('Error attempting to toggle fullscreen', err);
    }
  }

  currentChapterIndex = computed(() => {
    const url = this.currentUrl();
    return this.chapters().findIndex(ch => url.includes(ch.path));
  });

  prevChapter = computed(() => {
    const idx = this.currentChapterIndex();
    return idx > 0 ? this.chapters()[idx - 1] : null;
  });

  nextChapter = computed(() => {
    const idx = this.currentChapterIndex();
    return idx >= 0 && idx < this.chapters().length - 1 ? this.chapters()[idx + 1] : null;
  });

  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }
}
