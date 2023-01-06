import "./style/styles.scss";
import ParallaxMain from './js/parallax-main';
import MainShadow from './js/main-shadow';
import MultiLang from './js/multilang';
import MainDict from './js/main-dict';
import Burger from "./js/burger";

(new ParallaxMain).start();
(new MainShadow).start();
(new MultiLang).start(new MainDict());
(new Burger).start();

console.log('self-rating: 270/270');