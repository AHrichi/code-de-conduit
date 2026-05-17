import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { RuleCardComponent } from '../../../../components/rule-card/rule-card.component';
import { CHAPTER_4_DATA } from '../../../../data/chapter-4.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chapter4',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuleCardComponent, RouterLink],
  templateUrl: './chapter4.component.html',
  styleUrl: './chapter4.component.scss'
})
export class Chapter4Component {
  store = inject(AppStore);
  chapter = CHAPTER_4_DATA;
}
