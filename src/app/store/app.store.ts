import { signalStore, withState, withMethods, patchState, withHooks } from '@ngrx/signals';
import { AppState, PastScore } from '../models/content.models';

const initialState: AppState = {
  theme: 'light',
  pastScores: [],
  studyState: {
    hideInformation: false,
  },
  testState: {
    activeTest: false,
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
    
    startTest(): void {
      patchState(store, {
        testState: {
          activeTest: true,
          currentQuestionIndex: 0,
          score: 0,
          answers: {}
        }
      });
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

    loadFromStorage(): void {
      const theme = localStorage.getItem('theme') as 'light' | 'dark';
      if (theme) {
        patchState(store, { theme });
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      }
      const scores = localStorage.getItem('pastScores');
      if (scores) {
        try {
          patchState(store, { pastScores: JSON.parse(scores) });
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
