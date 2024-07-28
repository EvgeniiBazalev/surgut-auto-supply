export const currencies = ["RU", "USD", "EUR"];
export const navigation = {
  categories: [
    {
      name: "Двигатель",
      featured: [
        { name: "Масляные фильтры", href: "#" },
        { name: "Воздушные фильтры", href: "#" },
        { name: "Топливные фильтры", href: "#" },
      ],
      collection: [
        { name: "Все запчасти", href: "#" },
        { name: "Новинки", href: "#" },
        { name: "Бестселлеры", href: "#" },
        { name: "Скидки", href: "#" },
      ],
      categories: [
        { name: "Поршни", href: "#" },
        { name: "Головки блока цилиндров", href: "#" },
        { name: "Распредвалы", href: "#" },
        { name: "Ремни ГРМ", href: "#" },
        { name: "Прокладки", href: "#" },
      ],
      brands: [
        { name: "Bosch", href: "#" },
        { name: "Denso", href: "#" },
        { name: "NGK", href: "#" },
        { name: "ACDelco", href: "#" },
        { name: "Magneti Marelli", href: "#" },
      ],
    },
    {
      name: "Подвеска и Рулевое управление",
      featured: [
        { name: "Амортизаторы", href: "#" },
        { name: "Стойки", href: "#" },
        { name: "Рычаги управления", href: "#" },
      ],
      collection: [
        { name: "Все запчасти", href: "#" },
        { name: "Новинки", href: "#" },
        { name: "Бестселлеры", href: "#" },
        { name: "Скидки", href: "#" },
      ],
      categories: [
        { name: "Шаровые опоры", href: "#" },
        { name: "Рулевые тяги", href: "#" },
        { name: "Сайлентблоки", href: "#" },
        { name: "Пружины", href: "#" },
        { name: "Стабилизаторы", href: "#" },
      ],
      brands: [
        { name: "Moog", href: "#" },
        { name: "KYB", href: "#" },
        { name: "Monroe", href: "#" },
        { name: "TRW", href: "#" },
        { name: "Delphi", href: "#" },
      ],
    },
  ],
  pages: [
    { name: "О нас", href: "#" },
    { name: "Контакты", href: "#" },
  ],
};

export const offers = [
  {
    name: "Бесплатная доставка",
    description: "При заказе от 3000 руб.",
    href: "#",
  },
  {
    name: "Возврат в течение 30 дней",
    description: "Без вопросов и проблем",
    href: "#",
  },
  {
    name: "Подпишитесь на новости",
    description: "Получите скидку 10% на первый заказ",
    href: "#",
  },
];

export const trendingProducts = [
  {
    id: 1,
    name: "Масляный фильтр Bosch",
    color: "Черный",
    price: "500 руб.",
    href: "#",
    imageSrc: "https://example.com/images/oil-filter.jpg",
    imageAlt: "Масляный фильтр Bosch для различных моделей автомобилей",
    availableColors: [
      { name: "Черный", colorBg: "#111827" },
      { name: "Синий", colorBg: "#1E3A8A" },
      { name: "Красный", colorBg: "#DC2626" },
    ],
  },
  {
    id: 2,
    name: "Амортизатор Monroe",
    color: "Серый",
    price: "2500 руб.",
    href: "#",
    imageSrc: "https://example.com/images/shock-absorber.jpg",
    imageAlt: "Амортизатор Monroe для плавной езды",
    availableColors: [
      { name: "Черный", colorBg: "#111827" },
      { name: "Серый", colorBg: "#6B7280" },
    ],
  },
  // More products...
];

export const collections = [
  {
    name: "Двигательные компоненты",
    description: "Высококачественные запчасти для обслуживания двигателя",
    imageSrc: "https://example.com/images/engine-components.jpg",
    imageAlt: "Коллекция различных двигательных компонентов",
    href: "#",
  },
  {
    name: "Тормозные системы",
    description: "Комплексные решения для тормозной системы вашего автомобиля",
    imageSrc: "https://example.com/images/brake-systems.jpg",
    imageAlt: "Коллекция тормозных колодок, дисков и суппортов",
    href: "#",
  },
  {
    name: "Электрические запчасти",
    description: "Качественные электрические компоненты для всех моделей",
    imageSrc: "https://example.com/images/electrical-parts.jpg",
    imageAlt:
      "Различные электрические запчасти, включая аккумуляторы и генераторы",
    href: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "Заказ пришел быстро и идеально подошел. Очень доволен сервисом.",
    attribution: "Иван Иванов, Москва",
  },
  {
    id: 2,
    quote:
      "Отличная поддержка клиентов и быстрая доставка. Качество запчастей на высоте.",
    attribution: "Анна Смирнова, Санкт-Петербург",
  },
  {
    id: 3,
    quote:
      "Заказывал несколько раз и всегда был доволен продуктами и сервисом.",
    attribution: "Дмитрий Кузнецов, Новосибирск",
  },
];

export const footerNavigation = {
  products: [
    { name: "Двигатель", href: "#" },
    { name: "Подвеска и Рулевое управление", href: "#" },
    { name: "Тормозные системы", href: "#" },
    { name: "Электрические запчасти", href: "#" },
    { name: "Аксессуары для интерьера", href: "#" },
  ],
  customerService: [
    { name: "Контакты", href: "#" },
    { name: "Информация о доставке", href: "#" },
    { name: "Политика возврата", href: "#" },
    { name: "Гарантия", href: "#" },
    { name: "Безопасные платежи", href: "#" },
    { name: "Часто задаваемые вопросы", href: "#" },
    { name: "Поиск магазина", href: "#" },
  ],
  company: [
    { name: "О нас", href: "#" },
    { name: "Устойчивое развитие", href: "#" },
    { name: "Пресса", href: "#" },
    { name: "Карьера", href: "#" },
    { name: "Условия использования", href: "#" },
    { name: "Политика конфиденциальности", href: "#" },
  ],
  legal: [
    { name: "Условия обслуживания", href: "#" },
    { name: "Политика возврата", href: "#" },
    { name: "Политика конфиденциальности", href: "#" },
    { name: "Политика доставки", href: "#" },
  ],
  bottomLinks: [
    { name: "Доступность", href: "#" },
    { name: "Конфиденциальность", href: "#" },
    { name: "Условия", href: "#" },
  ],
};
