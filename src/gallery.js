import "./style/gallery.scss";
import MultiLang from './js/multilang';
import GalleryDict from './js/gallery-dict';
import GalleryShadow from "./js/gallery-shadow";
import Burger from "./js/burger";
import Slider from "./js/slider";

let multiLang = new MultiLang();
multiLang.start(new GalleryDict());
(new Burger).start();
(new Slider(multiLang)).start();
(new GalleryShadow).start();

console.log('self-rating: 270/270');
