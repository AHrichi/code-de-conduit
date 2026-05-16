import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-chapter-navigation',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './chapter-navigation.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ChapterNavigationComponent {
  // We use the ID as a number to calculate prev/next
  currentChapterId = input.required<number>();

  prevChapterId = computed(() => {
    const id = this.currentChapterId();
    return id > 1 ? id - 1 : null;
  });

  nextChapterId = computed(() => {
    const id = this.currentChapterId();
    return id < 11 ? id + 1 : null;
  });
}
