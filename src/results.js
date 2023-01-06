import "./style/results.scss";
import Parallax from './js/parallax';
import Finish from './js/finish';
import ResultShadow from './js/result-shadow';
import MultiLang from './js/multilang';
import ResultsDict from './js/results-dict';
import Burger from "./js/burger";

(new Parallax).start();
(new (ResultShadow)).start();
(new Burger).start();

let multLang = new MultiLang();
multLang.start(new ResultsDict());

let finish = new Finish()
finish.init(multLang);

console.log('self-rating: 270/270');
