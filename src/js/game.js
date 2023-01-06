import birdsData from './data';
import birdUnknown from '../media/bird-unknown.jpeg'
import bell1 from '../media/bell1.mp3';
import bell2 from '../media/bell2.mp3';
import bell4 from '../media/bell4.mp3';
import Player from './player';
import volumeImg from '../media/icon/volume.png'
import spinner from '../media/loading-gif.gif';

export default class Game {

    constructor(multiLang, quizDict) {

      this.multiLang = multiLang;
      this.multiLang.start(quizDict);

      this.init();
    }

    init() {
      this.data = birdsData;
      this.level = 0;
      this.askBird = 0;
      this.levelScore = 5;
      this.totalScore = 0;
      this.levelEnd = false;
      this.wrongAnswerCounter = [];

      this.bell1 = new Audio(bell1);
      this.bell2 = new Audio(bell2);
      this.bell4 = new Audio(bell4);

      this.player = new Player();

      this.audio = null;
      this.audioAnswer = null;
     
      this.nextLevelListener();

      //first init
      setTimeout(()=> {
        document.querySelector('.main__container').style.opacity = .95;    
        document.querySelector('.header__nav').style.opacity = 1;    
      }, 100);

      let langTrigger = document.querySelector('.header__switch-control');
      langTrigger.addEventListener('change', () => {
        this.fillAnswerList();
        if (this.levelEnd == true) this.buildAsk(false);
        this.fillBirdAnswer(-2);
      })

    }

    playerHtml = `
      <div class="audio-player main__answer_audio">
        <div class="play-container">
          <div class="toggle-play-body">
            <div class="toggle-play play"></div>
          </div>
          <img class="spin" src="${spinner}" alt="spinner">
          <div class="timeline-body">
            <div class="timeline">
              <div class="progress"></div>
              <div class="progress-dot"></div>
            </div>
            <div class="time">
              <div class="current">0:00</div>
              <div class="length"></div>
            </div>
          </div>
          <div class="volume-container">
            <img class="volume-img" src="${volumeImg}" alt="volume">
            <div class="volume-slider">
              <div class="volume-percentage"></div>
              <div class="volume-dot"></div>
            </div>
          </div>
        </div>
      </div>`;

    answerHtml = `
        <div class="main__answer-bird-box">
          <div class="main__answer-img">
            <img id="main__answer-img" src="#" alt="bird">
          </div>
          <div class="main__answer-ctx">
              <h4 id="main__answer-title" class=""></h4>
              <hr class="uk-margin-remove"/>
              <p id="main__answer-spec" class=""></p>
              ${this.playerHtml}
          </div>
        </div>
        <div class="main__answer-desc-box">
          <p id="main__answer-desc" class=""></p>
        </div>`;

    answerHtmlEmpty = `<div class="main__answer-empty-box"><h4 class="main__answer-empty lang-empty"></h4></div>`;

    buildAsk(isUnknown = false) {

      if (!isUnknown) {
        this.reloadMainPanel();
      } else {
        document.getElementById('main__ask-img').childNodes[0].setAttribute('src', birdUnknown);
        document.getElementById('main__ask-title').innerHTML = '*****';
        document.getElementById('main__ask-spec').innerHTML = '*****';
      }

      const audioPlayer = document.querySelector(".main__answer_audio");
      this.audio = this.player.fillAudio(this.data[this.level][this.askBird]['audio'], this.audio);

    }

    fillQuiz(isUnknown = false) {

      let rand = Math.floor(Math.random() * 5);
      this.askBird = rand;
      this.buildAsk(isUnknown);
      this.fillAnswerList();
      this.fillBirdAnswer(-1);

      if (this.level >= this.data.length - 1) {
        document.querySelector('.main__next-1').style.display = 'none';
        document.querySelector('.main__next-2').style.display = 'inline';
      }

    }

