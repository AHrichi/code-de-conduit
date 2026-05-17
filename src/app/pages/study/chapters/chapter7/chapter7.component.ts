import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { RuleCardComponent } from '../../../../components/rule-card/rule-card.component';
import { SignCardComponent } from '../../../../components/sign-card/sign-card.component';
import { CHAPTER_7_DATA } from '../../../../data/chapter-7.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chapter7',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuleCardComponent, SignCardComponent, RouterLink],
  templateUrl: './chapter7.component.html',
  styleUrl: './chapter7.component.scss'
})
export class Chapter7Component {
  store = inject(AppStore);
  chapter = CHAPTER_7_DATA;
}
