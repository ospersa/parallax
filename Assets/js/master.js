$(window).resize(function(){
    let width = $(window).width();
    width *= 11;
    $('main').css('width', width);

    /** Posicionamiento Slides */
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('.slide').css({'width': windowWidth + 'px'});

    $('.fondos img').css('width', windowWidth);
    $('.fondos-animados').css('width', width);
    $('.fondos-animados div').css({'width': windowWidth, 'height': windowHeight });
    $('#fondo1').css('width', (windowWidth * 2));
    $('.fondos-animados #fondo1 img').css('width', '100%');
    $('#arbol1 img').css({'position': 'absolute', 'height': '100%', 'left': 'calc( '+windowWidth+'px - 2.5%)' });
    $('#arbol2 img').css({'position': 'absolute', 'left': 'calc( '+(windowWidth * 2)+'px )' });
});

$(document).ready(function () {
    $('#vertical-menu, #logo, #prev, #next').css({'opacity': '0'});

    let width = $(window).width();
    width *= 11
    $('main').css('width', width);

    /** Posicionamiento Slides */
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('.slide').css({'width': windowWidth + 'px'});
    $('.btn-inside').css({'width': ((windowWidth * 8.5) / 100)+'px', 'height': ((windowWidth * 8.5) / 100)+'px'})
    $('.fondos img').css('width', windowWidth);
    $('.fondos-animados').css('width', width);
    $('.fondos-animados div').css({'width': windowWidth, 'height': windowHeight });
    $('.fondos-animados #fondo1').css('width', (windowWidth * 2));
    $('.fondos-animados #fondo1 img').css('width', '100%');
    $('.fondos-animados #arbol1 img').css({'position': 'absolute', 'height': '100%', 'left': 'calc( '+windowWidth+'px - 2.5%)' });
    $('.fondos-animados #arbol2 img').css({'position': 'absolute', 'left': 'calc( '+(windowWidth * 2)+'px + 0.5%)', 'width': '2.5%'});
    $('.fondos-animados #montana1').css({'z-index': '1'});
    $('.fondos-animados #montana1 img').css({'position': 'absolute', 'width': '6%', 'left': 'calc( '+(windowWidth * 2)+'px + 2%)' });
    $('.fondos-animados #casa img').css({'position': 'absolute', 'height': '70%', 'left': 'calc( '+(windowWidth * 2)+'px + 5.5%)' });
    $('.fondos-animados #fondo2').css({'z-index': '-1'});
    $('.fondos-animados #fondo2 img').css({'position': 'absolute', 'height': '95%', 'width': (windowWidth * 2)+'px', 'left': (windowWidth * 3) + 'px'});
    $('.fondos-animados #fondo3 img').css({'position': 'absolute', 'height': '68%', 'width': (windowWidth * 4)+'px', 'left': (windowWidth * 5) + 'px'});
    $('.fondos-animados #fondo4 img').css({'position': 'absolute', 'height': '68%', 'width': windowWidth+'px', 'left': (windowWidth * 9) + 'px'});
    $('.fondos-animados #arbol3 img').css({'position': 'absolute', 'height': '100%', 'left': 'calc( '+ windowWidth * 10 + 'px - 4%)' });
    
    /** Inicialización StellarJS */
    $(window).stellar({verticalScrolling: false, horizontalOffset: 0, verticalOffset: 0});
    /** Control Slides */
    $(window).scroll(function(){
        var posicion = $(window).scrollLeft();
        if (posicion < windowWidth) {
            // Slide 1
            $('#prev, #logo').css({'opacity': '0'});
            $('#next').css({'opacity': '1'});
            $('#next').attr('data-slide', '2');
        } else if (posicion >= (windowWidth) && posicion < (windowWidth * 2)) {
            // Slide 2
            $('#prev, #next, #logo').css({'opacity': '1'})
            $('#prev').attr('data-slide', '1');
            $('#next').attr('data-slide', '3');
            if($('#vertical-menu').hasClass('fadeInDown')) {
                $('#vertical-menu').removeClass('fadeInDown');
                $('#vertical-menu').addClass('fadeOutUp');
            }
            
            $('#slide2 .content').removeClass('hide').addClass('slideInDown');
            
        } else if (posicion >= (windowWidth * 2) && posicion < (windowWidth * 3)) {
            // Slide 3
            $('#vertical-menu').addClass('fadeInDown');
            $('#prev').attr('data-slide', '2');
            $('#next').attr('data-slide', '4');
            if($('#vertical-menu').hasClass('fadeOutUp')) {
                $('#vertical-menu').removeClass('fadeOutUp');
                $('#vertical-menu').addClass('fadeInDown');
            }
            $('#slide3 .content').removeClass('hide').addClass('slideInDown');
        } else if (posicion >= (windowWidth * 3) && posicion < (windowWidth * 4)) {
            $('#prev').attr('data-slide', '3');
            $('#next').attr('data-slide', '5');
        } else if (posicion >= (windowWidth * 4) && posicion < (windowWidth * 5)) {
            $('#prev').attr('data-slide', '4');
            $('#next').attr('data-slide', '6');
        } else if (posicion >= (windowWidth * 5) && posicion < (windowWidth * 6)) {
            $('#prev').attr('data-slide', '5');
            $('#next').attr('data-slide', '7');
        } else if (posicion >= (windowWidth * 6) && posicion < (windowWidth * 7)) {
            $('#prev').attr('data-slide', '6');
            $('#next').attr('data-slide', '8');
        } else if (posicion >= (windowWidth * 7) && posicion < (windowWidth * 8)) {
            $('#prev').attr('data-slide', '7');
            $('#next').attr('data-slide', '9');
        } else if (posicion >= (windowWidth * 8) && posicion < (windowWidth * 9)) {
            $('#prev').attr('data-slide', '8');
            $('#next').attr('data-slide', '10');
        } else if (posicion >= (windowWidth * 9) && posicion < (windowWidth * 10)) {
            $('#next').css({'opacity': '1'});
            $('#prev').attr('data-slide', '9');
            $('#next').attr('data-slide', '11');
            if($('#vertical-menu').hasClass('fadeOutUp')) {
                $('#vertical-menu').removeClass('fadeOutUp');
                $('#vertical-menu').addClass('fadeInDown');
            }
        } else if (posicion >= (windowWidth * 10) && posicion < (windowWidth * 11)) {
            $('#prev').attr('data-slide', '10');
            $('#next, #logo').css({'opacity': '0'});
            if($('#vertical-menu').hasClass('fadeInDown')) {
                $('#vertical-menu').removeClass('fadeInDown');
                $('#vertical-menu').addClass('fadeOutUp');
            }
        }
    });

    /** Acciones en el menú vertical */
    $('.button').click(function(){
        $('.button').removeClass('active');
        var btn = $(this).attr('data-btn');
        $('.button[data-btn = '+btn+']').addClass('active');
    })

    // Variables
    var slide = $('.slide');
    var button = $('.button');
    var htmlbody = $('html,body');

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollLeft: $('.slide[data-slide="' + dataslide + '"]').offset().left
        }, 4000, 'jswing');
    }

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    })

    /* Menú tabs */
    $('#btnS1').click(function(){
        $(this).addClass('actived');
        $('#btnS2, #btnS3, #btnS4, #btnS5').removeClass('actived');
        $('#slider1').css({
            'display': 'flex',
            'animation': 'fadeIn 1s'
        })
        $('#slider1').addClass('animate bounce');
        $('#slider2, #slider3, #slider4, #slider5').css({
            'display': 'none'
        })
    });
    $('#btnS2').click(function(){
        $(this).addClass('actived');
        $('#btnS1, #btnS3, #btnS4, #btnS5').removeClass('actived');
        $('#slider2').css({
            'display': 'flex',
            'animation': 'fadeIn 1s'
        })
        $('#slider2').addClass('animate bounce');
        $('#slider1, #slider3, #slider4, #slider5').css({
            'display': 'none'
        })
    });
    $('#btnS3').click(function(){
        $(this).addClass('actived');
        $('#btnS1, #btnS2, #btnS4, #btnS5').removeClass('actived');
        $('#slider3').css({
            'display': 'flex',
            'animation': 'fadeIn 1s'
        })
        $('#slider3').addClass('animate bounce');
        $('#slider1, #slider2, #slider4, #slider5').css({
            'display': 'none'
        })
    });
    $('#btnS4').click(function(){
        $(this).addClass('actived');
        $('#btnS1, #btnS2, #btnS3, #btnS5').removeClass('actived');
        $('#slider4').css({
            'display': 'flex',
            'animation': 'fadeIn 1s'
        })
        $('#slider4').addClass('animate bounce');
        $('#slider1, #slider2, #slider3, #slider5').css({
            'display': 'none'
        })
    });
    $('#btnS5').click(function(){
        $(this).addClass('actived');
        $('#btnS1, #btnS2, #btnS3, #btnS4').removeClass('actived');
        $('#slider5').css({
            'display': 'flex',
            'animation': 'fadeIn 1s'
        })
        $('#slider5').addClass('animate');
        $('#slider1, #slider2, #slider3, #slider4').css({
            'display': 'none'
        })
    });

    /** Íconos Slide 9 */
    $('#icon1').click(function(){
        $('#txt_01').css({
            'display': 'flex',
            'animation': 'fadeIn 1s'
        })
    });
    $('#icon2').click(function(){
        $('#txt_02').css({
            'display': 'flex',
            'animation': 'fadeIn 1s'
        })
    });
    $('#icon3').click(function(){
        $('#txt_03').css({
            'display': 'flex',
            'animation': 'fadeIn 1s'
        })
    });
    $('#icon4').click(function(){
        $('#txt_04').css({
            'display': 'flex',
            'animation': 'fadeIn 1s'
        })
    });
})