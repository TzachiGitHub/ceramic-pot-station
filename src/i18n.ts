import { useState, useEffect, useCallback } from 'react';
import type { Language } from './types';

const translations: Record<string, Record<Language, string>> = {
  'siteName': { ru: 'Керамическая Мастерская', en: 'Ceramic Pot Station', he: 'סטודיו לקרמיקה' },

  // Nav
  'nav.home': { ru: 'Главная', en: 'Home', he: 'ראשי' },
  'nav.gallery': { ru: 'Галерея', en: 'Gallery', he: 'גלריה' },
  'nav.classes': { ru: 'Мастер-классы', en: 'Classes', he: 'סדנאות' },
  'nav.about': { ru: 'Обо мне', en: 'About', he: 'אודות' },
  'nav.contact': { ru: 'Контакты', en: 'Contact', he: 'צור קשר' },

  // Hero
  'hero.title': {
    ru: 'Ceramic Pot\nStation',
    en: 'Ceramic Pot\nStation',
    he: 'Ceramic Pot\nStation',
  },
  'hero.tagline': {
    ru: 'Керамика ручной работы, в которую вложена душа',
    en: 'Handmade ceramics crafted with soul',
    he: 'קרמיקה בעבודת יד, עם נשמה בכל יצירה',
  },
  'hero.subtitle': {
    ru: 'Мастерская Анны в Рамат-Гане',
    en: "Anna's Studio in Ramat Gan",
    he: 'הסטודיו של אנה ברמת גן',
  },
  'hero.description': {
    ru: 'Уникальная посуда и декор ручной работы. Мастер-классы для компании друзей, пары или всей семьи.',
    en: 'Unique handmade tableware and decor. Workshops for friends, couples, and families.',
    he: 'כלים ודקורציה ייחודיים בעבודת יד. סדנאות לחברים, זוגות ומשפחות.',
  },
  'hero.cta.gallery': { ru: 'Галерея работ', en: 'View Gallery', he: 'לגלריה' },
  'hero.cta.classes': { ru: 'Записаться на мастер-класс', en: 'Book a Class', he: 'הרשמה לסדנה' },
  'hero.scroll': { ru: 'листайте вниз', en: 'scroll down', he: 'גללו למטה' },

  // Gallery
  'gallery.label': { ru: 'Наши работы', en: 'Our Work', he: 'העבודות שלנו' },
  'gallery.title': { ru: 'Галерея работ', en: 'Gallery', he: 'גלריה' },
  'gallery.subtitle': {
    ru: 'Каждое изделие создано вручную с любовью и вниманием к деталям',
    en: 'Every piece is handcrafted with love and attention to detail',
    he: 'כל יצירה נעשית בעבודת יד באהבה ותשומת לב לפרטים',
  },
  'gallery.viewAll': { ru: 'Смотреть все', en: 'View All', he: 'צפה בהכל' },
  'gallery.category.all': { ru: 'Все', en: 'All', he: 'הכל' },
  'gallery.category.mugs': { ru: 'Кружки', en: 'Mugs', he: 'ספלים' },
  'gallery.category.bowls': { ru: 'Пиалы', en: 'Bowls', he: 'קערות' },
  'gallery.category.vases': { ru: 'Вазы', en: 'Vases', he: 'אגרטלים' },
  'gallery.category.decorative': { ru: 'Декор', en: 'Decorative', he: 'דקורטיבי' },
  'gallery.category.sets': { ru: 'Наборы', en: 'Sets', he: 'סטים' },
  'gallery.contact': { ru: 'Написать в WhatsApp', en: 'WhatsApp to Buy', he: 'לרכישה בוואטסאפ' },
  'gallery.whatsappMessage': {
    ru: 'Здравствуйте! Меня интересует: {item}',
    en: 'Hi! I\'m interested in: {item}',
    he: 'שלום! מעוניין/ת ב: {item}',
  },
  'gallery.filter.all': { ru: 'Все', en: 'All', he: 'הכל' },
  'gallery.filter.mugs': { ru: 'Кружки', en: 'Mugs', he: 'ספלים' },
  'gallery.filter.bowls': { ru: 'Пиалы', en: 'Bowls', he: 'קערות' },
  'gallery.filter.vases': { ru: 'Вазы', en: 'Vases', he: 'אגרטלים' },
  'gallery.filter.decorative': { ru: 'Декор', en: 'Decorative', he: 'דקורטיבי' },
  'gallery.filter.sets': { ru: 'Наборы', en: 'Sets', he: 'סטים' },

  // Classes
  'classes.label': { ru: 'Творчество', en: 'Creative Experience', he: 'חוויה יצירתית' },
  'classes.title': { ru: 'Мастер-классы', en: 'Workshops & Classes', he: 'סדנאות' },
  'classes.subtitle': {
    ru: 'Творите вместе — незабываемые впечатления для компании друзей, пары или всей семьи',
    en: 'Create together — unforgettable experiences for friends, couples, and families',
    he: 'יוצרים ביחד — חוויות בלתי נשכחות לחברים, זוגות ומשפחות',
  },
  'classes.book': { ru: 'Записаться через WhatsApp', en: 'Book via WhatsApp', he: 'הרשמה דרך WhatsApp' },
  'classes.viaWhatsApp': { ru: 'через WhatsApp', en: 'via WhatsApp', he: 'דרך WhatsApp' },
  'classes.whatsappMessage': {
    ru: 'Здравствуйте! Хочу записаться на мастер-класс: {class}',
    en: 'Hi! I\'d like to book a class: {class}',
    he: 'שלום! רוצה להירשם לסדנה: {class}',
  },
  'classes.duration': { ru: 'Длительность', en: 'Duration', he: 'משך' },
  'classes.groupSize': { ru: 'Размер группы', en: 'Group size', he: 'גודל קבוצה' },
  'classes.price': { ru: 'Стоимость', en: 'Price', he: 'מחיר' },

  // About
  'about.label': { ru: 'О мастере', en: 'The Artist', he: 'על האמנית' },
  'about.title': { ru: 'Об Анне', en: 'About Anna', he: 'על אנה' },
  'about.storyTitle': {
    ru: 'Привет, я Анна!',
    en: "Hi, I'm Anna!",
    he: 'שלום, אני אנה!',
  },
  'about.story1': {
    ru: 'Я создаю керамику в своей мастерской в Рамат-Гане уже больше восьми лет. Каждое изделие я делаю вручную — от первого прикосновения к глине до финального обжига.',
    en: "I've been creating ceramics in my Ramat Gan studio for over eight years. Every piece is handcrafted — from the first touch of clay to the final firing.",
    he: 'אני יוצרת קרמיקה בסטודיו שלי ברמת גן כבר למעלה משמונה שנים. כל יצירה נעשית בעבודת יד — מהמגע הראשון בחימר ועד לשריפה האחרונה.',
  },
  'about.story2': {
    ru: 'Для меня керамика — это не просто ремесло, а способ разговаривать с миром через форму, фактуру и цвет. Я верю, что вещи, сделанные с любовью, несут в себе особую теплоту.',
    en: "For me, pottery isn't just a craft — it's a way of speaking to the world through form, texture, and color. I believe that things made with love carry a special warmth.",
    he: 'בשבילי, קרמיקה היא לא רק מלאכה — אלא דרך לדבר עם העולם דרך צורה, מרקם וצבע. אני מאמינה שדברים שנעשים באהבה נושאים חום מיוחד.',
  },
  'about.story3': {
    ru: 'Приходите на мастер-класс или загляните в галерею — буду рада знакомству!',
    en: "Come to a workshop or browse the gallery — I'd love to meet you!",
    he: 'בואו לסדנה או לגלריה — אשמח להכיר!',
  },
  'about.photoPlaceholder': { ru: 'Фото Анны', en: "Anna's Photo", he: 'תמונה של אנה' },
  'about.processTitle': { ru: 'Процесс создания', en: 'The Creative Process', he: 'תהליך היצירה' },
  'about.stat.years': { ru: 'Лет опыта', en: 'Years Experience', he: 'שנות ניסיון' },
  'about.stat.students': { ru: 'Довольных учеников', en: 'Happy Students', he: 'תלמידים מרוצים' },
  'about.stat.pieces': { ru: 'Уникальных изделий', en: 'Unique Pieces', he: 'יצירות ייחודיות' },
  'about.story': {
    ru: 'Привет! Меня зовут Анна, и я создаю керамику в своей мастерской в Рамат-Гане уже больше восьми лет. Каждое изделие я делаю вручную — от первого прикосновения к глине до финального обжига. Для меня керамика — это не просто ремесло, а способ разговаривать с миром через форму, фактуру и цвет. Я верю, что вещи, сделанные с любовью, несут в себе особую теплоту. Именно поэтому каждая кружка, каждая ваза в моей мастерской — единственная в своём роде. Приходите на мастер-класс или загляните в галерею — буду рада знакомству!',
    en: "Hi! I'm Anna, and I've been creating ceramics in my Ramat Gan studio for over eight years. Every piece is handcrafted — from the first touch of clay to the final firing. For me, pottery isn't just a craft; it's a way of speaking to the world through form, texture, and color. I believe that things made with love carry a special warmth. That's why every mug, every vase in my studio is truly one of a kind. Come to a workshop or browse the gallery — I'd love to meet you!",
    he: "שלום! אני אנה, ואני יוצרת קרמיקה בסטודיו שלי ברמת גן כבר למעלה משמונה שנים. כל יצירה נעשית בעבודת יד — מהמגע הראשון בחימר ועד לשריפה האחרונה. בשבילי, קרמיקה היא לא רק מלאכה, אלא דרך לדבר עם העולם דרך צורה, מרקם וצבע. אני מאמינה שדברים שנעשים באהבה נושאים חום מיוחד. בואו לסדנה או לגלריה — אשמח להכיר!",
  },

  // Contact
  'contact.label': { ru: 'Контакты', en: 'Contact', he: 'צור קשר' },
  'contact.title': { ru: 'Свяжитесь со мной', en: 'Get in Touch', he: 'צרו קשר' },
  'contact.subtitle': {
    ru: 'Буду рада ответить на вопросы и помочь с выбором',
    en: "I'd love to answer your questions and help you choose",
    he: 'אשמח לענות על שאלות ולעזור לכם לבחור',
  },
  'contact.whatsapp': { ru: 'Написать в WhatsApp', en: 'Message on WhatsApp', he: 'שלחו הודעה בוואטסאפ' },
  'contact.whatsappSub': { ru: 'Обычно отвечаю в течение часа', en: 'Usually reply within an hour', he: 'בדרך כלל עונה תוך שעה' },
  'contact.instagram': { ru: 'Мы в Instagram', en: 'Follow on Instagram', he: 'עקבו באינסטגרם' },
  'contact.location': { ru: 'Рамат-Ган, Израиль', en: 'Ramat Gan, Israel', he: 'רמת גן, ישראל' },
  'contact.hours': { ru: 'Время работы', en: 'Working Hours', he: 'שעות פעילות' },
  'contact.hoursDetail': {
    ru: 'Вс–Чт: 10:00–19:00 | Пт: 10:00–14:00',
    en: 'Sun–Thu: 10:00–19:00 | Fri: 10:00–14:00',
    he: 'א׳–ה׳: 10:00–19:00 | ו׳: 10:00–14:00',
  },
  'contact.locationDetail': {
    ru: 'Студия в самом сердце Рамат-Гана',
    en: 'Studio in the heart of Ramat Gan',
    he: 'סטודיו בלב רמת גן',
  },

  // Footer
  'footer.description': {
    ru: 'Керамика ручной работы, созданная с любовью в Рамат-Гане. Мастер-классы, уникальная посуда и декор.',
    en: 'Handmade ceramics crafted with love in Ramat Gan. Workshops, unique tableware and decor.',
    he: 'קרמיקה בעבודת יד, נוצרת באהבה ברמת גן. סדנאות, כלים ודקורציה ייחודיים.',
  },
  'footer.links': { ru: 'Навигация', en: 'Quick Links', he: 'ניווט מהיר' },
  'footer.language': { ru: 'Язык', en: 'Language', he: 'שפה' },
  'footer.rights': { ru: 'Все права защищены.', en: 'All rights reserved.', he: 'כל הזכויות שמורות.' },
  'footer.copyright': {
    ru: '© 2025 Ceramic Pot Station. Все права защищены.',
    en: '© 2025 Ceramic Pot Station. All rights reserved.',
    he: '© 2025 Ceramic Pot Station. כל הזכויות שמורות.',
  },
  'footer.social': { ru: 'Мы в соцсетях', en: 'Follow us', he: 'עקבו אחרינו' },

  // Testimonials
  'testimonials.label': { ru: 'Отзывы', en: 'Reviews', he: 'המלצות' },
  'testimonials.title': { ru: 'Что говорят наши гости', en: 'What Our Guests Say', he: 'מה אומרים האורחים שלנו' },
  'testimonials.subtitle': {
    ru: 'Реальные отзывы от людей, которые побывали в нашей мастерской',
    en: 'Real reviews from people who visited our studio',
    he: 'ביקורות אמיתיות מאנשים שביקרו בסטודיו שלנו',
  },
  'testimonials.items.0.quote': {
    ru: 'Были с подругами на мастер-классе по гончарному кругу — это было волшебно! Анна потрясающий педагог, всё объясняет спокойно и с юмором.',
    en: 'Went to a wheel-throwing class with friends — it was magical! Anna is an amazing teacher, calm and funny.',
    he: 'הלכנו עם חברות לסדנת גלגל — זה היה קסום! אנה מורה מדהימה, רגועה ומצחיקה.',
  },
  'testimonials.items.0.name': { ru: 'Марина К.', en: 'Marina K.', he: 'מרינה ק.' },
  'testimonials.items.1.quote': {
    ru: 'Пришли на свидание-мастер-класс и провели невероятный вечер. Атмосфера уютная, глина успокаивает.',
    en: 'Came for a date-night class and had an incredible evening. Cozy atmosphere, the clay is so calming.',
    he: 'באנו לסדנת זוגות ועברנו ערב מדהים. אווירה ביתית, החימר מרגיע.',
  },
  'testimonials.items.1.name': { ru: 'Дмитрий и Ольга', en: 'Dmitry & Olga', he: 'דמיטרי ואולגה' },
  'testimonials.items.2.quote': {
    ru: 'Заказала у Анны набор пиал в подарок маме — мама была в восторге! Каждая пиала уникальна.',
    en: 'Ordered a set of bowls as a gift for my mom — she was thrilled! Each bowl is unique.',
    he: 'הזמנתי מאנה סט קערות במתנה לאמא — היא הייתה בהלם מאושר!',
  },
  'testimonials.items.2.name': { ru: 'Елена В.', en: 'Elena V.', he: 'אלנה ו.' },
  'testimonials.items.3.quote': {
    ru: 'Привёл команду на тимбилдинг — коллеги до сих пор вспоминают. Мы лепили, смеялись и реально сплотились.',
    en: 'Brought my team for a corporate event — colleagues still talk about it. We sculpted, laughed, and truly bonded.',
    he: 'הבאתי את הצוות לפעילות גיבוש — הקולגות עדיין מדברים על זה.',
  },
  'testimonials.items.3.name': { ru: 'Алексей П.', en: 'Alexey P.', he: 'אלכסיי פ.' },
  'testimonials.items.4.quote': {
    ru: 'Хожу к Анне на индивидуальные занятия уже полгода. Это моя терапия и отдушина.',
    en: "I've been taking private lessons with Anna for six months. It's my therapy and escape.",
    he: 'אני לוקחת שיעורים פרטיים אצל אנה כבר חצי שנה. זו התרפיה שלי.',
  },
  'testimonials.items.4.name': { ru: 'Наталья С.', en: 'Natalia S.', he: 'נטליה ס.' },
  'testimonials.items.5.quote': {
    ru: 'Купила вазу — она стала главным украшением гостиной. Анна — настоящий мастер!',
    en: 'Bought a vase — it became the centerpiece of our living room. Anna is a true artist!',
    he: 'קניתי אגרטל — הוא הפך לפריט המרכזי בסלון. אנה אמנית אמיתית!',
  },
  'testimonials.items.5.name': { ru: 'Ирина М.', en: 'Irina M.', he: 'אירינה מ.' },
  'testimonials.1.name': { ru: 'Марина К.', en: 'Marina K.', he: 'מרינה ק.' },
  'testimonials.1.text': {
    ru: 'Были с подругами на мастер-классе по гончарному кругу — это было волшебно! Анна потрясающий педагог, всё объясняет спокойно и с юмором. Теперь пьём кофе из собственных кружек 😊',
    en: "Went to a wheel-throwing class with friends — it was magical! Anna is an amazing teacher, calm and funny. Now we drink coffee from our own mugs 😊",
    he: "הלכנו עם חברות לסדנת גלגל — זה היה קסום! אנה מורה מדהימה. עכשיו אנחנו שותות קפה מהספלים שלנו 😊",
  },
  'testimonials.2.name': { ru: 'Дмитрий и Ольга', en: 'Dmitry & Olga', he: 'דמיטרי ואולגה' },
  'testimonials.2.text': {
    ru: 'Пришли на свидание-мастер-класс и провели невероятный вечер. Атмосфера уютная, глина успокаивает, а Анна создаёт ощущение, что ты в гостях у подруги. Очень рекомендуем!',
    en: "Came for a date-night class and had an incredible evening. Cozy atmosphere, the clay is so calming, and Anna makes you feel like you're visiting a friend. Highly recommend!",
    he: "באנו לסדנת זוגות ועברנו ערב מדהים. אווירה ביתית, החימר מרגיע, ואנה גורמת לך להרגיש כמו אצל חברה. ממליצים בחום!",
  },
  'testimonials.3.name': { ru: 'Елена В.', en: 'Elena V.', he: 'אלנה ו.' },
  'testimonials.3.text': {
    ru: 'Заказала у Анны набор пиал в подарок маме — мама была в восторге! Каждая пиала уникальна, видно, что сделано с любовью. Спасибо огромное!',
    en: "Ordered a set of bowls as a gift for my mom — she was thrilled! Each bowl is unique, you can tell they're made with love. Thank you so much!",
    he: "הזמנתי מאנה סט קערות במתנה לאמא — היא הייתה בהלם מאושר! כל קערה ייחודית, רואים שנעשה באהבה. תודה רבה!",
  },
  'testimonials.4.name': { ru: 'Алексей П.', en: 'Alexey P.', he: 'אלכסיי פ.' },
  'testimonials.4.text': {
    ru: 'Привёл команду на тимбилдинг — коллеги до сих пор вспоминают. Мы лепили, смеялись и реально сплотились. Анна отлично работает с группами, всем было комфортно.',
    en: "Brought my team for a corporate event — colleagues still talk about it. We sculpted, laughed, and truly bonded. Anna is great with groups, everyone felt comfortable.",
    he: "הבאתי את הצוות לפעילות גיבוש — הקולגות עדיין מדברים על זה. יצרנו, צחקנו והתחברנו. אנה עובדת מעולה עם קבוצות.",
  },
  'testimonials.5.name': { ru: 'Наталья С.', en: 'Natalia S.', he: 'נטליה ס.' },
  'testimonials.5.text': {
    ru: 'Хожу к Анне на индивидуальные занятия уже полгода. Это моя терапия и отдушина. Анна не просто учит технике — она помогает найти свой стиль. Очень благодарна!',
    en: "I've been taking private lessons with Anna for six months. It's my therapy and escape. Anna doesn't just teach technique — she helps you find your own style. So grateful!",
    he: "אני לוקחת שיעורים פרטיים אצל אנה כבר חצי שנה. זו התרפיה שלי. אנה לא רק מלמדת טכניקה — היא עוזרת למצוא סגנון משלך. אסירת תודה!",
  },

  // Common
  'common.bookNow': { ru: 'Записаться', en: 'Book Now', he: 'הרשמה' },
  'common.learnMore': { ru: 'Подробнее', en: 'Learn More', he: 'למידע נוסף' },
  'common.whatsappUs': { ru: 'Напишите нам в WhatsApp', en: 'WhatsApp Us', he: 'שלחו לנו בוואטסאפ' },
  'common.langRu': { ru: 'RU', en: 'RU', he: 'RU' },
  'common.langEn': { ru: 'EN', en: 'EN', he: 'EN' },
  'common.langHe': { ru: 'HE', en: 'HE', he: 'HE' },
  'common.currency': { ru: '₪', en: '₪', he: '₪' },
};

let currentLang: Language = (typeof localStorage !== 'undefined' && localStorage.getItem('lang') as Language) || 'ru';
const listeners = new Set<() => void>();

export function t(key: string): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[currentLang] || entry.ru || key;
}

export function getLanguage(): Language {
  return currentLang;
}

export function setLanguage(lang: Language) {
  currentLang = lang;
  if (typeof localStorage !== 'undefined') localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'he' ? 'he' : lang === 'ru' ? 'ru' : 'en';
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  listeners.forEach((fn) => fn());
}

export function useLanguage(): { language: Language; setLanguage: (lang: Language) => void; t: (key: string) => string } {
  const [, rerender] = useState(0);
  useEffect(() => {
    const cb = () => rerender((n) => n + 1);
    listeners.add(cb);
    return () => { listeners.delete(cb); };
  }, []);
  return { language: currentLang, setLanguage, t };
}

// Initialize dir on load
if (typeof document !== 'undefined') {
  document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang === 'he' ? 'he' : currentLang === 'ru' ? 'ru' : 'en';
}
