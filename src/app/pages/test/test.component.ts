import { Component, ChangeDetectionStrategy, inject, OnInit, computed } from '@angular/core';
import { AppStore } from '../../store/app.store';
import { GENERAL_QUIZ_DATA } from '../../data/quiz.data';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgOptimizedImage, DatePipe } from '@angular/common';

@Component({
  selector: 'app-test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, NgClass, NgOptimizedImage, DatePipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  store = inject(AppStore);
  private fb = inject(FormBuilder);
  
  // Expose the quiz data to the template
  questions = GENERAL_QUIZ_DATA;
  
  testForm = this.fb.group({});
  
  hasSubmitted = computed(() => !this.store.testState.activeTest() && this.store.testState.score() > 0 || Object.keys(this.store.testState.answers()).length > 0 && !this.store.testState.activeTest());

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.questions.forEach(q => {
      this.testForm.addControl(q.id, this.fb.control<number | null>(null, Validators.required));
    });
  }

  startTest() {
    this.store.startTest();
    this.testForm.reset();
  }

  submitTest() {
    if (this.testForm.invalid) {
      this.testForm.markAllAsTouched();
      return;
    }

    let score = 0;
    const formValues = this.testForm.value as Record<string, number>;
    
    this.questions.forEach(q => {
      this.store.answerQuestion(q.id, formValues[q.id]);
      if (formValues[q.id] === q.correctAnswerIndex) {
        score++;
      }
    });

    this.store.finishTest(score);
    this.store.saveScore({
      date: new Date().toISOString(),
      score,
      total: this.questions.length
    });
  }

  get isPassed(): boolean {
    return this.store.testState.score() >= (this.questions.length * 0.8);
  }
}
