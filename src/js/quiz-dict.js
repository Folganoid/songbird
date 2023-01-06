export default class QuizDict {

    data = {
      'en': {
        '.lang-home': "Home",
        '.lang-quiz': "Quiz",
        '.lang-results': "Results",
        '.lang-gallery': "Gallery",
        '.lang--en': " ENG ",
        '.lang--ua': " UKR ",
        '.lang-score': "Score:",
        '.lang-level-0': "Warming up",
        '.lang-level-1': "Passerines",
        '.lang-level-2': "Forest birds",
        '.lang-level-3': "Songbirds",
        '.lang-level-4': "Predators",
        '.lang-level-5': "Sea birds",
        '.lang-empty': "Listen to the voice and choose the bird it belongs to.",
        '.lang-next-1': "Next level",
        '.lang-next-2': "Finish",
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
        '.lang-score': "Бали:",
        '.lang-level-0': "Розминка",
        '.lang-level-1': "Горобцеві",
        '.lang-level-2': "Лісові птахи",
        '.lang-level-3': "Співочі птахи",
        '.lang-level-4': "Хижаки",
        '.lang-level-5': "Морські птахи",
        '.lang-empty': "Прослухайте аудіозапис і виберіть птаха, якому він належить.",
        '.lang-next-1': "Наступний рівень",
        '.lang-next-2': "Закінчити",
        '.lang-author-long': "© 2022 Копірайт - Андрій Голубков",
        '.lang-author-short': "© 2022 - A.Голубков",
      },
    }

    getDict(lang) {
        if (this.data.hasOwnProperty(lang)) {
          return this.data[lang];
        } else {
          return false;
        }
    }
}