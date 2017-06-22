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

    });

    $(".timeline").css("background", "linear-gradient(to bottom, " + gradient.join(", ") + ")" )
    $(".timeline__point").click(function() {
        window.location = $(this).attr("href")
        $(".timeline__point").css("background-image", 'none');
        $("#point" + window.location.hash.replace("#", "-")).css("background-image", 'url("/images/damier.png")');
    });
    $("#point" + window.location.hash.replace("#", "-")).css("background-image", 'url("/images/damier.png")');

    // background of header put into parent content
    var bg = $(".show-detail__header:first-child").css("background");
    $(".show-detail__header:first-child") .css("background", "");
    $(".show-detail__header:first-child").parent().parent().css("background", bg);
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


// SHOW-DETAIL GALLERY
(function($) {

    $(".galerie").addClass("show-detail__body-images").insertBefore($(".show-detail__body"));

    $('.show-detail__body-images iframe').each(function() {
        div = $("<p class='video-wrapper'>");
        $(this).wrap(div);
        overlay = $("<span class='thumb-overlay'> </span>")
        overlay.insertBefore($(this));
    });

    $('.show-detail__body-images p').click(function(e) {
        var srcimg = $(this).html();
        $('.photo').html(srcimg);
        $('.photo .thumb-overlay').remove();
        $('.photo').slideDown();
    })

    $(".photo").click(function(){
        $(this).slideUp();
    });

})(jQuery);

// dropdown

// $(function() {
//     $('.showDropdown').click(function() {
//         var $drop = $('.dropdown');
//         $drop.css({'position': $('#positioning').val()});
//         $drop.toggle();
//     });
// });

(function($) {
    // Sections are retracted on mobile using the `:target` pseudo-selector
    // the code below shows the first section if no other is specified

    var anchor = $(".page-detail .toclink").attr("href");

    if (! location.hash) {
        if (history.pushState) {
            history.pushState(null, null, anchor);
        } else {
            location.hash = '#myhash';
        }

        window.scrollTo(0, 0);
    }
})(jQuery);
