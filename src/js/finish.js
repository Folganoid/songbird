export default class Finish {

    constructor() {

    }

    init(multilang) {

      this.multilang = multilang;

      //first init
      setTimeout(()=> {
        document.querySelector('.main__container').style.opacity = .95;  
        document.querySelector('.header__nav').style.opacity = 1;              
      }, 100);

      this.fillCongrats();
      this.fillTable();

      let langTrigger = document.querySelector('.header__switch-control');
      langTrigger.addEventListener('change', () => {
        this.fillCongrats();
      })

    }

    fillCongrats() {

      if (!localStorage.hasOwnProperty('finishData')) return;

      this.score = JSON.parse(localStorage.getItem('finishData')).score;
      this.time = JSON.parse(localStorage.getItem('finishData')).time;
      let nameBlock = document.querySelector('.main__results-name-block');
      
      (async () => {
        nameBlock.style.display = 'flex';
        nameBlock.style.opacity = '0';
        await new Promise((resolve) => setTimeout(resolve, 300));
        if (this.score == 30) {
          document.getElementById('main__score-title').innerHTML = this.multilang.dict.customData[this.multilang.lang]['max'];
          document.getElementById('main__congrat').innerHTML = this.multilang.dict.customData[this.multilang.lang]['excellent'];
          document.getElementById('main__congrat').style.color = '#55a2ff';
        } else {
          document.getElementById('main__score-title').innerHTML = this.multilang.dict.customData[this.multilang.lang]['res'] + this.score + this.multilang.dict.customData[this.multilang.lang]['score-val'];
          document.getElementById('main__congrat').innerHTML = this.multilang.dict.customData[this.multilang.lang]['congrat'];
        }
  
        document.getElementById('main__input-name').setAttribute('placeholder', this.multilang.dict.customData[this.multilang.lang]['placeholder']);
        let mainScore = document.getElementById('main__score');
        if (mainScore) mainScore.innerHTML = this.score;
        await new Promise((resolve) => setTimeout(resolve, 0));
        nameBlock.style.display = 'flex';
        nameBlock.style.opacity = '1';
      })();

      this.inputListener();
      this.buttonListener();
      this.buttonRepeatListener();

    }

    fillTable() {
      let data;

      if (!localStorage.hasOwnProperty('results')) {
        data = [];
      } else {
        data = JSON.parse(localStorage.getItem('results'));
      }
      
      if (this.time && this.score) {
        data.push({score: this.score, name: "", time: this.time});
      }

      data = data.sort((a, b) => {
        return (a.score < b.score) ? 1 : -1;
      });

      let tbody = document.getElementById('main__table-body');
      tbody.innerHTML = "";

      for (let i = 0 ; i < data.length; i++) {

        let color = (this.time == data[i].time) ? 'class="td_light"' : '';
        let id = (this.time == data[i].time) ? 'id="result_name"' : '';

        let html = `
        <tr ${color}>
          <td class="col1">${i+1}</td>
          <td class="col2">${data[i].score}</td>
          <td class="col3" ${id}>${data[i].name}</td>
          <td class="col4">${data[i].time}</td>
        </tr>
        `;
        tbody.innerHTML += html;

        if (i >= 9) break;
      }

    }

    inputListener() {
      let input = document.getElementById('main__input-name');
      let btn = document.getElementById('main__input-btn');
      btn.disabled = true;

      input.focus();
      input.addEventListener('input', () => {

        if (input.value.length > 20) {
          input.value = input.value.substring(0, 20);
        }

        if (input.value.length <= 0) {
          btn.disabled = true;
        } else {
          btn.disabled = false;
        }

        let name = document.getElementById('result_name');
        if (name) name.innerHTML = input.value;

      })
    }

    buttonListener() {
      let input = document.getElementById('main__input-name');
      let btn = document.getElementById('main__input-btn');

      btn.addEventListener('click', async () => {
        if (input.value.length > 20 || input.value.length <= 0) {
          return false;
        }

        this.name = input.value;

        let data = {
          score: this.score,
          name: this.name,
          time: this.time,
        }

          this.addToLocalStorage(data);
          
          let nameBlock = document.querySelector('.main__results-name-block');
          let row = document.querySelector('.td_light');
          row.style.transition = 'all 50ms';
          await new Promise((resolve) => setTimeout(resolve, 0));
          nameBlock.style.opacity = 0;
          row.style.transition = null;
          row.classList.add('td_light-shadow');
          await new Promise((resolve) => setTimeout(resolve, 300));
          row.classList.remove('td_light-shadow');
          nameBlock.style.display = 'none';
          await new Promise((resolve) => setTimeout(resolve, 0));
          let repeatBlock = document.querySelector('.main__results-repeat-block');
          row.classList.remove('td_light');
          if (this.score < 30) repeatBlock.style.display = 'flex';
          localStorage.removeItem('finishData');
      });
    }

    buttonRepeatListener() {
      let yes = document.getElementById('main__yes');
      let no = document.getElementById('main__no');

      yes.addEventListener('click', () => {
        location.href = 'quiz.html';      
      });

      no.addEventListener('click', async () => {
        let repeatBlock = document.querySelector('.main__results-repeat-block');
        await new Promise((resolve) => setTimeout(resolve, 0));
        repeatBlock.style.opacity = 0;
        await new Promise((resolve) => setTimeout(resolve, 300));
        repeatBlock.style.display = 'none';
      });
    }

    addToLocalStorage(data) {
      
      let localStorageData;
      
      if (localStorage.hasOwnProperty('results')) {
        localStorageData = JSON.parse(localStorage.getItem('results'));
      } else {
        localStorageData = [];
      }

      localStorageData.push(data);
      localStorage.setItem('results', JSON.stringify(localStorageData));

    }

    getFromLocalStorage() {
      
      let localStorageData;
      
      if (localStorage.hasOwnProperty('results')) {
        localStorageData = JSON.parse(localStorage.getItem('results'));
      } else {
        localStorageData = [];
      }

      return localStorageData;

    }
}