import { Chapter } from '../models/content.models';

export const CHAPTER_7_DATA: Chapter = {
  id: 'ch7',
  title: 'المقاطعة والمجاوزة',
  icon: 'fa-arrows-turn-right',
  sections: [
    {
      id: 'ch7-sec1',
      title: 'أ. المقاطعة (المرور المعاكس)',
      icon: 'fa-arrow-right-arrow-left',
      type: 'general',
      items: [
        {
          id: 'ch7-r1',
          title: 'المبدأ العام للمقاطعة',
          description: 'هي عملية وصول عربتين تلتقيان في اتجاه مقابل بسبيلين مختلفين من معبد واحد. تتم المقاطعة دائماً من اليمين. عند وجود عائق (أشغال، سيارة متوقفة)، فإن العربة التي أمامها الحاجز يجب أن تتوقف وتترك الأولوية للعربة القادمة في الاتجاه المعاكس.',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="30" height="60" fill="#94a3b8"/><rect x="60" y="20" width="30" height="60" fill="#94a3b8"/><rect x="15" y="40" width="20" height="15" rx="2" fill="#ef4444"/><rect x="65" y="45" width="20" height="15" rx="2" fill="#0284c7"/><path d="M 40 50 L 60 50" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/></svg>`,
          alertType: 'info'
        },
        {
          id: 'ch7-r2',
          title: 'المقاطعة في الطرقات الضيقة',
          description: 'عندما يكون المرور صعباً في طريق ضيق، تطبق القواعد التالية:',
          list: [
            'العربات الكبيرة (التي يتجاوز طولها 7 أمتار أو عرضها 2 أمتار) يجب أن تفسح المجال للعربات الخفيفة.',
            'إذا كانت العربات من نفس الصنف، تتم المقاطعة بالتراضي بين السائقين.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="0" width="40" height="100" fill="#94a3b8"/><rect x="35" y="10" width="30" height="40" rx="2" fill="#475569"/><rect x="40" y="60" width="20" height="25" rx="2" fill="#0284c7"/><path d="M 50 55 L 50 65" stroke="white" stroke-width="2" marker-start="url(#arrow)"/></svg>`
        },
        {
          id: 'ch7-r3',
          title: 'المقاطعة في المرتفعات (الهضاب)',
          description: 'في المنحدرات الحادة حيث يصعب التقابل، الأولوية دائماً للعربة الصاعدة:',
          list: [
            'يجب على العربة النازلة أن تتنازل وتتوقف.',
            'إذا لزم الأمر، يجب على العربة النازلة الرجوع للخلف لتسهيل المرور.',
            'تعتبر العربة المنفردة ملزمة بترك الأولوية لمجموعة عربات متصلة.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 10 90 L 90 40" stroke="#475569" stroke-width="10"/><rect x="20" y="70" width="20" height="12" fill="#22c55e" transform="rotate(-30 20 70)"/><rect x="60" y="45" width="20" height="12" fill="#ef4444" transform="rotate(-30 60 45)"/></svg>`,
          alertType: 'warning'
        },
        {
          id: 'ch7-r4',
          title: 'أولوية الحافلات',
          description: 'تتمتع الحافلات بالأولوية عند الانطلاق من محطاتها المخصصة داخل مواطن العمران فقط، باعتبارها وسيلة نقل عمومي للأشخاص.',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="40" width="60" height="30" rx="5" fill="#eab308"/><rect x="15" y="45" width="15" height="10" fill="white"/><rect x="35" y="45" width="15" height="10" fill="white"/><path d="M 75 55 L 90 55 L 82 45 Z" fill="#22c55e"/></svg>`,
          alertType: 'success'
        },
        {
          id: 'ch7-r6a',
          title: 'أفسح المجال للاتجاه المعاكس',
          description: 'يجب عليك التوقف وفسح المجال للعربات القادمة من الاتجاه المقابل.',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_b15.png',
          alertType: 'danger'
        },
        {
          id: 'ch7-r6b',
          title: 'أتمتع بالأولوية بالنسبة للاتجاه المعاكس',
          description: 'لك حق الأولوية في المرور قبل العربات القادمة من الاتجاه المقابل.',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_c18.png',
          alertType: 'success'
        }
      ]
    },
    {
      id: 'ch7-sec2',
      title: 'ب. المجاوزة (التخطي)',
      icon: 'fa-car-side',
      type: 'general',
      items: [
        {
          id: 'ch7-r7',
          title: 'المبدأ العام والاستثناءات',
          description: 'المجاوزة تتم دائماً من اليسار. يُسمح بالمجاوزة من اليمين في حالتين فقط:',
          list: [
            'إذا شرع سائق العربة الأمامية في الانعطاف لليسار (وأعلن عن ذلك بإشارة).',
            'لتجاوز المترو الخفيف إذا توفرت مسافة كافية للقيام بذلك من اليمين.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="10" width="20" height="80" fill="#94a3b8"/><rect x="42" y="50" width="16" height="25" rx="2" fill="#475569"/><rect x="65" y="30" width="16" height="25" rx="2" fill="#0284c7"/><path d="M 50 80 Q 70 80 73 60" fill="none" stroke="#22c55e" stroke-width="3" stroke-dasharray="4,2" marker-end="url(#arrow)"/></svg>`,
          alertType: 'warning'
        },
        {
          id: 'ch7-r8',
          title: '1. قبل المجاوزة (الـ6 تفقدات)',
          description: 'قبل الشروع في عملية المجاوزة، يجب التأكد مما يلي:',
          list: [
            'التأكد من عدم وجود علامة منع أو خط متواصل.',
            'التأكد من الرؤية الكافية وغياب العوائق.',
            'التأكد أن السبيل شاغر على مسافة كافية.',
            'التأكد أن السائق الذي خلفك أو أمامك لم يشرع في المجاوزة.',
            'أن العربة الأمامية لا تسير بالسرعة القصوى.',
            'الإعلان عن العملية (تشغيل ضوء تغيير الاتجاه).'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="#0284c7" stroke-width="4"/><path d="M 30 50 L 45 65 L 75 35" stroke="#22c55e" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          alertType: 'danger'
        },
        {
          id: 'ch7-r9',
          title: '2. أثناء وبعد المجاوزة',
          description: 'يجب الالتزام بالمسافات والسرعات التالية لضمان السلامة:',
          list: [
            'ترك مسافة جانبية: 0.5م للعربات.',
            'ترك 1م للمترجل أو الدراجة داخل العمران (و 1.5م خارج العمران).',
            'الزيادة في السرعة بفارق 20 كلم/س.',
            'العودة للسبيل الأيمن تدريجياً وبأمان دون التخفيض من السرعة.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="60" width="40" height="20" fill="#475569"/><path d="M 20 50 L 80 50" stroke="#ef4444" stroke-width="2"/><text x="50" y="45" font-size="10" fill="#ef4444" font-weight="bold" text-anchor="middle">0.5m / 1m</text></svg>`
        },
        {
          id: 'ch7-r10',
          title: '3. واجبات السائق المُتجاوز',
          description: 'عندما تلاحظ أن هناك عربة بصدد مجاوزتك، يجب عليك:',
          list: [
            'الانحياز إلى أقصى اليمين لتسهيل العملية.',
            'المحافظة على نفس السرعة (يُمنع الرفع في السرعة أثناء المجاوزة).'
          ],
          icon: 'fa-hand-holding-hand',
          alertType: 'info'
        },
        {
          id: 'ch7-r11',
          title: 'ممنوع المجاوزة',
          description: 'هذه العلامة تمنع المجاوزة على جميع العربات ذات محرك (باستثناء الدراجات ذات العجلتين وبدون عربة جانبية).',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_b3.png',
          alertType: 'danger'
        },
        {
          id: 'ch7-r12',
          title: 'أماكن يمنع فيها التخطي قانونياً',
          description: 'يمنع التخطي قانونياً (حتى في غياب العلامات) في الأماكن التالية:',
          list: [
            'عند المرتفعات (الهضاب) وبالمنعرجات.',
            'على الجسور الضيقة (بسبيلين فقط).',
            'تقاطع سكة حديدية (غير مجهز بحواجز).',
            'في تقاطع الطرقات، إلا بالنسبة للسائقين الذين يسيرون في سبيل ذي أولوية.'
          ],
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" stroke-width="5"/><path d="M 30 30 L 70 70 M 70 30 L 30 70" stroke="#ef4444" stroke-width="10"/></svg>`,
          alertType: 'danger'
        }
      ]
    }
  ]
};
