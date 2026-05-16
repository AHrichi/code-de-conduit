import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressStore {
  private readonly STORAGE_KEY = 'memorized_cards';
  
  // Signal containing the array of memorized item titles
  private memorizedTitles = signal<string[]>(this.loadFromStorage());

  // Publicly exposed signal
  readonly memorizedList = this.memorizedTitles.asReadonly();

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

  private saveToStorage(titles: string[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(titles));
  }
}
