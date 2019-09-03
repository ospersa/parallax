$(window).load(function() {
    $(".loader").fadeOut("slow");
});

$(document).ready(function () {
    $('.modal').modal();

    $('#vertical-menu, #logo, #prev, #next').css({'display': 'none'});

    // Variables
    var button = $('.button');
    var htmlbody = $('html,body');
    
    htmlbody.animate({
        scrollLeft: $('.slide[data-slide="1"]').offset().left
    }, 3000, 'jswing');

    let width = $(window).width();
    let height = $(window).height();
    width *= 11
    $('main').css('max-height', height+'px');
    $('.fondos').css({'width': width+'px', 'max-height': height+'px'});
    
    /** Posicionamiento Elementos e Imágenes de Fondo */
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('.slide').css({'width': windowWidth + 'px', 'height': height + 'px'});
    $('.btn-inside').css({'width': ((windowWidth * 8.5) / 100)+'px', 'height': ((windowWidth * 8.5) / 100)+'px'});
    $('.rounded-doted').css({'width': ((windowWidth * 15) / 100)+'px', 'height': ((windowWidth * 15) / 100)+'px'});
    $('.fondos img').css({'width': windowWidth, 'height': windowHeight});
    $('.fondos-animados').css({'width': width, 'height': windowHeight});
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
    $('.fondos-animados #arbol3 img').css({'position': 'absolute', 'height': '100%', 'left': ((windowWidth * 9) + (windowWidth / 2)) + 'px'});
    
    /** Inicialización StellarJS */
    $(window).stellar({verticalScrolling: false, horizontalOffset: 0, verticalOffset: 0});
    /** Control Slides */
    $(window).scroll(function(){
        var posicion = $(window).scrollLeft();
        if (posicion < windowWidth) {
            // Slide 1
            $('#vertical-menu, #prev, #logo').css({'display': 'none'});
            $('#next').css({'display': 'flex'});
            $('#next').attr('data-slide', '2');
        } else if (posicion >= (windowWidth) && posicion < (windowWidth * 2)) {
            // Slide 2
            $('#prev, #next, #logo').css({'display': 'flex'})
            $('#prev').attr('data-slide', '1');
            $('#next').attr('data-slide', '3');
            $('#vertical-menu').removeClass('fadeInDown').addClass('fadeOutUp');
            $('#slide2 .content').removeClass('hide').addClass('slideInDown');
            
        } else if (posicion >= (windowWidth * 2) && posicion < (windowWidth * 3)) {
            // Slide 3
            $('#vertical-menu, #prev, #next, #logo').css({'display': 'flex'});
            $('#vertical-menu').addClass('fadeInDown');
            $('#prev').attr('data-slide', '2');
            $('#next').attr('data-slide', '4');
            if($('#vertical-menu').hasClass('fadeOutUp')) {
                $('#vertical-menu').removeClass('fadeOutUp');
                $('#vertical-menu').addClass('fadeInDown');
            }
            $('#slide3 .content').removeClass('hide').addClass('bounceInDown');
            $('#vertical-menu .route .point, #vertical-menu .route .textos').removeClass('active');
            $('#vertical-menu .route .point#point1, #vertical-menu .route .textos#text1').addClass('active');
        } else if (posicion >= (windowWidth * 3) && posicion < (windowWidth * 4)) {
            // Slide 4
            $('#vertical-menu, #prev, #next, #logo').css({'display': 'flex'});
            $('#vertical-menu').addClass('fadeInDown');
            $('#prev').attr('data-slide', '3');
            $('#next').attr('data-slide', '5');
            $('#slide4 .content').removeClass('hide').addClass('bounceInDown');
            $('#vertical-menu .route .point, #vertical-menu .route .textos').removeClass('active');
            $('#vertical-menu .route .point#point2, #vertical-menu .route .textos#text2').addClass('active');
        } else if (posicion >= (windowWidth * 4) && posicion < (windowWidth * 5)) {
            // Slide 5
            $('#vertical-menu, #prev, #next, #logo').css({'display': 'flex'});
            $('#vertical-menu').addClass('fadeInDown');
            $('#prev').attr('data-slide', '4');
            $('#next').attr('data-slide', '6');
            $('#slide5 .content').removeClass('hide').addClass('bounceInDown');
            $('#vertical-menu .route .point, #vertical-menu .route .textos').removeClass('active');
            $('#vertical-menu .route .point#point3, #vertical-menu .route .textos#text3').addClass('active');
        } else if (posicion >= (windowWidth * 5) && posicion < (windowWidth * 6)) {
            // Slide 6
            $('#vertical-menu, #prev, #next, #logo').css({'display': 'flex'});
            $('#vertical-menu').addClass('fadeInDown');
            $('#prev').attr('data-slide', '5');
            $('#next').attr('data-slide', '7');
            $('#slide6 .content').removeClass('hide').addClass('bounceInDown');
            $('#slide6 .content .content-left .cards:nth-child(1)').removeClass('hide').addClass('flipInX delay-1s');
            $('#slide6 .content .content-left .cards:nth-child(2)').removeClass('hide').addClass('flipInX delay-2s');
            $('#slide6 .content .content-left .cards:nth-child(3)').removeClass('hide').addClass('flipInX delay-3s');
            $('#vertical-menu .route .point, #vertical-menu .route .textos').removeClass('active');
            $('#vertical-menu .route .point#point4, #vertical-menu .route .textos#text4').addClass('active');
        } else if (posicion >= (windowWidth * 6) && posicion < (windowWidth * 7)) {
            // Slide 7
            $('#vertical-menu, #prev, #next, #logo').css({'display': 'flex'});
            $('#vertical-menu').addClass('fadeInDown');
            $('#prev').attr('data-slide', '6');
            $('#next').attr('data-slide', '8');
            $('#slide7 .content').removeClass('hide').addClass('bounceInDown');
            $('#slide7 .content .content-left .cards:nth-child(1)').removeClass('hide').addClass('fadeInDown delay-1s');
            $('#slide7 .content .content-left .cards:nth-child(2)').removeClass('hide').addClass('fadeInDown delay-2s');
            $('#slide7 .content .content-left .cards:nth-child(3)').removeClass('hide').addClass('fadeInDown delay-3s');
            $('#slide7 .content .content-left .cards:nth-child(4)').removeClass('hide').addClass('fadeInDown delay-4s');
            $('.foot').removeClass('hide').addClass('fadeInDown delay-5s');
            $('#vertical-menu .route .point, #vertical-menu .route .textos').removeClass('active');
            $('#vertical-menu .route .point#point5, #vertical-menu .route .textos#text5').addClass('active');
        } else if (posicion >= (windowWidth * 7) && posicion < (windowWidth * 8)) {
            // Slide 8
            $('#vertical-menu, #prev, #next, #logo').css({'display': 'flex'});
            $('#vertical-menu').addClass('fadeInDown');
            $('#prev').attr('data-slide', '7');
            $('#next').attr('data-slide', '9');
            $('#slide8 .content').removeClass('hide').addClass('bounceInDown');
            $('#vertical-menu .route .point, #vertical-menu .route .textos').removeClass('active');
            $('#vertical-menu .route .point#point6, #vertical-menu .route .textos#text6').addClass('active');
        } else if (posicion >= (windowWidth * 8) && posicion < (windowWidth * 9)) {
            // Slide 9
            $('#vertical-menu, #prev, #next, #logo').css({'display': 'flex'});
            $('#vertical-menu').addClass('fadeInDown');
            $('#prev').attr('data-slide', '8');
            $('#next').attr('data-slide', '10');
            $('#slide9 .content').removeClass('hide').addClass('bounceInDown');
            $('#vertical-menu .route .point, #vertical-menu .route .textos').removeClass('active');
            $('#vertical-menu .route .point#point7, #vertical-menu .route .textos#text7').addClass('active');
        } else if (posicion >= (windowWidth * 9) && posicion < (windowWidth * 10)) {
            // Slide 10
            $('#vertical-menu, #prev, #next, #logo').css({'display': 'flex'});
            $('#vertical-menu').addClass('fadeInDown');
            $('#prev').attr('data-slide', '9');
            $('#next').attr('data-slide', '11');
            $('#slide10 .content').removeClass('hide').addClass('bounceInDown');
            $('#vertical-menu').removeClass('fadeOutUp').addClass('fadeInDown delay-3s');
            $('#vertical-menu .route .point, #vertical-menu .route .textos').removeClass('active');
            $('#vertical-menu .route .point#point8, #vertical-menu .route .textos#text8').addClass('active');
        } else if (posicion >= (windowWidth * 10) && posicion <= (windowWidth * 11)) {
            // Slide 11
            $('#prev').css('display', 'flex');
            $('#prev').attr('data-slide', '10');
            $('#vertical-menu').removeClass('fadeInDown delay-3s').addClass('fadeOutUp');
            setTimeout(function(){
                $('#vertical-menu, #next, #logo').css({'display': 'none'});
            }, 2000)
            
        }
    });

    /** Acciones en el menú vertical */
    $('.button').click(function(){
        $('.button').removeClass('active');
        var btn = $(this).attr('data-btn');
        $('.button[data-btn = '+btn+']').addClass('active');
    })

    

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

    /** Galería Slide 10 */
    $('#arrowPrev').css('display', 'none');

    $('#arrowNext').click(function(){
        var slideActual = parseInt($(this).attr('data-slider'));
        nextSlide = slideActual + 1;
        if (nextSlide >= 2) {
            var prevSlide = slideActual;
            $('#arrowPrev').css('display', 'flex');
            $('#arrowPrev').attr('data-slider', prevSlide);
            if (nextSlide < 10) {
                $('#arrowPrev').removeClass('hide');
                $(this).attr('data-slider', nextSlide);
                $('.content-slider[data-slider='+(slideActual)+']').addClass('hide');
                $('.content-slider[data-slider='+nextSlide+']').removeClass('hide').addClass('fadeIn 2s');
                $('.textos .animated[data-slider='+(slideActual)+']').addClass('hide');
                $('.textos .animated[data-slider='+(nextSlide)+']').removeClass('hide').addClass('fadeIn 2s');
            } else {
                $('.content-slider[data-slider='+(slideActual)+']').addClass('hide');
                $('.content-slider[data-slider='+nextSlide+']').removeClass('hide').addClass('fadeIn 2s');
                $('.textos .animated[data-slider='+(slideActual)+']').addClass('hide');
                $('.textos .animated[data-slider='+(nextSlide)+']').removeClass('hide').addClass('fadeIn 2s');
                $(this).addClass('hide');
            }
        }
    });

    $('#arrowPrev').click(function(){
        var prevSlide = parseInt($(this).attr('data-slider'));
        if (prevSlide > 1) {
            $('#arrowNext').removeClass('hide');
            $(this).attr('data-slider', prevSlide - 1);
            $('#arrowNext').attr('data-slider', prevSlide);
            $('.content-slider[data-slider='+prevSlide+']').removeClass('hide').addClass('fadeIn 2s');
            $('.content-slider[data-slider='+(prevSlide + 1)+']').addClass('hide');
            $('.textos .animated[data-slider='+(prevSlide + 1)+']').addClass('hide');
            $('.textos .animated[data-slider='+(prevSlide)+']').removeClass('hide').addClass('fadeIn 2s');
        } else {
            $('#arrowNext').attr('data-slider', prevSlide);
            $('.content-slider[data-slider='+prevSlide+']').removeClass('hide').addClass('fadeIn 2s');
            $('.content-slider[data-slider='+(prevSlide + 1)+']').addClass('hide');
            $('.textos .animated[data-slider='+(prevSlide + 1)+']').addClass('hide');
            $('.textos .animated[data-slider='+(prevSlide)+']').removeClass('hide').addClass('fadeIn 2s');
            $(this).addClass('hide');
        }
    });

})