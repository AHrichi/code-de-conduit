import { Component, inject, computed } from '@angular/core';
import { NgClass, NgFor, NgIf, PercentPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProgressStore } from '../../store/progress.store';
import { TestRecordStore } from '../../store/test-record.store';
import { Chapter } from '../../models/content.models';

// Import all chapter data
import { CHAPTER_1_DATA } from '../../data/chapter-1.data';
import { CHAPTER_2_DATA } from '../../data/chapter-2.data';
import { CHAPTER_3_DATA } from '../../data/chapter-3.data';
import { CHAPTER_4_DATA } from '../../data/chapter-4.data';
import { CHAPTER_5_DATA } from '../../data/chapter-5.data';
import { CHAPTER_6_DATA } from '../../data/chapter-6.data';
import { CHAPTER_7_DATA } from '../../data/chapter-7.data';
import { CHAPTER_8_DATA } from '../../data/chapter-8.data';
import { CHAPTER_9_DATA } from '../../data/chapter-9.data';
import { CHAPTER_10_DATA } from '../../data/chapter-10.data';
import { CHAPTER_11_DATA } from '../../data/chapter-11.data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, PercentPipe, DatePipe, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private progressStore = inject(ProgressStore);
  private testRecordStore = inject(TestRecordStore);

  // List of all chapters for iteration
  private chapters: Chapter[] = [
    CHAPTER_1_DATA, CHAPTER_2_DATA, CHAPTER_3_DATA, CHAPTER_4_DATA,
    CHAPTER_5_DATA, CHAPTER_6_DATA, CHAPTER_7_DATA, CHAPTER_8_DATA,
    CHAPTER_9_DATA, CHAPTER_10_DATA, CHAPTER_11_DATA
  ];

  /**
   * Calculates memorization progress for each chapter
   */
  chapterStats = computed(() => {
    const memorizedTitles = this.progressStore.memorizedList();
    
    return this.chapters.map(chapter => {
      let total = 0;
      let memorized = 0;

      chapter.sections.forEach(section => {
        section.items.forEach(item => {
          if (item.title) {
            total++;
            if (memorizedTitles.includes(item.title)) {
              memorized++;
            }
          }
        });
      });

      return {
        id: chapter.id,
        title: chapter.title,
        icon: chapter.icon,
        total,
        memorized,
        percentage: total > 0 ? (memorized / total) : 0
      };
    });
  });

  /**
   * Global Statistics
   */
  globalStats = computed(() => {
    const stats = this.chapterStats();
    const totalItems = stats.reduce((acc, curr) => acc + curr.total, 0);
    const totalMemorized = stats.reduce((acc, curr) => acc + curr.memorized, 0);
    
    return {
      totalItems,
      totalMemorized,
      percentage: totalItems > 0 ? (totalMemorized / totalItems) : 0,
      testsTaken: this.testRecordStore.recordHistory().length,
      avgScore: this.testRecordStore.averageScore()
    };
  });

  /**
   * Latest Test Records (Max 5)
   */
  recentTests = computed(() => {
    return this.testRecordStore.recordHistory().slice(0, 5);
  });
}
