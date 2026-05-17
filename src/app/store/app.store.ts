import { signalStore, withState, withMethods, patchState, withHooks } from '@ngrx/signals';
import { AppState, PastScore } from '../models/content.models';

const initialState: AppState = {
  theme: 'light',
  readingMode: false,
  pastScores: [],
  mistakes: [],
  studyState: {
    hideInformation: false,
  },
  testState: {
    activeTest: false,
    mode: 'standard',
    timeRemaining: null,
    currentQuestionIndex: 0,
    score: 0,
    answers: {},
  }
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    toggleHideInformation(): void {
      patchState(store, (state) => ({
        studyState: {
          ...state.studyState,
          hideInformation: !state.studyState.hideInformation
        }
      }));
    },
    
    startTest(mode: 'standard' | 'exam' | 'survival' = 'standard'): void {
      let initialTime = null;
      if (mode === 'exam') initialTime = 20 * 40; // Total 40 questions * 20s = 800s
      if (mode === 'survival') initialTime = 60; // Start with 60 seconds

      patchState(store, {
        testState: {
          activeTest: true,
          mode,
          timeRemaining: initialTime,
          currentQuestionIndex: 0,
          score: 0,
          answers: {}
        }
      });
    },

    updateTimeRemaining(time: number): void {
      patchState(store, (state) => ({
        testState: {
          ...state.testState,
          timeRemaining: time
        }
      }));
    },
    
    answerQuestion(questionId: string, answerIndex: number): void {
      patchState(store, (state) => ({
        testState: {
          ...state.testState,
          answers: {
            ...state.testState.answers,
            [questionId]: answerIndex
          }
        }
      }));
    },

    nextQuestion(): void {
      patchState(store, (state) => ({
        testState: {
          ...state.testState,
          currentQuestionIndex: state.testState.currentQuestionIndex + 1
        }
      }));
    },
    
    finishTest(score: number): void {
        patchState(store, (state) => ({
            testState: {
                ...state.testState,
                activeTest: false,
                score
            }
        }));
    },

    saveScore(pastScore: PastScore): void {
      patchState(store, (state) => {
        const newScores = [pastScore, ...state.pastScores];
        localStorage.setItem('pastScores', JSON.stringify(newScores));
        return { pastScores: newScores };
      });
    },

    toggleTheme(): void {
      patchState(store, (state) => {
        const newTheme: 'light' | 'dark' = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return { theme: newTheme };
      });
    },

    toggleReadingMode(): void {
      patchState(store, (state) => {
        const newReadingMode = !state.readingMode;
        localStorage.setItem('readingMode', String(newReadingMode));
        if (newReadingMode) {
          document.documentElement.classList.add('reading-mode');
        } else {
          document.documentElement.classList.remove('reading-mode');
        }
        return { readingMode: newReadingMode };
      });
    },

    addMistake(questionId: string): void {
      patchState(store, (state) => {
        const currentMistakes = state.mistakes || [];
        if (currentMistakes.includes(questionId)) return state;
        const newMistakes = [questionId, ...currentMistakes];
        localStorage.setItem('mistakes', JSON.stringify(newMistakes));
        return { mistakes: newMistakes };
      });
    },

    removeMistake(questionId: string): void {
      patchState(store, (state) => {
        const currentMistakes = state.mistakes || [];
        const newMistakes = currentMistakes.filter(id => id !== questionId);
        localStorage.setItem('mistakes', JSON.stringify(newMistakes));
        return { mistakes: newMistakes };
      });
    },

    loadFromStorage(): void {
      const theme = localStorage.getItem('theme') as 'light' | 'dark';
      if (theme) {
        patchState(store, { theme });
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      }
      const readingMode = localStorage.getItem('readingMode') === 'true';
      if (readingMode) {
        patchState(store, { readingMode });
        document.documentElement.classList.add('reading-mode');
      }
      const scores = localStorage.getItem('pastScores');
      if (scores) {
        try {
          patchState(store, { pastScores: JSON.parse(scores) });
        } catch (e) { }
      }
      const mistakes = localStorage.getItem('mistakes');
      if (mistakes) {
        try {
          patchState(store, { mistakes: JSON.parse(mistakes) });
        } catch (e) { }
      }
    }
  })),
  withHooks({
    onInit(store) {
      store.loadFromStorage();
    }
  })
);
