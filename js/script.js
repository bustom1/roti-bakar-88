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
    $(".tombol, .tombol-order, img").hover(
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

// fungsi untuk Contact Us
// mengirimkan pesan ketika tombol submit di klik
function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    if (name == "" || email == "" || comment == "") {
        swal.fire("Isi semua data terlebih dahulu");
    } else {
        // nomer wa yang akan menerima pesan
        const phoneNumber = "+6285646044393";

        // isi pesannya mengambil dari name, email dan isi comentar
        const message = `Name: ${name}%0AEmail: ${email}%0AComment: ${comment}`;

        // membuat url ke whatsapp dan memuat isi pesannya
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        // Redirect ke WhatsApp
        window.location.href = whatsappURL;
    }
}

// Function to clear form inputs
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
}

// Call clearForm() function when the page loads
window.onload = clearForm;
