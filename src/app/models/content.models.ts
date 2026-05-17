export interface Chapter {
  id: string;
  title: string;
  icon?: string;
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  icon?: string;
  type: 'general' | 'speed-table' | 'priority-scenario' | 'document-list' | 'signs-grid' | 'rules-list';
  items: RuleItem[];
}

export interface RuleItem {
  id: string;
  title?: string;
  description?: string;
  icon?: string;
  imageOrSvg?: string;
  alertType?: 'info' | 'warning' | 'danger' | 'success';
  alertMessage?: string;
  category?: string;
  solution?: string;
  
  // Specific data for priority scenarios
  priorityScenario?: {
    cars: { id: number; color: string; label: string }[];
    solutionOrder: number[]; // e.g. [2, 1] means car 2 then car 1
    solutionExplanation: string;
  };
  
  // Specific data for speed limits
  speedLimits?: {
    location: string;
    normalSpeed: number;
    rainSpeed?: number;
    youngDriverSpeed?: number;
  }[];

  // Specific data for traffic signs
  signCategory?: 'danger' | 'prohibition' | 'priority' | 'indication' | 'obligation' | 'other';
  signLabel?: string;
  metaData?: any;
  list?: string[];
  
  // Specific data for distance tables
  distancesTable?: {
    location: string;
    insideUrban: string;
    outsideUrban: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  imageOrSvg?: string;
}

export interface PastScore {
  date: string;
  score: number;
  total: number;
}

export interface AppState {
  theme: 'light' | 'dark';
  readingMode: boolean;
  pastScores: PastScore[];
  mistakes: string[];
  studyState: {
    hideInformation: boolean;
  };
  testState: {
    activeTest: boolean;
    mode: 'standard' | 'exam' | 'survival';
    timeRemaining: number | null;
    currentQuestionIndex: number;
    score: number;
    answers: Record<string, number>;
  };
}
