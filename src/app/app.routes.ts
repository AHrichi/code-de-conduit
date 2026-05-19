import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'study',
    loadComponent: () => import('./pages/study/study.component').then(m => m.StudyComponent),
    children: [
      { path: '', redirectTo: 'chapter-1', pathMatch: 'full' },
      { path: 'chapter-1', loadComponent: () => import('./pages/study/chapters/chapter1/chapter1.component').then(m => m.Chapter1Component) },
      { path: 'chapter-2', loadComponent: () => import('./pages/study/chapters/chapter2/chapter2.component').then(m => m.Chapter2Component) },
      { path: 'chapter-3', loadComponent: () => import('./pages/study/chapters/chapter3/chapter3.component').then(m => m.Chapter3Component) },
      { path: 'chapter-4', loadComponent: () => import('./pages/study/chapters/chapter4/chapter4.component').then(m => m.Chapter4Component) },
      { path: 'chapter-5', loadComponent: () => import('./pages/study/chapters/chapter5/chapter5.component').then(m => m.Chapter5Component) },
      { path: 'chapter-6', loadComponent: () => import('./pages/study/chapters/chapter6/chapter6.component').then(m => m.Chapter6Component) },
      { path: 'chapter-7', loadComponent: () => import('./pages/study/chapters/chapter7/chapter7.component').then(m => m.Chapter7Component) },
      { path: 'chapter-8', loadComponent: () => import('./pages/study/chapters/chapter8/chapter8.component').then(m => m.Chapter8Component) },
      { path: 'chapter-9', loadComponent: () => import('./pages/study/chapters/chapter9/chapter9.component').then(m => m.Chapter9Component) },
      { path: 'chapter-10', loadComponent: () => import('./pages/study/chapters/chapter10/chapter10.component').then(m => m.Chapter10Component) },
      { path: 'chapter-11', loadComponent: () => import('./pages/study/chapters/chapter11/chapter11.component').then(m => m.Chapter11Component) },
      { path: 'mistakes', loadComponent: () => import('./pages/study/mistakes/mistakes.component').then(m => m.MistakesComponent) },
      { path: 'flashcards', loadComponent: () => import('./pages/study/flashcards/flashcards.component').then(m => m.FlashcardsComponent) }
    ]
  },
  { path: 'test', loadComponent: () => import('./pages/test/test.component').then(m => m.TestComponent) },
  { path: 'test/:id', loadComponent: () => import('./pages/test/test.component').then(m => m.TestComponent) },
  { path: 'report', loadComponent: () => import('./pages/report/report.component').then(m => m.ReportComponent) },
  { path: 'videos', loadComponent: () => import('./pages/videos/videos.component').then(m => m.VideosComponent) },
  { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'quiz', loadComponent: () => import('./components/quiz/quiz.component').then(m => m.QuizComponent) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];
