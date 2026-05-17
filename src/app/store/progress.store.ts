import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressStore {
  private readonly STORAGE_KEY = 'memorized_cards';
  private readonly STREAK_KEY = 'daily_streak';
  private readonly LAST_STUDY_DATE_KEY = 'last_study_date';
  
  // Signal containing the array of memorized item titles
  private memorizedTitles = signal<string[]>(this.loadFromStorage());
  private streak = signal<number>(this.loadStreakFromStorage());

  // Publicly exposed signals
  readonly memorizedList = this.memorizedTitles.asReadonly();
  readonly dailyStreak = this.streak.asReadonly();

  /**
   * Toggles the memorized state of a card based on its unique title
   */
  toggleMemorized(title: string | undefined): void {
    if (!title) return;
    const current = this.memorizedTitles();
    const index = current.indexOf(title);
    
    let newList: string[];
    if (index > -1) {
      newList = current.filter(t => t !== title);
    } else {
      newList = [...current, title];
    }
    
    this.memorizedTitles.set(newList);
    this.saveToStorage(newList);
  }

  /**
   * Checks if a specific title is memorized
   * Returns a function that returns a boolean (to be used in computed signals)
   */
  isMemorized(title: string | undefined): boolean {
    if (!title) return false;
    return this.memorizedTitles().includes(title);
  }

  /**
   * Updates the daily study streak based on the current date
   */
  updateStreak(): void {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem(this.LAST_STUDY_DATE_KEY);

    if (lastDate === today) {
      // Already studied today, do nothing
      return;
    }

    let currentStreak = this.streak();

    if (lastDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastDate === yesterday.toDateString()) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }
    } else {
      currentStreak = 1;
    }

    this.streak.set(currentStreak);
    localStorage.setItem(this.STREAK_KEY, currentStreak.toString());
    localStorage.setItem(this.LAST_STUDY_DATE_KEY, today);
  }

  private loadFromStorage(): string[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) return [];
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse progress data', e);
      return [];
    }
  }

  private loadStreakFromStorage(): number {
    const streakStr = localStorage.getItem(this.STREAK_KEY);
    return streakStr ? parseInt(streakStr, 10) : 0;
  }

  private saveToStorage(titles: string[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(titles));
  }
}
