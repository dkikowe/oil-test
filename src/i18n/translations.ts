export type Language = 'KZ' | 'RU' | 'EN' | 'FA';

export const translations: Record<Language, Record<string, string>> = {
  RU: {
    // Navigation
    'nav.home': 'Главная',
    'nav.petroleum': 'Нефтепродукты',
    'nav.agro': 'Агропромышленность',
    'nav.contact': 'Контакты',
    
    // Header/Footer
    'header.phone': '+7 777 777 17 78',
    'footer.desc': 'Глобальные поставки энергоресурсов и агропродукции.',
    'footer.rights': '© {year} EOA GROUP. Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',

    // Home - Hero
    'home.hero.subtitle': 'Международная торговля',
    'home.hero.title1': 'Связующее звено',
    'home.hero.title2': 'мировых рынков',
    'home.hero.desc': 'EOA GROUP — ваш стратегический партнер. Мы обеспечиваем надежный экспорт нефтепродуктов и сельскохозяйственных товаров, соединяя производителей и потребителей по всему миру.',
    'home.hero.btn': 'Сотрудничество',

    // Home - About
    'home.about.title': 'О компании EOA GROUP',
    'home.about.p1': 'Мы специализируемся на крупнооптовых поставках сырья и продовольствия. Наша миссия — гарантировать бесперебойность цепочек поставок для промышленных и государственных предприятий в странах СНГ, Ближнего Востока и Азии.',
    'home.about.p2': 'Благодаря прямым контрактам с крупнейшими производителями (такими как Газпром, KazMunayGas, CNPC) и собственной логистической экспертизе, мы предлагаем оптимальные цены и точные сроки поставок.',
    
    // Home - Stats
    'home.stats.countries': 'Стран экспорта',
    'home.stats.tons': 'Тонн продукции в год',
    'home.stats.quality': 'Гарантия качества',
    'home.stats.logistics': 'Логистический контроль',

    // Home - Directions
    'home.dir.title': 'Наши направления',
    'home.dir.desc': 'Два ключевых вектора, обеспечивающих энергетическую и продовольственную безопасность наших партнеров.',
    'home.dir.petroleum': 'Нефтепродукты',
    'home.dir.petroleum.desc': 'Газ, бензин, дизель и сырая нефть. Прямые поставки от ведущих НПЗ с соблюдением всех стандартов.',
    'home.dir.agro': 'Агропромышленность',
    'home.dir.agro.desc': 'Зерновые культуры, мука, масла и сахар. Экспорт в страны Азии и Ближнего Востока.',
    'home.dir.more': 'Подробнее',

    // Home - Advantages
    'home.adv.logistics': 'Глобальная логистика',
    'home.adv.logistics.desc': 'Собственные и партнерские логистические цепочки (ЖД, море, авто) по всему миру.',
    'home.adv.quality': 'Контроль качества',
    'home.adv.quality.desc': 'Строгий аудит каждой партии товара на соответствие международным стандартам.',
    'home.adv.contracts': 'Прямые контракты',
    'home.adv.contracts.desc': 'Работа без посредников с крупнейшими заводами и агрохолдингами.',
    'home.adv.reliability': 'Надежность',
    'home.adv.reliability.desc': 'Безупречная финансовая и юридическая репутация на международных рынках.',
  },
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.petroleum': 'Petroleum',
    'nav.agro': 'Agriculture',
    'nav.contact': 'Contacts',
    
    // Header/Footer
    'header.phone': '+7 777 777 17 78',
    'footer.desc': 'Global supplies of energy resources and agricultural products.',
    'footer.rights': '© {year} EOA GROUP. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',

    // Home - Hero
    'home.hero.subtitle': 'International Trade',
    'home.hero.title1': 'Connecting',
    'home.hero.title2': 'global markets',
    'home.hero.desc': 'EOA GROUP is your strategic partner. We ensure reliable export of petroleum products and agricultural goods, connecting producers and consumers worldwide.',
    'home.hero.btn': 'Cooperation',

    // Home - About
    'home.about.title': 'About EOA GROUP',
    'home.about.p1': 'We specialize in large-scale wholesale supplies of raw materials and food. Our mission is to guarantee uninterrupted supply chains for industrial and state enterprises in the CIS, Middle East, and Asia.',
    'home.about.p2': 'Thanks to direct contracts with major producers (such as Gazprom, KazMunayGas, CNPC) and our own logistics expertise, we offer optimal prices and precise delivery times.',
    
    // Home - Stats
    'home.stats.countries': 'Export Countries',
    'home.stats.tons': 'Tons per year',
    'home.stats.quality': 'Quality Guarantee',
    'home.stats.logistics': 'Logistics Control',

    // Home - Directions
    'home.dir.title': 'Our Directions',
    'home.dir.desc': 'Two key vectors ensuring energy and food security for our partners.',
    'home.dir.petroleum': 'Petroleum Products',
    'home.dir.petroleum.desc': 'Gas, gasoline, diesel, and crude oil. Direct supplies from leading refineries in compliance with all standards.',
    'home.dir.agro': 'Agriculture',
    'home.dir.agro.desc': 'Grains, flour, oils, and sugar. Export to countries in Asia and the Middle East.',
    'home.dir.more': 'Learn More',

    // Home - Advantages
    'home.adv.logistics': 'Global Logistics',
    'home.adv.logistics.desc': 'Own and partner logistics chains (railway, sea, auto) worldwide.',
    'home.adv.quality': 'Quality Control',
    'home.adv.quality.desc': 'Strict audit of each batch of goods for compliance with international standards.',
    'home.adv.contracts': 'Direct Contracts',
    'home.adv.contracts.desc': 'Working without intermediaries with major factories and agricultural holdings.',
    'home.adv.reliability': 'Reliability',
    'home.adv.reliability.desc': 'Impeccable financial and legal reputation in international markets.',
  },
  KZ: {
    // Navigation
    'nav.home': 'Басты бет',
    'nav.petroleum': 'Мұнай өнімдері',
    'nav.agro': 'Агроөнеркәсіп',
    'nav.contact': 'Байланыс',
    
    // Header/Footer
    'header.phone': '+7 777 777 17 78',
    'footer.desc': 'Энергия ресурстары мен агроөнімдерді жаһандық жеткізу.',
    'footer.rights': '© {year} EOA GROUP. Барлық құқықтар қорғалған.',
    'footer.privacy': 'Құпиялылық саясаты',
    'footer.terms': 'Пайдалану шарттары',

    // Home - Hero
    'home.hero.subtitle': 'Халықаралық сауда',
    'home.hero.title1': 'Әлемдік нарықтарды',
    'home.hero.title2': 'байланыстырушы',
    'home.hero.desc': 'EOA GROUP — сіздің стратегиялық серіктесіңіз. Біз өндірушілер мен тұтынушыларды бүкіл әлем бойынша байланыстыра отырып, мұнай өнімдері мен ауыл шаруашылығы тауарларының сенімді экспортын қамтамасыз етеміз.',
    'home.hero.btn': 'Ынтымақтастық',

    // Home - About
    'home.about.title': 'EOA GROUP компаниясы туралы',
    'home.about.p1': 'Біз шикізат пен азық-түлікті ірі көлемде көтерме жеткізуге маманданамыз. Біздің миссиямыз — ТМД, Таяу Шығыс және Азия елдеріндегі өнеркәсіптік және мемлекеттік кәсіпорындар үшін жеткізу тізбегінің үздіксіздігіне кепілдік беру.',
    'home.about.p2': 'Ірі өндірушілермен (Газпром, ҚазМұнайГаз, CNPC сияқты) тікелей келісімшарттар мен өзіміздің логистикалық сараптамамыздың арқасында біз оңтайлы бағалар мен нақты жеткізу мерзімдерін ұсынамыз.',
    
    // Home - Stats
    'home.stats.countries': 'Экспорт елдері',
    'home.stats.tons': 'Жылына өнім тоннасы',
    'home.stats.quality': 'Сапа кепілдігі',
    'home.stats.logistics': 'Логистикалық бақылау',

    // Home - Directions
    'home.dir.title': 'Біздің бағыттар',
    'home.dir.desc': 'Серіктестеріміздің энергетикалық және азық-түлік қауіпсіздігін қамтамасыз ететін екі негізгі вектор.',
    'home.dir.petroleum': 'Мұнай өнімдері',
    'home.dir.petroleum.desc': 'Газ, бензин, дизель және шикі мұнай. Барлық стандарттарды сақтай отырып, жетекші МӨЗ-дерден тікелей жеткізілімдер.',
    'home.dir.agro': 'Агроөнеркәсіп',
    'home.dir.agro.desc': 'Дәнді дақылдар, ұн, майлар және қант. Азия және Таяу Шығыс елдеріне экспорттау.',
    'home.dir.more': 'Толығырақ',

    // Home - Advantages
    'home.adv.logistics': 'Жаһандық логистика',
    'home.adv.logistics.desc': 'Бүкіл әлем бойынша меншікті және серіктестік логистикалық тізбектер (теміржол, теңіз, авто).',
    'home.adv.quality': 'Сапаны бақылау',
    'home.adv.quality.desc': 'Халықаралық стандарттарға сәйкестігіне тауардың әрбір партиясына қатаң аудит.',
    'home.adv.contracts': 'Тікелей келісімшарттар',
    'home.adv.contracts.desc': 'Ірі зауыттар мен агрохолдингтермен делдалсыз жұмыс істеу.',
    'home.adv.reliability': 'Сенімділік',
    'home.adv.reliability.desc': 'Халықаралық нарықтардағы мінсіз қаржылық және заңдық бедел.',
  },
  FA: {
    // Navigation
    'nav.home': 'خانه',
    'nav.petroleum': 'فرآورده‌های نفتی',
    'nav.agro': 'کشاورزی',
    'nav.contact': 'مخاطبین',
    
    // Header/Footer
    'header.phone': '+7 777 777 17 78',
    'footer.desc': 'تامین جهانی منابع انرژی و محصولات کشاورزی.',
    'footer.rights': '© {year} EOA GROUP. تمامی حقوق محفوظ است.',
    'footer.privacy': 'سیاست حفظ حریم خصوصی',
    'footer.terms': 'شرایط استفاده',

    // Home - Hero
    'home.hero.subtitle': 'تجارت بین‌المللی',
    'home.hero.title1': 'پیوند دهنده',
    'home.hero.title2': 'بازارهای جهانی',
    'home.hero.desc': 'EOA GROUP شریک استراتژیک شماست. ما صادرات مطمئن فرآورده‌های نفتی و کالاهای کشاورزی را تضمین می‌کنیم و تولیدکنندگان و مصرف‌کنندگان را در سراسر جهان به هم متصل می‌کنیم.',
    'home.hero.btn': 'همکاری',

    // Home - About
    'home.about.title': 'درباره شرکت EOA GROUP',
    'home.about.p1': 'ما در تامین عمده مواد اولیه و مواد غذایی تخصص داریم. ماموریت ما تضمین زنجیره تامین بدون وقفه برای شرکت‌های صنعتی و دولتی در کشورهای مستقل مشترک المنافع، خاورمیانه و آسیا است.',
    'home.about.p2': 'به لطف قراردادهای مستقیم با تولیدکنندگان بزرگ (مانند گازپروم، کازمونای‌گاز، CNPC) و تخصص لجستیکی خودمان، قیمت‌های بهینه و زمان‌بندی دقیق تحویل را ارائه می‌دهیم.',
    
    // Home - Stats
    'home.stats.countries': 'کشورهای صادراتی',
    'home.stats.tons': 'تن محصول در سال',
    'home.stats.quality': 'تضمین کیفیت',
    'home.stats.logistics': 'کنترل لجستیک',

    // Home - Directions
    'home.dir.title': 'مسیرهای ما',
    'home.dir.desc': 'دو بردار کلیدی که امنیت انرژی و غذایی شرکای ما را تضمین می‌کنند.',
    'home.dir.petroleum': 'فرآورده‌های نفتی',
    'home.dir.petroleum.desc': 'گاز، بنزین، گازوئیل و نفت خام. تامین مستقیم از پالایشگاه‌های پیشرو با رعایت تمامی استانداردها.',
    'home.dir.agro': 'کشاورزی',
    'home.dir.agro.desc': 'غلات، آرد، روغن‌ها و شکر. صادرات به کشورهای آسیا و خاورمیانه.',
    'home.dir.more': 'بیشتر بخوانید',

    // Home - Advantages
    'home.adv.logistics': 'لجستیک جهانی',
    'home.adv.logistics.desc': 'زنجیره‌های لجستیکی اختصاصی و مشارکتی (ریلی، دریایی، جاده‌ای) در سراسر جهان.',
    'home.adv.quality': 'کنترل کیفیت',
    'home.adv.quality.desc': 'حسابرسی دقیق هر محموله کالا برای انطباق با استانداردهای بین‌المللی.',
    'home.adv.contracts': 'قراردادهای مستقیم',
    'home.adv.contracts.desc': 'کار بدون واسطه با کارخانه‌های بزرگ و هلدینگ‌های کشاورزی.',
    'home.adv.reliability': 'قابلیت اطمینان',
    'home.adv.reliability.desc': 'اعتبار مالی و حقوقی بی‌نقص در بازارهای بین‌المللی.',
  }
};
