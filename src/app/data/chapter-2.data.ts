import { Chapter } from '../models/content.models';

export const CHAPTER_2_DATA: Chapter = {
  id: 'ch2',
  title: 'التربص، السرعة وظروف السياقة',
  icon: 'fa-gauge-high',
  sections: [
    {
      id: 'ch2-sec1',
      title: 'أ. فترة التربص',
      icon: 'fa-user-graduate',
      type: 'general',
      items: [
        {
          id: 'ch2-r1',
          title: 'قواعد المتربص الجديد',
          description: 'يخضع السائق الجديد لفترة تربص تدوم سنتين، ويجب عليه الالتزام بما يلي:',
          list: [
            'وضع علامة "80" في الجهة اليسرى من الزجاج الخلفي للعربة.',
            'عدم تجاوز سرعة 80 كلم/س خارج مناطق العمران وفي الطريق السيارة.',
            'فترة التربص تدوم سنتين كاملتين من تاريخ الحصول على الرخصة.'
          ],
          icon: 'fa-user-clock',
          alertType: 'warning'
        }
      ]
    },
    {
      id: 'ch2-sec2',
      title: 'ب. السرعة القانونية القصوى',
      icon: 'fa-gauge',
      type: 'general',
      items: [
        {
          id: 'ch2-r2',
          title: 'جدول السرعات حسب المكان والطقس',
          description: 'يجب على السائق تكييف سرعته حسب مكان التواجد وحالة الطقس:',
          speedLimits: [
            { location: 'داخل مناطق العمران', normalSpeed: 50, rainSpeed: 40 },
            { location: 'خارج مناطق العمران', normalSpeed: 90, rainSpeed: 70 },
            { location: 'الطريق السيارة (Autoroute)', normalSpeed: 110, rainSpeed: 90 }
          ],
          list: [
            'الدراجات النارية الصغيرة: 40 كلم/س (داخل) و70 كلم/س (خارج).',
            'الحد الأدنى بالطريق السيارة: 60 كلم/س (يُمنع السير ببطء غير مبرر).',
            'الجرار الفلاحي: أقصى سرعة 25 كلم/س.'
          ],
          icon: 'fa-tachometer-alt'
        }
      ]
    },
    {
      id: 'ch2-sec3',
      title: 'ج. ظروف السياقة والموانع',
      icon: 'fa-cloud-showers-heavy',
      type: 'general',
      items: [
        {
          id: 'ch2-r3',
          title: 'أمن الأطفال والمقاعد',
          description: 'لحماية الأطفال داخل العربة، تنص القواعد العامة على ما يلي:',
          list: [
            'يُمنع منعاً باتاً وضع الأطفال في المقاعد الأمامية إذا كان عمرهم أقل من 10 سنوات.'
          ],
          icon: 'fa-child-reaching',
          alertType: 'danger'
        },
        {
          id: 'ch2-r4',
          title: 'السياقة في المطر والراحة',
          description: 'نصائح هامة لظروف السياقة الصعبة والمسافات الطويلة:',
          list: [
            'خطر الأمطار: الدقائق الأولى لنزول المطر تمثل أكبر خطر حيث تختلط القطرات بالغبار فيصبح المعبد أكثر زلقاً.',
            'السفر الطويل: يُنصح بأخذ فترات راحة لمدة 10 إلى 15 دقيقة (خارج السيارة) كل ساعتين.'
          ],
          icon: 'fa-bed',
          alertType: 'info'
        }
      ]
    }
  ]
};
