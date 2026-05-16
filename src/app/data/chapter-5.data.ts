import { Chapter } from '../models/content.models';

export const CHAPTER_5_DATA: Chapter = {
  id: 'ch5',
  title: 'الجولان وقواعد الأولوية في المفترقات',
  icon: 'fa-traffic-light',
  sections: [
    {
      id: 'ch5-sec1',
      title: '1. ترتيب الإشارات الإلزامي (الهرم القانوني)',
      icon: 'fa-layer-group',
      type: 'general',
      items: [
        {
          id: 'ch5-r1',
          title: 'الهرم القانوني للأولوية',
          description: 'تخضع الأولوية في المفترقات لترتيب تصاعدي إلزامي لا يمكن مخالفته:',
          list: [
            'المستوى الأول: إشارات عون المرور (تلغي وتعوض كل ما عداها).',
            'المستوى الثاني: الإشارات الضوئية (تطبق في غياب عون المرور).',
            'المستوى الثالث: العلامات العمودية (مثل قف، وفسح المجال، والأولوية).',
            'المستوى الرابع: قاعدة الأولوية لليمين (تطبق عند غياب كافة الإشارات السابقة).'
          ],
          alertType: 'danger',
          icon: 'fa-person-military-pointing'
        }
      ]
    },
    {
      id: 'ch5-sec2',
      title: '2. إشارات عون المرور والإشارات الضوئية',
      icon: 'fa-traffic-light',
      type: 'general',
      items: [
        {
          id: 'ch5-r5',
          title: 'إشارات عون المرور',
          description: 'يجب الامتثال التام لإشارات العون حسب الوضعيات التالية:',
          list: [
            'رفع اليد عمودياً: يعني الوقوف الإجباري لكافة الجهات الأربعة.',
            'رفع اليد أفقياً (أو اليدين): يعني الوقوف لمن هم أمام وخلف وجه العون فقط، مع السماح بالمرور لمن هم على جانبيه.'
          ],
          icon: 'fa-hand'
        },
        {
          id: 'ch5-r7',
          title: 'الأضواء الثلاثية',
          description: 'دلالات الألوان في نظام الإشارات الضوئية:',
          list: [
            'الضوء الأخضر: المرور بأمان مع الحذر.',
            'الضوء الأحمر: التوقف الإلزامي خلف الخط.',
            'الضوء البرتقالي الثابت: التوقف (إلا إذا كان التوقف المفاجئ يشكل خطراً).',
            'الضوء البرتقالي الرفاف: الأضواء معطلة، نمرر الأولوية للعلامات أو لليمين.'
          ],
          alertType: 'warning'
        }
      ]
    },
    {
      id: 'ch5-sec3',
      title: '3. العلامات العمودية للأولوية',
      icon: 'fa-signs-post',
      type: 'general',
      items: [
        {
          id: 'ch5-r8',
          title: 'أتمتع بالأولوية المطلقة',
          description: 'الأولوية لي في كافة المفترقات القادمة.',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_ab6.png'
        },
        {
          id: 'ch5-r9',
          title: 'أتمتع بالأولوية في أول مفترق',
          description: 'الأولوية لي في المفترق القادم فقط.',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_ab2.png'
        },
        {
          id: 'ch5-r10',
          title: 'تقاطع طرقات (X)',
          description: 'تطبيق قاعدة الأولوية لليمين.',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_ab1.png'
        },
        {
          id: 'ch5-r11',
          title: 'علامة قف (STOP)',
          description: 'التوقف وجوباً عند مستوى الخط تماماً، مع الالتزام بالقواعد التالية:',
          list: [
            'الوقوف إجباري في كل الحالات حتى ولو كان المعبد فارغاً تماماً.',
            'فسح المجال لليمين ولليسار وجوباً.',
            'يمكن التقدم قليلاً بعد الوقوف لكشف الطريق إذا كانت الرؤية غير واضحة.'
          ],
          alertType: 'danger',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_ab4.png'
        },
        {
          id: 'ch5-r12',
          title: 'أترك الأولوية',
          description: 'فسح المجال لليمين واليسار بدون توقف إلزامي (إلا في المفترق الدوراني لليسار فقط).',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_ab3a.png'
        }
      ]
    },
    {
      id: 'ch5-sec4',
      title: '4. قواعد فسح المجال الإجبارية والمفترق الدوراني',
      icon: 'fa-circle-exclamation',
      type: 'general',
      items: [
        {
          id: 'ch5-r13',
          title: 'الخروج إلى الطريق',
          description: 'عند الخروج من مسلك ترابي أو ملك مجاور، يجب فسح المجال لليمين واليسار.',
          alertType: 'danger'
        },
        {
          id: 'ch5-r14',
          title: 'الدوران لليسار',
          description: 'عند الدوران لليسار في مفترق طرقات، يجب دائماً فسح المجال للعربات القادمة من الاتجاه المقابل.',
          alertType: 'info'
        },
        {
          id: 'ch5-r15',
          title: 'المفترق الدوراني (Rond-point)',
          description: 'الأولوية دائماً لليسار (للعربات الموجودة داخل المفترق).',
          icon: 'fa-rotate',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_ab25.png'
        }
      ]
    },
    {
      id: 'ch5-sec5',
      title: '5. حالات تطبيقية شاملة (9 سيناريوهات للمفترقات)',
      icon: 'fa-car-burst',
      type: 'priority-scenario',
      items: [
        {
          id: 'ch5-ps1',
          title: '1. تقاطع بدون إشارات',
          imageOrSvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="0" width="60" height="200" fill="#475569"></rect><rect x="0" y="70" width="200" height="60" fill="#475569"></rect><rect x="108" y="140" width="16" height="30" rx="3" fill="#ef4444"></rect> <text x="116" y="160" font-size="14" fill="white" font-weight="bold" text-anchor="middle">3</text><rect x="140" y="76" width="30" height="16" rx="3" fill="#3b82f6"></rect> <text x="155" y="88" font-size="14" fill="white" font-weight="bold" text-anchor="middle">2</text><rect x="76" y="30" width="16" height="30" rx="3" fill="#22c55e"></rect> <text x="84" y="50" font-size="14" fill="white" font-weight="bold" text-anchor="middle">1</text></svg>`,
          priorityScenario: {
            cars: [{id: 1, color: 'green', label: '1'}, {id: 2, color: 'blue', label: '2'}, {id: 3, color: 'red', label: '3'}],
            solutionOrder: [1, 2, 3],
            solutionExplanation: 'القاعدة: أولوية اليمين. تمر الخضراء (1) أولاً، ثم الزرقاء (2)، ثم الحمراء (3).'
          }
        },
        {
          id: 'ch5-ps2',
          title: '2. دوران لليسار (تداخل 3 سيارات)',
          imageOrSvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="0" width="60" height="200" fill="#475569"></rect><rect x="0" y="70" width="200" height="60" fill="#475569"></rect><rect x="108" y="140" width="16" height="30" rx="3" fill="#3b82f6"></rect> <text x="116" y="160" font-size="14" fill="white" font-weight="bold" text-anchor="middle">1</text><path d="M 116 135 Q 116 85 65 85" fill="none" stroke="#3b82f6" stroke-width="3" stroke-dasharray="4,4"></path><rect x="30" y="108" width="30" height="16" rx="3" fill="#ef4444"></rect> <text x="45" y="120" font-size="14" fill="white" font-weight="bold" text-anchor="middle">3</text><rect x="76" y="30" width="16" height="30" rx="3" fill="#f8fafc" stroke="black" stroke-width="1"></rect> <text x="84" y="50" font-size="14" fill="black" font-weight="bold" text-anchor="middle">2</text></svg>`,
          priorityScenario: {
            cars: [{id: 1, color: 'blue', label: '1'}, {id: 2, color: 'white', label: '2'}, {id: 3, color: 'red', label: '3'}],
            solutionOrder: [2, 3, 1],
            solutionExplanation: 'الزرقاء (1) يمينها شاغر لكنها متجهة لليسار، تتقدم لوسط المفترق وتتوقف لفسح المجال للبيضاء المقابلة. بذلك يفرغ يمين الحمراء فتمر. الترتيب: البيضاء (2)، الحمراء (3)، الزرقاء (1) أخيراً.'
          }
        },
        {
          id: 'ch5-ps3',
          title: '3. علامة قف (STOP)',
          imageOrSvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="0" width="60" height="200" fill="#475569"></rect><rect x="0" y="70" width="200" height="60" fill="#475569"></rect><line x1="100" y1="130" x2="130" y2="130" stroke="white" stroke-width="4"></line> <polygon points="135,135 145,135 150,140 150,150 145,155 135,155 130,150 130,140" fill="#b91c1c"></polygon><rect x="108" y="140" width="16" height="30" rx="3" fill="#ef4444"></rect> <text x="116" y="160" font-size="14" fill="white" font-weight="bold" text-anchor="middle">2</text><rect x="30" y="108" width="30" height="16" rx="3" fill="#3b82f6"></rect> <text x="45" y="120" font-size="14" fill="white" font-weight="bold" text-anchor="middle">1</text></svg>`,
          priorityScenario: {
            cars: [{id: 1, color: 'blue', label: '1'}, {id: 2, color: 'red', label: '2'}],
            solutionOrder: [1, 2],
            solutionExplanation: 'الحمراء (2) تتوقف وجوباً عند الخط وتمرر الزرقاء (1).'
          }
        },
        {
          id: 'ch5-ps4',
          title: '4. الخروج من مسلك ترابي',
          imageOrSvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="0" width="60" height="200" fill="#475569"></rect> <rect x="130" y="70" width="70" height="60" fill="#a16207" opacity="0.8"></rect><rect x="108" y="140" width="16" height="30" rx="3" fill="#3b82f6"></rect> <text x="116" y="160" font-size="14" fill="white" font-weight="bold" text-anchor="middle">1</text><rect x="140" y="76" width="30" height="16" rx="3" fill="#f59e0b"></rect> <text x="155" y="88" font-size="14" fill="black" font-weight="bold" text-anchor="middle">2</text></svg>`,
          priorityScenario: {
            cars: [{id: 1, color: 'blue', label: '1'}, {id: 2, color: 'orange', label: '2'}],
            solutionOrder: [1, 2],
            solutionExplanation: 'الصفراء (2) تخرج من مسلك غير معبد، تفقد الأولوية لليمين وتمرر الزرقاء (1).'
          }
        },
        {
          id: 'ch5-ps5',
          title: '5. مفترق دوراني (أولوية لليسار)',
          imageOrSvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="45" fill="#475569" stroke="white" stroke-width="2" stroke-dasharray="4,4"></circle><circle cx="100" cy="100" r="25" fill="#e2e8f0"></circle><rect x="80" y="145" width="40" height="55" fill="#475569"></rect><line x1="80" y1="146" x2="120" y2="146" stroke="white" stroke-width="3" stroke-dasharray="6,4"></line><rect x="68" y="105" width="16" height="25" rx="3" fill="#3b82f6" transform="rotate(45 76 117)"></rect> <text x="76" y="122" font-size="12" fill="white" font-weight="bold" text-anchor="middle">1</text><rect x="92" y="160" width="16" height="30" rx="3" fill="#ef4444"></rect> <text x="100" y="178" font-size="12" fill="white" font-weight="bold" text-anchor="middle">2</text></svg>`,
          priorityScenario: {
            cars: [{id: 1, color: 'blue', label: '1'}, {id: 2, color: 'red', label: '2'}],
            solutionOrder: [1, 2],
            solutionExplanation: 'الزرقاء (1) داخل المفترق تمر قبل الحمراء (2).'
          }
        },
        {
          id: 'ch5-ps6',
          title: '6. تضارب الإشارات (أخضر وقف)',
          imageOrSvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="0" width="60" height="200" fill="#475569"></rect><rect x="0" y="70" width="200" height="60" fill="#475569"></rect><rect x="135" y="140" width="10" height="25" fill="#1e293b"></rect><circle cx="140" cy="160" r="3" fill="#22c55e"></circle> <polygon points="145,165 155,165 160,170 160,180 155,185 145,185 140,180 140,170" fill="#b91c1c"></polygon><rect x="108" y="140" width="16" height="30" rx="3" fill="#3b82f6"></rect> <text x="116" y="160" font-size="14" fill="white" font-weight="bold" text-anchor="middle">1</text></svg>`,
          priorityScenario: {
            cars: [{id: 1, color: 'blue', label: '1'}],
            solutionOrder: [1],
            solutionExplanation: 'الضوء الأخضر يلغي علامة قف. السيارة تمر دون توقف.'
          }
        },
        {
          id: 'ch5-ps7',
          title: '7. برتقالي رفّاف وعلامة',
          imageOrSvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="0" width="60" height="200" fill="#475569"></rect><rect x="0" y="70" width="200" height="60" fill="#475569"></rect><rect x="135" y="140" width="10" height="25" fill="#1e293b"></rect><circle cx="140" cy="150" r="3" fill="#facc15"></circle> <polygon points="135,160 145,160 140,168" fill="white" stroke="#b91c1c" stroke-width="1"></polygon><rect x="108" y="140" width="16" height="30" rx="3" fill="#ef4444"></rect> <text x="116" y="160" font-size="14" fill="white" font-weight="bold" text-anchor="middle">2</text><rect x="30" y="108" width="30" height="16" rx="3" fill="#3b82f6"></rect> <text x="45" y="120" font-size="14" fill="white" font-weight="bold" text-anchor="middle">1</text></svg>`,
          priorityScenario: {
            cars: [{id: 1, color: 'blue', label: '1'}, {id: 2, color: 'red', label: '2'}],
            solutionOrder: [1, 2],
            solutionExplanation: 'الضوء يومض، نمرر الأولوية للعلامة. الحمراء تفسح المجال.'
          }
        },
        {
          id: 'ch5-ps8',
          title: '8. عربة إسعاف متدخلة',
          imageOrSvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="0" width="60" height="200" fill="#475569"></rect><rect x="0" y="70" width="200" height="60" fill="#475569"></rect><rect x="30" y="108" width="30" height="16" rx="3" fill="white"></rect><rect x="42" y="112" width="6" height="8" fill="#b91c1c"></rect> <rect x="40" y="115" width="10" height="2" fill="#b91c1c"></rect><rect x="42" y="108" width="2" height="16" fill="#3b82f6"></rect> <text x="45" y="102" font-size="12" fill="black" font-weight="bold" text-anchor="middle">1</text><rect x="108" y="140" width="16" height="30" rx="3" fill="#ef4444"></rect> <text x="116" y="160" font-size="14" fill="white" font-weight="bold" text-anchor="middle">2</text></svg>`,
          priorityScenario: {
            cars: [{id: 1, color: 'white', label: '1'}, {id: 2, color: 'red', label: '2'}],
            solutionOrder: [1, 2],
            solutionExplanation: 'الإسعاف (1) يمر أولاً في كل الحالات وعلى الحمراء (2) التوقف.'
          }
        },
        {
          id: 'ch5-ps9',
          title: '9. تقاطع مع علامة X',
          imageOrSvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="0" width="60" height="200" fill="#475569"></rect><rect x="0" y="70" width="200" height="60" fill="#475569"></rect><polygon points="135,135 145,135 150,140 150,150 145,155 135,155 130,150 130,140" fill="white" stroke="#b91c1c" stroke-width="2"></polygon><line x1="135" y1="140" x2="145" y2="150" stroke="black" stroke-width="2"></line><line x1="145" y1="140" x2="135" y2="150" stroke="black" stroke-width="2"></line><rect x="108" y="140" width="16" height="30" rx="3" fill="#ef4444"></rect> <text x="116" y="160" font-size="14" fill="white" font-weight="bold" text-anchor="middle">2</text><rect x="30" y="108" width="30" height="16" rx="3" fill="#3b82f6"></rect> <text x="45" y="120" font-size="14" fill="white" font-weight="bold" text-anchor="middle">1</text></svg>`,
          priorityScenario: {
            cars: [{id: 1, color: 'blue', label: '1'}, {id: 2, color: 'red', label: '2'}],
            solutionOrder: [1, 2],
            solutionExplanation: 'علامة X تلغي أي أولوية سابقة، ويجب تطبيق الأولوية لليمين (تمر الزرقاء 1 قبل الحمراء 2).'
          }
        }
      ]
    }
  ]
};
