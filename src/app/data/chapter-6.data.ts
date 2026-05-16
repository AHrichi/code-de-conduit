import { Chapter } from '../models/content.models';

export const CHAPTER_6_DATA: Chapter = {
  id: 'ch6',
  title: 'الوقوف والتوقف',
  icon: 'fa-square-parking',
  sections: [
    {
      id: 'ch6-sec1',
      title: 'أ. المفاهيم الأساسية والوقوف الممنوع',
      icon: 'fa-book',
      type: 'general',
      items: [
        {
          id: 'ch6-r1',
          title: 'التوقف (Arrêt)',
          description: 'إيقاف العربة لإنزال أشخاص أو بضاعة مع إبقاء المحرك يشتغل وبقاء السائق قريباً منها.',
          alertType: 'success',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="60" width="80" height="30" rx="5" fill="#475569"/><circle cx="25" cy="85" r="8" fill="#1e293b"/><circle cx="75" cy="85" r="8" fill="#1e293b"/><path d="M 20 60 L 30 35 L 70 35 L 80 60" fill="#64748b"/><rect x="85" y="55" width="5" height="10" fill="#fbbf24"/><path d="M 45 40 L 45 20 M 40 25 L 50 25" stroke="#22c55e" stroke-width="3" stroke-linecap="round"/></svg>`
        },
        {
          id: 'ch6-r2',
          title: 'الوقوف (Stationnement)',
          description: 'إيقاف العربة وإطفاء المحرك ومغادرتها لفترة زمنية طويلة.',
          alertType: 'info',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="60" width="80" height="30" rx="5" fill="#94a3b8"/><circle cx="25" cy="85" r="8" fill="#475569"/><circle cx="75" cy="85" r="8" fill="#475569"/><path d="M 20 60 L 30 35 L 70 35 L 80 60" fill="#cbd5e1"/><rect x="40" y="10" width="20" height="20" rx="4" fill="#0284c7"/><text x="50" y="26" font-size="16" fill="white" font-weight="bold" text-anchor="middle">P</text></svg>`
        },
        {
          id: 'ch6-r3',
          title: 'الوقوف المفرط',
          description: 'كل وقوف يتجاوز 7 أيام متتالية في نفس المكان يُعتبر وقوفاً مفرطاً وموجباً للمخالفة.',
          alertType: 'danger',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" rx="5" fill="white" stroke="#ef4444" stroke-width="3"/><rect x="20" y="20" width="60" height="15" fill="#ef4444"/><text x="50" y="65" font-size="30" fill="#ef4444" font-weight="bold" text-anchor="middle">7+</text><text x="50" y="32" font-size="10" fill="white" font-weight="bold" text-anchor="middle">DAYS</text></svg>`
        },
        {
          id: 'ch6-r4',
          title: 'الوقوف المضايق',
          description: 'يُمنع في: ممرات المترجلين، الرصيف، أمام المداخل (Garage)، أماكن الأشغال، ومسلك الوقوف الاضطراري.',
          alertType: 'warning',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="70" width="100" height="30" fill="#94a3b8"/><rect x="20" y="55" width="60" height="25" rx="3" fill="#ef4444"/><rect x="10" y="70" width="80" height="5" fill="#fbbf24" stroke="#d97706" stroke-width="1"/><path d="M 30 90 L 70 90" stroke="white" stroke-width="4" stroke-dasharray="8,8"/></svg>`
        },
        {
          id: 'ch6-r5',
          title: 'الوقوف الخطير',
          description: 'هو الذي يحجب الرؤية أو يعرقل المرور في: المنعرجات، المرتفعات، المفترقات، والسكك الحديدية.',
          alertType: 'danger',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 10 90 Q 50 90 90 10" fill="none" stroke="#475569" stroke-width="15"/><rect x="50" y="40" width="25" height="12" fill="#ef4444" transform="rotate(-45 50 40)"/><path d="M 40 20 L 60 40 M 60 20 L 40 40" stroke="#ef4444" stroke-width="5"/></svg>`
        }
      ]
    },
    {
      id: 'ch6-sec2',
      title: 'ب. قواعد التموضع والمسافات الإجبارية',
      icon: 'fa-ruler-combined',
      type: 'general',
      items: [
        {
          id: 'ch6-r6',
          title: 'قواعد التموضع والمسافات',
          description: 'داخل العمران: الوقوف يميناً محاذياً للرصيف (أقل من 30 سم). خارج العمران: في الحاشية الترابية. في طريق ذي اتجاه واحد: يُترك 3 أمتار على الأقل لمرور العربات الأخرى.',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="20" height="100" fill="#94a3b8"/><rect x="25" y="30" width="20" height="40" rx="3" fill="#0284c7"/><path d="M 20 50 L 25 50" stroke="#ef4444" stroke-width="2"/><text x="22" y="45" font-size="6" fill="#ef4444" font-weight="bold">&lt;30cm</text></svg>`
        },
        {
          id: 'ch6-r7',
          title: 'المسافات الإجبارية للمنع',
          description: 'يُمنع الوقوف والتوقف قبل هذه الأماكن بالمسافات التالية:',
          list: [
            'المنعرجات والمرتفعات: 30م (داخل العمران) و 50م (خارج العمران).',
            'تقاطع سكة حديدية: 10م (داخل العمران) و 30م (خارج العمران).',
            'مفترق طرقات: 3م (داخل العمران) و 10م (خارج العمران).'
          ],
          alertType: 'danger',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="45" width="80" height="10" fill="#e2e8f0"/><rect x="10" y="45" width="2" height="10" fill="#475569"/><rect x="90" y="45" width="2" height="10" fill="#475569"/><text x="50" y="40" font-size="12" fill="#ef4444" font-weight="bold" text-anchor="middle">DISTANCE</text><path d="M 15 50 L 85 50" stroke="#ef4444" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/></svg>`
        }
      ]
    },
    {
      id: 'ch6-sec3',
      title: 'ج. علامات منع الوقوف والأسهم',
      icon: 'fa-signs-post',
      type: 'general',
      items: [
        {
          id: 'ch6-r8',
          title: 'بداية منع الوقوف (سهم للأعلى)',
          description: 'يبدأ منع الوقوف انطلاقاً من العلامة مباشرة في اتجاه السهم.',
          imageOrSvg: `<svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="45" r="40" fill="#0284c7" stroke="#b91c1c" stroke-width="8"></circle><path d="M 22 68 L 78 22" stroke="#b91c1c" stroke-width="8"></path><rect x="30" y="90" width="40" height="35" fill="white" stroke="black" stroke-width="2"></rect><path d="M 50 96 L 38 108 L 45 108 L 45 118 L 55 118 L 55 108 L 62 108 Z" fill="black"></path></svg>`
        },
        {
          id: 'ch6-r9',
          title: 'نهاية منع الوقوف (سهم للأسفل)',
          description: 'ينتهي منع الوقوف عند هذه العلامة (كان المنع قبلها).',
          imageOrSvg: `<svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="45" r="40" fill="#0284c7" stroke="#b91c1c" stroke-width="8"></circle><path d="M 22 68 L 78 22" stroke="#b91c1c" stroke-width="8"></path><rect x="30" y="90" width="40" height="35" fill="white" stroke="black" stroke-width="2"></rect><path d="M 50 118 L 38 106 L 45 106 L 45 96 L 55 96 L 55 106 L 62 106 Z" fill="black"></path></svg>`
        },
        {
          id: 'ch6-r10',
          title: 'ممنوع الوقوف',
          description: 'يُمنع ركون العربة في هذا الجانب من الطريق، ولكن يُسمح بالتوقف الوجيز.',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_b6a1.png'
        },
        {
          id: 'ch6-r11',
          title: 'ممنوع التوقف والوقوف',
          description: 'يُمنع الوقوف ولو لفترة قصيرة أو لإنزال ركاب (منع مطلق).',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_b6d.png',
          alertType: 'danger'
        },
        {
          id: 'ch6-r12',
          title: 'مأوى للوقوف (Parking)',
          description: 'مكان مخصص ومسموح فيه بركن العربات.',
          imageOrSvg: 'https://codedelaroutetunisie.app/signs/sign_c1a.png',
          alertType: 'success'
        },
        {
          id: 'ch6-r15',
          title: 'الوقوف التناوبي بالأيام الفردية',
          description: 'يُمنع الوقوف في هذا الجانب من الطريق في الأيام الفردية من الشهر (1، 3، 5...).',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#0284c7" stroke="#b91c1c" stroke-width="10"></circle><rect x="45" y="25" width="10" height="50" fill="white"></rect><path d="M 20 80 L 80 20" stroke="#b91c1c" stroke-width="10"></path></svg>`,
          alertType: 'warning'
        },
        {
          id: 'ch6-r16',
          title: 'الوقوف التناوبي بالأيام الزوجية',
          description: 'يُمنع الوقوف في هذا الجانب من الطريق في الأيام الزوجية من الشهر (2، 4، 6...).',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#0284c7" stroke="#b91c1c" stroke-width="10"></circle><rect x="35" y="25" width="10" height="50" fill="white"></rect><rect x="55" y="25" width="10" height="50" fill="white"></rect><path d="M 20 80 L 80 20" stroke="#b91c1c" stroke-width="10"></path></svg>`,
          alertType: 'warning'
        },
        {
          id: 'ch6-r17',
          title: 'وقت تغيير جهة الوقوف',
          description: 'في حالة الوقوف التناوبي، يتم تغيير جهة ركن العربة من جانب إلى آخر إجبارياً:',
          list: [
            'يتم التغيير ليلاً ما بين الساعة 20:30 والساعة 21:00.'
          ],
          alertType: 'info',
          imageOrSvg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="#475569" stroke-width="4"/><path d="M 50 50 L 50 20 M 50 50 L 70 50" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="50" r="4" fill="#1e293b"/><text x="50" y="85" font-size="10" fill="#475569" font-weight="bold" text-anchor="middle">20:30 - 21:00</text></svg>`
        }
      ]
    },
    {
      id: 'ch6-sec4',
      title: 'د. ألوان الرصيف ودلالاتها',
      icon: 'fa-palette',
      type: 'general',
      items: [
        {
          id: 'ch6-r13',
          title: 'أصفر متواصل',
          description: 'يُمنع الوقوف ويُمنع التوقف معاً. (دلالة مطلقة للمنع كعلامة X).',
          alertType: 'danger',
          imageOrSvg: `<svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="30" fill="#fbbf24"></rect></svg>`
        },
        {
          id: 'ch6-r14',
          title: 'أصفر وأسود (متقطع)',
          description: 'يُمنع الوقوف ولكن يُسمح بالتوقف الوجيز لإنزال ركاب أو بضاعة.',
          alertType: 'warning',
          imageOrSvg: `<svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="25" height="30" fill="black"></rect><rect x="25" y="0" width="25" height="30" fill="#fbbf24"></rect><rect x="50" y="0" width="25" height="30" fill="black"></rect><rect x="75" y="0" width="25" height="30" fill="#fbbf24"></rect></svg>`
        }
      ]
    }
  ]
};
