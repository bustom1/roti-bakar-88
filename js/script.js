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
    $(".tombol, .tombol-order, img, .a-tab").hover(
        function () {
            $(this).css({
                transform: "scale(1.1)",
                transition: "0.2s",
            });
        },
        function () {
            $(this).css({
                transform: "scale(1)",
            });
        }
    );

    // show modal pop up
    $(".tombol").click(function () {
        var modalContent = `
         "<div class="modal fade" id="detailModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content" style="color: black">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="detailModelLabel">Detail Produk</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                   
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corporis consequatur praesentium itaque minima molestiae magnam minus, soluta atque dolorum ad tenetur id maxime delectus, expedita recusandae voluptatem eos! Optio!
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>"
        `;
        $("#outputModal").append(modalContent);
        $("#outputModal, .modal").modal("show");

        $("#detailModal").on("hidden.bs.modal", function () {
            // Sembunyikan modal
            $(this).modal("hide");
            // Hapus modal
            $(this).remove();
            // Hapus modal-backdrop
            $(".modal-bs-backdrop").remove();
        });
    });
});

// fungsi untuk Contact Us

// Function untuk membbersihkan isi comentar ketika di load
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
}

// mengirimkan pesan ketika tombol submit di klik
function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    if (name == "" || email == "" || comment == "") {
        swal.fire("Isi semua data terlebih dahulu");
    } else {
        function getCurrentDateTime() {
            var now = new Date();
            var year = now.getFullYear();
            var month = String(now.getMonth() + 1).padStart(2, '0'); // Menambahkan leading zero jika diperlukan
            var day = String(now.getDate()).padStart(2, '0');
            var hours = String(now.getHours()).padStart(2, '0');
            var minutes = String(now.getMinutes()).padStart(2, '0');
            var seconds = String(now.getSeconds()).padStart(2, '0');
          
            return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
          }          
        
        const data = {
            name: name,
            email: email,
            comment: comment,
             created_at: getCurrentDateTime()
        }
        $.ajax({
            url: "https://sheetdb.io/api/v1/spy3e14n4mke2",
            type: "POST",
            data: data,
            success: function (res) {
                swal.fire("Terimakasih", "Data berhasil di kirim");
            },
            error: function (err) {
                swal.fire("Data tidak berhasil di kirim")
            }
        });
        clearForm();
    }
}




// panggil fungsi clearform ketika baru di load
window.onload = clearForm;