

$('document').ready(function(){

  $('#preloader-wrapper').delay(5000).fadeOut("slow", function(){});
  var Homepage=Barba.BaseView.extend({
    namespace:'homepage',
    onEnterCompleted : function(){

      var slideIndex = 0;
      showSlides(slideIndex);




function showSlides(n) {
  
  
  var slides = document.getElementsByClassName("slide-items");
  var count= document.getElementById("counter");
  slideIndex++;
  if(slideIndex>slides.length){slideIndex=1}
  
  $( ".slide-image" ).delay(8300).animate({
    opacity: 0,
    top: "-200%"
  }, 700, function() {
    $( ".slide-image" ).css({top: "200%"});
    slides[slideIndex-1].style.display = "none"; 
    
  });
  $( ".slide-content" ).delay(8300).animate({
    opacity: 0,
    top: "200%"
  }, 700, function() {
    // Animation complete.
    $( ".slide-content" ).css({top: "-200%"});
    
  });
  
  
  
  slides[slideIndex-1].style.display = "block"; 
  count.innerHTML="0"+[slideIndex];
  $( ".slide-image" ).delay(300).animate({
    opacity: 1,
    top: "10%"
  }, 700,function(){
    $( ".slide-image" ).css({top: "10%"});
  })
  $( ".slide-content" ).delay(300).animate({
    opacity: 1,
    top: "50%"
  }, 700, function() {
    $( ".slide-content" ).css({top: "50%"});
    // Animation complete.
  });
  
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}    
    }
  });

    var Products=Barba.BaseView.extend({
        namespace: 'products',
        onEnter: function(){
            var Searchbtn = $('.search-icon');
            var Searchtxt = $('.searchbox');
            var Nav = $('.nav-wrapper')
            var Filter = $('.filter-wrapper')

                    Searchbtn.addClass('active');
                    Searchtxt.addClass('active');
                    Nav.addClass('active');
                    Filter.addClass('active');

                  
                  $('#afterloader-wrapper').delay(3000).fadeOut("slow", function(){});


//filter on products
var filPrice = false;
var filName = false;
var filABV = false;

$('#filName').on('click',function () {
  if(filName==false){
    $('.product-link').sort(function(a, b) {
      filName=true;
      if ($(a).find("div.product-name").text() < $(b).find("div.product-name").text()) {
        return -1;
      } else {
        return 1;
      }
    }).appendTo('#container'); 
  }
  else{
    $('.product-link').sort(function(a, b) {
      filName=false;
      if ($(a).find("div.product-name").text() > $(b).find("div.product-name").text()) {
        return -1;
      } else {
        return 1;
      }
    }).appendTo('#container'); 
  }
    
});

$('#filABV').on('click',function () {
  if(filABV==false){
    $('.product-link').sort(function(a, b) {
      filABV=true;
      if (parseFloat($(a).find("input").val(),2) < parseFloat($(b).find("input").val(),2)) {
        return -1;
      } else {
        return 1;
      }
    }).appendTo('#container'); 
  }
  else{
    $('.product-link').sort(function(a, b) {
      filABV=false;
      if (parseFloat($(a).find("input").val(),2) > parseFloat($(b).find("input").val(),2)) {
        return -1;
      } else {
        return 1;
      }
    }).appendTo('#container'); 
  }
    
});

$('#filPrice').on('click',function () {
  if(filPrice==false){
    $('.product-link').sort(function(a, b) {
      filPrice=true;
      a=$(a).find(".product-price").text().split(" ")[1];
      b=$(b).find(".product-price").text().split(" ")[1];
      
      if (parseFloat(a,2) < parseFloat(b,2)) {
        return -1;
      } else {
        return 1;
      }
    }).appendTo('#container'); 
  }
  else{
    $('.product-link').sort(function(a, b) {
      filPrice=false;
      a=$(a).find(".product-price").text().split(" ")[1];
      b=$(b).find(".product-price").text().split(" ")[1];
      
      if (parseFloat(a,2) > parseFloat(b,2)) {
        return -1;
      } else {
        return 1;
      }
    }).appendTo('#container'); 
  }
    
});


//search bar load

$('#searchb').bind('keypress', function(e) {
  if(e.keyCode==13){
      // Enter pressed... do anything here...
      var myInput = document.getElementById("searchb");
      
      if (myInput && myInput.value) {
      
      
      apiURL=apiURL+'&beer_name='+myInput.value;
      
      

      request.open('GET', apiURL, true);
      request.readyState = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {
        
      const link = document.createElement('a');
      // link.href="product-view.html?b="+beer.id;
      link.setAttribute('href', 'product-view.html?b='+beer.id);
      link.setAttribute('class', 'product-link');


      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'product-wrapper');

      const triangle = document.createElement('div');
      triangle.setAttribute('class', 'background-triangle');

      const image = document.createElement('div');
      image.setAttribute('class', 'product-image');

      const Pimage = document.createElement('img');
      Pimage.src = beer.image_url;

      const name = document.createElement('div');
      name.setAttribute('class', 'product-name');
      name.textContent=beer.name;
      
      const abv = document.createElement('input');
      abv.setAttribute('type', 'hidden');
      abv.value=beer.abv;

      const price = document.createElement('div');
      price.setAttribute('class', 'product-price');
      price.textContent="$ "+Math.floor((Math.random() * 20) + 1) +".99";

      

      

      app.appendChild(link);
      link.appendChild(wrapper);
      wrapper.appendChild(triangle);
      wrapper.appendChild(image);

         image.appendChild(Pimage);
      
      wrapper.appendChild(name);
      wrapper.appendChild(price);
      wrapper.appendChild(abv);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `API problem!`;
    app.appendChild(errorMessage);
  }
}

request.send();
$( "#container" ).load(window.location.href + " #container" );
apiURL="https://api.punkapi.com/v2/beers?&per_page=50";
    }
      else{
        apiURL="https://api.punkapi.com/v2/beers?&per_page=50";

        request.open('GET', apiURL, true);
      request.readyState = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {
        
      const link = document.createElement('a');
      // link.href="product-view.html?b="+beer.id;
      link.setAttribute('href', 'product-view.html?b='+beer.id);
      link.setAttribute('class', 'product-link');


      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'product-wrapper');

      const triangle = document.createElement('div');
      triangle.setAttribute('class', 'background-triangle');

      const image = document.createElement('div');
      image.setAttribute('class', 'product-image');

      const Pimage = document.createElement('img');
      Pimage.src = beer.image_url;

      const name = document.createElement('div');
      name.setAttribute('class', 'product-name');
      name.textContent=beer.name;
      
      const abv = document.createElement('input');
      abv.setAttribute('type', 'hidden');
      abv.value=beer.abv;

      const price = document.createElement('div');
      price.setAttribute('class', 'product-price');
      price.textContent="$ "+Math.floor((Math.random() * 20) + 1) +".99";

      

      

      app.appendChild(link);
      link.appendChild(wrapper);
      wrapper.appendChild(triangle);
      wrapper.appendChild(image);

         image.appendChild(Pimage);
      
      wrapper.appendChild(name);
      wrapper.appendChild(price);
      wrapper.appendChild(abv);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `API problem!`;
    app.appendChild(errorMessage);
  }
}

request.send();
$( "#container" ).load(window.location.href + " #container" );
      }
  }
});
//search bar load

//loading api and products

var apiURL="https://api.punkapi.com/v2/beers?&per_page=50";         
const app = document.getElementById('container');

var request = new XMLHttpRequest();
request.open('GET', apiURL, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {
        
      const link = document.createElement('a');
      // link.href="product-view.html?b="+beer.id;
      link.setAttribute('href', 'product-view.html?b='+beer.id);
      link.setAttribute('class', 'product-link');


      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'product-wrapper');

      const triangle = document.createElement('div');
      triangle.setAttribute('class', 'background-triangle');

      const image = document.createElement('div');
      image.setAttribute('class', 'product-image');

      const Pimage = document.createElement('img');
      Pimage.src = beer.image_url;

      const name = document.createElement('div');
      name.setAttribute('class', 'product-name');
      name.textContent=beer.name;
      
      const abv = document.createElement('input');
      abv.setAttribute('type', 'hidden');
      abv.value=beer.abv;

      const price = document.createElement('div');
      price.setAttribute('class', 'product-price');
      price.textContent="$ "+Math.floor((Math.random() * 20) + 1) +".99";

      

      

      app.appendChild(link);
      link.appendChild(wrapper);
      wrapper.appendChild(triangle);
      wrapper.appendChild(image);

         image.appendChild(Pimage);
      
      wrapper.appendChild(name);
      wrapper.appendChild(price);
      wrapper.appendChild(abv);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `API problem!`;
    app.appendChild(errorMessage);
  }
}

