window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    const loaderCopy =document.querySelector('.loader-copy');
    const oScroll = document.querySelector('.o-scroll');
    const loaderImg = document.querySelector('.loader-img');

    oScroll.className = "o-scroll";
    loader.className += " hidden";
  })

  document.querySelector('.slider-1-mobile p').addEventListener('touchstart', function(){
    document.querySelector('.slider-1-mobile p a').style.opacity = "0";
    document.querySelector('.slider-1-mobile a').style.marginRight = "60px";
  } )

  document.querySelector('.slider-2-mobile p').addEventListener('touchstart', function(){
    document.querySelector('.slider-2-mobile p a').style.opacity = "0";
    document.querySelector('.slider-2-mobile a').style.marginRight = "60px";
  } )

  document.querySelector('.slider-3-mobile p').addEventListener('touchstart', function(){
    document.querySelector('.slider-3-mobile p a').style.opacity = "0";
    document.querySelector('.slider-3-mobile a').style.marginRight = "60px";
  } )