import { Chapter } from '../models/content.models';

export const CHAPTER_3_DATA: Chapter = {
  id: 'ch3',
  title: 'تجهيزات العربة، الحمولة، والإضاءة',
  icon: 'fa-lightbulb',
  sections: [
    {
      id: 'ch3-sec1',
      title: 'أ. أبعاد العربة والحمولة',
      icon: 'fa-box',
      type: 'general',
      items: [
        {
          id: 'ch3-r1',
          title: 'العرض والارتفاع الأقصى',
          description: 'العرض الأقصى المسموح به هو 2.55 متر (باعتبار الحمولة). الارتفاع الأقصى هو 4 أمتار من مستوى الأرض.',
          icon: 'fa-arrows-left-right',
          alertType: 'warning'
        },
        {
          id: 'ch3-r2',
          title: 'بروز الحمولة من الأمام',
          description: 'يُمنع منعاً باتاً تجاوز الحمولة لمقدمة العربة.',
          icon: 'fa-truck-front',
          alertType: 'danger'
        },
        {
          id: 'ch3-r3',
          title: 'بروز الحمولة من الخلف',
          description: 'البروز من الخلف مسموح به كحد أقصى 3 أمتار. إذا تجاوزت الحمولة 1 متر، يجب وضع شارة حمراء من الجهة اليسرى.',
          icon: 'fa-arrow-left-long',
          alertType: 'info'
        }
      ]
    },
    {
      id: 'ch3-sec2',
      title: 'ب. مثلثات العطب الإجبارية',
      icon: 'fa-triangle-exclamation',
      type: 'general',
      items: [
        {
          id: 'ch3-r4',
          title: 'مسافة الرؤية للمثلث',
          description: 'يجب أن يكون المثلث مرئياً بوضوح من مسافة لا تقل عن 50 متراً.',
          alertType: 'danger'
        },
        {
          id: 'ch3-r5',
          title: 'مسافات وضع المثلث',
          description: 'في الحالات العادية: 30 متراً. عند وقوع حادث مرور: 150 متراً. في الطريق السيارة: 100 متر.',
          alertType: 'info'
        },
        {
          id: 'ch3-r6',
          title: 'الوضعية في المرتفعات',
          description: 'يُوضع المثلث قبل بداية الانحدار (وليس انطلاقاً من السيارة) لتفادي مفاجأة السواق الآخرين.',
          alertType: 'warning'
        }
      ]
    },
    {
      id: 'ch3-sec3',
      title: 'ج. أضواء العربة ومسافات الرؤية',
      icon: 'fa-lightbulb',
      type: 'general',
      items: [
        {
          id: 'ch3-r7',
          title: 'أضواء الوضعية (Veilleuse)',
          description: 'تُرى من مسافة 150 متر. تُستخدم للوقوف ليلاً في طريق غير مضاء.',
          icon: 'fa-regular fa-lightbulb',
          alertType: 'info'
        },
        {
          id: 'ch3-r8',
          title: 'أضواء المقاطعة (Code)',
          description: 'تُنير مسافة 30 متر. تُستخدم للمقاطعة، السير عند المطر أو الضباب، وعند السير وراء عربة أخرى.',
          icon: 'fa-solid fa-headlight',
          alertType: 'warning'
        },
        {
          id: 'ch3-r9',
          title: 'أضواء الطريق (Phare)',
          description: 'تُنير مسافة 100 متر. تُستخدم في الطرق الخالية وغير المضاءة تماماً (يجب إطفاؤها عند ملاقاة عربة أخرى لأنها تبهر السواق).',
          icon: 'fa-solid fa-highlighter',
          alertType: 'danger'
        },
        {
          id: 'ch3-r10',
          title: 'أضواء تغيير الاتجاه (Clignotant)',
          description: 'لونها برتقالي، ويجب استعمالها وجوباً عند كل تغيير في مسار العربة أو اتجاهها.',
          icon: 'fa-solid fa-arrows-turn-right',
          alertType: 'info'
        },
        {
          id: 'ch3-r11',
          title: 'لوحة التسجيل والعاكسات',
          description: 'قياسات الرؤية الإجبارية للتجهيزات الخلفية:',
          list: [
            'لوحة التسجيل الخلفية: يجب أن تُقرأ بوضوح من مسافة 20 متراً.',
            'العاكسات الحمراء (Catadioptres): يجب أن تُرى من مسافة 100 متر.'
          ],
          icon: 'fa-solid fa-eye',
          alertType: 'warning'
        }
      ]
    },
    {
      id: 'ch3-sec4',
      title: 'د. تجهيزات وقواعد إضافية',
      icon: 'fa-toolbox',
      type: 'general',
      items: [
        {
          id: 'ch3-r12',
          title: 'المرايا العاكسة',
          description: 'يجب تعديل المرايا دائماً بعد تعديل المقعد. المرآة الداخلية واليسرى إجباريتان في جميع الحالات. تضاف المرآة اليمنى وجوباً عند جر مجرورة تحجب الرؤية الخلفية.',
          icon: 'fa-eye',
          alertType: 'warning'
        },
        {
          id: 'ch3-r13',
          title: 'بلور العربة والملصقات',
          description: 'يُمنع منعاً باتاً وضع ملصقات إضافية على البلور الأمامي والخلفي للعربة، حتى لو كان ذلك لغرض الإشهار، لضمان الرؤية الكاملة والشفافية القانونية.',
          icon: 'fa-ban',
          alertType: 'danger'
        },
        {
          id: 'ch3-r14',
          title: 'المناطق الثلجية وسلاسل الثلوج',
          description: 'في المناطق الثلجية، لا بد من استعمال سلاسل الثلوج للعجلات. يجب تركيبها على عجلتين محركتين على الأقل لضمان التماسك.',
          icon: 'fa-snowflake',
          alertType: 'info'
        }
      ]
    }
  ]
};
