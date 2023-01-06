import Player from './player';
import birdsData from './data';

export default class Slider {
    constructor(multilang) {
      this.audio = null;
      this.multilang = multilang;
    }

    start() {

      this.count = 0;
      this.data = [];

      this.player = new Player();

      for (let i of birdsData) {
        for (let z of i) {
            this.data.push(z);
        }
      }

      this.fillCard();
      this.buttonListeners();

      //first init
      setTimeout(()=> {
        document.querySelector('.main__container').style.opacity = 1;    
        document.querySelector('.header__nav').style.opacity = 1;    
      }, 100);

      let langTrigger = document.querySelector('.header__switch-control');
      langTrigger.addEventListener('change', () => {
        this.fillCard();
      })
      
    }

    buttonListeners() {
      let prevBtn = document.getElementById('prev');
      let nextBtn = document.getElementById('next');

      prevBtn.addEventListener('click', () => {
        this.count--;
        if (this.count < 0) {
            this.count = this.data.length - 1;
        }
        this.fillCard();
      });

      nextBtn.addEventListener('click', () => {
        this.count++;
        if (this.count >= this.data.length) {
            this.count = 0;
        }
        this.fillCard();
      }) 

    }


    fillCard(cnt = this.count) {

        let lang = this.multilang.lang;

        let title = document.getElementById('card-title');
        let img = document.getElementById('card-img');
        let subtitle = document.getElementById('card-subtitle');
        let desc = document.getElementById('card-desc');
        let count = document.getElementById('count-now');
        let countTotal = document.getElementById('count-total');
        let card = document.querySelector('.main__card-body');

        count.innerHTML = cnt + 1;
        countTotal.innerHTML = this.data.length;

        (async () => {
   
            //card.style.opacity = .2;
            card.style.filter = 'blur(20px)';
            await new Promise((resolve) => setTimeout(resolve, 100));
            this.audio = this.player.fillAudio(this.data[cnt]['audio'], this.audio);
            title.innerHTML = this.data[cnt]['name_' + lang];
            subtitle.innerHTML = this.data[cnt]['species'];
            desc.innerHTML = this.data[cnt]['description_' + lang];
            img.setAttribute('src', this.data[cnt]['image']);
            await new Promise((resolve) => setTimeout(resolve, 0));
            //card.style.opacity = null;
            card.style.filter = null;

          })();



    }



}