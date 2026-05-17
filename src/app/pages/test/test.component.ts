import { Component, ChangeDetectionStrategy, inject, OnInit, OnDestroy, computed } from '@angular/core';
import { AppStore } from '../../store/app.store';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgOptimizedImage, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TEST_REGISTRY } from '../../data/tests/test.registry';
import { QuizQuestion } from '../../models/content.models';

@Component({
  selector: 'app-test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, NgClass, NgOptimizedImage, DatePipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit, OnDestroy {
  store = inject(AppStore);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  
  // Expose the quiz data to the template
  questions: QuizQuestion[] = [];
  testId: string = 'general';
  
  testForm = this.fb.group({});
  private timerInterval: any;
  private previousAnswers: Record<string, number> = {};
  
  hasSubmitted = computed(() => !this.store.testState.activeTest() && this.store.testState.score() > 0 || Object.keys(this.store.testState.answers()).length > 0 && !this.store.testState.activeTest());

  ngOnInit() {
    this.testId = this.route.snapshot.paramMap.get('id') || 'general';
    this.questions = TEST_REGISTRY[this.testId] || TEST_REGISTRY['general'];

    this.initForm();
    this.setupSurvivalMode();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  setupSurvivalMode() {
    this.testForm.valueChanges.subscribe(values => {
      if (this.store.testState.mode() !== 'survival' || !this.store.testState.activeTest()) return;
      
      let currentTime = this.store.testState.timeRemaining() || 0;
      let changed = false;

      Object.keys(values).forEach(key => {
        const formValues = values as Record<string, any>;
        if (formValues[key] !== null && formValues[key] !== this.previousAnswers[key]) {
          const q = this.questions.find(x => x.id === key);
          if (q) {
            if (formValues[key] === q.correctAnswerIndex) {
              currentTime += 5;
            } else {
              currentTime -= 10;
            }
          }
          this.previousAnswers[key] = formValues[key];
          changed = true;
        }
      });
      
      if (changed) {
        this.store.updateTimeRemaining(Math.max(0, currentTime));
      }
    });
  }

  initForm() {
    this.questions.forEach(q => {
      this.testForm.addControl(q.id, this.fb.control<number | null>(null, Validators.required));
    });
  }

  startTest(mode: 'standard' | 'exam' | 'survival' = 'standard') {
    this.store.startTest(mode);
    this.testForm.reset();
    this.previousAnswers = {};
    this.clearTimer();

    if (mode === 'exam' || mode === 'survival') {
      this.timerInterval = setInterval(() => {
        const remaining = this.store.testState.timeRemaining();
        if (remaining !== null) {
          if (remaining <= 0) {
            this.clearTimer();
            this.forceSubmitTest();
          } else {
            this.store.updateTimeRemaining(remaining - 1);
          }
        }
      }, 1000);
    }
  }

  forceSubmitTest() {
    // If time runs out, mark all as touched and submit what they have
    this.submitTest(true);
  }

  submitTest(forced = false) {
    if (this.testForm.invalid && !forced) {
      this.testForm.markAllAsTouched();
      return;
    }

    this.clearTimer();

    let score = 0;
    const formValues = this.testForm.value as Record<string, number>;
    
    this.questions.forEach(q => {
      this.store.answerQuestion(q.id, formValues[q.id]);
      if (formValues[q.id] === q.correctAnswerIndex) {
        score++;
        this.store.removeMistake(q.id); // Remove if they got it right this time!
      } else {
        this.store.addMistake(q.id); // Add to mistakes bank if wrong
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
