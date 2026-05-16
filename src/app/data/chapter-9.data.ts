import { Chapter } from '../models/content.models';

export const CHAPTER_9_DATA: Chapter = {
  id: 'ch9',
  title: 'الإسعافات الأولية لحوادث المرور',
  icon: 'fa-kit-medical',
  sections: [
    {
      id: 'ch9-sec1',
      title: '1. التسلسل الإجباري للتدخل (4 خطوات)',
      icon: 'fa-shoe-prints',
      type: 'general',
      items: [
        {
          id: 'ch9-r1',
          title: 'الخطوة 1: الحماية (Protection)',
          description: 'تأمين مكان الحادث لمنع وقوع حوادث أخرى:',
          list: [
            'وضع مثلثات العطب على بعد 150م بوضوح من الجانبين.',
            'إيقاف محركات العربات المتضررة.',
            'منع التدخين تماماً (خطر انفجار/حريق).',
            'إنارة مكان الحادث ليلاً باستخدام أضواء العربات الأخرى.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 50 10 L 90 80 L 10 80 Z" fill="none" stroke="#ef4444" stroke-width="8"/><rect x="45" y="30" width="10" height="30" fill="#ef4444"/><circle cx="50" cy="70" r="5" fill="#ef4444"/></svg>`,
          alertType: 'warning'
        },
        {
          id: 'ch9-r2',
          title: 'الخطوة 2: المعاينة (Assessment)',
          description: 'تفحص حالة المصابين وتحديد الأولويات:',
          list: [
            'مراقبة نقاط الحياة: الوعي، التنفس، والنبض.',
            'يُمنع إخراج المصاب من السيارة تماماً إلا في حالات الخطر المحدق (حريق، غرق).',
            'الحفاظ على هدوء المصاب وتجنب تحريكه بعشوائية.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="40" r="20" fill="none" stroke="#0284c7" stroke-width="5"/><path d="M 30 90 Q 50 60 70 90" fill="none" stroke="#0284c7" stroke-width="5"/><path d="M 50 35 L 50 45 M 45 40 L 55 40" stroke="#ef4444" stroke-width="2"/></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch9-r3',
          title: 'الخطوة 3: الإعلام والاتصال (الأولويات)',
          description: 'يجب التمييز بين نوع الأضرار عند الاتصال بالسلطات المختصة:',
          list: [
            '198 (حماية مدنية) / 190 (إسعاف طبي - SAMU).',
            '197 (شرطة النجدة) / 193 (حرس وطني).',
            'قاعدة الاتصال: في صورة أضرار بدنية، نكلم الشرطة/الحرس أولاً. في صورة أضرار مادية فقط، نتصل بشركة التأمين.',
            'المعطيات المطلوبة: المكان بدقة، عدد الجرحى، ونوع الإصابات.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" rx="10" fill="#0284c7"/><path d="M 40 40 L 60 40 L 60 60 L 40 60 Z" fill="white"/><path d="M 35 35 L 45 45 M 55 35 L 65 45" stroke="white" stroke-width="3"/></svg>`,
          alertType: 'info'
        },
        {
          id: 'ch9-r4',
          title: 'الخطوة 4: الإسعاف والإعانة (Rescue)',
          description: 'تقديم المساعدة اللازمة حتى وصول فرق الإسعاف:',
          list: [
            'طمأنة المصاب والرفع من معنوياته (واجب أساسي).',
            'منع المتطفلين من التدخل ومنع تقديم الماء للمصاب.',
            'عند وصول الإسعاف: يجب مغادرة المكان فوراً لتفادي تعطيل حركة المرور بعد تقديم الإفادة للسلطات.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 50 80 Q 20 50 50 20 Q 80 50 50 80" fill="#ef4444"/><rect x="40" y="45" width="20" height="5" fill="white"/><rect x="47.5" y="37.5" width="5" height="20" fill="white"/></svg>`,
          alertType: 'success'
        }
      ]
    },
    {
      id: 'ch9-sec2',
      title: '2. العلامات الحيوية والممنوعات المطلقة',
      icon: 'fa-heart-pulse',
      type: 'general',
      items: [
        {
          id: 'ch9-r5',
          title: 'دقات القلب (النبض)',
          description: 'المعدلات الطبيعية لنبضات القلب في الدقيقة:',
          list: [
            'الكهل (البالغ): 60 - 80 نبضة في الدقيقة.',
            'الرضيع: 90 - 120 نبضة في الدقيقة.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 10 50 L 30 50 L 40 20 L 50 80 L 60 50 L 90 50" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/></svg>`,
          alertType: 'info'
        },
        {
          id: 'ch9-r6',
          title: 'سرعة التنفس',
          description: 'المعدلات الطبيعية للحركات التنفسية في الدقيقة:',
          list: [
            'الكهل: 12 - 20 حركة في الدقيقة.',
            'الطفل: 25 - 30 حركة في الدقيقة.',
            'الرضيع: قد تصل إلى 40 حركة في الدقيقة.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 30 40 Q 50 10 70 40 L 70 80 Q 50 95 30 80 Z" fill="#94a3b8" opacity="0.5"/><path d="M 40 40 L 60 40" stroke="#0284c7" stroke-width="2"/></svg>`
        },
        {
          id: 'ch9-r7',
          title: 'الممنوعات المطلقة (هام جداً)',
          description: 'تجنب هذه الأفعال الخطيرة إطلاقاً:',
          list: [
            'يُمنع منعاً باتاً إعطاء الماء للمصاب إطلاقاً.',
            'يُمنع نزع خوذة سائق الدراجة (إلا في حالة الاختناق).',
            'يُمنع تنظيف جروح العينين أو إخراج جزء مغروز.',
            'يُمنع تحريك الأطراف التي يُشتبه في كسرها.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" stroke-width="8"/><path d="M 25 25 L 75 75 M 75 25 L 25 75" stroke="#ef4444" stroke-width="8" stroke-linecap="round"/></svg>`,
          alertType: 'danger'
        }
      ]
    },
    {
      id: 'ch9-sec3',
      title: '3. الإسعافات حسب الحالات الخاصة',
      icon: 'fa-briefcase-medical',
      type: 'general',
      items: [
        {
          id: 'ch9-r8',
          title: 'الاختناق وضيق التنفس',
          description: 'الإجراءات المتبعة لتسهيل التنفس:',
          list: [
            'رخف الضواغط (الحزام، ربطة العنق، ياقة القميص).',
            'تنظيف الفم من أي عوائق.',
            'إمالة الرأس بلطف للخلف (انقشاع الرأس) لفتح المجاري.',
            'القيام بالتنفس الاصطناعي إذا توقف التنفس.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 40 20 Q 70 20 70 50 Q 70 80 40 80" fill="none" stroke="#0284c7" stroke-width="5"/><path d="M 20 50 L 50 50" stroke="#ef4444" stroke-width="8" stroke-linecap="round" opacity="0.4"/></svg>`
        },
        {
          id: 'ch9-r10',
          title: 'النزيف الداخلي (الخفي)',
          description: 'أعراضه خطيرة وتتطلب تدخلاً حذراً:',
          list: [
            'الأعراض: شحوب، برودة الأطراف، عرق، عطش شديد، وفقدان تدريجي للوعي.',
            'التدخل: تدفئة المصاب جيداً ومنع إعطائه الماء نهائياً.',
            'تنبيه: النزيف من الأذن أو الأنف هو نزيف متخرج (يُترك المصاب ليستريح دون سد النزيف).'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 50 20 Q 80 50 50 90 Q 20 50 50 20" fill="#ef4444" opacity="0.3"/><circle cx="50" cy="50" r="10" fill="#ef4444"/></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch9-r11',
          title: 'النزيف الخارجي (الترتيب الصارم)',
          description: 'يجب اتباع هذا التسلسل بدقة لإيقاف النزيف المرئي:',
          list: [
            '1. الضغط اليدوي المباشر على الجرح.',
            '2. نقطة الضغط (باستعمال الإبهام أو قبضة اليد).',
            '3. الرباط الضاغط (Garrot): يُستعمل فقط عند بتر عضو، أو وجود مسعف وحيد لعدة جرحى، أو غياب شخص بالغ.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="40" width="40" height="20" rx="3" fill="#475569"/><circle cx="50" cy="50" r="15" fill="none" stroke="#ef4444" stroke-width="5" stroke-dasharray="4,2"/></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch9-r12',
          title: 'إصابات خاصة (بطن)',
          description: 'التعامل مع جرح البطن العميق:',
          list: [
            'يوضع المصاب على ظهره مع ثني الركبتين لتخفيف الضغط على عضلات البطن.',
            'تغطية المصاب وعدم إعطائه أي شيء عن طريق الفم.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 20 80 L 80 80" stroke="#475569" stroke-width="5"/><path d="M 30 80 L 40 50 L 60 50 L 70 80" fill="none" stroke="#0284c7" stroke-width="5"/></svg>`,
          alertType: 'warning'
        }
      ]
    }
  ]
};
