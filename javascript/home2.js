//
// var tar=0;

// var allLi=$('runBoUl').getElementsByTagName('li');
// $('runBoUl').appendChild(allLi[0].cloneNode(true));
// var len=allLi.length;
// $('btnLeft').onclick=function () {
//     tar--;
//     if(tar==-1){
//         tar=len-2;
//         $('runBoUl').style.left=(len-1)*-1200+'px';
//     }
//     animate($('runBoUl'),{left:tar*-1200});
// }
// $('btnRight').onclick=function () {
//     tar++;
//     if(tar==len){
//         tar=1;
//         $('runBoUl').style.left=0;
//     }
//     animate($('runBoUl'),{left:tar*-1200});
// };
//   var timer;
// timer=setInterval(function(){
//     tar--;
//     if(tar==-1){
//         tar=len-2;
//         document.getElementById('runBoUl').style.left=(len-1)*-1200+'px';
//     }
//     animate(document.getElementById('runBoUl'),{left:tar*-1200});
// },2000);
// $('topMiddle').onmouseover=function () {
//     clearInterval(timer);
// };
// $('topMiddle').onmouseout=function () {
//     timer=setInterval(function(){
//         tar--;
//         if(tar==-1){
//             tar=len-2;
//             document.getElementById('runBoUl').style.left=(len-1)*-1200+'px';
//         }
//         animate(document.getElementById('runBoUl'),{left:tar*-1200});
//     },2000);
// };
// $('btnLeft').onmouseover=function () {
//     clearInterval(timer);
// };
// $('btnLeft').onmouseout=function () {
//     timer=setInterval(function(){
//         tar--;
//         if(tar==-1){
//             tar=len-2;
//             document.getElementById('runBoUl').style.left=(len-1)*-1200+'px';
//         }
//         animate(document.getElementById('runBoUl'),{left:tar*-1200});
//     },2000);
// };
// $('btnRight').onmouseover=function () {
//     clearInterval(timer);
// };
// $('btnRight').onmouseout=function () {
//     timer=setInterval(function(){
//         tar--;
//         if(tar==-1){
//             tar=len-2;
//             document.getElementById('runBoUl').style.left=(len-1)*-1200+'px';
//         }
//         animate(document.getElementById('runBoUl'),{left:tar*-1200});
//     },2000);
// };
// var allLi=$('runBoUl').getElementsByTagName('li');
// $('runBoUl').appendChild(allLi[0].cloneNode(true));
//  var len=allLi.length;

$(function () {
///////轮播1
    var timer;
    var cur = 0;
    $('.runBo-ul').append($('.runBo-ul li').first().clone(true));
    $('#btnLeft').click(function () {
        cur++;
        if (cur == 4) {
            cur = 1;
            $('.runBo-ul').css({left: -1200}).stop().animate({left: -1200 * cur}, 200)
        } else {
            $('.runBo-ul').stop().animate({left: -1200 * cur}, 200)
        }
    });
    $('#btnRight').click(function () {
        cur--;
        if (cur == -1) {
            cur = $('.runBo-ul').length;
            $('.runBo-ul').css({left: -1200}).stop().animate({left: -1200 * cur}, 200)
        } else {
            $('.runBo-ul').stop().animate({left: -1200 * cur}, 200)
        }
    });
    timer = setInterval(function () {
        cur--;
        if (cur == -1) {
            cur = $('.runBo-ul').length;
            $('.runBo-ul').css({left: -1200}).stop().animate({left: -1200 * cur}, 200)
        } else {
            $('.runBo-ul').stop().animate({left: -1200 * cur}, 200)
        }
    }, 1000);
    $('.body-top-middle').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            cur--;
            if (cur == -1) {
                cur = $('.runBo-ul').length;
                $('.runBo-ul').css({left: -1200}).stop().animate({left: -1200 * cur}, 200)
            } else {
                $('.runBo-ul').stop().animate({left: -1200 * cur}, 200)
            }
        }, 1000);
    });
    $('#btnLeft').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            cur--;
            if (cur == -1) {
                cur = $('.runBo-ul').length;
                $('.runBo-ul').css({left: -1200}).stop().animate({left: -1200 * cur}, 200)
            } else {
                $('.runBo-ul').stop().animate({left: -1200 * cur}, 200)
            }
        }, 1000);
    });
    $('#btnRight').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            cur--;
            if (cur == -1) {
                cur = $('.runBo-ul').length;
                $('.runBo-ul').css({left: -1200}).stop().animate({left: -1200 * cur}, 200)
            } else {
                $('.runBo-ul').stop().animate({left: -1200 * cur}, 200)
            }
        }, 1000);
    });

////////


    $('.middle-tar').click(function () {
        $('.body-join').css('display', 'none')
    });


