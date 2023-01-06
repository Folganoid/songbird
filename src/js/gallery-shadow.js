export default class GalleryShadow {

    constructor() {
      
    }

    start() {
        document.addEventListener('mousemove', this.boxShadow);
    }
  
    boxShadow(e) {
      const el = document.querySelector('.main__card-body');
      const [x, y] = [(window.innerWidth / 2) - e.clientX, (window.innerHeight / 2) - e.clientY];
      const [elementX, elementY] = [el.offsetLeft, el.offsetTop];
      const shadowXOffset = Math.round((elementX + x) / 75);
      const shadowYOffset = Math.round((elementY + y) / 75);
      el.style.boxShadow = `${shadowXOffset}px ${shadowYOffset}px 5px rgba(0,0,0,.5)`;
    }
  
  }