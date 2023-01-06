export default class Parallax {
    
    constructor() {
        
    }

    start() {
        document.addEventListener("mousemove", parallax);
        const elem = document.querySelector("html");
        const elem2 = document.querySelector(".main__branch-1");
        const elem3 = document.querySelector(".main__branch-2");
        function parallax(e) {
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
            let _depth2x = `${-30 - (_mouseX - _w) * 0.02}px`;
            let _depth2y = `${50 - (_mouseY - _w) * 0.02}px`;
            let _depth3x = `${-50 + (_mouseX - _w) * 0.04}px`;
            let _depth3y = `${50 - (_mouseY - _w) * 0.04}px`;
            let x = `${_depth1}`;

            elem.style.backgroundPosition = x;
            elem2.style.top = _depth2y;
            elem2.style.right = _depth2x;
            elem3.style.bottom = _depth3y;
            elem3.style.left = _depth3x;

        }
    };
}