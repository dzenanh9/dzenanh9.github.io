function sizeHero() {
    var h1Height = document.querySelector('header h1').offsetHeight;
    document.querySelector('.big-images').style.marginTop = '-' + h1Height / 2 + "px";

    var screenWidth = window.innerWidth;

    if(screenWidth <= 967) {
      var h1Height = document.querySelector('.hero-title-mobile').offsetHeight;
      document.querySelector('.big-images').style.marginTop = '-' + h1Height / 2 + "px";
    }
  };
        
  window.onresize = sizeHero;
  

  document.addEventListener('DOMContentLoaded', sizeHero());