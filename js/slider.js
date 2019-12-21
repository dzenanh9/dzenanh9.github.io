var elem = document.querySelector('.dragLayer');

var flkty = new Flickity( '.dragLayer', {
  cellAlign: 'center',
  freeScroll: false,
  prevNextButtons: false,
  pageDots: true,
  wrapAround: true,
  freeScrollFriction: 0.08
});

var flkty = new Flickity( '.dragLayer-mobile', {
  cellAlign: 'right',
  freeScroll: false,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
});

// var flkty = new Flickity( '.dragLayer-4', {
//   cellAlign: 'left',
//   freeScroll: true,
//   prevNextButtons: false,
//   pageDots: false,
//   freeScrollFriction: 0.06
// });

var flkty = new Flickity( '.dragLayer-2', {
  cellAlign: 'center',
  freeScroll: false,
  prevNextButtons: false,
  pageDots: true,
  freeScrollFriction: 0.08
});

var flkty = new Flickity( '.dragLayer-2-mobile', {
  cellAlign: 'right',
  freeScroll: false,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
});

var flkty = new Flickity( '.dragLayer-3', {
  cellAlign: 'center',
  prevNextButtons: false,
  pageDots: true,
  wrapAround: true,
  freeScrollFriction: 0.08
});

var flkty = new Flickity( '.dragLayer-3-mobile', {
  cellAlign: 'right',
  freeScroll: false,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
});

function addSlideNumber(slider){
  var pageDots = document.querySelector(slider + ' .flickity-page-dots');
  var elementsInside = pageDots.childNodes.length;

  for (var i = 0; i < elementsInside; i++) { 
    var element = document.querySelector( slider + ' .flickity-page-dots li:nth-child('+ (i + 1) +')');
    var createPara = document.createElement('p');
    createPara.setAttribute('data-speed','-3')
    createPara.setAttribute('class','js-animate')
    var node = document.createTextNode('0' + (i + 1));
    createPara.appendChild(node);
  
    element.appendChild(createPara);
  }
}

addSlideNumber('.dragLayer');
addSlideNumber('.dragLayer-2');
addSlideNumber('.dragLayer-3');