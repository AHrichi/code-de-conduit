import { QuizQuestion } from '../models/quiz.model';

export const TEST_1_DATA: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'ما هي السرعة القصوى المسموح بها داخل مناطق العمران للعربات الخفيفة في طقس عادي؟',
    options: [
      { id: 'q1-a1', text: '40 كلم/س', isCorrect: false },
      { id: 'q1-a2', text: '50 كلم/س', isCorrect: true },
      { id: 'q1-a3', text: '60 كلم/س', isCorrect: false }
    ],
    explanation: 'تحدد السرعة القصوى داخل مناطق العمران بـ 50 كلم/س للعربات الخفيفة، وتخفض إلى 40 كلم/س في صورة نزول الأمطار أو وجود ضباب.'
  },
  {
    id: 'q2',
    question: 'في مفترق طرقات بدون علامات، لمن تكون الأولوية؟',
    options: [
      { id: 'q2-a1', text: 'للعربة القادمة من اليمين', isCorrect: true },
      { id: 'q2-a2', text: 'للعربة القادمة من اليسار', isCorrect: false },
      { id: 'q2-a3', text: 'للعربة التي تسير في الطريق الأوسع', isCorrect: false }
    ],
    explanation: 'في صورة غياب العلامات المرورية أو أعوان المرور، تطبق القاعدة العامة للأولوية وهي الأولوية لليمين.'
  },
  {
    id: 'q3',
    question: 'ما هي نسبة الكحول في الدم التي تعتبر مخالفة وتستوجب سحب رخصة السياقة؟',
    options: [
      { id: 'q3-a1', text: '0.1 غ/ل أو أكثر', isCorrect: false },
      { id: 'q3-a2', text: '0.3 غ/ل أو أكثر', isCorrect: true },
      { id: 'q3-a3', text: '0.5 غ/ل أو أكثر', isCorrect: false }
    ],
    explanation: 'يُعتبر السائق تحت تأثير حالة سكر إذا بلغت نسبة الكحول في الدم 0.3 غرام في اللتر الواحد أو أكثر، وهي مخالفة خطيرة تستوجب العقاب.'
  }
];
