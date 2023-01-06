export default class MainDict {

    data = {
      'en': {
        '.lang-home': "Home",
        '.lang-quiz': "Quiz",
        '.lang-results': "Results",
        '.lang-gallery': "Gallery",
        '.lang--en': " ENG ",
        '.lang--ua': " UKR ",
        '.lang-head': "Birds in our life",
        '.lang-head-p1': "Birds are vertebrates (animals with backbones) with wings and feathers. Most birds can fly, using powerful muscles to flap their wings. But a few bird species do not have strong enough wings to fly, and so these birds are flightless. Birds’ bodies are covered with a light, tough layer of feathers and they have very light skeletons. Instead of teeth, they have hornlike beaks, or bills. Birds hatch from eggs, and many species build nests where their eggs and young can develop in safety.",
        '.lang-head-p2': "Only about 40 bird species cannot fly.",
        '.lang-desc-p1': "Birds are found all across the world, and come in all shapes, colors, and sizes. A bird can fly higher, further, and faster than any other animal. Their front limbs take the form of wings to lift them into the skies. Their bodies are covered in feathers to help them fly easily, and also to keep them warm. But not all birds fly. Some species live entirely on the ground and some spend much of their time on water. Birds are warm-blooded animals and reproduce by laying eggs.",
        '.lang-desc-p2': "There are about 10,000 species of bird in the World.",
        '.lang-cntrl-p': "Take a part in our quiz and find out how well you know the voices of the most common birds...",
        '.lang-btn-quiz': "Quiz",
        '.lang-btn-results': "Results",
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
        '.lang-head': "Птахи у нашому житті",
        '.lang-head-p1': "Птахи - це хребетні (тварини з хребтом) з крилами та пір'ям. Більшість птахів можуть літати, використовуючи потужні м’язи, щоб махати крилами. Але деякі види птахів не мають достатньо міцних крил, щоб літати, тому ці птахи не літають. Тіла птахів вкриті легким, міцним шаром пір’я і мають дуже легкий скелет. Замість зубів у них рогоподібні дзьоби. Птахи вилуплюються з яєць, і багато видів будують гнізда, де їхні яйця та пташенята можуть безпечно розвиватися.",
        '.lang-head-p2': "Лише близько 40 видів птахів не можуть літати.",
        '.lang-desc-p1': "Птахи зустрічаються по всьому світу і бувають усіх форм, кольорів і розмірів. Птах може літати вище, далі і швидше, ніж будь-яка інша тварина. Їхні передні кінцівки приймають форму крил, щоб підняти їх у небо. Їхнє тіло вкрите пір’ям, що допомагає їм легко літати, а також зберігає тепло. Але не всі птахи літають. Деякі види живуть повністю на землі, а деякі проводять більшу частину часу у воді. Птахи є теплокровними тваринами і розмножуються шляхом відкладання яєць.",
        '.lang-desc-p2': "У світі налічується близько 10 000 видів птахів.",
        '.lang-cntrl-p': "Візьміть участь у вікторині та дізнайтеся, як добре ви знаєте голоси найпоширеніших птахів...",
        '.lang-btn-quiz': "Вікторина",
        '.lang-btn-results': "Результати",
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