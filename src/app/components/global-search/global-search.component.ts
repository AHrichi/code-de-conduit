import { Component, ChangeDetectionStrategy, signal, computed, ElementRef, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CHAPTERS_DATA } from '../../data/chapters.data';

@Component({
  selector: 'app-global-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="relative z-50">
      <div class="flex items-center bg-slate-500/10 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary transition-all">
        <i class="fa-solid fa-search text-muted mr-2"></i>
        <input type="text"
               placeholder="ابحث عن إشارة أو قاعدة... (مثال: كحول)"
               class="bg-transparent border-none outline-none text-sm w-48 focus:w-64 transition-all text-heading placeholder-muted"
               [ngModel]="searchQuery()"
               (ngModelChange)="onSearchChange($event)"
               (focus)="isFocused.set(true)">
        @if (searchQuery()) {
          <button (click)="clearSearch()" class="text-muted hover:text-danger ml-2">
            <i class="fa-solid fa-times-circle"></i>
          </button>
        }
      </div>

      @if (isFocused() && searchQuery().length >= 2) {
        <div class="absolute top-full left-0 right-0 mt-2 bg-card border border-border-color rounded-xl shadow-xl max-h-96 overflow-y-auto w-80">
          @if (searchResults().length === 0) {
            <div class="p-6 text-center text-muted">
              <i class="fa-solid fa-face-frown text-3xl mb-2 opacity-50"></i>
              <p>لم يتم العثور على نتائج لـ "{{ searchQuery() }}"</p>
            </div>
          } @else {
            <div class="p-2 space-y-1">
              <div class="text-xs font-bold text-muted px-3 py-1 mb-1">النتائج ({{ searchResults().length }})</div>
              @for (res of searchResults(); track res.item.id) {
                <button (click)="navigateTo(res.chapterId)" 
                        class="w-full text-right p-3 rounded-lg hover:bg-slate-500/10 transition-colors flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <i class="fa-solid" [ngClass]="res.item.icon || 'fa-book'"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-heading leading-tight">{{ res.item.title || res.item.description || 'قاعدة' }}</h4>
                    <p class="text-xs text-muted mt-1 truncate max-w-[200px]">{{ res.chapterTitle }} > {{ res.sectionTitle }}</p>
                  </div>
                </button>
              }
            </div>
          }
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalSearchComponent {
  private router = inject(Router);
  private eRef = inject(ElementRef);

  searchQuery = signal('');
  isFocused = signal(false);

  // Flatten the chapters data for searching
  allSearchableItems = computed(() => {
    const items: any[] = [];
    CHAPTERS_DATA.forEach(chapter => {
      chapter.sections.forEach(section => {
        section.items.forEach(item => {
          items.push({
            chapterId: chapter.id,
            chapterTitle: chapter.title,
            sectionTitle: section.title,
            item: item
          });
        });
      });
    });
    return items;
  });

  searchResults = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (query.length < 2) return [];

    return this.allSearchableItems().filter(res => {
      const titleMatch = res.item.title?.toLowerCase().includes(query);
      const descMatch = res.item.description?.toLowerCase().includes(query);
      const categoryMatch = res.item.category?.toLowerCase().includes(query);
      return titleMatch || descMatch || categoryMatch;
    }).slice(0, 8); // limit to 8 results
  });

  onSearchChange(val: string) {
    this.searchQuery.set(val);
  }

  clearSearch() {
    this.searchQuery.set('');
    this.isFocused.set(false);
  }

  navigateTo(chapterId: string) {
    this.clearSearch();
    this.router.navigate(['/study', chapterId]);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isFocused.set(false);
    }
  }
}
