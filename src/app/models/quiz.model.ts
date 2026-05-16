export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  imageOrSvg?: string;
  options: QuizOption[];
  explanation: string;
}

export interface TestRecord {
  id: string;
  testName: string;
  dateTaken: number; // timestamp
  score: number;
  totalQuestions: number;
}
