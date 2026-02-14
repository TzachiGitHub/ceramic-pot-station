import { useState, useEffect, useCallback } from 'react';
import type { Language } from './types';

const translations: Record<string, Record<Language, string>> = {
  // Nav
  'nav.home': { ru: 'Главная', en: 'Home', he: 'ראשי' },
  'nav.gallery': { ru: 'Галерея', en: 'Gallery', he: 'גלריה' },
  'nav.classes': { ru: 'Мастер-классы', en: 'Classes', he: 'סדנאות' },
  'nav.about': { ru: 'Обо мне', en: 'About', he: 'אודות' },
  'nav.contact': { ru: 'Контакты', en: 'Contact', he: 'צור קשר' },

  // Hero
  'hero.tagline': {
    ru: 'Керамика ручной работы, в которую вложена душа',
    en: 'Handmade ceramics crafted with soul',
    he: 'קרמיקה בעבודת יד, עם נשמה בכל יצירה',
  },
  'hero.subtitle': {
    ru: 'Каждое изделие — маленькая история, рассказанная глиной и огнём',
    en: 'Every piece is a small story told through clay and fire',
    he: 'כל יצירה היא סיפור קטן שמסופר דרך חימר ואש',
  },

  // Gallery
  'gallery.title': { ru: 'Галерея работ', en: 'Gallery', he: 'גלריה' },
  'gallery.viewAll': { ru: 'Смотреть все', en: 'View All', he: 'צפה בהכל' },
  'gallery.filter.all': { ru: 'Все', en: 'All', he: 'הכל' },
  'gallery.filter.mugs': { ru: 'Кружки', en: 'Mugs', he: 'ספלים' },
  'gallery.filter.bowls': { ru: 'Пиалы', en: 'Bowls', he: 'קערות' },
  'gallery.filter.vases': { ru: 'Вазы', en: 'Vases', he: 'אגרטלים' },
  'gallery.filter.decorative': { ru: 'Декор', en: 'Decorative', he: 'דקורטיבי' },
  'gallery.filter.sets': { ru: 'Наборы', en: 'Sets', he: 'סטים' },

  // Classes
  'classes.title': { ru: 'Мастер-классы', en: 'Workshops & Classes', he: 'סדנאות' },
  'classes.subtitle': {
    ru: 'Творите вместе — незабываемые впечатления для компании друзей, пары или всей семьи',
    en: 'Create together — unforgettable experiences for friends, couples, and families',
    he: 'יוצרים ביחד — חוויות בלתי נשכחות לחברים, זוגות ומשפחות',
  },
  'classes.book': { ru: 'Записаться', en: 'Book Now', he: 'הרשמה' },
  'classes.viaWhatsApp': { ru: 'через WhatsApp', en: 'via WhatsApp', he: 'דרך WhatsApp' },
  'classes.duration': { ru: 'Длительность', en: 'Duration', he: 'משך' },
  'classes.groupSize': { ru: 'Размер группы', en: 'Group size', he: 'גודל קבוצה' },
  'classes.price': { ru: 'Стоимость', en: 'Price', he: 'מחיר' },

  // About
  'about.title': { ru: 'Об Анне', en: 'About Anna', he: 'על אנה' },
  'about.story': {
    ru: 'Привет! Меня зовут Анна, и я создаю керамику в своей мастерской в Рамат-Гане уже больше восьми лет. Каждое изделие я делаю вручную — от первого прикосновения к глине до финального обжига. Для меня керамика — это не просто ремесло, а способ разговаривать с миром через форму, фактуру и цвет. Я верю, что вещи, сделанные с любовью, несут в себе особую теплоту. Именно поэтому каждая кружка, каждая ваза в моей мастерской — единственная в своём роде. Приходите на мастер-класс или загляните в галерею — буду рада знакомству!',
    en: "Hi! I'm Anna, and I've been creating ceramics in my Ramat Gan studio for over eight years. Every piece is handcrafted — from the first touch of clay to the final firing. For me, pottery isn't just a craft; it's a way of speaking to the world through form, texture, and color. I believe that things made with love carry a special warmth. That's why every mug, every vase in my studio is truly one of a kind. Come to a workshop or browse the gallery — I'd love to meet you!",
    he: "שלום! אני אנה, ואני יוצרת קרמיקה בסטודיו שלי ברמת גן כבר למעלה משמונה שנים. כל יצירה נעשית בעבודת יד — מהמגע הראשון בחימר ועד לשריפה האחרונה. בשבילי, קרמיקה היא לא רק מלאכה, אלא דרך לדבר עם העולם דרך צורה, מרקם וצבע. אני מאמינה שדברים שנעשים באהבה נושאים חום מיוחד. בואו לסדנה או לגלריה — אשמח להכיר!",
  },

  // Contact
  'contact.title': { ru: 'Свяжитесь со мной', en: 'Get in Touch', he: 'צרו קשר' },
  'contact.whatsapp': { ru: 'Написать в WhatsApp', en: 'Message on WhatsApp', he: 'שלחו הודעה בוואטסאפ' },
  'contact.instagram': { ru: 'Мы в Instagram', en: 'Follow on Instagram', he: 'עקבו באינסטגרם' },
  'contact.location': { ru: 'Рамат-Ган, Израиль', en: 'Ramat Gan, Israel', he: 'רמת גן, ישראל' },
  'contact.hours': {
    ru: 'Вс–Чт: 10:00–19:00 | Пт: 10:00–14:00',
    en: 'Sun–Thu: 10:00–19:00 | Fri: 10:00–14:00',
    he: 'א׳–ה׳: 10:00–19:00 | ו׳: 10:00–14:00',
  },

  // Footer
  'footer.copyright': {
    ru: '© 2025 Ceramic Pot Station. Все права защищены.',
    en: '© 2025 Ceramic Pot Station. All rights reserved.',
    he: '© 2025 Ceramic Pot Station. כל הזכויות שמורות.',
  },
  'footer.social': { ru: 'Мы в соцсетях', en: 'Follow us', he: 'עקבו אחרינו' },

  // Testimonials
  'testimonials.title': { ru: 'Отзывы', en: 'Testimonials', he: 'המלצות' },
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
