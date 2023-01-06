"use strict";(self.webpackChunksongbird=self.webpackChunksongbird||[]).push([[166],{259:(e,t,l)=>{var i=l(203);const n=l.p+"f9259c9786439e19b1ef.jpeg",s=l.p+"7a88ef8f77433865acfc.mp3",a=l.p+"559f2721cbf1224bc758.mp3",r=l.p+"b06d18b2819ad4f0c5db.mp3";var o=l(509);const d=l.p+"8c50f72845a08fc41fdf.png",m=l.p+"803f24369a085e35482e.gif";var c=l(662),u=l(231);(new class{constructor(){}start(){document.addEventListener("mousemove",(function(i){let n=window.innerWidth/2,s=window.innerHeight/2,a=i.clientX,r=i.clientY,o=-40-.02*(a-n)+"px",d=70-.02*(r-n)+"px",m=.05*(a-n)-100+"px",c=-250-.05*(r-n)+"px",u=`${50-.03*(a-n)}% ${50-.03*(r-s)}%`;e.style.backgroundPosition=u,t.style.top=d,t.style.right=o,l.style.bottom=c,l.style.left=m}));const e=document.querySelector("html"),t=document.querySelector(".main__branch-1"),l=document.querySelector(".main__branch-2")}}).start(),(new u.Z).start();let h=new class{data={en:{".lang-home":"Home",".lang-quiz":"Quiz",".lang-results":"Results",".lang-gallery":"Gallery",".lang--en":" ENG ",".lang--ua":" UKR ",".lang-score":"Score:",".lang-level-0":"Warming up",".lang-level-1":"Passerines",".lang-level-2":"Forest birds",".lang-level-3":"Songbirds",".lang-level-4":"Predators",".lang-level-5":"Sea birds",".lang-empty":"Listen to the voice and choose the bird it belongs to.",".lang-next-1":"Next level",".lang-next-2":"Finish",".lang-author-long":"© 2022 Copyright - Andrii Holubkov",".lang-author-short":"© 2022 - A.Holubkov"},ua:{".lang-home":"Головна",".lang-quiz":"Вікторина",".lang-results":"Результати",".lang-gallery":"Галерея",".lang--en":" АНГ ",".lang--ua":" УКР ",".lang-score":"Бали:",".lang-level-0":"Розминка",".lang-level-1":"Горобцеві",".lang-level-2":"Лісові птахи",".lang-level-3":"Співочі птахи",".lang-level-4":"Хижаки",".lang-level-5":"Морські птахи",".lang-empty":"Прослухайте аудіозапис і виберіть птаха, якому він належить.",".lang-next-1":"Наступний рівень",".lang-next-2":"Закінчити",".lang-author-long":"© 2022 Копірайт - Андрій Голубков",".lang-author-short":"© 2022 - A.Голубков"}};getDict(e){return!!this.data.hasOwnProperty(e)&&this.data[e]}},_=new c.Z,g=new class{constructor(e,t){this.multiLang=e,this.multiLang.start(t),this.init()}init(){this.data=i.Z,this.level=0,this.askBird=0,this.levelScore=5,this.totalScore=0,this.levelEnd=!1,this.wrongAnswerCounter=[],this.bell1=new Audio(s),this.bell2=new Audio(a),this.bell4=new Audio(r),this.player=new o.Z,this.audio=null,this.audioAnswer=null,this.nextLevelListener(),setTimeout((()=>{document.querySelector(".main__container").style.opacity=.95,document.querySelector(".header__nav").style.opacity=1}),100),document.querySelector(".header__switch-control").addEventListener("change",(()=>{this.fillAnswerList(),1==this.levelEnd&&this.buildAsk(!1),this.fillBirdAnswer(-2)}))}playerHtml=`\n      <div class="audio-player main__answer_audio">\n        <div class="play-container">\n          <div class="toggle-play-body">\n            <div class="toggle-play play"></div>\n          </div>\n          <img class="spin" src="${m}" alt="spinner">\n          <div class="timeline-body">\n            <div class="timeline">\n              <div class="progress"></div>\n              <div class="progress-dot"></div>\n            </div>\n            <div class="time">\n              <div class="current">0:00</div>\n              <div class="length"></div>\n            </div>\n          </div>\n          <div class="volume-container">\n            <img class="volume-img" src="${d}" alt="volume">\n            <div class="volume-slider">\n              <div class="volume-percentage"></div>\n              <div class="volume-dot"></div>\n            </div>\n          </div>\n        </div>\n      </div>`;answerHtml=`\n        <div class="main__answer-bird-box">\n          <div class="main__answer-img">\n            <img id="main__answer-img" src="#" alt="bird">\n          </div>\n          <div class="main__answer-ctx">\n              <h4 id="main__answer-title" class=""></h4>\n              <hr class="uk-margin-remove"/>\n              <p id="main__answer-spec" class=""></p>\n              ${this.playerHtml}\n          </div>\n        </div>\n        <div class="main__answer-desc-box">\n          <p id="main__answer-desc" class=""></p>\n        </div>`;answerHtmlEmpty='<div class="main__answer-empty-box"><h4 class="main__answer-empty lang-empty"></h4></div>';buildAsk(e=!1){e?(document.getElementById("main__ask-img").childNodes[0].setAttribute("src",n),document.getElementById("main__ask-title").innerHTML="*****",document.getElementById("main__ask-spec").innerHTML="*****"):this.reloadMainPanel(),document.querySelector(".main__answer_audio"),this.audio=this.player.fillAudio(this.data[this.level][this.askBird].audio,this.audio)}fillQuiz(e=!1){let t=Math.floor(5*Math.random());this.askBird=t,this.buildAsk(e),this.fillAnswerList(),this.fillBirdAnswer(-1),this.level>=this.data.length-1&&(document.querySelector(".main__next-1").style.display="none",document.querySelector(".main__next-2").style.display="inline")}fillBirdAnswer(e){let t=document.getElementById("main__answer-bird-box");if(t.innerHTML=this.answerHtmlEmpty,-1===e)return(async()=>{t.style.transition="all 300ms",t.style.filter="blur(20px)",await new Promise((e=>setTimeout(e,300))),document.querySelector(".lang-empty").innerHTML=this.multiLang.dict.data[this.multiLang.lang][".lang-empty"],await new Promise((e=>setTimeout(e,0))),t.style.transition=null,t.style.filter=null})(),void(this.answer=null);if(-2===e&&!this.answer)return void this.fillBirdAnswer(-1);if(-2===e&&this.answer)return void this.fillBirdAnswer(this.answer);let l=e.dataset.val;this.reloadMainAnswer(l,t),this.answer=e,this.askBird==l?(document.getElementById("main__next-level").disabled=!1,(async()=>{e.style.transition="all 50ms",e.classList.add("main__answer-btn_light"),await new Promise((e=>setTimeout(e,100))),e.style.transition=null,e.classList.remove("main__answer-btn_light"),e.classList.add("main__answer-btn_right")})(),this.levelEnd||(this.bell2.play(),this.changeFlyScore(!0),this.levelEnd=!0,this.totalScore+=this.levelScore,this.reloadScore()),this.buildAsk(!1)):(this.levelEnd||e.classList.add("main__answer-btn_wrong"),(async()=>{e.style.transition="all 50ms",e.classList.add("main__answer-btn_light"),await new Promise((e=>setTimeout(e,100))),e.style.transition=null,e.classList.remove("main__answer-btn_light")})(),this.wrongAnswerCounter.includes(l)||(this.wrongAnswerCounter.push(l),this.levelScore>0&&!this.levelEnd&&(this.levelScore--,this.changeFlyScore(),this.bell1.play())))}fillAnswerList(){let e=this.multiLang.lang,t=document.querySelectorAll(".main__answer-txt"),l=document.getElementById("main__answers-container");(async()=>{for(let e=0;e<t.length;e++)t[e].style.transition="all 300ms",t[e].style.filter="blur(10px)";await new Promise((e=>setTimeout(e,300)));for(let l=0;l<t.length;l++)t[l].innerHTML=this.data[this.level][l]["name_"+e];await new Promise((e=>setTimeout(e,0))),l.addEventListener("click",(e=>{e.target.closest(".main__answer-btn")&&this.fillBirdAnswer(e.target.closest(".main__answer-btn"))}));for(let e=0;e<t.length;e++)t[e].style.transition=null,t[e].style.filter=null})()}nextLevelListener(){document.getElementById("main__next-level").addEventListener("click",(e=>{this.nextLevel()}))}nextLevel(){if(this.audio&&this.audio.pause(),this.audioAnswer&&this.audioAnswer.pause(),this.level<this.data.length-1){this.bell4.play();let e=document.querySelector('.main__level[data-val="'+this.level+'"] > div > p'),t=document.querySelector('.main__level[data-val="'+this.level+'"]');e.classList.toggle("main__level_active"),e.classList.toggle("main__level_last"),t.classList.add("main__level_last-off"),this.level++,document.querySelector('.main__level[data-val="'+this.level+'"] > div > p').classList.toggle("main__level_active"),this.reloadPanel()}else{let e={score:this.totalScore,time:(new Date).toLocaleString()};localStorage.setItem("finishData",JSON.stringify(e)),location.href="results.html"}document.getElementById("main__next-level").disabled=!0,this.levelScore=5,this.levelEnd=!1,this.wrongAnswerCounter=[];for(let e of document.querySelectorAll(".main__answer-btn_right, .main__answer-btn_wrong"))e.classList.remove("main__answer-btn_right"),e.classList.remove("main__answer-btn_wrong"),e.classList.remove("uk-button-default"),e.classList.add("uk-button-secondary")}restartGame(){this.askBird=0,this.level=0,this.levelScore=5,this.totalScore=0,this.levelEnd=!1,this.wrongAnswerCounter=[],this.reloadScore(),this.fillQuiz(!0);let e=document.querySelectorAll(".main__level > div");for(let t of e)t.classList.remove("main__level_last-off");e=document.querySelectorAll(".main__level > div > p");for(let t of e)t.classList.remove("main__level_last"),t.classList.remove("main__level_active");e[0].classList.add("main__level_active"),document.getElementById("main__next-level").innerHTML="Next level",this.reloadPanel()}async reloadMainPanel(){let e=this.multiLang.lang,t=document.getElementById("main__ask-img").childNodes[0],l=document.getElementById("main__ask-title"),i=document.getElementById("main__ask-spec"),n=document.getElementById("main__panel-ask");await new Promise((e=>setTimeout(e,0))),n.style.filter="blur(30px)",await new Promise((e=>setTimeout(e,200))),t.setAttribute("src",this.data[this.level][this.askBird].image),l.innerHTML=this.data[this.level][this.askBird]["name_"+e],i.innerHTML=this.data[this.level][this.askBird].species,await new Promise((e=>setTimeout(e,0))),n.style.filter=null}async reloadPanel(){let e=document.getElementById("main__panel-answer"),t=document.getElementById("main__panel-ask");e.style.opacity=0,t.style.opacity=0,await new Promise((e=>setTimeout(e,400))),await this.fillQuiz(!0),await e.insertAdjacentElement("afterend",e),await t.insertAdjacentElement("afterend",t),await new Promise((e=>setTimeout(e,100))),e.style.opacity=null,t.style.opacity=null}async reloadScore(){let e=document.getElementById("header__score_val");e.innerHTML=this.totalScore,e.style.transition="all 50ms",e.classList.toggle("header__score_light"),await new Promise((e=>setTimeout(e,200))),e.style.transition=null,e.classList.toggle("header__score_light")}async changeFlyScore(e=!1){let t=document.getElementById("main__count");t.innerHTML=this.levelScore,t.style.color=e?"#16dcee":"rgb(167, 167, 167)",t.style.display="block",t.style.top="100vh",await new Promise((e=>setTimeout(e,0))),t.style.opacity="1",t.style.top="-30%",await new Promise(((e,t)=>setTimeout(e,300))),t.style.filter="blur(200px)",t.style.opacity=0,await new Promise((e=>setTimeout(e,300))),t.style.display="none",t.style.filter=null}async reloadMainAnswer(e,t){let l=this.multiLang.lang,i=document.getElementById("main__answer-bird");await new Promise((e=>setTimeout(e,0))),i.style.filter="blur(30px)",await new Promise((e=>setTimeout(e,200))),t.innerHTML=this.answerHtml;let n=document.getElementById("main__answer-img"),s=document.getElementById("main__answer-title"),a=document.getElementById("main__answer-spec"),r=(document.getElementById("main__answer-audio"),document.getElementById("main__answer-desc"));n.setAttribute("src",this.data[this.level][e].image),s.innerHTML=this.data[this.level][e]["name_"+l],a.innerHTML=this.data[this.level][e].species,r.innerHTML=this.data[this.level][e]["description_"+l],this.audioAnswer=this.player.fillAudio(this.data[this.level][e].audio,this.audioAnswer,!1),await new Promise((e=>setTimeout(e,0))),i.style.filter=null}}(_,h);g.fillQuiz(!0),console.log("self-rating: 270/270")}},e=>{e.O(0,[895],(()=>(259,e(e.s=259)))),e.O()}]);
//# sourceMappingURL=quiz.b9f2280ab1a2f90bd7e5.js.map