//////


    $('.rel').hover(function () {
        $(this).stop().animate({top: 0}, 500)
    }, function () {
        $(this).stop().animate({top: 170}, 1000)
    });



    $('.nav-left').click(function () {
        cur++;
        if (cur == 4) {
            cur = 1;
            $('.store').stop().animate({left: -1200 * cur}, 300)
        }
        else {
            $('.store').stop().animate({left: -1200 * cur}, 300)
        }

    });



////// 轮播3

    var tim;
    var cu = 0;
    $('.post-index').append($('.post-index li').first().clone(true));
    $('.post-left').click(function () {
        cu++;
        if (cu == 4) {
            cu = 1;
            $('.post-index').css({left: -1092}).stop().animate({left: -1092 * cu}, 200)
        } else {
            $('.post-index').stop().animate({left: -1092 * cu}, 200)
        }
    });
    $('.post-right').click(function () {
        cu--;
        if (cu == -1) {
            cu = $('.post-index').length;
            $('.post-index').css({left: -1092}).stop().animate({left: -1092 * cu}, 200)
        } else {
            $('.post-index').stop().animate({left: -1092 * cu}, 200)
        }
    });
    tim = setInterval(function () {
        cu--;
        if (cu == -1) {
            cu = $('.post-index').length;
            $('.post-index').css({left: -1092}).stop().animate({left: -1092 * cu}, 200)
        } else {
            $('.post-index').stop().animate({left: -1092 * cu}, 200)
        }
    }, 1000);
    $('.post-text').hover(function () {
        clearInterval(tim);
    }, function () {
        tim = setInterval(function () {
            cu--;
            if (cu == -1) {
                cu = $('.post-index').length;
                $('.post-index').css({left: -1092}).stop().animate({left: -1092 * cu}, 200)
            } else {
                $('.post-index').stop().animate({left: -1092 * cu}, 200)
            }
        }, 1000);
    });
    $('.post-left').hover(function () {
        clearInterval(tim);
    }, function () {
        tim = setInterval(function () {
            cu--;
            if (cu == -1) {
                cu = $('.post-index').length;
                $('.post-index').css({left: -1092}).stop().animate({left: -1092 * cu}, 200)
            } else {
                $('.post-index').stop().animate({left: -1092 * cu}, 200)
            }
        }, 1000);
    });

    $('.post-right').hover(function () {
        clearInterval(tim);
    }, function () {
        tim = setInterval(function () {
            cu--;
            if (cu == -1) {
                cu = $('.post-index').length;
                $('.post-index').css({left: -1092}).stop().animate({left: -1092 * cu}, 200)
            } else {
                $('.post-index').stop().animate({left: -1092 * cu}, 200)
            }
        }, 1000);
    });



    ////轮播2

    var tom;
    var ss = 0;
    $('.photo').append($('.photo li:lt(4)').clone(true));
    var len =$('.photo >li').length;
    $('.nav-left').click(function () {
        ss--;
        if (ss == -1) {
            ss = len-5;
            $('.photo').css({left: -305*(len-4)})
        } else {
            $('.photo').stop().animate({left: -305 * ss}, 200)
        }
    });
    $('.nav-right').click(function () {
        ss++;
        if (ss == len-3) {
            ss = 1;
            $('.photo').css({left: 0}).stop().animate({left: -305 * ss}, 200)
        } else {
            $('.photo').stop().animate({left: -305 * ss}, 200)
        }
    });
    tom = setInterval(function () {
        ss--;
        if (ss == -1) {
            ss = len-5;
            $('.photo').css({left: -305*(ss+1)}).stop().animate({left: -305* ss}, 200)
        } else {
            $('.photo').stop().animate({left: -305 * ss}, 200)
        }
    }, 1000);
    $('.store').hover(function () {
        clearInterval(tom);
    }, function () {
        tom = setInterval(function () {
            ss--;
            if (ss == -1) {
                ss = len-5;
                $('.photo').css({left: -305*(ss+1)}).stop().animate({left: -305* ss}, 200)
            } else {
                $('.photo').stop().animate({left: -305 * ss}, 200)
            }
        }, 1000);
    });

    $('.nav-left').hover(function () {
        clearInterval(tom);
    }, function () {
        tom = setInterval(function () {
            ss--;
            if (ss == -1) {
                ss = len-5;
                $('.photo').css({left: -305*(ss+1)}).stop().animate({left: -305* ss}, 200)
            } else {
                $('.photo').stop().animate({left: -305 * ss}, 200)
            }
        }, 1000);
    });

    $('.nav-right').hover(function () {
        clearInterval(tom);
    }, function () {
        tom = setInterval(function () {
            ss--;
            if (ss == -1) {
                ss = len-5;
                $('.photo').css({left: -305*(ss+1)}).stop().animate({left: -305* ss}, 200)
            } else {
                $('.photo').stop().animate({left: -305 * ss}, 200)
            }
        }, 1000);
    });

});



