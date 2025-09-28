export type Language = "ru" | "en" | "kk"

export type TranslationContent = {
  metadata: {
    title: string
    description: string
  }
  header: {
    brandInitials: string
    brandName: string
    nav: {
      about: string
      programs: string
      advantages: string
      contacts: string
    }
    cta: string
  }
  hero: {
    imageAlt: string
    titlePrefix: string
    titleHighlight: string
    titleSuffix: string
    subtitle: string
    primaryAction: string
    secondaryAction: string
    features: string[]
  }
  about: {
    heading: string
    highlight: string
    description: string
    cards: Array<{
      title: string
      description: string
    }>
  }
  whyImportant: {
    heading: string
    highlight: string
    description: string
    benefits: Array<{
      title: string
      description: string
    }>
  }
  programs: {
    heading: string
    highlight: string
    description: string
    items: Array<{
      title: string
      description: string
      duration: string
      age: string
      level: string
    }>
    cta: string
  }
  format: {
    heading: string
    highlight: string
    description: string
    features: Array<{
      title: string
      description: string
    }>
  }
  testimonials: {
    heading: string
    highlight: string
    description: string
    entries: Array<{
      name: string
      role: string
      content: string
      rating: number
    }>
  }
  cta: {
    headingPrefix: string
    headingHighlight: string
    headingSuffix: string
    description: string
    primaryAction: string
    secondaryAction: string
    highlights: string[]
  }
  footer: {
    description: string
    quickLinksHeading: string
    quickLinks: {
      about: string
      programs: string
      advantages: string
      schedule: string
      pricing: string
    }
    contactsHeading: string
    phone: string
    email: string
    address: string
    copyright: string
    privacy: string
    terms: string
  }
}

