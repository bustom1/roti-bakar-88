$(document).ready(function () {
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

    // parallax
    var image = document.getElementsByClassName("img");
    new simpleParallax(image, {
        delay: 0.1,
        transition: "cubic-bezier(0,0,0,1)",
    });

    // tombol up
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function randomWarna() {
        var randomColor = getRandomColor();
        $(".panah").css("color", randomColor);
        setTimeout(randomWarna, 1000); // Ubah warna setiap 1 detik
    }
    $(document).ready(function () {
        randomWarna(); // Mulai mengubah warna secara otomatis
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
            var month = String(now.getMonth() + 1).padStart(2, "0"); // Menambahkan leading zero jika diperlukan
            var day = String(now.getDate()).padStart(2, "0");
            var hours = String(now.getHours()).padStart(2, "0");
            var minutes = String(now.getMinutes()).padStart(2, "0");
            var seconds = String(now.getSeconds()).padStart(2, "0");

            return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
        }

        const data = {
            name: name,
            email: email,
            comment: comment,
            created_at: getCurrentDateTime(),
        };
        $.ajax({
            url: "https://sheetdb.io/api/v1/spy3e14n4mke2",
            type: "POST",
            data: data,
            success: function (res) {
                swal.fire("Terimakasih", "Data berhasil di kirim");
            },
            error: function (err) {
                swal.fire("Data tidak berhasil di kirim");
            },
        });
        clearForm();
    }
}

// fungsi untuk menanmpilkan semua data product
function allProduct() {
    swal.fire({
        title: "Mencari Data...",
        text: "Mohon tunggu !!!",
        icon: "https://media.tenor.com/je-huTL1vwgAAAAi/loading-buffering.gif",
    });

    $("#isiProduct").empty();

    $.ajax({
        url: "https://sheetdb.io/api/v1/9gvkzok724476",
        type: "GET",
        success: function (res) {
            if (res.length == 0) {
                swal.fire("Data tidak di temukan");
            } else {
                for (let i = 0; i < res.length; i++) {
                    const dataProduct = res[i];

                    const isiProduct = ` <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <div class="card bg-danger p-2 justify-content-center align-items-center" style="box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.8)">
                        <img src="${dataProduct.img}" class="card-img-top" alt="...">
                        <div class="card-body text-light">
                            <h5 class="card-title text-center">${dataProduct.name}</h5>
                            <p class="card-text">Rp.${dataProduct.price}</p>
                            <!-- Modal -->
                            <div id="outputModal">
                                <!-- isi Modal --></div>
                            <!-- endModal -->
                            <button
                                type="button"
                                class="btn tombol 
                                btn-cyn m-md-2"

                                data-bs-toggle="modal"
                                data-bs-target="#detailModal"
                                onclick="showDetail('${dataProduct.img}','${dataProduct.name}', '${dataProduct.price}',  '${dataProduct.deskripsi}', '${dataProduct.stok}')"
                            >Lihat Detail</button>

                            <a href="https://api.whatsapp.com/send?phone=6285646044393&text=Saya%20Pesan%20${dataProduct.name}%20jumlah%20satu%20harga%20Rp.${dataProduct.price}" class="btn tombol-order ">Order <i class="fa-brands fa-whatsapp"></i> </a>
                        </div>
                    </div>
                </div>`;

                    $("#isiProduct").append(isiProduct);
                }
            }
            swal.close();
        },
    });
}

function productMakanan() {
    swal.fire({
        title: "Mencari Data...",
        text: "Mohon tunggu !!!",
        icon: "https://media.tenor.com/je-huTL1vwgAAAAi/loading-buffering.gif",
    });

    $("#isiProduct").empty();

    $.ajax({
        url: "https://sheetdb.io/api/v1/9gvkzok724476",
        type: "GET",
        success: function (res) {
            if (res.length == 0) {
                swal.fire("Data tidak di temukan");
            } else {
                for (let i = 0; i < res.length; i++) {
                    const dataProduct = res[i];
                    if (dataProduct.kategori == "makanan") {
                        const isiProduct = ` <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                        <div class="card bg-danger p-2 justify-content-center align-items-center" style="box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.8)">
                            <img src="${dataProduct.img}" class="card-img-top" alt="...">
                            <div class="card-body text-light">
                                <h5 class="card-title text-center">${dataProduct.name}</h5>
                                <p class="card-text">Rp.${dataProduct.price}</p>
                                <!-- Modal -->
                                <div id="outputModal">
                                    <!-- isi Modal --></div>
                                <!-- endModal -->
                                <button
                                    type="button"
                                    class="btn tombol btn-success m-md-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailModal"
                                    onclick="showDetail('${dataProduct.img}','${dataProduct.name}', '${dataProduct.price}', '${dataProduct.deskripsi}', '${dataProduct.stok}')"
                                >Lihat Detail</button>
    
                                <a href="https://api.whatsapp.com/send?phone=6285646044393&text=Saya%20Pesan%20${dataProduct.name}%20jumlah%20satu%20harga%20Rp.${dataProduct.price}" class="btn tombol-order btn-success">Order</a>
                            </div>
                        </div>
                    </div>`;

                        $("#isiProduct").append(isiProduct);
                    }
                }
            }
            swal.close();
        },
    });
}

function productMinuman() {
    swal.fire({
        title: "Mencari Data...",
        text: "Mohon tunggu !!!",
        icon: "https://media.tenor.com/je-huTL1vwgAAAAi/loading-buffering.gif",
    });

    $("#isiProduct").empty();

    $.ajax({
        url: "https://sheetdb.io/api/v1/9gvkzok724476",
        type: "GET",
        success: function (res) {
            if (res.length == 0) {
                swal.fire("Data tidak di temukan");
            } else {
                for (let i = 0; i < res.length; i++) {
                    const dataProduct = res[i];
                    if (dataProduct.kategori == "minuman") {
                        const isiProduct = ` <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                        <div class="card bg-danger p-2 justify-content-center align-items-center" style="box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.8)">
                            <img src="${dataProduct.img}" class="card-img-top" alt="...">
                            <div class="card-body text-light">
                                <h5 class="card-title text-center">${dataProduct.name}</h5>
                                <p class="card-text">Rp.${dataProduct.price}</p>
                                <!-- Modal -->
                                <div id="outputModal">
                                    <!-- isi Modal --></div>
                                <!-- endModal -->
                                <button
                                    type="button"
                                    class="btn tombol btn-success m-md-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailModal"
                                    onclick="showDetail('${dataProduct.img}','${dataProduct.name}', '${dataProduct.price}', '${dataProduct.deskripsi}', '${dataProduct.stok}')"
                                >Lihat Detail</button>
    
                                <a href="https://api.whatsapp.com/send?phone=6285646044393&text=Saya%20Pesan%20${dataProduct.name}%20jumlah%20satu%20harga%20Rp.${dataProduct.price}" class="btn tombol-order btn-success">Order</a>
                            </div>
                        </div>
                    </div>`;

                        $("#isiProduct").append(isiProduct);
                    }
                }
            }
            swal.close();
        },
    });
}

function showDetail(img, productName, productPrice, deskripsi, stok) {
    Swal.fire({
        imageUrl: img,
        title: productName,
        html: `<p><b>Harga: </b>Rp.${productPrice}</p><p><b>Deskripsi</b></p><p>${deskripsi}</p><br><p><b>Stok :</b> ${stok}</p>`,
        confirmButtonText: "OK",
    });
}

// panggil fungsi clearform ketika baru di load
window.onload = clearForm;
window.onload = allProduct;
