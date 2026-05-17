import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { RuleCardComponent } from '../../../../components/rule-card/rule-card.component';
import { SignCardComponent } from '../../../../components/sign-card/sign-card.component';
import { ChapterNavigationComponent } from '../../../../components/chapter-navigation/chapter-navigation.component';
import { CHAPTER_6_DATA } from '../../../../data/chapter-6.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chapter6',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuleCardComponent, SignCardComponent, ChapterNavigationComponent, RouterLink],
  templateUrl: './chapter6.component.html',
  styleUrl: './chapter6.component.scss'
})
export class Chapter6Component {
  store = inject(AppStore);
  chapter = CHAPTER_6_DATA;
}
