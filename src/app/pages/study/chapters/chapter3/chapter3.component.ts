import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { RuleCardComponent } from '../../../../components/rule-card/rule-card.component';
import { CHAPTER_3_DATA } from '../../../../data/chapter-3.data';

@Component({
  selector: 'app-chapter3',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuleCardComponent],
  templateUrl: './chapter3.component.html',
  styleUrl: './chapter3.component.scss'
})
export class Chapter3Component {
  store = inject(AppStore);
  chapter = CHAPTER_3_DATA;
}
