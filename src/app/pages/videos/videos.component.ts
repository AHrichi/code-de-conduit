import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  category: 'exam' | 'correction' | 'lesson';
  examNumber?: number;
  correctionFor?: number;
}

/** Answer choice: أ, ب, or ج */
type AnswerChoice = 'أ' | 'ب' | 'ج';

/** Correctness mark for correction review */
type CorrectnessMark = 'correct' | 'wrong';

/** Map of question number → chosen answer for one exam */
type ExamAnswerSheet = Record<number, AnswerChoice>;

/** Map of question number → correct/wrong mark */
type ExamCorrectnessSheet = Record<number, CorrectnessMark>;

/** All saved answer sheets keyed by exam number */
type AllExamAnswers = Record<number, ExamAnswerSheet>;

/** All correctness marks keyed by exam number */
type AllCorrectnessMarks = Record<number, ExamCorrectnessSheet>;

const QUESTIONS_PER_EXAM = 30;
const ANSWER_OPTIONS: AnswerChoice[] = ['أ', 'ب', 'ج'];

@Component({
  selector: 'app-videos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  private sanitizer = inject(DomSanitizer);
  private readonly STORAGE_KEY = 'watched_videos';
  private readonly ANSWERS_KEY = 'exam_answers';
  private readonly MARKS_KEY = 'exam_correctness';

  activeTab = signal<'exam' | 'correction' | 'lesson'>('exam');
  activeVideoId = signal<string | null>(null);
  watchedVideoIds = signal<string[]>(this.loadWatched());
  allAnswers = signal<AllExamAnswers>(this.loadAnswers());
  allMarks = signal<AllCorrectnessMarks>(this.loadMarks());

  /** Test mode: shows only the video + answer sheet in focused layout */
  testModeVideo = signal<VideoItem | null>(null);

  /** Cache for embed URLs to prevent iframe reload on re-render */
  private embedUrlCache = new Map<string, SafeResourceUrl>();

  /** Array [1..30] for the template */
  readonly questionNumbers = Array.from({ length: QUESTIONS_PER_EXAM }, (_, i) => i + 1);
  readonly answerOptions = ANSWER_OPTIONS;

  readonly videos: VideoItem[] = [
    // ── Mock Exams (17 exams) ──
    { id: 'ex-1',  title: 'امتحان 1',  youtubeId: 'cvM-JtCe5BU',  category: 'exam', examNumber: 1 },
    { id: 'ex-2',  title: 'امتحان 2',  youtubeId: 'uDsHKcdUmaU',  category: 'exam', examNumber: 2 },
    { id: 'ex-3',  title: 'امتحان 3',  youtubeId: 'D9DxISgP--s',  category: 'exam', examNumber: 3 },
    { id: 'ex-4',  title: 'امتحان 4',  youtubeId: 'R0UckTdGY6A',  category: 'exam', examNumber: 4 },
    { id: 'ex-5',  title: 'امتحان 5',  youtubeId: 'nJA6boVJ0r4',  category: 'exam', examNumber: 5 },
    { id: 'ex-6',  title: 'امتحان 6',  youtubeId: 'TXU9jaQKvXk',  category: 'exam', examNumber: 6 },
    { id: 'ex-7',  title: 'امتحان 7',  youtubeId: 'Bix-aNKpRxU',  category: 'exam', examNumber: 7 },
    { id: 'ex-8',  title: 'امتحان 8',  youtubeId: 'URL7TyOz8y4',  category: 'exam', examNumber: 8 },
    { id: 'ex-9',  title: 'امتحان 9',  youtubeId: '3RoCYkreswY',  category: 'exam', examNumber: 9 },
    { id: 'ex-10', title: 'امتحان 10', youtubeId: 'p7E1DgUyN7M',  category: 'exam', examNumber: 10 },
    { id: 'ex-11', title: 'امتحان 11', youtubeId: 'qH-_BxYZFQg',  category: 'exam', examNumber: 11 },
    { id: 'ex-12', title: 'امتحان 12', youtubeId: '056JSEKL8MM',  category: 'exam', examNumber: 12 },
    { id: 'ex-13', title: 'امتحان 13', youtubeId: 'DzpIFgBFkvI',  category: 'exam', examNumber: 13 },
    { id: 'ex-14', title: 'امتحان 14', youtubeId: 'oD1Ym9mATkE',  category: 'exam', examNumber: 14 },
    { id: 'ex-15', title: 'امتحان 15', youtubeId: 'nf198fmz5So',  category: 'exam', examNumber: 15 },
    { id: 'ex-16', title: 'امتحان 16', youtubeId: 'l642p6VcJGA',  category: 'exam', examNumber: 16 },
    { id: 'ex-17', title: 'امتحان 17', youtubeId: '9O61BEGB5NY',  category: 'exam', examNumber: 17 },

    // ── Exam Corrections (15 corrections) ──
    { id: 'cr-1',  title: 'إصلاح امتحان 1',  youtubeId: 'B-z_1L6bsS4',  category: 'correction', correctionFor: 1 },
    { id: 'cr-2',  title: 'إصلاح امتحان 2',  youtubeId: '1oabxh2Qu70',  category: 'correction', correctionFor: 2 },
    { id: 'cr-3',  title: 'إصلاح امتحان 3',  youtubeId: '6xXsoyChSww',  category: 'correction', correctionFor: 3 },
    { id: 'cr-4',  title: 'إصلاح امتحان 4',  youtubeId: 'admImEX77jc',  category: 'correction', correctionFor: 4 },
    { id: 'cr-5',  title: 'إصلاح امتحان 5',  youtubeId: 'IhscupEV6uY',  category: 'correction', correctionFor: 5 },
    { id: 'cr-6',  title: 'إصلاح امتحان 6',  youtubeId: 'Rw2hJE969pY',  category: 'correction', correctionFor: 6 },
    { id: 'cr-7',  title: 'إصلاح امتحان 7',  youtubeId: 'oIa7OSbh764',  category: 'correction', correctionFor: 7 },
    { id: 'cr-8',  title: 'إصلاح امتحان 8',  youtubeId: '10mHgYB5CSI',  category: 'correction', correctionFor: 8 },
    { id: 'cr-9',  title: 'إصلاح امتحان 9',  youtubeId: '2FzLVk-gXKc',  category: 'correction', correctionFor: 9 },
    { id: 'cr-10', title: 'إصلاح امتحان 10', youtubeId: 'sp5vXWxIMWQ',  category: 'correction', correctionFor: 10 },
    { id: 'cr-11', title: 'إصلاح امتحان 11', youtubeId: 'W8ZLg2wl3Cw',  category: 'correction', correctionFor: 11 },
    { id: 'cr-12', title: 'إصلاح امتحان 12', youtubeId: 'tXNlf67YXeI',  category: 'correction', correctionFor: 12 },
    { id: 'cr-13', title: 'إصلاح امتحان 13', youtubeId: 'xKBY4f7RR6E',  category: 'correction', correctionFor: 13 },
    { id: 'cr-14', title: 'إصلاح امتحان 14', youtubeId: 's3jIP1-lSKc',  category: 'correction', correctionFor: 14 },
    { id: 'cr-15', title: 'إصلاح امتحان 15', youtubeId: 'QqynO9H23N8',  category: 'correction', correctionFor: 15 },

    // ── Lessons (3 lessons) ──
    { id: 'ls-1', title: 'درس أساسي في قانون الطريق', youtubeId: 'hTYXgul6Gps', category: 'lesson' },
    { id: 'ls-2', title: 'درس قواعد الأولوية',          youtubeId: 'OTWzOKPtt88', category: 'lesson' },
    { id: 'ls-3', title: 'درس شامل في قانون الطريق',   youtubeId: 'zKHyvgpotyI', category: 'lesson' },
  ];

  filteredVideos = computed(() =>
    this.videos.filter(v => v.category === this.activeTab())
  );

  readonly tabs = computed(() => {
    const exams = this.videos.filter(v => v.category === 'exam');
    const corrections = this.videos.filter(v => v.category === 'correction');
    const lessons = this.videos.filter(v => v.category === 'lesson');
    const watched = this.watchedVideoIds();
    return [
      { key: 'exam' as const,       label: 'امتحانات تجريبية', icon: 'fa-file-video',       count: exams.length,       watched: exams.filter(v => watched.includes(v.id)).length },
      { key: 'correction' as const, label: 'إصلاح الامتحانات', icon: 'fa-pen-to-square',    count: corrections.length, watched: corrections.filter(v => watched.includes(v.id)).length },
      { key: 'lesson' as const,     label: 'دروس مصوّرة',      icon: 'fa-chalkboard-user',  count: lessons.length,     watched: lessons.filter(v => watched.includes(v.id)).length },
    ];
  });

  totalWatched = computed(() => this.watchedVideoIds().length);
  totalVideos = computed(() => this.videos.length);
  progressPercent = computed(() =>
    this.totalVideos() > 0 ? Math.round((this.totalWatched() / this.totalVideos()) * 100) : 0
  );

  // ── Video helpers ──

  getCorrectionFor(examNumber: number | undefined): VideoItem | undefined {
    if (!examNumber) return undefined;
    return this.videos.find(v => v.category === 'correction' && v.correctionFor === examNumber);
  }

  getExamFor(correctionFor: number | undefined): VideoItem | undefined {
    if (!correctionFor) return undefined;
    return this.videos.find(v => v.category === 'exam' && v.examNumber === correctionFor);
  }

  setActiveTab(tab: 'exam' | 'correction' | 'lesson'): void {
    this.activeTab.set(tab);
    this.activeVideoId.set(null);
  }

  getThumbnail(youtubeId: string): string {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  }

  /**
   * Returns a cached SafeResourceUrl for a youtube embed.
   * Caching prevents Angular from re-rendering the iframe on every change detection.
   */
  getEmbedUrl(youtubeId: string): SafeResourceUrl {
    let cached = this.embedUrlCache.get(youtubeId);
    if (!cached) {
      cached = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&autoplay=1`
      );
      this.embedUrlCache.set(youtubeId, cached);
    }
    return cached;
  }

  playVideo(videoId: string): void {
    this.activeVideoId.set(videoId === this.activeVideoId() ? null : videoId);
  }

  isPlaying(videoId: string): boolean {
    return this.activeVideoId() === videoId;
  }

  // ── Test Mode ──

  enterTestMode(video: VideoItem): void {
    this.testModeVideo.set(video);
  }

  exitTestMode(): void {
    this.testModeVideo.set(null);
  }

  /** Enter correction review mode: shows correction video + answer sheet side-by-side */
  enterCorrectionMode(video: VideoItem): void {
    this.testModeVideo.set(video);
  }

  // ── Watch tracking ──

  isWatched(videoId: string): boolean {
    return this.watchedVideoIds().includes(videoId);
  }

  toggleWatched(videoId: string, event: Event): void {
    event.stopPropagation();
    const current = this.watchedVideoIds();
    const updated = current.includes(videoId)
      ? current.filter(id => id !== videoId)
      : [...current, videoId];
    this.watchedVideoIds.set(updated);
    this.saveWatched(updated);
  }

  markAsWatched(videoId: string): void {
    if (this.isWatched(videoId)) return;
    const updated = [...this.watchedVideoIds(), videoId];
    this.watchedVideoIds.set(updated);
    this.saveWatched(updated);
  }

  private loadWatched(): string[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveWatched(ids: string[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ids));
  }

  // ── QCM Answer tracking ──

  getAnswerSheet(examNumber: number): ExamAnswerSheet {
    return this.allAnswers()[examNumber] || {};
  }

  getAnswer(examNumber: number, questionNum: number): AnswerChoice | undefined {
    return this.getAnswerSheet(examNumber)[questionNum];
  }

  getAnsweredCount(examNumber: number): number {
    return Object.keys(this.getAnswerSheet(examNumber)).length;
  }

  hasAnswers(examNumber: number): boolean {
    return this.getAnsweredCount(examNumber) > 0;
  }

  selectAnswer(examNumber: number, questionNum: number, choice: AnswerChoice): void {
    const all = { ...this.allAnswers() };
    const sheet = { ...(all[examNumber] || {}) };

    if (sheet[questionNum] === choice) {
      delete sheet[questionNum];
    } else {
      sheet[questionNum] = choice;
    }

    all[examNumber] = sheet;
    this.allAnswers.set(all);
    this.saveAnswers(all);
  }

  clearAnswers(examNumber: number): void {
    const all = { ...this.allAnswers() };
    delete all[examNumber];
    this.allAnswers.set(all);
    this.saveAnswers(all);
    // Also clear correctness marks
    const marks = { ...this.allMarks() };
    delete marks[examNumber];
    this.allMarks.set(marks);
    this.saveMarks(marks);
  }

  private loadAnswers(): AllExamAnswers {
    try {
      const data = localStorage.getItem(this.ANSWERS_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  private saveAnswers(answers: AllExamAnswers): void {
    localStorage.setItem(this.ANSWERS_KEY, JSON.stringify(answers));
  }

  // ── Correctness Marking (for correction review) ──

  getMark(examNumber: number, questionNum: number): CorrectnessMark | undefined {
    const sheet = this.allMarks()[examNumber];
    return sheet ? sheet[questionNum] : undefined;
  }

  toggleMark(examNumber: number, questionNum: number, mark: CorrectnessMark): void {
    const all = { ...this.allMarks() };
    const sheet = { ...(all[examNumber] || {}) };

    if (sheet[questionNum] === mark) {
      delete sheet[questionNum];
    } else {
      sheet[questionNum] = mark;
    }

    all[examNumber] = sheet;
    this.allMarks.set(all);
    this.saveMarks(all);
  }

  getCorrectCount(examNumber: number): number {
    const sheet = this.allMarks()[examNumber] || {};
    return Object.values(sheet).filter(m => m === 'correct').length;
  }

  getWrongCount(examNumber: number): number {
    const sheet = this.allMarks()[examNumber] || {};
    return Object.values(sheet).filter(m => m === 'wrong').length;
  }

  getMarkedCount(examNumber: number): number {
    const sheet = this.allMarks()[examNumber] || {};
    return Object.keys(sheet).length;
  }

  getScoreText(examNumber: number): string {
    const correct = this.getCorrectCount(examNumber);
    const total = this.getMarkedCount(examNumber);
    if (total === 0) return '';
    return `${correct}/${total}`;
  }

  private loadMarks(): AllCorrectnessMarks {
    try {
      const data = localStorage.getItem(this.MARKS_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  private saveMarks(marks: AllCorrectnessMarks): void {
    localStorage.setItem(this.MARKS_KEY, JSON.stringify(marks));
  }
}
