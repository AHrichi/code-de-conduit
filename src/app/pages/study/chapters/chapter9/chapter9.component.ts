import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { RuleCardComponent } from '../../../../components/rule-card/rule-card.component';
import { CHAPTER_9_DATA } from '../../../../data/chapter-9.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chapter9',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuleCardComponent, RouterLink],
  templateUrl: './chapter9.component.html',
  styleUrl: './chapter9.component.scss'
})
export class Chapter9Component {
  store = inject(AppStore);
  chapter = CHAPTER_9_DATA;
}
