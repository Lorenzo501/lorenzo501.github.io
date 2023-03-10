/*
 * Copyright (C) 2012+ Lorenzo Pappalettera.
 * All rights reserved.
 */

Cufon.replace('.top-block a.logo', {
    fontFamily: 'Yanone Kaffeesatz',
    color: "-linear-gradient('#79c113', '#497821')",
    textShadow: '3px 3px 0px #000000'
});
Cufon.replace('.bottom-block h1,.bottom-block h5', {
    fontFamily: 'Yanone Kaffeesatz',
    color: "-linear-gradient('#ffffff', '#a2a2a2')",
    textShadow: '3px 3px 0px #000000'
});
function roll(img_name, img_src)
   {
   document[img_name].src = img_src;
   }
$(document).ready(function () {
    $(".energy").delay(500).animate({
        width: "100%"
    }, {
        duration: 1500,
        specialEasing: {
            width: 'easeOutExpo'
        },
        complete: function () {
            $('a.open img').animate({
                opacity: 1
            }, 100).flash()
        }
    });
    $(".bg-e-button").delay(700).animate({
        opacity: 1
    }, 150);
    $(".open").click(function () {
        $(".center-block").fadeIn(1000);
        $(".bottom-block h5").delay(700).animate({
        opacity: 1
        }, 1000);
        $(".container").animate({
            marginTop: "-220px"
        }, {
            duration: 2000,
            specialEasing: {
                marginTop: 'easeOutExpo'
            }
        });
        $("a.open,.energy,.bg-e-button,.bg-button").fadeOut(300);
        $('a.open img').remove();
        $('.data li.search').flash().typewriter();
        $(".scanner-line").delay(1000).animate({
            top: "110px"
        }, {
            duration: 2500,
            specialEasing: {
                width: 'easeOutExpo'
            },
            complete: function () {
                $(this).remove();
                $('.data li.search').flash().stop(true).fadeOut(500);
                for (var i = 1; i <= $('.search-d').length; i++) {
                    $('.search-d').eq(i - 1).delay(500).delay((i - 1) * 500).fadeIn(500)
                };
                setTimeout(function () {
                    $(".container").animate({
                        marginTop: "-355px"
                    }, {
                        duration: 2000,
                        specialEasing: {
                            marginTop: 'easeOutExpo'
                        }
                    });
                    $(".scanner").hide();
                    $(".main").show();
                    $(".load").fadeTo(50, 0.07).fadeIn(2500);
                    $(".shut-left,.shut-right").delay(1500).animate({
                        width: "0px"
                    }, {
                        duration: 3400,
                        specialEasing: {
                            width: 'easeOutExpo'
                        },
                        complete: function () {
                            $(this).remove();
                            $(".load").fadeOut(920)
                        }
                    });
                    setTimeout(function () {
                        $(".page").fadeIn(500, function () {
                            $(".box-content,.box-content-c").delay(300).slideDown(1000, function () {
                                $('.box-content,.box-content-c').jScrollPane({
                                    verticalDragMinHeight: 103,
                                    verticalDragMaxHeight: 103
                                })
                            })
                        })
                    }, 1500)
                }, 2500)
            }
        });
        return false
    });
    var pagecont = $('div.cont div[id]');
    pagecont.hide().filter(':first').slideDown(1000);
    $('ul#menu li a').click(function () {
        pagecont.hide();
        pagecont.filter(this.hash).slideDown(1000);
        $('ul#menu li a').removeClass('selected');
        $(this).addClass('selected');
        $('.box-content,.box-content-c').jScrollPane({
            verticalDragMinHeight: 103,
            verticalDragMaxHeight: 103
        });
        return false
    }).filter(':first').click();
    $('a.skill-start').click(function () {
        setTimeout(function () {
			$(".pr1").progression({
                Current: 60,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
			$(".pr2").progression({
                Current: 90,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
            $(".pr3").progression({
                Current: 30,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
            $(".pr4").progression({
                Current: 60,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
			$(".pr5").progression({
                Current: 60,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
			$(".pr6").progression({
                Current: 65,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
			$(".pr7").progression({
                Current: 20,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
            $(".pr8").progression({
                Current: 40,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
			$(".pr9").progression({
                Current: 20,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
            $(".pr10").progression({
                Current: 55,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
            $(".pr11").progression({
                Current: 10,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
            $(".pr12").progression({
                Current: 15,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
            $(".pr13").progression({
                Current: 15,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
			$(".pr14").progression({
                Current: 35,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
			$(".pr15").progression({
                Current: 20,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
			$(".pr16").progression({
                Current: 30,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
			$(".pr17").progression({
                Current: 10,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
			$(".pr18").progression({
                Current: 10,
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });
        }, 700)
    });
    $("a[rel^='prettyPhoto']").prettyPhoto();
    $('.gallery').hover(function () {
        $(this).find('.des').css({
            color: '#79c113'
        });
        
        $(this).find('.block-zoom').slideToggle(900);
        
        $(this).find('.zoom').animate({
            left: "+=70px"
        }, {
            duration: 700,
            specialEasing: {
                width: 'easeOutExpo'
            }
        });
        
        $(this).find('.zoom2').animate({
            left: "+=97px"
        }, {
            duration: 700,
            specialEasing: {
                width: 'easeOutExpo'
            }
        });
        
        $(this).find('.link').animate({
            right: "+=70px"
        }, {
            duration: 700,
            specialEasing: {
                width: 'easeOutExpo'
            }
        })
    }, function () {
        $(this).find('.des').css({
            color: '#518e2e'
        });

        $(this).find('.block-zoom').slideToggle(500);

        $(this).find('.zoom').animate({
            left: "0px"
        }, {
            duration: 300,
            specialEasing: {
                width: 'easeOutExpo'
            }
        });

        $(this).find('.zoom2').animate({
            left: "0px"
        }, {
            duration: 300,
            specialEasing: {
                width: 'easeOutExpo'
            }
        });

        $(this).find('.link').animate({
            right: "0px"
        }, {
            duration: 300,
            specialEasing: {
                width: 'easeOutExpo'
            }
        });
        return false
    });
});
(function (e) {
    e.fn.flash = function (f) {
        return this.each(function () {
            var g = e.extend({}, e.fn.flash.defaults, f),
                j = g.count,
                i = e(this);

            function h() {
                --j;
                i.fadeOut(g.speed, function () {
                    i.fadeIn(g.speed, function () {
                        j ? h() : g.callback()
                    })
                })
            }
            h()
        })
    };
    e.fn.flash.defaults = {
        count: 7000,
        speed: 700,
        callback: function () {
            return false
        }
    }
})(jQuery);
jQuery.fn.progression.defaults.Current = 0;
jQuery.fn.progression.defaults.Background = '';
jQuery.fn.progression.defaults.aBackground = '';
jQuery.fn.progression.defaults.TextColor = '';
jQuery.fn.progression.defaults.aTextColor = '';