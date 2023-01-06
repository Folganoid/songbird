export default class GalleryDict {

    data = {
      'en': {
        '.lang-home': "Home",
        '.lang-quiz': "Quiz",
        '.lang-results': "Results",
        '.lang-gallery': "Gallery",
        '.lang--en': " ENG ",
        '.lang--ua': " UKR ",
        '.lang-prev': "Previous",
        '.lang-next': "Next",
        '.lang-author-long': "© 2022 Copyright - Andrii Holubkov",
        '.lang-author-short': "© 2022 - A.Holubkov",

      },
      'ua': {
        '.lang-home': "Головна",
        '.lang-quiz': "Вікторина",
        '.lang-results': "Результати",
        '.lang-gallery': "Галерея",
        '.lang--en': " АНГ ",
        '.lang--ua': " УКР ",
        '.lang-prev': "Попередній",
        '.lang-next': "Наступний",
        '.lang-author-long': "© 2022 Копірайт - Андрій Голубков",
        '.lang-author-short': "© 2022 - A.Голубков",
      }
    }

    getDict(lang) {
        if (this.data.hasOwnProperty(lang)) {
          return this.data[lang];
        } else {
          return false;
        }
    }
}