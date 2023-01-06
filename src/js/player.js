export default class Player {

    fillAudio(src, audio, isAsk = true) {

        let audioPlayer = (isAsk) 
          ? document.querySelector(".main__ask_audio") 
          : document.querySelector(".main__answer_audio");
  
          audioPlayer.querySelector('.spin').style.display = 'block';
          audioPlayer.querySelector('.toggle-play-body').style.opacity = 0;

        if (audio) audio.pause();
        if (audio && audio.hasOwnProperty('interval')) clearInterval(audio.interval);
        if (audioPlayer.querySelector('.pause')) {
          audioPlayer.querySelector('.pause').classList.add('play');
          audioPlayer.querySelector('.pause').classList.remove('pause');
        }
  
        let tmpAudioVolume = (audio && audio.newVolume) ? audio.newVolume : null;
        audio = new Audio(src);
        audio.onloadeddata = null;
        audio.onloadeddata = () => {
            audioPlayer.querySelector(".time .length").textContent = this.getTimeCodeFromNum(
              audio.duration
            );
            audioPlayer.querySelector('.spin').style.display = 'none';
            audioPlayer.querySelector('.toggle-play-body').style.opacity = 1;
        };

        if (tmpAudioVolume) {
            audio.volume = tmpAudioVolume;
            audio.newVolume = tmpAudioVolume;
            audioPlayer.querySelector(".volume-percentage").style.width = audio.volume * 100 + '%';
            audioPlayer.querySelector(".volume-dot").style.left = "calc(" + (audio.volume * 100) + "% - " + (audio.volume * 16) + "px)";
        } else {
          audio.volume = .75;
          audio.newVolume = .75;
          audioPlayer.querySelector(".volume-percentage").style.width = '75%';
        } 
        
        const timeline = audioPlayer.querySelector(".timeline");
        timeline.onclick = null;
        timeline.onclick = e => {
          const timelineWidth = window.getComputedStyle(timeline).width;
          const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
          audio.currentTime = timeToSeek;
        };
        
        const volumeSlider = audioPlayer.querySelector(".volume-slider");
        volumeSlider.onclick = null;
        volumeSlider.onclick = e => {
          const sliderWidth = window.getComputedStyle(volumeSlider).width;
          audio.newVolume = e.offsetX / parseInt(sliderWidth);
          audio.volume = audio.newVolume;
          audioPlayer.querySelector(".volume-percentage").style.width = audio.newVolume * 100 + '%';
          audioPlayer.querySelector(".volume-dot").style.left = "calc(" + (audio.newVolume * 100) + "% - " + (audio.newVolume * 16) + "px)";
        };
        
        audio.interval = setInterval(() => {
          const progressBar = audioPlayer.querySelector(".progress");
          const progressDot = audioPlayer.querySelector(".progress-dot");
          progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
          progressDot.style.left = "calc(" + (audio.currentTime / audio.duration * 100) + "% - " +(audio.currentTime / audio.duration * 16)+ "px)";
          audioPlayer.querySelector(".time .current").textContent = this.getTimeCodeFromNum(
            audio.currentTime
          );

          if (audio.duration == audio.currentTime) {
            playBtn.classList.add("play");
            playBtn.classList.remove("pause");
          }
        }, 500);
        
        let playBtn = audioPlayer.querySelector(".toggle-play");
        let playBtnBody = audioPlayer.querySelector(".toggle-play-body");
        playBtn.onclick = null;
        playBtn.onclick = () => {
            if (audio.paused) {

              (async () => {
                playBtn.style.transition = 'all 50ms';
                playBtnBody.style.transition = 'all 50ms';
                playBtnBody.classList.add('light');
                playBtn.classList.remove("play");
                playBtn.classList.add('light');
                await new Promise((resolve) => setTimeout(resolve, 100));
                playBtn.style.transition = null;
                playBtn.classList.remove('light');
                playBtnBody.style.transition = null;
                playBtnBody.classList.remove('light');
                await new Promise((resolve) => setTimeout(resolve, 100));
                playBtn.classList.add("pause");
              })();

              audio.play();
            } else {

              (async () => {
                playBtn.style.transition = 'all 50ms';
                playBtnBody.style.transition = 'all 50ms';
                playBtnBody.classList.add('light');
                playBtn.classList.remove("pause");
                playBtn.classList.add('light');
                await new Promise((resolve) => setTimeout(resolve, 100));
                playBtn.style.transition = null;
                playBtn.classList.remove('light');
                playBtnBody.style.transition = null;
                playBtnBody.classList.remove('light');
                await new Promise((resolve) => setTimeout(resolve, 100));
                playBtn.classList.add("play");
              })();

              audio.pause();
            }
          };
        
        
        return audio;
      }

      getTimeCodeFromNum(num) {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        let hours = parseInt(minutes / 60);
        minutes -= hours * 60;
      
        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(
          seconds % 60
        ).padStart(2, 0)}`;
      }

}