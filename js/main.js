$(function () {
    // Cursors
    var cursor = document.getElementById("cursor");

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
    cursor.classList.remove("hover");

    // console.log(document.querySelectorAll(".ht"));
    for (var hta = document.querySelectorAll(".ht"), ht = hta.length - 1; ht >= 0; ht--) {
        hta[ht].addEventListener("mouseover", function () { cursor.classList.add("hover"); }), 
        hta[ht].addEventListener("mouseout", function () { cursor.classList.remove("hover"); });
    };

    // Nav
    $('.navbar-toggler, .btn-cls').click(function () {
        $('.nav-navbar').toggleClass('show');
    });
    /*****/
});