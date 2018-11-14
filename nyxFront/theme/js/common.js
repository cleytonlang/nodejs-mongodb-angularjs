/**
 * Elektron - An Admin Toolkit
 * @version 0.3.1
 * @license MIT
 * @link https://github.com/onokumus/elektron#readme
 */
'use strict';

$(function() {
    if ($(window).width() < 992) {
        $('#app-side').onoffcanvas('hide');
    } else {
        $('#app-side').onoffcanvas('show');
    }

    $('.side-nav .unifyMenu').unifyMenu({ toggle: true });

    $('#app-side-hoverable-toggler').on('click', function() {
        $('.app-side').toggleClass('is-hoverable');
        $(undefined).children('i.fa').toggleClass('fa-angle-right fa-angle-left');
    });

    $('#app-side-mini-toggler').on('click', function() {
        $('.app-side').toggleClass('is-mini');
        $("#app-side-mini-toggler i").toggleClass('icon-sort icon-menu5');
    });

    $('#onoffcanvas-nav').on('click', function() {
        $('.app-side').toggleClass('left-toggle');
        $('.app-main').toggleClass('left-toggle');
        $("#onoffcanvas-nav i").toggleClass('icon-sort icon-menu5');
    });

    $('.onoffcanvas-toggler').on('click', function() {
        $(".onoffcanvas-toggler i").toggleClass('icon-chevron-thin-left icon-chevron-thin-right');
    });
});


// $(function() {
//     $('#unifyMenu')
//         .unifyMenu()
//         .on('shown.unifyMenu', function(event) {
//             $('body, html').animate({
//                 scrollTop: $(event.target).parent('li').position().top
//             }, 600);
//             console.log(event.target);
//         });
// });

// Bootstrap Tooltip
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

// Bootstrap Popover
$(function() {
    $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
    trigger: 'focus'
})

// Todays Date
$(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $('#today-date').html(momentNow.format('MMMM . DD') + ' ' +
            momentNow.format('. dddd').substring(0, 5).toUpperCase());
    }, 100);
});

// Task list
$('.task-list').on('click', 'li.list', function() {
    $(this).toggleClass('completed');
});

// Loading
$(function() {
    $(".loading-wrapper").fadeOut(600);
});

/* eslint-disable no-undef */
var notes = $('#notes').notify({
    removeIcon: '<i class="icon-times"></i>'
});

function notificar() {
    notes.show("I'm a notification I will quickly alert you as well!", {
        type: 'info',
        title: 'Hello',
        icon: '<i class="icon-info-large-outline"></i>'
    });
}

function loading() {
    $(".loading-wrapper").fadeIn(600).fadeOut(600);
}