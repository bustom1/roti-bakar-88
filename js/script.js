$(document).ready(function () {
    //section product
    var bg_produk = "#FEFBC7";
    $(".product_section").css({
        "background-color": bg_produk,
        margin: "5px 0px 0px 0px",
        padding: "20px 0px 15px 0px",
    });
    $(".tombol").css({
        "background-color": bg_produk,
        color: "black",
        "border-radius": "15px",
    });
    $(".tombol, .tombol-order").css({
        color: "black",
        "border-radius": "15px",
        "margin-left": "10px",
        "box-shadow": "3px 3px 9px black",
    });
    $(".tombol, .tombol-order").hover(
        function () {
            $(this).css({
                transform: "scale(1.1)",
                transition: "1s",
            });
        },
        function () {
            $(this).css({
                transform: "scale(1)",
            });
        }
    );
});