export const translations: Record<Language, TranslationContent> = {
  ru: {
    metadata: {
      title: "Startum Kids — твой старт в будущее с ИИ",
      description:
        "Современная мини-школа для детей 8+ лет. Развиваем креативность и цифровые навыки через практику с искусственным интеллектом.",
    },
    header: {
      brandInitials: "SK",
      brandName: "Startum Kids",
      nav: {
        about: "О школе",
        programs: "Программы",
        advantages: "Преимущества",
        contacts: "Контакты",
      },
      cta: "Записаться",
    },
    hero: {
      imageAlt: "Startum Kids — образовательный робот",
      titlePrefix: "Startum Kids —",
      titleHighlight: "твой старт в будущее",
      titleSuffix: "с искусственным интеллектом",
      subtitle:
        "Развиваем детей 8+ лет через практику с ИИ-инструментами, креативность и современные цифровые навыки",
      primaryAction: "Попробовать бесплатно",
      secondaryAction: "Узнать больше",
      features: ["Мини-группы до 6 детей", "100% практические занятия", "Реальные проекты с ИИ"],
    },
    about: {
      heading: "О школе",
      highlight: "Startum Kids",
      description:
        "Мы создали уникальную образовательную среду, где дети изучают будущее уже сегодня. Наша миссия — развивать детей через практику с ИИ-инструментами, формируя креативность и цифровые навыки XXI века.",
      cards: [
        {
          title: "Наша цель",
          description: "Подготовить детей к будущему, где ИИ станет неотъемлемой частью жизни и работы",
        },
        {
          title: "Наш подход",
          description: "Обучение в мини-группах с индивидуальным подходом к каждому ребенку",
        },
        {
          title: "Наш результат",
          description: "Уверенные в себе дети, готовые творить и создавать с помощью современных технологий",
        },
      ],
    },
    whyImportant: {
      heading: "Почему это",
      highlight: "важно",
      description: "В мире, где ИИ меняет все сферы жизни, важно дать детям преимущество уже сегодня",
      benefits: [
        {
          title: "Навыки будущего",
          description: "Изучение ИИ-инструментов, которые будут востребованы в ближайшие 10-20 лет",
        },
        {
          title: "Креативность",
          description: "Развитие творческого мышления через создание уникальных проектов с ИИ",
        },
        {
          title: "Работа с технологиями",
          description: "Практические навыки использования современных цифровых инструментов",
        },
        {
          title: "Уверенность в себе",
          description: "Повышение самооценки через достижение реальных результатов в проектах",
        },
      ],
    },
    programs: {
      heading: "Наши",
      highlight: "программы",
      description: "Практические курсы, где дети создают реальные проекты с помощью ИИ-инструментов",
      items: [
        {
          title: "Создай персонажа с ИИ",
          description: "Дети учатся создавать уникальных персонажей с помощью ИИ-генераторов изображений",
          duration: "4 недели",
          age: "8-12 лет",
          level: "Начинающий",
        },
        {
          title: "Мультфильмы с ИИ",
          description: "Создание коротких анимационных роликов с использованием ИИ-инструментов",
          duration: "6 недель",
          age: "10-14 лет",
          level: "Продвинутый",
        },
        {
          title: "ИИ-помощник в учёбе",
          description: "Изучаем, как ИИ может помочь в выполнении домашних заданий и изучении новых тем",
          duration: "3 недели",
          age: "8-16 лет",
          level: "Для всех",
        },
      ],
      cta: "Записаться на курс",
    },
    format: {
      heading: "Формат",
      highlight: "обучения",
      description: "Современный подход к образованию с фокусом на практические результаты",
      features: [
        {
          title: "Мини-группы",
          description: "До 6 детей в группе для максимального внимания каждому ученику",
        },
        {
          title: "Практика",
          description: "100% практических занятий с реальными ИИ-инструментами",
        },
        {
          title: "Результат",
          description: "Каждый ребенок создает собственный проект к концу курса",
        },
      ],
    },
    testimonials: {
      heading: "Что говорят",
      highlight: "родители",
      description: "Отзывы семей, которые уже оценили качество нашего обучения",
      entries: [
        {
          name: "Анна Петрова",
          role: "Мама Максима, 10 лет",
          content:
            "Максим в восторге от занятий! Теперь он создает своих персонажей и даже помогает мне с презентациями для работы. Спасибо Startum Kids за такой современный подход к обучению.",
          rating: 5,
        },
        {
          name: "Дмитрий Козлов",
          role: "Папа Софии, 12 лет",
          content:
            "София всегда была творческой, но здесь она научилась воплощать свои идеи с помощью ИИ. Теперь она мечтает стать дизайнером и уже создает потрясающие проекты.",
          rating: 5,
        },
        {
          name: "Елена Смирнова",
          role: "Мама Артема, 9 лет",
          content:
            "Артем стал более уверенным в себе и начал интересоваться технологиями. Преподаватели умеют найти подход к каждому ребенку. Очень рекомендую!",
          rating: 5,
        },
      ],
    },
    cta: {
      headingPrefix: "Startum Kids",
      headingHighlight: "—",
      headingSuffix: "начни путь в будущее уже сегодня",
      description:
        "Дай своему ребенку преимущество в мире технологий. Запишись на бесплатное пробное занятие и убедись в эффективности нашего подхода.",
      primaryAction: "Записаться на пробное занятие",
      secondaryAction: "Задать вопрос",
      highlights: ["Бесплатное пробное занятие", "Без долгосрочных обязательств", "Индивидуальный подход"],
    },
    footer: {
      description:
        "Современная мини-школа для детей 8+ лет. Развиваем креативность и цифровые навыки через практику с искусственным интеллектом.",
      quickLinksHeading: "Быстрые ссылки",
      quickLinks: {
        about: "О школе",
        programs: "Программы",
        advantages: "Преимущества",
        schedule: "Расписание",
        pricing: "Цены",
      },
      contactsHeading: "Контакты",
      phone: "+7 (999) 123-45-67",
      email: "info@startumkids.ru",
      address: "г. Москва, ул. Инновационная, д. 42",
      copyright: "© 2025 Startum Kids. Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Пользовательское соглашение",
    },
  },
  en: {
    metadata: {
      title: "Startum Kids — your launch into the future with AI",
      description:
        "A modern micro-school for children 8+. We develop creativity and digital skills through hands-on work with artificial intelligence.",
    },
    header: {
      brandInitials: "SK",
      brandName: "Startum Kids",
      nav: {
        about: "About",
        programs: "Programs",
        advantages: "Benefits",
        contacts: "Contacts",
      },
      cta: "Enroll",
    },
    hero: {
      imageAlt: "Startum Kids learning robot",
      titlePrefix: "Startum Kids —",
      titleHighlight: "your launch into the future",
      titleSuffix: "with artificial intelligence",
      subtitle:
        "We help kids 8+ grow through hands-on practice with AI tools, creativity, and modern digital skills",
      primaryAction: "Try for free",
      secondaryAction: "Learn more",
      features: ["Mini-groups of up to 6 kids", "100% hands-on sessions", "Real projects with AI"],
    },
    about: {
      heading: "About the school",
      highlight: "Startum Kids",
      description:
        "We created a unique learning environment where children explore the future today. Our mission is to nurture kids through practice with AI tools, building creativity and 21st century digital skills.",
      cards: [
        {
          title: "Our goal",
          description: "Prepare children for a future where AI is part of everyday life and work",
        },
        {
          title: "Our approach",
          description: "Learning in mini-groups with an individual approach to every child",
        },
        {
          title: "Our result",
          description: "Confident kids ready to create with modern technology",
        },
      ],
    },
    whyImportant: {
      heading: "Why it",
      highlight: "matters",
      description: "In a world transformed by AI, it's vital to give children an advantage today",
      benefits: [
        {
          title: "Future skills",
          description: "Learning AI tools that will be in demand over the next 10–20 years",
        },
        {
          title: "Creativity",
          description: "Developing creative thinking through unique AI-powered projects",
        },
        {
          title: "Tech fluency",
          description: "Practical experience with modern digital instruments",
        },
        {
          title: "Confidence",
          description: "Boosting self-esteem by achieving real project outcomes",
        },
      ],
    },
    programs: {
      heading: "Our",
      highlight: "programs",
      description: "Hands-on courses where kids build real projects with AI tools",
      items: [
        {
          title: "Create a character with AI",
          description: "Kids learn to design unique characters using AI image generators",
          duration: "4 weeks",
          age: "Ages 8–12",
          level: "Beginner",
        },
        {
          title: "AI-powered cartoons",
          description: "Produce short animated videos with the help of AI tools",
          duration: "6 weeks",
          age: "Ages 10–14",
          level: "Advanced",
        },
        {
          title: "AI study assistant",
          description: "Discover how AI can support homework and exploring new topics",
          duration: "3 weeks",
          age: "Ages 8–16",
          level: "All levels",
        },
      ],
      cta: "Join the course",
    },
    format: {
      heading: "Learning",
      highlight: "format",
      description: "A modern education approach focused on practical results",
      features: [
        {
          title: "Mini-groups",
          description: "Up to 6 children per group for maximum attention",
        },
        {
          title: "Practice",
          description: "100% practical sessions with real AI tools",
        },
        {
          title: "Outcome",
          description: "Every child completes a personal project by the end of the course",
        },
      ],
    },
    testimonials: {
      heading: "What parents",
      highlight: "say",
      description: "Feedback from families who have already experienced our school",
      entries: [
        {
          name: "Anna Petrova",
          role: "Maxim's mom, 10 y.o.",
          content:
            "Maxim is thrilled with the classes! Now he creates his own characters and even helps me with work presentations. Thank you, Startum Kids, for such a modern approach to learning.",
          rating: 5,
        },
        {
          name: "Dmitry Kozlov",
          role: "Sophia's dad, 12 y.o.",
          content:
            "Sophia has always been creative, but here she learned to bring ideas to life with AI. She now dreams of becoming a designer and already makes stunning projects.",
          rating: 5,
        },
        {
          name: "Elena Smirnova",
          role: "Artem's mom, 9 y.o.",
          content:
            "Artem became more confident and started exploring technology. The teachers find an approach to every child. Highly recommend!",
          rating: 5,
        },
      ],
    },
    cta: {
      headingPrefix: "Startum Kids",
      headingHighlight: "—",
      headingSuffix: "start the journey into the future today",
      description:
        "Give your child an edge in a tech-driven world. Book a free trial lesson and see the impact for yourself.",
      primaryAction: "Book a trial lesson",
      secondaryAction: "Ask a question",
      highlights: ["Free trial lesson", "No long-term commitments", "Individual approach"],
    },
    footer: {
      description:
        "A modern micro-school for children 8+. We foster creativity and digital skills through hands-on AI practice.",
      quickLinksHeading: "Quick links",
      quickLinks: {
        about: "About",
        programs: "Programs",
        advantages: "Benefits",
        schedule: "Schedule",
        pricing: "Pricing",
      },
      contactsHeading: "Contacts",
      phone: "+7 (999) 123-45-67",
      email: "info@startumkids.ru",
      address: "Moscow, Innovatsionnaya St. 42",
      copyright: "© 2025 Startum Kids. All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of use",
    },
  },
  kk: {
    metadata: {
      title: "Startum Kids — жасанды интеллектпен болашаққа жол",
      description:
        "8+ жастағы балаларға арналған заманауи мини-мектеп. Біз шығармашылық пен цифрлық дағдыларды ЖИ құралдарымен тәжірибе арқылы дамытамыз.",
    },
    header: {
      brandInitials: "SK",
      brandName: "Startum Kids",
      nav: {
        about: "Мектеп туралы",
        programs: "Бағдарламалар",
        advantages: "Артықшылықтар",
        contacts: "Байланыс",
      },
      cta: "Тіркелу",
    },
    hero: {
      imageAlt: "Startum Kids оқу роботы",
      titlePrefix: "Startum Kids —",
      titleHighlight: "болашаққа бастайтын жол",
      titleSuffix: "жасанды интеллектпен",
      subtitle:
        "8+ жастағы балаларды ЖИ құралдарымен тәжірибе, шығармашылық және заманауи цифрлық дағдылар арқылы дамытамыз",
      primaryAction: "Тегін көру",
      secondaryAction: "Толығырақ",
      features: ["6 балаға дейінгі мини-топтар", "100% тәжірибелік сабақтар", "ЖИ-мен нақты жобалар"],
    },
    about: {
      heading: "Мектеп туралы",
      highlight: "Startum Kids",
      description:
        "Біз балалар бүгіннің өзінде болашақты зерттейтін ерекше білім беру ортасын құрдық. Миссиямыз — ЖИ құралдарымен тәжірибе арқылы балалардың шығармашылығы мен XXI ғасырдың цифрлық дағдыларын дамыту.",
      cards: [
        {
          title: "Мақсатымыз",
          description: "ЖИ өмір мен жұмыстың ажырамас бөлігі болатын болашаққа балаларды дайындау",
        },
        {
          title: "Тәсіліміз",
          description: "Әр балаға жеке көңіл бөлу үшін мини-топтарда оқыту",
        },
        {
          title: "Нәтижеміз",
          description: "Заманауи технологиялармен жасай алатын, өзіне сенімді балалар",
        },
      ],
    },
    whyImportant: {
      heading: "Неліктен бұл",
      highlight: "маңызды",
      description: "ЖИ өмірдің барлық саласын өзгертіп жатқанда, балаларға бүгіннен бастап артықшылық беру қажет",
      benefits: [
        {
          title: "Болашақ дағдылары",
          description: "Алдағы 10–20 жылда сұранысқа ие болатын ЖИ құралдарын меңгеру",
        },
        {
          title: "Шығармашылық",
          description: "ЖИ көмегімен бірегей жобаларды жасап, шығармашылық ойлауды дамыту",
        },
        {
          title: "Технологияларды меңгеру",
          description: "Заманауи цифрлық құралдарды қолданудың практикалық дағдылары",
        },
        {
          title: "Өзіндік сенім",
          description: "Нақты жобалық нәтижелер арқылы өзін-өзі бағалауды арттыру",
        },
      ],
    },
    programs: {
      heading: "Біздің",
      highlight: "бағдарламалар",
      description: "Балалар ЖИ құралдарының көмегімен нақты жобалар жасайтын тәжірибелік курстар",
      items: [
        {
          title: "ЖИ арқылы кейіпкер жаса",
          description: "Балалар ЖИ сурет генераторларын пайдаланып ерекше кейіпкерлер құруды үйренеді",
          duration: "4 апта",
          age: "8–12 жас",
          level: "Бастапқы",
        },
        {
          title: "ЖИ мультфильмдері",
          description: "ЖИ құралдарын қолданып қысқа анимациялық роликтер жасау",
          duration: "6 апта",
          age: "10–14 жас",
          level: "Жетілдірілген",
        },
        {
          title: "Оқудағы ЖИ көмекшісі",
          description: "ЖИ үй тапсырмасын орындауға және жаңа тақырыптарды зерттеуге қалай көмектесетінін үйренеміз",
          duration: "3 апта",
          age: "8–16 жас",
          level: "Барлығына",
        },
      ],
      cta: "Курсқа жазылу",
    },
    format: {
      heading: "Оқыту",
      highlight: "форматы",
      description: "Практикалық нәтижелерге бағытталған заманауи білім беру тәсілі",
      features: [
        {
          title: "Мини-топтар",
          description: "Әр оқушыға барынша көңіл бөлу үшін топта 6 балаға дейін",
        },
        {
          title: "Тәжірибе",
          description: "Нағыз ЖИ құралдарымен 100% практикалық сабақтар",
        },
        {
          title: "Нәтиже",
          description: "Курс соңында әр бала өз жобасын аяқтайды",
        },
      ],
    },
    testimonials: {
      heading: "Ата-аналар",
      highlight: "пікірі",
      description: "Біздің оқыту сапасын бағалаған отбасылардың пікірлері",
      entries: [
        {
          name: "Анна Петрова",
          role: "Максимнің анасы, 10 жаста",
          content:
            "Максим сабақтарға қуана қатысады! Енді ол өз кейіпкерлерін жасап, маған да жұмыстағы презентацияларға көмектеседі. Заманауи тәсіл үшін Startum Kids-ке рахмет.",
          rating: 5,
        },
        {
          name: "Дмитрий Козлов",
          role: "Софияның әкесі, 12 жаста",
          content:
            "София әрдайым шығармашыл болатын, бірақ мұнда ол идеяларын ЖИ арқылы жүзеге асыруды үйренді. Енді дизайнер болуды армандайды және керемет жобалар жасайды.",
          rating: 5,
        },
        {
          name: "Елена Смирнова",
          role: "Артемнің анасы, 9 жаста",
          content:
            "Артем өзіне сенімді болып, технологияға қызыға бастады. Мұғалімдер әр балаға жол таба біледі. Ұсынатын боламын!",
          rating: 5,
        },
      ],
    },
    cta: {
      headingPrefix: "Startum Kids",
      headingHighlight: "—",
      headingSuffix: "болашаққа жолды бүгін баста",
      description:
        "Балаңызға технологиялар әлемінде артықшылық беріңіз. Тегін сынақ сабағына жазылып, біздің тәсілдің тиімділігіне көз жеткізіңіз.",
      primaryAction: "Сынақ сабағына жазылу",
      secondaryAction: "Сұрақ қою",
      highlights: ["Тегін сынақ сабағы", "Ұзақ мерзімді міндеттемесіз", "Жеке тәсіл"],
    },
    footer: {
      description:
        "8+ жастағы балаларға арналған заманауи мини-мектеп. ЖИ-пен тәжірибе арқылы шығармашылық пен цифрлық дағдыларды дамытамыз.",
      quickLinksHeading: "Жылдам сілтемелер",
      quickLinks: {
        about: "Мектеп туралы",
        programs: "Бағдарламалар",
        advantages: "Артықшылықтар",
        schedule: "Кесте",
        pricing: "Баға",
      },
      contactsHeading: "Байланыс",
      phone: "+7 (999) 123-45-67",
      email: "info@startumkids.ru",
      address: "Мәскеу, Инновациялық көш., 42",
      copyright: "© 2025 Startum Kids. Барлық құқықтар қорғалған.",
      privacy: "Құпиялылық саясаты",
      terms: "Пайдаланушы келісімі",
    },
  },
}
