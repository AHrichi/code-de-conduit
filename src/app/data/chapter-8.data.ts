import { Chapter } from '../models/content.models';

export const CHAPTER_8_DATA: Chapter = {
  id: 'ch8',
  title: 'الصيانة الوقائية والاقتصاد في الطاقة',
  icon: 'fa-wrench',
  sections: [
    {
      id: 'ch8-sec1',
      title: '1. العجلات المطاطية وضغط الهواء',
      icon: 'fa-car-side',
      type: 'general',
      items: [
        {
          id: 'ch8-r1',
          title: 'أنواع الأطواق حسب الجودة',
          description: 'تختلف جودة الإطارات باختلاف طريقة صنع هيكلها الداخلي:',
          list: [
            '1. شعاعي (Radial): أفضل جودة على الإطلاق (ممتاز).',
            '2. مطوق (Bias-Belted): جودة متوسطة (جيد).',
            '3. قطري عادي (Diagonal): أقل جودة (قديم).'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="#475569" stroke-width="10"/><circle cx="50" cy="50" r="25" fill="none" stroke="#94a3b8" stroke-width="5" stroke-dasharray="4,2"/><path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="#94a3b8" stroke-width="2"/></svg>`,
          alertType: 'success'
        },
        {
          id: 'ch8-r2',
          title: 'قاعدة تركيب الأطواق (الهامة جداً)',
          description: 'لضمان توازن العربة، يجب اتباع القواعد الصارمة التالية:',
          list: [
            'عند تركيب نوع على المغزل الأمامي، يجب تركيب نوع مثله أو أحسن منه على المغزل الخلفي.',
            'يُمنع تركيب هياكل مختلفة على نفس المغزل تماماً.',
            'الاستثناء الوحيد: يسمح بتركيب عجلات مختلفة فقط عند إنفلاق عجلة فجأة بالطريق للوصول لأقرب ورشة.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="10" width="15" height="25" fill="#475569"/><rect x="65" y="10" width="15" height="25" fill="#475569"/><rect x="20" y="65" width="15" height="25" fill="#0284c7"/><rect x="65" y="65" width="15" height="25" fill="#0284c7"/><path d="M 27 35 L 27 65 M 72 35 L 72 65" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch8-r3',
          title: 'مقاييس تآكل العجلات',
          description: 'المقاييس القانونية والتقنية لسلامة الإطارات:',
          list: [
            '1 مم: العمق الأدنى للأخاديد الأساسية.',
            '1.6 مم: مؤشر التهرئة (يعلن ضرورة التغيير فوراً).',
            '5 مم: أقصى فارق مسموح به بين تآكل عجلتي نفس المغزل.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="20" height="60" fill="#e2e8f0"/><rect x="40" y="20" width="20" height="5" fill="#ef4444"/><rect x="40" y="75" width="20" height="5" fill="#22c55e"/><path d="M 40 40 L 60 40" stroke="#475569" stroke-width="2"/><text x="70" y="42" font-size="10" fill="#475569">1.6mm</text></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch8-r4',
          title: 'مخاطر ضغط الهواء الخاطئ',
          description: 'تأثير ضغط الهواء على سلامة السير:',
          list: [
            'النفخ أكثر من اللازم: يسبب انزلاق العربة وتخفيض التحام الأطواق بالمعبد.',
            'النفخ أقل من اللازم: يسبب خطر انفلاق العجلة وزيادة مفرطة في حرارتها.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" stroke-width="8"/><path d="M 50 20 L 50 80 M 20 50 L 80 50" stroke="#ef4444" stroke-width="4"/><path d="M 35 35 L 65 65 M 65 35 L 35 65" stroke="#ef4444" stroke-width="4"/></svg>`
        },
        {
          id: 'ch8-r5',
          title: 'الضغط عند السفر والحمولة',
          description: 'يجب إضافة ضغط إضافي يتراوح بين 100غ و300غ في الحالات التالية:',
          list: [
            'عند السفر لمسافات طويلة دون توقف.',
            'عند التزود بحمولة ثقيلة أو زائدة.',
            'عند السير في الطريق السيارة.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="40" width="50" height="40" rx="5" fill="#0284c7"/><rect x="35" y="30" width="30" height="10" rx="2" fill="#0369a1"/><path d="M 50 10 L 50 25" stroke="#22c55e" stroke-width="5" marker-end="url(#arrow)"/><text x="50" y="65" font-size="8" fill="white" font-weight="bold" text-anchor="middle">+100g to +300g</text></svg>`,
          alertType: 'info'
        }
      ]
    },
    {
      id: 'ch8-sec2',
      title: '2. سوائل وأجزاء المحرك',
      icon: 'fa-gears',
      type: 'general',
      items: [
        {
          id: 'ch8-r6',
          title: 'زيت المحرك',
          description: 'الزيت هو شريان حياة المحرك ويجب مراقبته باستمرار:',
          list: [
            'دورية التغيير: كل 10,000 كلم كحد أقصى.',
            'المستوى: يجب أن يكون دائماً بين علامتي Max و Min.',
            'قاعدة ذهبية: إذا انخفض المستوى جداً، يجب توقيف المحرك فوراً.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 20 70 L 80 70 L 85 40 L 40 40 L 35 25 L 20 25 Z" fill="#eab308"/><path d="M 85 40 L 95 30" stroke="#eab308" stroke-width="8" stroke-linecap="round"/><circle cx="30" cy="55" r="5" fill="white" opacity="0.5"/></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch8-r7',
          title: 'المصافي وشمعات الاحتراق',
          description: 'قطع الغيار التي تؤثر مباشرة على استهلاك الوقود وقوة المحرك:',
          list: [
            'مصفاة الهواء: تُغير كل 20,000 كلم. اتساخها يزيد الاستهلاك ويخفض القوة (لكنها لا تلوث السيارة بحد ذاتها).',
            'شمعات الاحتراق (Bougies): تآكلها يزيد من استهلاك الوقود ويضعف قوة المحرك.',
            'زيت الفرامل: إذا انخفض تحت الحد الأدنى، يجب إصلاح التسرب فوراً.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="40" height="60" rx="5" fill="#475569"/><rect x="35" y="25" width="30" height="50" fill="#94a3b8" stroke-width="2" stroke-dasharray="2,2"/><path d="M 50 10 L 50 20" stroke="#ef4444" stroke-width="4"/></svg>`,
          alertType: 'warning'
        },
        {
          id: 'ch8-r8',
          title: 'البطارية وسوائلها',
          description: 'صيانة نظام التشغيل الكهربائي والطاقة:',
          list: [
            'سائل البطارية: يتكون من خليط ماء مقطر وحامض كبريتي.',
            'تشحيم الأطراف: يجب دهن أطراف البطارية بمادة عازلة لمنع تسرب الكهرباء.',
            'حامل الأمتعة: يزيد استهلاك الوقود بشكل ملحوظ ولو كان فارغاً.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="60" height="50" rx="3" fill="#1e293b"/><rect x="30" y="20" width="10" height="10" fill="#ef4444"/><rect x="60" y="20" width="10" height="10" fill="#94a3b8"/><text x="35" y="28" font-size="12" fill="#ef4444" font-weight="bold">+</text><text x="65" y="28" font-size="12" fill="#94a3b8" font-weight="bold">-</text></svg>`
        }
      ]
    },
    {
      id: 'ch8-sec3',
      title: '3. التحكم في الطاقة والبيئة',
      icon: 'fa-leaf',
      type: 'general',
      items: [
        {
          id: 'ch8-r11',
          title: 'أدخنة المحرك والأعطال',
          description: 'كثافة الدخان المنبعث تدل على خلل خطير في المحرك:',
          list: [
            'عند انبعاث دخان كثيف: يجب توقيف المحرك فوراً والانتظار حتى يبرد.',
            'دخان أسود: خلل في احتراق الوقود (احتراق غير كامل).',
            'دخان أزرق: احتراق زيت المحرك داخل غرف الاحتراق.',
            'دخان أبيض: تسرب سائل التبريد أو وجود ماء بالوقود.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 20 80 Q 40 60 60 80 Q 80 100 90 80" fill="none" stroke="#94a3b8" stroke-width="10" stroke-linecap="round" opacity="0.6"/><path d="M 30 70 Q 50 50 70 70" fill="none" stroke="#64748b" stroke-width="8" stroke-linecap="round" opacity="0.4"/></svg>`,
          alertType: 'danger'
        }
      ]
    }
  ]
};
