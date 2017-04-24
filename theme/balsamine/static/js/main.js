// $(function() {
//     // The total height
//     var totalHeight = $(".show__list").outerHeight() - $(".show").last().outerHeight();

//     var firstDate = Date.parse($(".show__item").first().find("time").attr("datetime"));
//     var lastDate = Date.parse($(".show__item").last().find("time").attr("datetime"));

//     console.log("firstDate", firstDate);
//     console.log("lastDate", lastDate);

//     var firstPos = (lastDate - firstDate) - (lastDate - firstDate);
//     var lastPos = (lastDate - firstDate) - (lastDate - lastDate);

//     console.log(firstPos);
//     console.log(lastPos);

//     $(".show__item").each(function() {
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

//         point.appendTo($(".show__timeline"));
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

    var firstDate = Date.parse($(".show__item").first().find("time").attr("datetime"));
    var lastDate = Date.parse($(".show__item").last().find("time").attr("datetime"));

    var firstDate = new Date(firstDate);
    var lastDate = new Date(lastDate);

    firstDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), 1);
    lastDate = new Date(lastDate.getFullYear(), lastDate.getMonth() + 1, 0);

    var foo = monthsWithinDateRange(firstDate, lastDate);

    var totalHeight = $('show_timeline').outerHeight();

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

        point.appendTo($(".show__timeline"));
    }
    
    $(".show__item").each(function() {
        var currentDate = Date.parse($(this).find("time").attr("datetime"));

        var pc = (1 - (lastDate - currentDate) / (lastDate - firstDate)) * 100;

        var point = $("<div>").addClass("timeline__point").css('top', pc + "%");

        point.appendTo($(".show__timeline"));
    });
});


$(function() {
    $(".show").on("mousewheel DOMMouseScroll", function(ev, delta) {
        var scrollTop = $(this).scrollTop();
        $(this).scrollTop(scrollTop-Math.round(ev.deltaY) * 30);

        // this.scrollTop -= (delta * 60);

        // event.preventDefault();

    });
});
