import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { RuleCardComponent } from '../../../../components/rule-card/rule-card.component';
import { CHAPTER_8_DATA } from '../../../../data/chapter-8.data';

@Component({
  selector: 'app-chapter8',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuleCardComponent],
  templateUrl: './chapter8.component.html',
  styleUrl: './chapter8.component.scss'
})
export class Chapter8Component {
  store = inject(AppStore);
  chapter = CHAPTER_8_DATA;
}