    fillBirdAnswer(element) {

      let answerBody = document.getElementById('main__answer-bird-box');
      answerBody.innerHTML = this.answerHtmlEmpty;

      if (element === -1) {

        (async () => {
          answerBody.style.transition = 'all 300ms';
          answerBody.style.filter="blur(20px)";
          await new Promise((resolve) => setTimeout(resolve, 300));
          document.querySelector('.lang-empty').innerHTML = this.multiLang.dict.data[this.multiLang.lang]['.lang-empty'];
          await new Promise((resolve) => setTimeout(resolve, 0));
          answerBody.style.transition = null;
          answerBody.style.filter = null;
        })();

        this.answer = null;
        return;

      } 

      if (element === -2 && !this.answer) {
        this.fillBirdAnswer(-1);
        return;
      }

      if (element === -2 && this.answer) {
        this.fillBirdAnswer(this.answer);
        return;
      }

      let id = element.dataset.val;
      this.reloadMainAnswer(id, answerBody);
      this.answer = element;


      //right answer
      if (this.askBird == id) {
        
        document.getElementById('main__next-level').disabled = false;

        (async () => {
          element.style.transition = 'all 50ms';
          element.classList.add('main__answer-btn_light');
  
          await new Promise((resolve) => setTimeout(resolve, 100));
          element.style.transition = null;
          element.classList.remove('main__answer-btn_light');
          element.classList.add('main__answer-btn_right');
        })();

        if (!this.levelEnd) {
          this.bell2.play();
          this.changeFlyScore(true);
          this.levelEnd = true;

          this.totalScore += this.levelScore;
          this.reloadScore();

        }

        this.buildAsk(false);
      
      //wrong
      } else {
        if (!this.levelEnd) {
          element.classList.add('main__answer-btn_wrong');
        }

        (async () => {
          element.style.transition = 'all 50ms';
          element.classList.add('main__answer-btn_light');
  
          await new Promise((resolve) => setTimeout(resolve, 100));
          element.style.transition = null;
          element.classList.remove('main__answer-btn_light');
        })();


        if (!this.wrongAnswerCounter.includes(id)) {
          this.wrongAnswerCounter.push(id);
          if (this.levelScore > 0 && !this.levelEnd) {
            this.levelScore--;
            this.changeFlyScore();
            this.bell1.play();
          }
        }
      }
    }

    fillAnswerList() {

      let lang = this.multiLang.lang;
      let answers = document.querySelectorAll('.main__answer-txt');
      let block = document.getElementById('main__answers-container');

      (async () => {

        for (let i = 0; i < answers.length; i++) {
          answers[i].style.transition = 'all 300ms';
          answers[i].style.filter = "blur(10px)";
        }
        await new Promise((resolve) => setTimeout(resolve, 300));
        for (let i = 0; i < answers.length; i++) {
          answers[i].innerHTML = this.data[this.level][i]['name_' + lang];
        }
        await new Promise((resolve) => setTimeout(resolve, 0));
        block.addEventListener('click', (e) => {
          if (!e.target.closest('.main__answer-btn')) return;
          this.fillBirdAnswer(e.target.closest('.main__answer-btn'));
        })
        for (let i = 0; i < answers.length; i++) {
          answers[i].style.transition = null;
          answers[i].style.filter = null;
        }

      })();

    }

    nextLevelListener() {
      document.getElementById('main__next-level').addEventListener('click', (e) => {
        this.nextLevel();
      });
    }

    nextLevel() {
      
      if (this.audio) this.audio.pause();
      if (this.audioAnswer) this.audioAnswer.pause();

      if (this.level < this.data.length -1) {

        this.bell4.play();

        let levelLast = document.querySelector('.main__level[data-val="'+ this.level +'"] > div > p');
        let levelLastDiv = document.querySelector('.main__level[data-val="'+ this.level +'"]');
        levelLast.classList.toggle('main__level_active');
        levelLast.classList.toggle('main__level_last');
        levelLastDiv.classList.add('main__level_last-off');
        this.level++;
        let level = document.querySelector('.main__level[data-val="'+ this.level +'"] > div > p');
        level.classList.toggle('main__level_active');
  
        this.reloadPanel();

      //finish
      } else {
      
        let finishData = {
          score: this.totalScore,
          time: (new Date()).toLocaleString()
        };

        localStorage.setItem('finishData', JSON.stringify(finishData));
        location.href = 'results.html';      
      }

      document.getElementById('main__next-level').disabled = true;

      this.levelScore = 5;
      this.levelEnd = false;
      this.wrongAnswerCounter = [];

      for (let i of document.querySelectorAll('.main__answer-btn_right, .main__answer-btn_wrong')) {
        i.classList.remove('main__answer-btn_right');
        i.classList.remove('main__answer-btn_wrong');
        i.classList.remove('uk-button-default');
        i.classList.add('uk-button-secondary');
      }

    }

