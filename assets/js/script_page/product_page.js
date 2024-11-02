//ЧИТАТЬ БОЛЬШЕ
function functionMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btnMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Читать больше";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Читать меньше";
        moreText.style.display = "inline";
    }
}

// ===POPPUP===
$('.product__button').on('click', function (e) {
    e.preventDefault();
    $('.contacts__form-poppup').toggleClass('poppup__open');
    $('body').toggleClass('lock');
});




// ===ТАБЫ И АККАРДИОН===
// вкладки с содержанием
$(".tab_content").hide();
$(".tab_content:first").show();
/* в режиме вкладок */
$("ul.tabs li").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_accordion").removeClass("d_active");
    $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
});
/* в режиме аккордеона */
$(".tab_accordion").click(function () {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();
    $(".tab_accordion").removeClass("d_active");
    $(this).addClass("d_active");
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});
/* дополнительный класс tab_last, 
чтобы добавить границу к правой 
стороне последней вкладки. */
$('ul.tabs li').last().addClass("tab_last");



