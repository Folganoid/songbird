import "./style/quiz.scss";
import ParallaxQuiz from './js/parallax-quiz';
import Game from './js/game';
import MultiLang from './js/multilang';
import QuizDict from './js/quiz-dict';
import Burger from "./js/burger";

(new ParallaxQuiz).start();
(new Burger).start();

let quizDict = new QuizDict();
let multiLang = new MultiLang();

let game = new Game(multiLang, quizDict);
game.fillQuiz(true);

console.log('self-rating: 270/270');
