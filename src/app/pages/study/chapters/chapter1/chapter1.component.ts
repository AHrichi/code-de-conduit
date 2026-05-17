import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { RuleCardComponent } from '../../../../components/rule-card/rule-card.component';
import { DocumentBadgeComponent } from '../../../../components/document-badge/document-badge.component';
import { CHAPTER_1_DATA } from '../../../../data/chapter-1.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chapter1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuleCardComponent, DocumentBadgeComponent, RouterLink],
  templateUrl: './chapter1.component.html',
  styleUrl: './chapter1.component.scss'
})
export class Chapter1Component {
  private readonly store = inject(AppStore);
  readonly hideInfo = this.store.studyState.hideInformation;
  readonly chapter = CHAPTER_1_DATA;
}

