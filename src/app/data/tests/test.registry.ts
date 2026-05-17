import { QuizQuestion } from '../../models/content.models';
import { GENERAL_QUIZ_DATA } from '../quiz.data';
import { CHAPTER_1_TEST_DATA } from './chapter-1.test.data';
import { CHAPTER_2_TEST_DATA } from './chapter-2.test.data';
import { CHAPTER_3_TEST_DATA } from './chapter-3.test.data';
import { CHAPTER_4_TEST_DATA } from './chapter-4.test.data';
import { CHAPTER_5_TEST_DATA } from './chapter-5.test.data';
import { CHAPTER_6_TEST_DATA } from './chapter-6.test.data';
import { CHAPTER_7_TEST_DATA } from './chapter-7.test.data';
import { CHAPTER_8_TEST_DATA } from './chapter-8.test.data';
import { CHAPTER_9_TEST_DATA } from './chapter-9.test.data';
import { CHAPTER_10_TEST_DATA } from './chapter-10.test.data';

export const TEST_REGISTRY: Record<string, QuizQuestion[]> = {
  'general': GENERAL_QUIZ_DATA,
  'ch1': CHAPTER_1_TEST_DATA,
  'ch2': CHAPTER_2_TEST_DATA,
  'ch3': CHAPTER_3_TEST_DATA,
  'ch4': CHAPTER_4_TEST_DATA,
  'ch5': CHAPTER_5_TEST_DATA,
  'ch6': CHAPTER_6_TEST_DATA,
  'ch7': CHAPTER_7_TEST_DATA,
  'ch8': CHAPTER_8_TEST_DATA,
  'ch9': CHAPTER_9_TEST_DATA,
  'ch10': CHAPTER_10_TEST_DATA
};
