
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

//Filtering the recepies in the food Page//

const Filter = (() => {
    // cache filter buttons and img-items
    const snacksBtn = document.querySelector('.btn-snacks');
    const foodBtn = document.querySelector('.btn-food');
    const sweetsBtn = document.querySelector('.btn-sweets');
    const resetBtn = document.querySelector('.btn-reset');
    const imgItems = Array.from(document.querySelectorAll('.image-item'));
  
    // store classNames
    imgItems.forEach(img => img.data = { classList: img.getAttribute('class') });
  
    // Filter all items into object of arrays.
    const imgItemsObj = imgItems.reduce((obj, img) => {
      const key = img.dataset.sort;
      if (!obj[key]) {
        obj[key] = [];
        obj[key].push(img);
      } else {
        obj[key].push(img);
      }
      return obj;
    }, {});
  
    function setClickListeners() {
      snacksBtn.addEventListener('click', filterImages, false);
      foodBtn.addEventListener('click', filterImages, false);
      sweetsBtn.addEventListener('click', filterImages, false);
      resetBtn.addEventListener('click', resetImages, false);
    }
  
    function filterImages(e) {
      const filter = e.target.dataset.filter;
      const items = Object.keys(imgItemsObj).forEach(key => {
        imgItemsObj[key].forEach(item => {
          item.classList.remove('image-hidden');
          if (item.dataset.sort === filter) {
            item.classList.add('image-filtered');
          } else {
            item.classList.add('image-hidden');
          }
        });
      });
    }
  
    function resetImages() {
      const items = Object.keys(imgItemsObj).forEach(key => {
        imgItemsObj[key].forEach(item => {
          item.setAttribute('class', item.data.classList);
        });
      });
    }
  
    // have a reset all button.
    setClickListeners();
  })();






  
//Flip the character cards in the Game page
  $(".characterCard").click(function () {
    $(this).toggleClass("flipped");
  });



//Show Mahmoud's dialogue when buttons pressed//

  $(document).ready(function(){ 
    
    $('#mahLikes').click(function(){
      $('.dialogue-greet').empty();
      $('.dialogue-greet').html("Mahmoud likes going on adventures, and his favorite cartoon is Tom & Jerry");
      $('.option').css("display","none");
      $('.dialogue-greet').typestyle();
    });

 
  

  
   
  });

  $.fn.typestyle = function(){
      var $text = $(this);
      var str = $text.html();
      var num = 0;
       
      var typeist = setInterval(function(){
        var curr = str.substr(num,1);
        
        if(curr=='<'){
          num = str.indexOf('>',num)+1;
        }else{
          num++;
        }
        $text.html(str.substr(0,num));
      },40);
    };






    //----------------------------------------------------------Slide Show function in the Game Page----------------------------------------------------------//

    // Select all slide-show images
let slideImages = document.getElementsByClassName("carouselGame");
// Select all captions for slide-show images
let slideCaptions = document.getElementsByClassName("caption");

// Start the slide-show with first image
let slideIndex = 1;
slideShow(slideIndex);


// Select slide-show arrows and add click Event listener
let buttonPrev = document.getElementById("prev");

let buttonNext = document.getElementById("next");
buttonPrev.addEventListener("click", () => {
    plusSlide(-1);
})
buttonNext.addEventListener("click", () => {

    plusSlide(1);
})

// If "next" is clicked then go one image forward else one image backward
function plusSlide(n) {
    slideIndex += n;

    slideShow(slideIndex);
}

// Slide show function, select the image and the caption to show
function slideShow(n) {
    if (n > slideImages.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slideImages.length;

    }
    for (let i = 0; i < slideImages.length; i++) {
        slideImages[i].style.display = "none";
    }
    for (let i = 0; i < slideCaptions.length; i++) {
        slideCaptions[i].style.display = "none";
    }
    slideImages[slideIndex - 1].style.display = "block";
    slideCaptions[slideIndex - 1].style.display = "block";

}



//----------------------------------------------------------END OF Slide Show function in the Game Page----------------------------------------------------------//
//
//

function togglePopup() {
        console.log('i was clicked');
        popup = document.getElementsByClassName('food-pop-up')[0]
        if (popup.className.indexOf('hide') !== -1 ) {
            popup.className = popup.className.replace(' hide', '');
            }
        // popup.hidden = !popup.hidden;
        for (i=0; i <popup.childElementCount; i++){
            elem = popup.children[ i ];

            if (elem.nodeName == "svg"){
                console.log('handling svg')
                elem = elem.children[0]
                console.log(elem)
                if (elem.className.baseVal.indexOf('hide') !== -1 ){
                    elem.className.baseVal = elem.className.baseVal.replace( ' hide', '');
                }
                else{
                    elem.className.baseVal = elem.className.baseVal + ' hide';
                }
            }
            else {
                if (elem.className.indexOf('hide') !== -1 ) {
                    elem.className = elem.className.replace(' hide', '');
                    }
                else {
                    elem.className = elem.className + ' hide';
                }
            }

        }
        // var svg = document.getElementsByClassName('pointer')[0]
        // console.log('hello' + svg);
        
        // console.log(svg.className.baseVal);
    }




    ///
    



