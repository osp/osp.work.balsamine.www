$(function() {
    // The total height
    var totalHeight = $(".main").outerHeight() - $(".show").last().outerHeight();

    var firstDate = Date.parse($(".show").first().find("time").attr("datetime"));
    var lastDate = Date.parse($(".show").last().find("time").attr("datetime"));

    console.log("firstDate", firstDate);
    console.log("lastDate", lastDate);

    var firstPos = (lastDate - firstDate) - (lastDate - firstDate);
    var lastPos = (lastDate - firstDate) - (lastDate - lastDate);

    console.log(firstPos);
    console.log(lastPos);

    $(".show").each(function() {
        var size = $(this).outerHeight();
        // console.log(size);
        var currentDate = Date.parse($(this).find("time").attr("datetime"));
        // console.log(currentDate);

        var pc = (1 - (lastDate - currentDate) / (lastDate - firstDate)) * 100;
        console.log(pc);

        var posY = (totalHeight / 100) * pc;
        // console.log(posY);
        var point = $("<div>").css({
            position: "fixed",
            width: "10px",
            height: "20px",
            borderRadius: "5px",
            top: pc + "%",
            right: "10px",
            backgroundColor: "white"
        });

        point.appendTo($(".main"));
    });
});
