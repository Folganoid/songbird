export default class MainShadow {

  constructor() {
    
  }

  start() {
    //first init
    setTimeout(()=> {
      document.querySelector('.main__container').style.opacity = 1;        
      document.querySelector('.header__nav').style.opacity = 1;        
    }, 100);

    document.addEventListener('mousemove', this.boxShadow);
  }

  boxShadow(e) {

    const el = document.querySelector('.main__panel-desc');
    const el2 = document.querySelector('.main__panel-desc-2');
    const el3 = document.querySelector('.main__panel-cntrl');
    const el4 = document.querySelector('.main__desc-head');

    const [x, y] = [e.clientX, e.clientY];
    const [elementX, elementY] = [el.offsetLeft, el.offsetTop];
    const shadowXOffset = Math.round((elementX - x) / 75);
    const shadowYOffset = Math.round((elementY - y) / 75);
    
    const [element2X, element2Y] = [el2.offsetLeft, el2.offsetTop];
    const shadowX2Offset = Math.round((element2X - x) / 100);
    const shadowY2Offset = Math.round((element2Y - y) / 100);
    
    const [element3X, element3Y] = [el3.offsetLeft, el3.offsetTop];
    const shadowX3Offset = Math.round((element3X - x) / 75);
    const shadowY3Offset = Math.round((element3Y - y) / 75);
    
    const [element4X, element4Y] = [el4.offsetLeft, el4.offsetTop];
    const shadowX4Offset = Math.round((element4X - x) / 200);
    const shadowY4Offset = Math.round((element4Y - y) / 200);
    
    el.style.boxShadow = `${shadowXOffset}px ${shadowYOffset}px 5px rgba(0,0,0,.8)`;
    el2.style.boxShadow = `${shadowX2Offset}px ${shadowY2Offset}px 5px rgba(0,0,0,.8)`;
    el3.style.boxShadow = `${shadowX3Offset}px ${shadowY3Offset}px 5px rgba(0,0,0,.8)`;
    el4.style.textShadow = `${shadowX4Offset}px ${shadowY4Offset}px 5px rgba(0,0,0,.9)`;
  }

}