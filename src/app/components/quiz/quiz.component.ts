import { Component, signal, computed, inject } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuizQuestion, QuizOption } from '../../models/quiz.model';
import { TEST_1_DATA } from '../../data/test-1.data';
import { TestRecordStore } from '../../store/test-record.store';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, RouterLink],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  private recordStore = inject(TestRecordStore);

  // Quiz State
  questions = signal<QuizQuestion[]>(TEST_1_DATA);
  currentIndex = signal(0);
  score = signal(0);
  isFinished = signal(false);
  selectedOptionId = signal<string | null>(null);
  showExplanation = signal(false);

  // Computed Values
  currentQuestion = computed(() => this.questions()[this.currentIndex()]);
  progress = computed(() => ((this.currentIndex() + 1) / this.questions().length) * 100);
  isLastQuestion = computed(() => this.currentIndex() === this.questions().length - 1);

  /**
   * Handles user selecting an option
   */
  selectOption(option: QuizOption): void {
    if (this.selectedOptionId()) return; // Prevent multiple selections

    this.selectedOptionId.set(option.id);
    this.showExplanation.set(true);

    if (option.isCorrect) {
      this.score.update(s => s + 1);
    }
  }

  /**
   * Moves to next question or finishes test
   */
  nextQuestion(): void {
    if (this.isLastQuestion()) {
      this.finishTest();
    } else {
      this.currentIndex.update(i => i + 1);
      this.selectedOptionId.set(null);
      this.showExplanation.set(false);
    }
  }

  /**
   * Saves results and shows finish screen
   */
  finishTest(): void {
    this.isFinished.set(true);
    this.recordStore.saveTestResult('التمرين الأول', this.score(), this.questions().length);
  }

  /**
   * Resets the quiz state
   */
  resetQuiz(): void {
    this.currentIndex.set(0);
    this.score.set(0);
    this.isFinished.set(false);
    this.selectedOptionId.set(null);
    this.showExplanation.set(false);
  }

  /**
   * Returns CSS classes for option buttons based on selection state
   */
  getOptionClass(option: QuizOption): string {
    const selectedId = this.selectedOptionId();
    if (!selectedId) return 'bg-card border-color hover:border-primary hover:shadow-md';

    if (option.isCorrect) return 'bg-success text-white border-success shadow-lg scale-[1.02]';
    if (selectedId === option.id && !option.isCorrect) return 'bg-danger text-white border-danger shadow-md';
    
    return 'bg-card border-color opacity-60 grayscale-[0.5]';
  }
}