    restartGame() {
      this.askBird = 0;
      this.level = 0;
      this.levelScore = 5;
      this.totalScore = 0;
      this.levelEnd = false;
      this.wrongAnswerCounter = [];
      this.reloadScore();
      this.fillQuiz(true);

      let levels = document.querySelectorAll('.main__level > div');
      for (let i of levels) {
        i.classList.remove('main__level_last-off');
      }
      levels = document.querySelectorAll('.main__level > div > p');
      for (let i of levels) {
        i.classList.remove('main__level_last');
          i.classList.remove('main__level_active');
      }
      levels[0].classList.add('main__level_active');
      document.getElementById('main__next-level').innerHTML = "Next level";
      
      this.reloadPanel();
    }

    async reloadMainPanel() {

      let lang = this.multiLang.lang;

      let img = document.getElementById('main__ask-img');
      let imgSrc = img.childNodes[0];
      let title = document.getElementById('main__ask-title');
      let spec = document.getElementById('main__ask-spec');
  
      let askPanel = document.getElementById('main__panel-ask');
      await new Promise((resolve) => setTimeout(resolve, 0));
      askPanel.style.filter = 'blur(30px)';
  
      await new Promise((resolve) => setTimeout(resolve, 200));
  
      imgSrc.setAttribute('src', this.data[this.level][this.askBird]['image']);
      title.innerHTML = this.data[this.level][this.askBird]['name_' + lang];
      spec.innerHTML = this.data[this.level][this.askBird]['species'];
  
      await new Promise((resolve) => setTimeout(resolve, 0));
      askPanel.style.filter = null;
    }

    async reloadPanel() {
      let answerPanel = document.getElementById('main__panel-answer');
      let askPanel = document.getElementById('main__panel-ask');

      answerPanel.style.opacity = 0;
      askPanel.style.opacity = 0;

      await new Promise((resolve) => setTimeout(resolve, 400));
      await this.fillQuiz(true);
      await answerPanel.insertAdjacentElement('afterend',answerPanel);
      await askPanel.insertAdjacentElement('afterend',askPanel);
      await new Promise((resolve) => setTimeout(resolve, 100));

      answerPanel.style.opacity = null;
      askPanel.style.opacity = null; 
    }

    async reloadScore() {
      let score = document.getElementById('header__score_val');
      score.innerHTML = this.totalScore;
      score.style.transition = 'all 50ms';
      score.classList.toggle('header__score_light');

      await new Promise((resolve) => setTimeout(resolve, 200));
      score.style.transition = null;
      score.classList.toggle('header__score_light');
    }

    async changeFlyScore(isCorrect = false) {
      let cnt = document.getElementById('main__count');
      cnt.innerHTML = this.levelScore;

      if (isCorrect) {
        cnt.style.color = '#16dcee';
      } else {
        cnt.style.color = 'rgb(167, 167, 167)';
      }

      cnt.style.display = 'block';
      cnt.style.top = '100vh';

      await new Promise((resolve) => setTimeout(resolve, 0));
      cnt.style.opacity = '1';
      cnt.style.top = '-30%';

      await new Promise((resolve, reject) => setTimeout(resolve, 300));
      cnt.style.filter = "blur(200px)";
      cnt.style.opacity = 0;

      await new Promise((resolve) => setTimeout(resolve, 300));
      cnt.style.display = 'none';
      cnt.style.filter = null;
    }

    async reloadMainAnswer(id, answerBody) {

      let lang = this.multiLang.lang;

      let answerPanel = document.getElementById('main__answer-bird');
      await new Promise((resolve) => setTimeout(resolve, 0));
      answerPanel.style.filter = 'blur(30px)';

      await new Promise((resolve) => setTimeout(resolve, 200));
      answerBody.innerHTML = this.answerHtml;
      let img = document.getElementById('main__answer-img');
      let title = document.getElementById('main__answer-title');
      let spec = document.getElementById('main__answer-spec');
      let audio = document.getElementById('main__answer-audio');
      let desc = document.getElementById('main__answer-desc');
      img.setAttribute('src', this.data[this.level][id]['image']);
      title.innerHTML = this.data[this.level][id]['name_' + lang];
      spec.innerHTML = this.data[this.level][id]['species'];
      desc.innerHTML = this.data[this.level][id]['description_' + lang];
      this.audioAnswer = this.player.fillAudio(this.data[this.level][id]['audio'], this.audioAnswer, false);

      await new Promise((resolve) => setTimeout(resolve, 0));
      answerPanel.style.filter = null;
    }
}