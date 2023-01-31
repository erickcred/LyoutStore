$(document).ready(() => {
    $(".mobile-buttom").click(() => {
        $("header nav ul").slideToggle();
    });

    $(".carousel").slick({
        autoplay: true
    });

    let contador = 0;
    $(".card-produto a").click((event) => {
        event.preventDefault();
        $("#total-itens").css("display", "flex")
        $("#total-itens").text(++contador)
    })

})