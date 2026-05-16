import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { RuleCardComponent } from '../../../../components/rule-card/rule-card.component';
import { NgClass } from '@angular/common';
import { CHAPTER_2_DATA } from '../../../../data/chapter-2.data';
import { ProgressStore } from '../../../../store/progress.store';

@Component({
  selector: 'app-chapter2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuleCardComponent, NgClass],
  templateUrl: './chapter2.component.html',
  styleUrl: './chapter2.component.scss'
})
export class Chapter2Component {
  private readonly store = inject(AppStore);
  readonly hideInfo = this.store.studyState.hideInformation;
  readonly chapter = CHAPTER_2_DATA;
  readonly isTableRevealed = signal(false);
  readonly isTraineeRevealed = signal(false);

  private readonly progressStore = inject(ProgressStore);

  isMemorized(title: string): boolean {
    return this.progressStore.isMemorized(title);
  }

  toggleMemorized(event: Event, title: string): void {
    event.stopPropagation();
    this.progressStore.toggleMemorized(title);
  }
}

