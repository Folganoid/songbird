export default class MultiLang {

  constructor() {
    this.langPrim = 'en';
    this.langSec = 'ua';
    this.lang = 'en';
  }

  start(dict) {

    //first init

    this.dict = dict;

    let langTrigger = document.querySelector('.header__switch-control');
    if (!localStorage.hasOwnProperty('lang')) {
      this.setLangPrim();
    } else {
        if (localStorage.getItem('lang') == this.langPrim) {
          this.setLangPrim();
        } else {
          this.setLangSec();
        }
    }

    this.langListener();
  }

  langListener() {

    let langTrigger = document.querySelector('.header__switch-control');
      langTrigger.addEventListener('change', () => {
        if (!langTrigger.checked) {
          this.setLangPrim();
        } else {
          this.setLangSec();
        }
      })
  }

  setLangPrim() {
    localStorage.setItem('lang', this.langPrim);
    this.lang = this.langPrim;
    this.lightLabel();
    this.changeLangPage();

    let langTrigger = document.querySelector('.header__switch-control');
    langTrigger.checked = false;

    if (this.dict.hasOwnProperty('customDict')) {
      this.customData = this.dict.customData;
    }
  }

  setLangSec() {
    localStorage.setItem('lang', this.langSec);
    this.lang = this.langSec;
    this.lightLabel();
    this.changeLangPage();

    let langTrigger = document.querySelector('.header__switch-control');
    langTrigger.checked = true;

    if (this.dict.hasOwnProperty('customDict')) {
      this.customData = this.dict.customData;
    }
  }

  lightLabel() {
    let lang = document.querySelector(`.header__checkbox .lang--${this.lang}`);
    let light = document.querySelector('.header__checkbox .light');

    if (light) light.classList.remove('light');
    lang.classList.add('light');
  }

  async changeLangPage() {
    let langDict = this.dict.getDict(this.lang);
    if (!langDict) {
        console.log("Can not define dictionary " + this.lang);
        return;
    }

    for (let i in langDict) {
        let rows = document.querySelectorAll(i);
        if (!rows) continue;
        for (let z of rows) {

            if (!i.includes('--')) {
              z.style.transition = "filter 200ms";
              z.style.filter = 'blur(10px)';
            }
        }
    }

    await new Promise((r) => setTimeout(r, 200));

    for (let i in langDict) {
        let rows = document.querySelectorAll(i);
        if (!rows) continue;
        for (let z of rows) {
            z.innerHTML = langDict[i];
        }
    }

    await new Promise((r) => setTimeout(r, 0));

    for (let i in langDict) {
        let rows = document.querySelectorAll(i);
        if (!rows) continue;
        for (let z of rows) {
          if (!i.includes('--')) {
            z.style.filter = null;
          }
        }
    }

    await new Promise((r) => setTimeout(r, 200));

    for (let i in langDict) {
        let rows = document.querySelectorAll(i);
        if (!rows) continue;
        for (let z of rows) {
          if (!i.includes('--')) {
            z.style.transition = null;
          }
        }
    }
  }
}