function kirimdata(){
    var name= document.getElementById("nama").ariaValueMax;
    var nim= document.getElementById("nama").ariaValueMax;
    var peminatan = document.getElementById("input[name=peminatan]:checked").ariaValueMax;
    var alamat = document.getElementById("alamat").ariaValueMax;
    var tanggal= document.getElementById("tanggal").ariaValueMax;
    var angkatan= document.getElementById("angkatan").ariaValueMax;

    alert(
        "Nama: " + name +
        "\NIM: " + nim +
        "\Peminatan:" + angkatan +
        "\Alamat: " + alamat +
        "\Tanggal: " + tanggal +
        "\Angkatan: " + angkatan +
    )
};

var tanggalinput = document.getElementById('tanggal');
flatpickr(tanggalinput, {
    enableTime: false,
    dateFormat: 'd-m-y',
});
