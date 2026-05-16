import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppStore } from '../../../../store/app.store';
import { SignCardComponent } from '../../../../components/sign-card/sign-card.component';
import { CHAPTER_11_DATA } from '../../../../data/chapter-11.data';

@Component({
  selector: 'app-chapter11',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignCardComponent],
  templateUrl: './chapter11.component.html',
  styleUrl: './chapter11.component.scss'
})
export class Chapter11Component {
  store = inject(AppStore);
  chapter = CHAPTER_11_DATA;
}
