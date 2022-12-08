
(function ($) {
    'use strict';

    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },
        methods: function (e) {
            imJs.stickyHeader();
            imJs.SwiperActivation();
            imJs.backToTopInit();
            imJs.salActive();
            imJs.splitText();
            imJs.smoothScroll(); 
        },
        stickyHeader: function (e) {
            $(window).on().scroll(function () {
                if ($(this).scrollTop() > 150) {
                    $('.header--sticky').addClass('sticky')
                } else {
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },
        SwiperActivation: function () {
            $(document).ready(function () {
                var swiper = new Swiper(".mySwipers", {
                    loop: true,
                    loopedSlides: 50,
                    autoHeight: true,
                    shortSwipes: false,
                    longSwipes: false,
                    spaceBetween: 30,

                    // effect: 'fade',
                    effect: "creative",
                    speed: 1000,

                    autoplay: {
                        delay: 2500,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    creativeEffect: {
                        prev: {
                            shadow: true,
                            translate: ["-125%", 0, -800],
                            rotate: [0, 0, -90],
                        },
                        next: {
                            shadow: true,
                            translate: ["125%", 0, -800],
                            rotate: [0, 0, 90],
                        },
                    },


                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".swiper-testimonials", {
                    loop: true,
                    loopedSlides: 50,
                    autoHeight: true,
                    shortSwipes: false,
                    longSwipes: false,
                    spaceBetween: 30,
                    grabCursor: true,
                    // effect: 'fade',
                    speed: 500,
                    autoplay: {
                        delay: 2000,
                    },
                });
            });
        },
        backToTopInit: function () {
            $(document).on().ready(function () {
                "use strict";

                var progressPath = document.querySelector('.progress-wrap path');
                var pathLength = progressPath.getTotalLength();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
                progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
                progressPath.style.strokeDashoffset = pathLength;
                progressPath.getBoundingClientRect();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
                var updateProgress = function () {
                    var scroll = $(window).scrollTop();
                    var height = $(document).height() - $(window).height();
                    var progress = pathLength - (scroll * pathLength / height);
                    progressPath.style.strokeDashoffset = progress;
                }
                updateProgress();
                $(window).scroll(updateProgress);
                var offset = 50;
                var duration = 550;
                jQuery(window).on('scroll', function () {
                    if (jQuery(this).scrollTop() > offset) {
                        jQuery('.progress-wrap').addClass('active-progress');
                    } else {
                        jQuery('.progress-wrap').removeClass('active-progress');
                    }
                });
                jQuery('.progress-wrap').on('click', function (event) {
                    event.preventDefault();
                    jQuery('html, body').animate({ scrollTop: 0 }, duration);
                    return false;
                })


            });

        },
        salActive: function () {
            sal({
                threshold: 0.1,
                once: true,
            });
        },

        splitText: function () {


         // For Banner area animation

            // without scroll tigger
            $(document).ready(function () {
                gsap.registerPlugin(SplitText);

                var tl = gsap.timeline(),
                  mySplitText = new SplitText(".quote", { type: "words,chars" }),
                  chars = mySplitText.chars; //an array of all the divs that wrap each character
                
                gsap.set(".quote", { perspective: 400 });
                
                console.log(chars);
                
                tl.from(chars, {
                  duration: 1.5,
                  opacity: 0,
                  scale: 0,
                  y: 80,
                  rotationX: 180,
                  transformOrigin: "0% 50% -50",
                  ease: "back",
                  stagger: 0.07
                });
                
            });


            
            // For Banner area animation

            // without scroll tigger
            $(document).ready(function () {
                gsap.registerPlugin(SplitText);

                var tl = gsap.timeline(),
                  mySplitText = new SplitText(".quote-2", { type: "words,chars" }),
                  chars = mySplitText.chars; //an array of all the divs that wrap each character
                
                gsap.set(".quote-2", { perspective: 400 });
                
                console.log(chars);
                
                tl.from(chars, {
                  duration: .8,
                  opacity: 0,
                  scale: 0,
                  y: 80,
                  rotationX: 180,
                  transformOrigin: "0% 50% -50",
                  ease: "back",
                  stagger: 0.01
                });
            });



            // scroll trigger for body
            $(document).ready(function () {
                let p = gsap.utils.toArray(".split-me");

                gsap.set(p, { autoAlpha: 1 });

                p.forEach((p) => {
                let splitHide = new SplitText(p, {
                    type: "words",
                    wordsClass: "hide"
                });

                let split = new SplitText(p, {
                    type: "words,lines",
                    linesClass: "lines",
                    wordsClass: "words"
                });

                gsap.from(split.words, {
                    duration: 1.2,
                    yPercent: 100,
                    ease: "power3.out",
                    stagger: 0.02,
                    scrollTrigger: {
                    trigger: p
                    }
                });
                });

            });


            // scroll trigger for body
            $(document).ready(function () {
                let splitTextLines = gsap.utils.toArray(".text-anim p, .text-anim");

                splitTextLines.forEach(splitTextLine => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    duration: 2,
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                    }
                });

                const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
                gsap.set(splitTextLine, { perspective: 400 });
                itemSplitted.split({ type: "lines" })
                tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
                });

            });

        },

        smoothScroll: function (e) {
            $(document).on('click', '.onepage .main-nav a[href^="#"]', function (event) {
              event.preventDefault();
          
              $('html, body').animate({
                  scrollTop: $($.attr(this, 'href')).offset().top
              }, 1500);
            });
        },

    }






    // mobile menu menu area start
    $(document).on('click', '#menu-btn', function () {
        $("#side-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-icon-menu', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '.onepage .mainmenu li a', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
    });
    // menu area End


    imJs.m();

})(jQuery, window)



























