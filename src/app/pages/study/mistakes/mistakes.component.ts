import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { AppStore } from '../../../store/app.store';
import { TEST_REGISTRY } from '../../../data/tests/test.registry';
import { QuizQuestion } from '../../../models/quiz.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mistakes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mistakes.component.html',
  styleUrl: './mistakes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MistakesComponent {
  store = inject(AppStore);

  // Compute the list of mistake questions by finding them in TEST_REGISTRY
  mistakeQuestions = computed(() => {
    const mistakes = this.store.mistakes();
    if (!mistakes) return [];
    
    // Combine all questions from all tests into a single array
    const allQuestions = Object.values(TEST_REGISTRY).flat();
    
    // Filter the questions that are in the mistakes array
    return allQuestions.filter(q => mistakes.includes(q.id));
  });

  removeMistake(id: string) {
    this.store.removeMistake(id);
  }
}
