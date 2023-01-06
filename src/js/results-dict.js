export default class ResultsDict {

    data = {
      'en': {
        '.lang-home': "Home",
        '.lang-quiz': "Quiz",
        '.lang-results': "Results",
        '.lang-gallery': "Gallery",
        '.lang--en': " ENG ",
        '.lang--ua': " UKR ",
        '.lang-top': "TOP RESULTS",
        '.lang-pos': "Position",
        '.lang-score': "Score",
        '.lang-name': "Name",
        '.lang-time': "Time",
        '.lang-congrat': "Congratulations !!!",
        '.lang-res': "Your result: ",
        '.lang-score-val': " scores",
        '.lang-play': "Do your want to play again?",
        '.lang-yes': "Yes",
        '.lang-no': "No",
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
        '.lang-top': "КРАЩІ РЕЗУЛЬТАТИ",
        '.lang-pos': "Позиція",
        '.lang-score': "Бали",
        '.lang-name': "Ім'я",
        '.lang-time': "Час",
        '.lang-congrat': "Вітаємо !!!",
        '.lang-res': "Ваш результат: ",
        '.lang-score-val': " балiв",
        '.lang-play': "Бажаєте зiграти ще раз ?",
        '.lang-yes': "Так",
        '.lang-no': "Нi",
        '.lang-author-long': "© 2022 Копірайт - Андрій Голубков",
        '.lang-author-short': "© 2022 - A.Голубков",
      }
    }

    customData = {
      'en': {
        'placeholder': 'Enter your name',
        'max': 'You got maximum result: 30 scores',
        'excellent': 'EXCELLENT !!!',
        'res': "Your result is: ",
        'score-val': " scores",
        'congrat': "Congratulations !!!",
      },

      'ua': {
        'placeholder': 'Ваше ім\'я',
        'max': 'Ви отримали максимальний результат: 30 балiв',
        'excellent': 'БЕЗДОГАННО !!!',
        'res': "Ваш результат: ",
        'score-val': " балiв",
        'congrat': "Вітаємо !!!",
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