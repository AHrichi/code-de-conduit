import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { RuleCardComponent } from '../../../../components/rule-card/rule-card.component';
import { CHAPTER_10_DATA } from '../../../../data/chapter-10.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chapter10',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuleCardComponent, RouterLink],
  templateUrl: './chapter10.component.html',
  styleUrl: './chapter10.component.scss'
})
export class Chapter10Component {
  store = inject(AppStore);
  chapter = CHAPTER_10_DATA;
}
