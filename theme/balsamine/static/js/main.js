// $(function() {
//     // The total height
//     var totalHeight = $(".schedule__list").outerHeight() - $(".schedule").last().outerHeight();

//     var firstDate = Date.parse($(".schedule__item").first().find("time").attr("datetime"));
//     var lastDate = Date.parse($(".schedule__item").last().find("time").attr("datetime"));

//     console.log("firstDate", firstDate);
//     console.log("lastDate", lastDate);

//     var firstPos = (lastDate - firstDate) - (lastDate - firstDate);
//     var lastPos = (lastDate - firstDate) - (lastDate - lastDate);

//     console.log(firstPos);
//     console.log(lastPos);

//     $(".schedule__item").each(function() {
//         var size = $(this).outerHeight();
//         // console.log(size);
//         var currentDate = Date.parse($(this).find("time").attr("datetime"));
//         // console.log(currentDate);

//         var pc = (1 - (lastDate - currentDate) / (lastDate - firstDate)) * 100;
//         console.log(pc);

//         var posY = (totalHeight / 100) * pc;
//         // console.log(posY);
//         var point = $("<div>").css({
//             position: "fixed",
//             width: "10px",
//             height: "20px",
//             borderRadius: "5px",
//             top: pc + "%",
//             right: "10px",
//             backgroundColor: "white"
//         });

//         point.appendTo($(".schedule__timeline"));
//     });
// });


$(function() {
    var monthNames = ["jan", "fév", "mars", "avril", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"];

    function monthsWithinDateRange(start, end) {
        var start = new Date(start.getTime());
        var end = new Date(end.getTime());
        var months = [];

        months.push(new Date(start.getTime()));

        while (start <= end) {
            var nextMonth = (start.getMonth() + 1) % 12;

            if (nextMonth == 0) {
                start.setYear(start.getFullYear() + 1);
            }

            start.setMonth(nextMonth);

            months.push(new Date(start.getTime()));
        }

        return months;
    }

    var firstDate = Date.parse($(".schedule__item").first().find("time").attr("datetime"));
    var lastDate = Date.parse($(".schedule__item").last().find("time").attr("datetime"));

    var firstDate = new Date(firstDate);
    var lastDate = new Date(lastDate);

    firstDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), 1);
    lastDate = new Date(lastDate.getFullYear(), lastDate.getMonth() + 1, 0);

    var months = monthsWithinDateRange(firstDate, lastDate);

    var totalHeight = $('schedule_timeline').outerHeight();

    // Creates the month markers on the timeline
    for (var i=0, len=months.length - 1; i < len; i++) {
        var currentDate = months[i];
        var pc = (1 - (lastDate - currentDate) / (lastDate - firstDate)) * 100;

        var point = $("<div>").text(monthNames[currentDate.getMonth()]).addClass("timeline__month").css({
            top: pc + "%",
        });

        point.appendTo($(".schedule__timeline"));
    }

    var gradient = [];

    // Computes the size and position of the timeline entries
    $(".schedule__item").each(function() {
        var currentStartDate = Date.parse($(this).find(".start-date").attr("datetime"));
        var currentEndDate = Date.parse($(this).find(".end-date").attr("datetime"));
        var anchor = $(this).attr("id");

        var pc = (1 - (lastDate - currentStartDate) / (lastDate - firstDate)) * 100;
        var pc2 = (1 - (lastDate - currentEndDate) / (lastDate - firstDate)) * 100;

        var point = $("<a>").attr("href", "#" + anchor).attr("id", "point-" + anchor).addClass("timeline__point").css({
            'top': pc + "%",
            'bottom': (100 - pc2) + "%",
            'z-index': 10000
        });

        point.appendTo($(".schedule__timeline"));


        var color = $(this).data("color");
        gradient.push(color + " " + pc + "%");

        //var value = $(this).css("background");
        //value = value.replace("to left", (Math.round(Math.random()*360) + 1) + "deg");
        //$(this).css("background", value);
    });

    $(".timeline").css("background", "linear-gradient(to bottom, " + gradient.join(", ") + ")" )
    $(".timeline__point").click(function() {
        window.location = $(this).attr("href")
        $(".timeline__point").css("background-image", 'none');
        $("#point" + window.location.hash.replace("#", "-")).css("background-image", 'url("/images/damier.png")');
    });
    $("#point" + window.location.hash.replace("#", "-")).css("background-image", 'url("/images/damier.png")');
});



