import { Injectable, signal, computed } from '@angular/core';
import { TestRecord } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class TestRecordStore {
  private readonly STORAGE_KEY = 'test_records';
  
  // Signal containing the history of test records
  private records = signal<TestRecord[]>(this.loadFromStorage());

  // Publicly exposed signal
  readonly recordHistory = this.records.asReadonly();

  /**
   * Calculates the average score percentage across all tests
   */
  averageScore = computed(() => {
    const currentRecords = this.records();
    if (currentRecords.length === 0) return 0;
    
    const totalScore = currentRecords.reduce((acc, rec) => acc + (rec.score / rec.totalQuestions), 0);
    return Math.round((totalScore / currentRecords.length) * 100);
  });

  /**
   * Saves a new test result to the history and localStorage
   */
  saveTestResult(testName: string, score: number, total: number): void {
    const newRecord: TestRecord = {
      id: `rec-${Date.now()}`,
      testName,
      dateTaken: Date.now(),
      score,
      totalQuestions: total
    };

    const updatedRecords = [newRecord, ...this.records()];
    this.records.set(updatedRecords);
    this.saveToStorage(updatedRecords);
  }

  private loadFromStorage(): TestRecord[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) return [];
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to load test records', e);
      return [];
    }
  }

  private saveToStorage(records: TestRecord[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(records));
  }
}
