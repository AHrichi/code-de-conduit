import { Chapter } from '../models/content.models';

export const CHAPTER_10_DATA: Chapter = {
  id: 'ch10',
  title: 'نظام النقاط والمخالفات',
  icon: 'fa-gavel',
  sections: [
    {
      id: 'ch10-sec1',
      title: '1. نظام النقاط (25 نقطة)',
      icon: 'fa-calculator',
      type: 'general',
      items: [
        {
          id: 'ch10-r1',
          title: 'قواعد رصيد النقاط',
          description: 'يُمنح كل سائق رصيداً احتياطياً من النقاط يخضع للقواعد الصارمة التالية:',
          list: [
            'رصيد البداية: 25 نقطة.',
            'فقدان الرصيد بالكامل: لا يمكن إعادة اجتياز الامتحان إلا بعد 3 أشهر.',
            'عدم الاسترجاع التلقائي: لا تُسترجع النقاط المخصومة آلياً إذا تجاوز عددها 10 نقاط خلال سنة.',
            'قاعدة تعدد الجنح: إذا ارتكب السائق عدة جنح في نفس الوقت (لا تتجاوز أي منها 5 نقاط)، فإن الحد الأقصى للخصم هو 5 نقاط فقط إجمالاً.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="#0284c7" stroke-width="5"/><text x="50" y="60" font-size="24" font-weight="bold" fill="#0284c7" text-anchor="middle">25</text></svg>`,
          alertType: 'info'
        },
        {
          id: 'ch10-r2',
          title: 'الاسترجاع بالتكوين (التدريب)',
          description: 'يمكن للسائق استعادة جزء من رصيده باتباع دورة تكوينية مختصة:',
          list: [
            'شرط الاسترجاع: أن يكون رصيد النقاط المخصومة 8 نقاط أو أقل خلال سنة.',
            'مدة التكوين: يدوم التدريب 3 أيام.',
            'عدد النقاط المسترجعة: تُسترجع 4 نقاط فور إتمام التكوين.',
            'التكرار: لا يمكن القيام بهذا التكوين إلا مرة واحدة كل سنتين.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 20 80 L 80 80 M 30 80 L 30 40 L 70 40 L 70 80" fill="none" stroke="#22c55e" stroke-width="5"/><path d="M 40 55 L 60 55" stroke="#22c55e" stroke-width="2"/><text x="50" y="30" font-size="12" font-weight="bold" fill="#22c55e" text-anchor="middle">+4 Points</text></svg>`,
          alertType: 'success'
        },
        {
          id: 'ch10-r3',
          title: 'خصم 6 نقاط (أقصى عقوبة)',
          description: 'يتم خصم 6 نقاط فوراً في الحالات الإجرامية التالية:',
          list: [
            'القتل على وجه الخطأ الناتج عن حادث مرور.',
            'الجرح على وجه الخطأ مع الفرار إثر حادث مرور.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#ef4444" opacity="0.1"/><path d="M 30 50 L 70 50" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/><text x="50" y="45" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">-6 Points</text></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch10-r4',
          title: 'خصم 4 نقاط',
          description: 'يتم خصم 4 نقاط في الجنح الخطيرة التالية:',
          list: [
            'السياقة تحت تأثير حالة كحولية أو رفض الاختبار.',
            'الرجوع على الأعقاب في الطريق السيارة.',
            'تجاوز السرعة القصوى بـ 40 كلم/س أو أكثر.',
            'سياقة صنف من العربات لا تتناسب معه الرخصة.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#eab308" opacity="0.1"/><path d="M 35 50 L 65 50" stroke="#eab308" stroke-width="8" stroke-linecap="round"/><text x="50" y="45" font-size="12" font-weight="bold" fill="#eab308" text-anchor="middle">-4 Points</text></svg>`,
          alertType: 'warning'
        }
      ]
    },
    {
      id: 'ch10-sec2',
      title: '2. الحجز والسحب الوجوبي',
      icon: 'fa-hand-paper',
      type: 'general',
      items: [
        {
          id: 'ch10-r5',
          title: 'حالات توقيف العربة (الحجز الاحتياطي)',
          description: 'تُوقف العربة على وجه الاحتياط وتُودع بالمستودع البلدي في الحالات التالية:',
          list: [
            'سياقة في حالة كحولية أو تعب مفرط للسائق.',
            'سياقة دون رخصة، أو برخصة معلقة، أو دون الصنف المطلوب.',
            'أجهزة السلامة غير مستوفية للشروط القانونية.',
            'شهادة تأمين منتهية الصلوحية أو غياب الفحص الفني.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="30" width="80" height="50" rx="5" fill="#475569" opacity="0.5"/><rect x="20" y="40" width="20" height="15" fill="#ef4444"/><path d="M 0 90 L 100 90" stroke="#1e293b" stroke-width="5"/><rect x="40" y="10" width="20" height="40" fill="#1e293b"/></svg>`,
          alertType: 'warning'
        },
        {
          id: 'ch10-r6',
          title: 'سحب رخصة السياقة وجوباً (6 أشهر)',
          description: 'تُسحب رخصة السياقة وجوباً لمدة 6 أشهر في 4 حالات رئيسية:',
          list: [
            'حالة كحولية (أكثر من 0.5غ/ل في الدم) أو رفض الخضوع للاختبار.',
            'القتل على وجه الخطأ أو التسبب في جروح في حادث مرور.',
            'السياقة برخصة معلقة الصلوحية.',
            'السير عكس الاتجاه أو الرجوع على الأعقاب في الطريق السيارة.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="60" height="40" rx="5" fill="#ef4444"/><line x1="20" y1="30" x2="80" y2="70" stroke="white" stroke-width="5"/><line x1="80" y1="30" x2="20" y2="70" stroke="white" stroke-width="5"/></svg>`,
          alertType: 'danger'
        }
      ]
    },
    {
      id: 'ch10-sec3',
      title: '3. تفصيل المخالفات والخطايا المالية',
      icon: 'fa-scale-unbalanced',
      type: 'general',
      items: [
        {
          id: 'ch10-r7',
          title: 'مخالفات عادية (أقصاها 60 د)',
          description: 'القائمة الكاملة لـ 11 مخالفة تستوجب خطية مالية أقصاها 60 د:',
          list: [
            'السير في الاتجاه الممنوع داخل مناطق العمران.',
            'عدم استعمال عجلة إحتياطية صالحة.',
            'عدم استعمال إشارات تغيير الاتجاه.',
            'عدم تشغيل الأضواء أو إبهار السواق.',
            'الوقوف والتوقف الممنوع أو المضايق.',
            'عدم احترام الأولوية بجميع أنواعها.',
            'عدم فسح مجال للمترجل أو الأولوية لليمين.',
            'استعمال الهاتف الجوال يدوياً أثناء السياقة.',
            'عدم استعمال حزام الأمان خارج المناطق البلدية.',
            'السياقة برخصة معلقة أو منتهية الصلوحية (كمخالفة).',
            'تجاوز السرعة بأقل من 50 كلم/س.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#22c55e" opacity="0.2"/><text x="50" y="60" font-size="20" font-weight="bold" fill="#22c55e" text-anchor="middle">60 DT</text></svg>`,
          alertType: 'info'
        },
        {
          id: 'ch10-r8',
          title: 'مخالفات خطيرة (100 - 200 د)',
          description: 'القائمة الكاملة لـ 9 مخالفات خطيرة:',
          list: [
            'عدم احترام علامة قف (Stop).',
            'عدم احترام الضوء الأحمر.',
            'عدم الامتثال لإشارات أعوان المرور.',
            'عدم تغيير شهادة التسجيل في الآجال القانونية.',
            'عدم إجراء الفحص الفني الدوري.',
            'سياقة عربة تنفث دخاناً أو ضجيجاً يفوق 50%.',
            'سياقة عربة مجهزة بآلة كاشف الرادار.',
            'استعمال أكثر من رخصة سياقة في نفس الصنف.',
            'نقل أشخاص على عربة غير مهيأة لذلك.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 30 10 L 70 10 L 90 30 L 90 70 L 70 90 L 30 90 L 10 70 L 10 30 Z" fill="#ef4444"/><text x="50" y="60" font-size="20" font-weight="bold" fill="white" text-anchor="middle">STOP</text></svg>`,
          alertType: 'warning'
        },
        {
          id: 'ch10-r10',
          title: 'خطية مالية من 120 إلى 200 د (+ سجن شهر)',
          description: 'الجنح المرورية التي تستوجب خطية مالية من 120 إلى 200 دينار مع إمكانية السجن لمدة شهر:',
          list: [
            'مجاوزة ممنوعة.',
            'عدم احترام مقاطع السكة الحديدية.',
            'حادث أضرار مادية مع الفرار.',
            'سياقة رغم حجز الرخصة.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="70" height="70" rx="10" fill="#ef4444" opacity="0.15"/><text x="50" y="45" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">120 - 200</text><text x="50" y="62" font-size="10" fill="#ef4444" text-anchor="middle">د.ت</text><text x="50" y="78" font-size="8" fill="#b91c1c" text-anchor="middle">+ سجن شهر</text></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch10-r10b',
          title: 'خطية مالية من 120 إلى 240 د',
          description: 'الجنح المرورية التي تستوجب خطية مالية من 120 إلى 240 دينار:',
          list: [
            'تجاوز السرعة بـ 50 كلم/س فما فوق. ⚠️ عقوبة إضافية: خصم 4 نقاط.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="70" height="70" rx="10" fill="#eab308" opacity="0.15"/><text x="50" y="45" font-size="11" font-weight="bold" fill="#eab308" text-anchor="middle">120 - 240</text><text x="50" y="62" font-size="10" fill="#eab308" text-anchor="middle">د.ت</text></svg>`,
          alertType: 'warning'
        },
        {
          id: 'ch10-r10c',
          title: 'خطية مالية من 200 إلى 500 د (+ سجن 6 أشهر)',
          description: 'الجنح المرورية الخطيرة التي تستوجب خطية مالية من 200 إلى 500 دينار مع إمكانية السجن لمدة 6 أشهر:',
          list: [
            'السياقة في حالة كحولية أو رفض إجراء الاختبار. ⚠️ عقوبة إضافية: سحب الرخصة لمدة 6 أشهر، وخصم 4 نقاط.',
            'الرجوع على الأعقاب في طريق سيارة. ⚠️ عقوبة إضافية: سحب الرخصة لمدة 6 أشهر، وخصم 4 نقاط.',
            'سياقة دون رخصة.',
            'عربة غير حاملة للوحة الصانع.',
            'عدم الامتثال لإشارات الأعوان مع خرق الحواجز المادية.',
            'السياقة دون الصنف المطلوب. ⚠️ عقوبة إضافية: خصم 4 نقاط.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="10" width="70" height="80" rx="10" fill="#ef4444" opacity="0.15"/><text x="50" y="35" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">200 - 500</text><text x="50" y="52" font-size="10" fill="#ef4444" text-anchor="middle">د.ت</text><text x="50" y="68" font-size="8" fill="#b91c1c" text-anchor="middle">+ سجن 6 أشهر</text></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch10-r10d',
          title: 'عقوبات أخرى كبرى',
          description: 'عقوبات مرورية كبرى أخرى خارج الإطار المالي المعتاد:',
          list: [
            'إدخال تغييرات جوهرية على عربة بدون ترخيص. ⚠️ عقوبة إضافية: سحب شهادة السياقة.',
            'عربة غير مسجلة. ⚠️ عقوبة إضافية: خطية مالية بقيمة 3000 د، وإيداع بالمستودع البلدي.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" fill="none" stroke="#ef4444" stroke-width="5"/><path d="M 30 30 L 30 70 M 50 30 L 50 70 M 70 30 L 70 70" stroke="#ef4444" stroke-width="2"/></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch10-r11',
          title: 'آجال استخلاص الخطايا المالية',
          description: 'يجب الانتباه للجدول الزمني لدفع الخطايا لتجنب مضاعفة العقوبة:',
          list: [
            'الخلاص العادي: في ظرف 7 أيام من تاريخ المخالفة.',
            'مضاعفة الخطية: تصبح الخطية مضاعفة آلياً بعد مرور 15 يوماً دون خلاص.',
            'تعليق الرخصة: تصبح رخصة السياقة معلقة الصلوحية بعد شهر واحد دون خلاص الخطية.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="#eab308" stroke-width="5"/><path d="M 50 20 L 50 50 L 70 50" stroke="#eab308" stroke-width="5" stroke-linecap="round"/></svg>`,
          alertType: 'warning'
        }
      ]
    }
  ]
};
