var introMe = document.querySelector('.intro-small a');
var cats = document.querySelector('.numbers div:nth-child(3)');
var three = document.querySelector('.numbers div:nth-child(4)');
var two = document.querySelector('.numbers div:nth-child(3)');
var dribbbleBetween = document.querySelector('.dribbble-in-between');
var instagramBetween = document.querySelector('.instagram-in-between');
var socialHover1 = document.querySelector('footer ul li:nth-child(1)');
var socialHover2 = document.querySelector('footer ul li:nth-child(2)');
var socialHover3 = document.querySelector('footer ul li:nth-child(3)');
var whatMore = document.querySelector('.what-more a');

introMe.addEventListener('mouseover', introMeHover)
introMe.addEventListener('mouseout', introMeOut)
whatMore.addEventListener('mouseover', whatMoreOver);
whatMore.addEventListener('mouseout', whatMoreOut);
two.addEventListener('mouseover', twoOver);
two.addEventListener('mouseout', twoOut);
three.addEventListener('mouseover', threeOver);
three.addEventListener('mouseout', threeOut);
dribbbleBetween.addEventListener('mouseover', dribbbleOver)
dribbbleBetween.addEventListener('mouseout', dribbbleOut)
instagramBetween.addEventListener('mouseover', instagramOver)
instagramBetween.addEventListener('mouseout', instagramOut)
socialHover1.addEventListener('mouseover', social1Over)
socialHover1.addEventListener('mouseout', social1Out)
socialHover2.addEventListener('mouseover', social2Over)
socialHover2.addEventListener('mouseout', social2Out)
socialHover3.addEventListener('mouseover', social3Over)
socialHover3.addEventListener('mouseout', social3Out)

tippy('.slider-1', {
  content: '<span class="drag-indicator">Drag me</span>',
  followCursor: true,
  theme: 'transparent',
  delay: [100, 300],
  animation: 'scale',
})

function introMeHover(){
  var par = document.querySelector('.intro-small p');
  var link = document.querySelector('.intro-small p a');
  par.style.color = "rgba(0, 0, 0, .5)";
}

function introMeOut(){
  var par = document.querySelector('.intro-small p');
  par.style.color = "rgba(0, 0, 0, 1)"
}

function whatMoreOver() {
  var setWidth = whatMore.offsetWidth;
  whatMore.style.minWidth = setWidth + 'px';
  document.querySelector('.what-more span').style.opacity = .4;
  document.querySelector('.what-more p').style.opacity = .4;
  change(whatMore, textMail);
}
var inst = null;
var textMail = ["For Enquiries", "For Opportunities", "For Loveletters", "For 1 Million Dollar", "For Spam", "For Freelance jobs", "For Remote jobs", "For Amazing jobs"];
var textThree = ["@wesley_ui", "@motiongarten", "@wesleyvanhart"]
var counter = 0;
var intervalTime = 500;

function change(e, t) {
  inst = setInterval(function () {
    e.innerHTML = t[counter];
    counter++;
    if (counter >= t.length) {
      counter = 0;
    }
  }, intervalTime - 50);
}

function whatMoreOut() {
  document.querySelector('.what-more span').style.opacity = 1;
  document.querySelector('.what-more p').style.opacity = .6;
  clearInterval(inst);
  whatMore.innerHTML = 'wesley@wvth.nl';
}

function threeOver () {
  var number = document.querySelector('.numbers div:nth-child(4)');
  var text = document.querySelector('.numbers div:nth-child(4) ul li:nth-child(2)');
  var otherNumbers = document.querySelector('.numbers');

  otherNumbers.style.color = 'rgba(0, 0, 0, .5)';
  number.style.color = 'rgba(0, 0, 0, 1)';
  change(text, textThree);
}

function threeOut() {
  var otherNumbers = document.querySelector('.numbers');
  var text = document.querySelector('.numbers div:nth-child(4) ul li:nth-child(2)');
  otherNumbers.style.color = 'rgba(0, 0, 0, 1)';
  clearInterval(inst);
  text.innerHTML = 'Instagram Accounts';
}

