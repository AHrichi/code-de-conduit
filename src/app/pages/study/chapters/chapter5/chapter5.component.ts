import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { RuleCardComponent } from '../../../../components/rule-card/rule-card.component';
import { PriorityCardComponent } from '../../../../components/priority-card/priority-card.component';
import { CHAPTER_5_DATA } from '../../../../data/chapter-5.data';

@Component({
  selector: 'app-chapter5',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuleCardComponent, PriorityCardComponent],
  templateUrl: './chapter5.component.html',
  styleUrl: './chapter5.component.scss'
})
export class Chapter5Component {
  store = inject(AppStore);
  chapter = CHAPTER_5_DATA;
}
