import burgerImg from '../media/icon/burger.svg';
import crossImg from '../media/icon/cross.svg';

export default class Burger {

    start() {

        let burger = document.getElementById('burger-ico');
        let burgerList = document.getElementById('burger-list');
        let blocker = document.getElementById('block-back');

        async function burgerListOn() {
            blocker.style.opacity = 0;
            blocker.style.display = 'block';
            burgerList.style.opacity = 0;
            burgerList.style.display = 'block';
            burger.style.opacity = 0;
            await new Promise((resolve) => setTimeout(resolve, 0));
            blocker.style.opacity = .5;
            burgerList.style.opacity = 1;
            await new Promise((resolve) => setTimeout(resolve, 100));
            burger.setAttribute('src', crossImg);
            burger.style.opacity = null;
        }
  
        async function burgerListOff() {
            burger.style.opacity = 0;
            burgerList.style.opacity = 0;
            blocker.style.opacity = 0;
            await new Promise((resolve) => setTimeout(resolve, 100));
            burger.setAttribute('src', burgerImg);
            burger.style.opacity = null;
            await new Promise((resolve) => setTimeout(resolve, 200));
            burgerList.style.display = 'none';
            blocker.style.display = null;
        }

        burger.addEventListener('click', () => {

           if (!burgerList.style.display || burgerList.style.display == 'none') {
              burgerListOn();
            } else {
              burgerListOff();
            }

        });

        blocker.addEventListener('click', () => {
            burgerListOff();
        });
    }
} 