function twoOver() {
  var number = document.querySelector('.numbers div:nth-child(3)');
  var otherNumbers = document.querySelector('.numbers');
  number.style.color = 'rgba(0, 0, 0, 1)';
  document.querySelector('.numbers-gif').style.opacity = '1';
}

function twoOut() {
  var otherNumbers = document.querySelector('.numbers');
  otherNumbers.style.color = 'rgba(0, 0, 0, 1)';
  document.querySelector('.numbers-gif').style.transition = 'opacity .3s ease';
  document.querySelector('.numbers-gif').style.opacity = '0';
}

function introOut() {
  document.querySelector('.intro p').style.color = 'black';
  document.querySelector('.name-hover').style.color = 'black';
  document.querySelector('.me-hover-img').style.opacity = '0';
  document.querySelector('.me-hover-img').classList.add('js-animate');
  document.querySelector('.numbers-gif').style.opacity = '0';
}

function dribbbleOver() {
  document.querySelector('.social-in-between video:nth-child(4)').style.opacity = "1";
  document.querySelector('.social-in-between img:nth-child(1)').style.opacity = "0";
  document.querySelector('.social-in-between img:nth-child(1)').style.maxWidth = "initial";
  document.querySelector('.social-in-between img:nth-child(3)').style.opacity = "0";
  document.querySelector('.social-in-between span').style.opacity = '.4';
}

function dribbbleOut() {
  document.querySelector('.social-in-between video:nth-child(4)').style.opacity = "0";
  document.querySelector('.social-in-between img:nth-child(1)').style.opacity = "1";
  document.querySelector('.social-in-between img:nth-child(1)').style.marginLeft = "7.5%";
  document.querySelector('.social-in-between img:nth-child(1)').style.maxWidth = "600px";
  document.querySelector('.social-in-between img:nth-child(3)').style.opacity = ".6";
  document.querySelector('.social-in-between span').style.opacity = '1';
}

function instagramOver() {
  document.querySelector('.between-instagram video:nth-child(4)').style.opacity = "1";
  document.querySelector('.between-instagram img:nth-child(1)').style.opacity = "0";
  document.querySelector('.between-instagram img:nth-child(1)').style.maxWidth = "initial";
  document.querySelector('.between-instagram img:nth-child(3)').style.opacity = "0";
  document.querySelector('.between-instagram span').style.opacity = '.4';
}

function instagramOut() {
  document.querySelector('.between-instagram video:nth-child(4)').style.opacity = "0";
  document.querySelector('.between-instagram img:nth-child(1)').style.opacity = "1";
  document.querySelector('.between-instagram img:nth-child(1)').style.marginLeft = "7.5%";
  document.querySelector('.between-instagram img:nth-child(1)').style.maxWidth = "600px";
  document.querySelector('.between-instagram img:nth-child(3)').style.opacity = ".6";
  document.querySelector('.between-instagram span').style.opacity = '1';
}

function social1Over() {
  document.querySelector('footer ul li:nth-child(2)').style.opacity = '.4';
  document.querySelector('footer ul li:nth-child(3)').style.opacity = '.4';
}

function social1Out() {
  document.querySelector('footer ul li:nth-child(2)').style.opacity = '1';
  document.querySelector('footer ul li:nth-child(3)').style.opacity = '1';
}

function social2Over() {
  document.querySelector('footer ul li:nth-child(1)').style.opacity = '.4';
  document.querySelector('footer ul li:nth-child(3)').style.opacity = '.4';
}

function social2Out() {
  document.querySelector('footer ul li:nth-child(1)').style.opacity = '1';
  document.querySelector('footer ul li:nth-child(3)').style.opacity = '1';
}

function social3Over() {
  document.querySelector('footer ul li:nth-child(1)').style.opacity = '.4';
  document.querySelector('footer ul li:nth-child(2)').style.opacity = '.4';
}

function social3Out() {
  document.querySelector('footer ul li:nth-child(1)').style.opacity = '1';
  document.querySelector('footer ul li:nth-child(2)').style.opacity = '1';
}