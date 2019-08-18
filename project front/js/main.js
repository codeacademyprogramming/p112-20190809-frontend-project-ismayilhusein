//first accordion
$(function(){

    var a = 0;
    $(window).scroll(function() {

    var oTop = $('#acheivements').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
            },

            {

            duration: 1500,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }

            });
        });
        a = 1;
    }

    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            $("#nav-bar").addClass("nav-bar--fixed");
            $(".edulearn").addClass("edulearn--fix")
        } else {
            $("#nav-bar").removeClass("nav-bar--fixed");
            $(".edulearn").removeClass("edulearn--fix")
        }
    });

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.css.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
    //modal!//
  
    $(".barsbtn").click(function(){
        $(".modal-content").css("right", "360px");

    });
    $("#nav-close").click(function(){
        $(".modal-content").css("right", "0");
    })

    $(".searchbtn").click(function(){
        $(".bg1-modal").css("display", "block");
      

    });
    $(".close5").click(function(){
        $(".bg1-modal").css("display", "none");
    })
    


    var owl = $('.main-slider');
    owl.owlCarousel({
        loop:true,
        margin:0,
        navSpeed:800,
        nav:false,
        items:1,
        touchDrag:false,
        autoplay:true,
        transitionStyle : "fade",
    });


    $('.second-slider').owlCarousel({
        autoplay:false,
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.third-slider').owlCarousel({
        autoplay:false,
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
              items:3  
            },
            1000:{
                items:4
            }
        }
    })

    $('.four-slider').owlCarousel({
        autoplay:false,
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

    $('.five-slider').owlCarousel({
        autoplay:true,
        loop:true,
        margin:85,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

   // $('.number-count').counterUp({
      //  delay: 10,
      //  time: 1000
   // });

 })


//     //accordion about us//
// var accordion = function(){
//     var data = $('.accordion').attr('data-accordion')
    
//     $('.accordion-header').on('click', function(){
//       // все что ниже можете удалить
//       // if (data === 'close'){
//       //   alert();
//       //   $('.accordion-body').slideUp()
//       //   if ($(this).hasClass('active')){
//       //     $(this).toggleClass('active')
//       //   }else{
//       //     $('.accordion-header').removeClass('active')
//       //     $(this).toggleClass('active')
//       //   }
//       // } 
//       // else {
//       //   $(this).toggleClass('active')
//       // }
//       //все что выше можете удалить
  
//       $(this).next('.accordion-body').not(':animated').slideToggle()
//     })
//   }
  
//   accordion();