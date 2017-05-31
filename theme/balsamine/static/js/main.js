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
    // var monthNames = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
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

    var foo = monthsWithinDateRange(firstDate, lastDate);

    var totalHeight = $('schedule_timeline').outerHeight();

    for (var i=0, len=foo.length - 1; i < len; i++) {
        var currentDate = foo[i];
        var pc = (1 - (lastDate - currentDate) / (lastDate - firstDate)) * 100;
        // console.log(pc);
        // console.log(firstDate);
        // console.log(currentDate);
        // console.log(lastDate);
        // console.log("***");

        var point = $("<div>").text(monthNames[currentDate.getMonth()]).addClass("timeline__month").css({
            top: pc + "%",
        });

        point.appendTo($(".schedule__timeline"));
    }
    
    $(".schedule__item").each(function() {
        var currentDate = Date.parse($(this).find("time").attr("datetime"));

        var pc = (1 - (lastDate - currentDate) / (lastDate - firstDate)) * 100;

        var point = $("<div>").addClass("timeline__point").css('top', pc + "%");

        point.appendTo($(".schedule__timeline"));
    });
});


// $(function() {
//     $(".schedule").on("mousewheel DOMMouseScroll", function(ev, delta) {
//         var scrollTop = $(this).scrollTop();
//         $(this).scrollTop(scrollTop-Math.round(ev.deltaY) * 30);

//         // this.scrollTop -= (delta * 60);

//         // event.preventDefault();

//     });
// });


// $(function() {
//     $(".slideshow").each(function() {
//         $(this)
//             .addClass("jcarousel__inner")
//             .wrap( "<div class='jcarousel'></div>" )
//             .children()
//                 .addClass("jcarousel__item")
//         ;

//         var nav = $('<nav class="jcarousel-controls"></nav>');
//         var prev = $('<a href="#" class="jcarousel-control-prev">‹</a>');
//         var next = $('<a href="#" class="jcarousel-control-next">›</a>');

//         nav.append(prev, next);
//         $(this).parent().append(nav);

//         $(this).jcarousel({
//             // wrap: wrap,
//             animation: {
//                 duration: 1000,
//                 //easing:   'easeOutCubic',
//                 complete: function() {}
//             }
//         })
//         .jcarouselAutoscroll({
//             interval: 5000,
//             target: '+=1',
//             autostart: true
//         });

//         $(this).parent().find('.jcarousel-control-prev').jcarouselControl({
//             target: '-=1',
//         });

//         $(this).parent().find('.jcarousel-control-next').jcarouselControl({
//             target: '+=1',
//         });
//     });
// });

// <nav class="jcarousel-controls">
//     <a href="#" class="jcarousel-control-prev">‹</a>
//     <a href="#" class="jcarousel-control-next">›</a>
// </nav>

$(function() {
    $('.jcarousel').each(function() {
        var wrap = $(this).attr('data-wrap') || null;
        $(this).jcarousel({
            wrap: true,
            animation: {
                duration: 1000,
                //easing:   'easeOutCubic',
                complete: function() {}
            }
        });
    })
    .filter('[data-autoscroll]')
    .jcarouselAutoscroll({
        interval: 5000,
        target: '+=1',
        autostart: true
    });

    $('.jcarousel-control-prev').jcarouselControl({
        target: '-=1',
    });

    $('.jcarousel-control-next').jcarouselControl({
        target: '+=1',
    });
});




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