request.send();


        },
        onLeave: function() {
            // A new Transition toward a new page has just started.
            var Searchbtn = $('.search-icon');
            var Searchtxt = $('.searchbox');
            var Nav = $('.nav-wrapper')
            var Filter = $('.filter-wrapper')

                Searchbtn.removeClass('active');
                Searchtxt.removeClass('active');
                Nav.removeClass('active');
                Filter.removeClass('active');
        }
    });

    var View=Barba.BaseView.extend({
        namespace: 'view',
        onEnter: function(){

          $('#afterloader-wrapper').delay(5000).fadeOut("slow", function(){});

            particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.0,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 30,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

 },

onEnterCompleted:function(){
          
 

           //load beer
    const app = document.getElementById('view-container');

    var url_string=window.location.href;
    var url = new URL(url_string);
    var beerid=url.searchParams.get("b")
    

var request = new XMLHttpRequest();
request.open('GET', 'https://api.punkapi.com/v2/beers'+'/'+beerid, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {

      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'view-wrapper');

      const triangle = document.createElement('div');
      triangle.setAttribute('class', 'background-triangle');

      const image = document.createElement('div');
      image.setAttribute('class', 'view-image');

      const Pimage = document.createElement('img');
      Pimage.src = beer.image_url;

      const wrapper2 = document.createElement('div');
      wrapper2.setAttribute('class', 'view-wrapper');

      const desc_wrapper = document.createElement('div');
      desc_wrapper.setAttribute('class', 'view-desc-wrapper');

      const name = document.createElement('div');
      name.setAttribute('class', 'view-name');
      name.textContent=beer.name;

      const desc = document.createElement('div');
      desc.setAttribute('class', 'view-desc');
      desc.textContent=beer.description;
  

      const price = document.createElement('div');
      price.setAttribute('class', 'view-price');
      price.textContent="$ 9.99";

      const btn = document.createElement('input');
      btn.setAttribute('type', 'button');
      btn.setAttribute('id', 'btn');
      btn.setAttribute('value', 'purchase');
      btn.setAttribute('onClick', 'sendToCart()');

      app.appendChild(wrapper);
      app.appendChild(wrapper2);

      wrapper.appendChild(triangle);
      wrapper.appendChild(image);

         image.appendChild(Pimage);
      
         wrapper2.appendChild(desc_wrapper);
         desc_wrapper.appendChild(name);
         desc_wrapper.appendChild(desc);
         desc_wrapper.appendChild(price);
         desc_wrapper.appendChild(btn);
    }
    );
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `There is a problem with the API!`;
    app.appendChild(errorMessage);
  }
}
request.send();

        }
        
    });
    var Cart=Barba.BaseView.extend({
      namespace: 'cart',
        onEnter: function(){

          const app = document.getElementById('picked-list')

          $('#ccard').click(function(){
            $('#paypal').removeClass('active')
            $('#ccard').addClass('active')
          })
          $('#paypal').click(function(){
            $('#ccard').removeClass('active')
            $('#paypal').addClass('active')
          })
          
 if(JSON.parse(localStorage.getItem("pickedBeers"))!=null){
  JSON.parse(localStorage.getItem("pickedBeers")).forEach(beer =>{
    const lista = document.getElementById('picked-list');
  
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'picked-item');
  
  
    const pointer = document.createElement('div');
    pointer.setAttribute('class', 'pointer');
  
    const name = document.createElement('div');
    name.setAttribute('class', 'picked-item-name');
    name.textContent=beer.beername;
  
    const price = document.createElement('div');
    price.setAttribute('class', 'picked-item-price');
    price.textContent="$ "+ beer.price;
  
    const remove = document.createElement('div');
    remove.setAttribute('class', 'remove-item');
    remove.setAttribute('onClick', 'removeItem()');
    remove.textContent="X";
    
    lista.appendChild(wrapper);
    wrapper.appendChild(pointer);
    wrapper.appendChild(name);
    wrapper.appendChild(price);
    wrapper.appendChild(remove);
  
    })
  
      var items = $('.picked-item-price'),
      cashOut = $('.total-item-price'),
      sum = 0;
  
  $.each(items, function(value) {
    // items[value] will contain an HTML element, representing an 'item'.
    var itemValue = parseFloat(items[value].innerHTML.replace('$ ',''));
    sum += !isNaN(itemValue) ? itemValue : 0;
  });
  
  cashOut.html('$ ' + sum);
 }
            
          else{
            const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `  Go pick a beer then come here!`;
    app.appendChild(errorMessage);

          }

        }
    })

    var FadeTransition = Barba.BaseTransition.extend({
        start: function() {
          /**
           * This function is automatically called as soon the Transition starts
           * this.newContainerLoading is a Promise for the loading of the new container
           * (Barba.js also comes with an handy Promise polyfill!)
           */
      
          // As soon the loading is finished and the old page is faded out, let's fade the new page
          Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
        },
      
        fadeOut: function() {
          /**
           * this.oldContainer is the HTMLElement of the old Container
           */
      
          return $(this.oldContainer).animate({ opacity: 0 }).promise();
        },
      
        fadeIn: function() {
          /**
           * this.newContainer is the HTMLElement of the new Container
           * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
           * Please note, newContainer is available just after newContainerLoading is resolved!
           */
      
          var _this = this;
          var $el = $(this.newContainer);
      
          $(this.oldContainer).hide();
      
          $el.css({
            visibility : 'visible',
            opacity : 0
          });
      
          $el.animate({ opacity: 1 }, 1000, function() {
            /**
             * Do not forget to call .done() as soon your transition is finished!
             * .done() will automatically remove from the DOM the old Container
             */
      
            _this.done();
          });
        }
      });
      
      /**
       * Next step, you have to tell Barba to use the new Transition
       */
      
      Barba.Pjax.getTransition = function() {
        /**
         * Here you can use your own logic!
         * For example you can use different Transition based on the current page or link...
         */
      
        return FadeTransition;
      };
    
    Homepage.init();
    Products.init(); 
    View.init(); 
    Cart.init(); 
    

    Barba.Pjax.start();
    
});
