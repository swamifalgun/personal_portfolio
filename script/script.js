$(document).ready(function () {

    var scrollLink = $('.scroll');

    /*Smooth scrolling*/
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 1000);
    });

    /*Active link switching*/
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 50;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
});

$(document).ready(function () {
    var shiftWindow = function () {
        scrollBy(0, -50)
    };
    if (location.hash) {
        setTimeout(function () {
            shiftWindow();
        }, 10);
    };
    window.addEventListener("hashchange", shiftWindow);
});
/*Blog Button Alert*/
$(document).on("click", "#blog", function () {
    alert("working on my thoughts. Stay Tuned !!");
});

/*Animate Text On Info Page*/
$(function () {
    count = 0;
    wordsArray = ["Web.", "Dogs.", "Everything."];
    setInterval(function () {
        count++;
        $("#word").fadeOut(1000, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
        });
    }, 2000);
});