$(function() {
    $(".schedule").on("mousewheel DOMMouseScroll", function(ev, delta) {
        var scrollTop = $(this).scrollTop();
        $(this).scrollTop(scrollTop-Math.round(ev.deltaY) * 30);

        // this.scrollTop -= (delta * 60);

        // event.preventDefault();

    });
});


$(function() {
    $(".jcarousel").each(function() {
        $(this)
            .removeClass("jcarousel")
            .addClass("jcarousel__inner")
            .wrap( "<div class='jcarousel'></div>" )
            .children()
                .addClass("jcarousel__item")
        ;

        var nav = $('<nav class="jcarousel__controls"></nav>');
        var prev = $('<a href="#" class="jcarousel__control-prev">‹</a>');
        var next = $('<a href="#" class="jcarousel__control-next">›</a>');

        nav.append(prev, next);
        $(this).parent().append(nav);

        $(this).parent().jcarousel({
            wrap: 'circular',
            animation: {
                duration: 1000,
                //easing:   'easeOutCubic',
                complete: function() {}
            }
        });
        // .jcarouselAutoscroll({
        //     interval: 5000,
        //     target: '+=1',
        //     autostart: true
        // });


        prev.jcarouselControl({
            target: '-=1',
        });

        next.jcarouselControl({
            target: '+=1',
        });
    });
});

// <nav class="jcarousel-controls">
//     <a href="#" class="jcarousel-control-prev">‹</a>
//     <a href="#" class="jcarousel-control-next">›</a>
// </nav>

// $(function() {
//     $('.jcarousel').each(function() {
//         var wrap = $(this).attr('data-wrap') || null;
//         $(this).jcarousel({
//             wrap: true,
//             animation: {
//                 duration: 1000,
//                 //easing:   'easeOutCubic',
//                 complete: function() {}
//             }
//         });
//     })
//     .filter('[data-autoscroll]')
//     .jcarouselAutoscroll({
//         interval: 5000,
//         target: '+=1',
//         autostart: true
//     });

//     $('.jcarousel-control-prev').jcarouselControl({
//         target: '-=1',
//     });

//     $('.jcarousel-control-next').jcarouselControl({
//         target: '+=1',
//     });
// });




// (function($) {
//     $(function() {
//         $('.jcarousel').jcarousel();

//         $('.jcarousel-control-prev')
//             .on('jcarouselcontrol:active', function() {
//                 $(this).removeClass('inactive');
//             })
//             .on('jcarouselcontrol:inactive', function() {
//                 $(this).addClass('inactive');
//             })
//             .jcarouselControl({
//                 target: '-=1'
//             });

//         $('.jcarousel-control-next')
//             .on('jcarouselcontrol:active', function() {
//                 $(this).removeClass('inactive');
//             })
//             .on('jcarouselcontrol:inactive', function() {
//                 $(this).addClass('inactive');
//             })
//             .jcarouselControl({
//                 target: '+=1'
//             });

//         $('.jcarousel-pagination')
//             .on('jcarouselpagination:active', 'a', function() {
//                 $(this).addClass('active');
//             })
//             .on('jcarouselpagination:inactive', 'a', function() {
//                 $(this).removeClass('active');
//             })
//             .jcarouselPagination();
//     });
// })(jQuery);
//
//


(function($) {
    $(".main-area")
        .swipeleft(function(){
            $(this).addClass("is-swiped");
        })
        .swiperight(function(){
            $(this).removeClass("is-swiped");
        });
})(jQuery);


// scrollbars
(function($) {
    $(".main-content").css("overflow-y", "hidden").perfectScrollbar({theme: 'balsa', suppressScrollX: false});
    $(".schedule__list").css("overflow-y", "hidden").perfectScrollbar({theme: 'balsa', suppressScrollX: true});
})(jQuery);


(function($) {
    $('.show-detail__image-body').click(function() {
        var srcimg = $(this).children('img').clone().html('src');
        $('.photo').html(srcimg);
    })
})(jQuery);

// dropdown

// $(function() {
//     $('.showDropdown').click(function() {
//         var $drop = $('.dropdown');
//         $drop.css({'position': $('#positioning').val()});
//         $drop.toggle();
//     });
// });
