import { Chapter } from '../models/content.models';

export const CHAPTER_4_DATA: Chapter = {
  id: 'ch4',
  title: 'المسافات، قوانين الفيزياء والفرملة',
  icon: 'fa-calculator',
  sections: [
    {
      id: 'ch4-sec1',
      title: 'أ. زمن رد الفعل (Temps de réaction)',
      icon: 'fa-stopwatch',
      type: 'general',
      items: [
        {
          id: 'ch4-r1',
          title: 'تعريف زمن رد الفعل',
          description: 'هو المدة الفاصلة بين لحظة اكتشاف الخطر وبداية الفرملة. يُقدر عند الإنسان العادي بـ ثانية واحدة تقريباً.',
          alertType: 'warning'
        },
        {
          id: 'ch4-r2',
          title: 'عوامل التأثير',
          description: 'يرتفع هذا زمن رد الفعل (يطول) بسبب: التعب، الكحول، الأدوية، والمخدرات لأن مجال الرؤية ينخفض.',
          icon: 'fa-circle-exclamation',
          alertType: 'danger'
        },
        {
          id: 'ch4-r3',
          title: 'الحساب الذهني',
          description: 'لحساب مسافة زمن رد الفعل: عُشر السرعة × 3.',
          alertMessage: 'مثال: في سرعة 90 كم/س (9 × 3 = 27 م)',
          alertType: 'info'
        }
      ]
    },
    {
      id: 'ch4-sec2',
      title: 'ب. مسافة الأمان (Distance de sécurité)',
      icon: 'fa-shield-halved',
      type: 'general',
      items: [
        {
          id: 'ch4-r4',
          title: 'تعريف مسافة الأمان',
          description: 'هي المسافة التي تقطعها العربة في ثانية واحدة. يجب تركها لتفادي الاصطدام عند الفرملة الفجئية.',
          alertType: 'success'
        },
        {
          id: 'ch4-r5',
          title: 'عوامل التأثير',
          description: 'هذه المسافة لا تتأثر بحالة الطقس أو المعبد، تتغير فقط بتغير السرعة أو الحالة النفسية/البدنية للسائق.',
          icon: 'fa-check-circle',
          alertType: 'warning'
        },
        {
          id: 'ch4-r6',
          title: 'الحساب الذهني',
          description: 'تُحسب بنفس طريقة زمن رد الفعل: عُشر السرعة × 3.',
          alertType: 'info'
        }
      ]
    },
    {
      id: 'ch4-sec3',
      title: 'ج. مسافة الفرملة والتوقف التام',
      icon: 'fa-car-burst',
      type: 'general',
      items: [
        {
          id: 'ch4-r7',
          title: 'المعادلة الأساسية',
          description: 'مسافة التوقف = مسافة زمن رد الفعل + مسافة الفرملة.',
          alertType: 'danger'
        },
        {
          id: 'ch4-r8',
          title: 'الحساب في طريق جاف',
          description: 'لحساب مسافة التوقف التقريبية: عُشر السرعة × نفسه.',
          alertMessage: 'مثال: في سرعة 50 كم/س (5 × 5 = 25 م)',
          alertType: 'info'
        },
        {
          id: 'ch4-r9',
          title: 'الحساب في طريق مبلل',
          description: 'عند نزول المطر تنخفض درجة الاحتكاك بالمعبد، مما يؤدي إلى:',
          list: [
            'تضاعف مسافة الفرملة مرتين (×2).',
            'زيادة مسافة التوقف الإجمالية بالنصف.'
          ],
          icon: 'fa-cloud-showers-heavy',
          alertType: 'warning'
        },
        {
          id: 'ch4-r10',
          title: 'تأثير التضاريس',
          description: 'تتأثر المسافة بالجاذبية؛ فتزيد في المنحدرات (تطول) وتنقص في المرتفعات (تقل).',
          icon: 'fa-mountain',
          alertType: 'info'
        }
      ]
    },
    {
      id: 'ch4-sec4',
      title: 'د. قانون الاصطدام',
      icon: 'fa-weight-scale',
      type: 'general',
      items: [
        {
          id: 'ch4-r11',
          title: 'قانون الاصطدام (الطاقة الحركية)',
          description: 'تزيد الطاقة الحركية للعربة بشكل مربع مع السرعة، مما يؤدي لنتائج خطيرة:',
          list: [
            'عند تضاعف السرعة مرتين (×2) تتضاعف مسافة التوقف 4 مرات (×4).',
            'عند تضاعف السرعة مرتين (×2) تتضاعف قوة الاصطدام 4 مرات (×4).'
          ],
          icon: 'fa-weight-scale',
          alertType: 'danger'
        }
      ]
    },
    {
      id: 'ch4-sec5',
      title: 'هـ. نظام الفرملة (ABS)',
      icon: 'fa-car-on',
      type: 'general',
      items: [
        {
          id: 'ch4-r12',
          title: 'طريقة الاستخدام',
          description: 'عند اشتغال نظام ABS في الحالات الاضطرارية، يجب الضغط بقوة لتفادي الانزلاق الناتج عن فقدان الإطارات تماسكها.',
          alertType: 'info'
        }
      ]
    },
    {
      id: 'ch4-sec6',
      title: 'و. الرجوع على الأعقاب',
      icon: 'fa-rotate-left',
      type: 'general',
      items: [
        {
          id: 'ch4-r13',
          title: 'الرجوع على الأعقاب',
          description: 'في النهج ذو الاتجاه الواحد يُمنع منعاً باتاً الرجوع على الأعقاب، ويُسمح بالسير للخلف في حالتين فقط:',
          list: [
            'لربط مجرورة بالعربة.',
            'للقيام بعملية الربوض بين عربتين (Créneau).'
          ],
          icon: 'fa-rotate-left',
          alertType: 'danger'
        }
      ]
    }
  ]
};
