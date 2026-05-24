const namaDeveloper = "Mr. Heblot"; // const untuk data yang tidak akan berubah
let targetBelajarPerHari = 4;       // let untuk data yang bisa berubah nilainya
let isLearningFastTrack = true; // Boolean (Benar/Salah)
let totalProject = 0;           // Number (Angka)
if (targetBelajarPerHari >= 6) {
    console.log("Hebat! Anda berada di jalur cepat menuju remote worker.");
} else {
    console.log("Yuk, tambah lagi jam belajarnya hari ini.");
}
function sapaKlien() {
    alert("Halo Calon Klien! Terima kasih telah menghubungi saya.");
}
function sapaKlien() {
    // Mengambil data dari kotak input HTML berdasarkan ID-nya
    const namaUser = document.getElementById("name").value;

    // Kondisi validasi standar profesional
    if (namaUser === "") {
        alert("Mohon masukkan nama Anda terlebih dahulu ya!");
    } else {
        alert("Halo " + namaUser + "! Terima kasih sudah mengirim pesan. Saya akan segera menghubungi Anda.");
    }
}
// 1. ARRAY: Menyimpan banyak data dalam satu tempat (seperti daftar laci)
const daftarProject = ["Website CV", "Aplikasi Kalkulator", "Sistem Manajemen Kasir", "Aplikasi To-Do List", "Sistem Informasi Akademik"];

// 2. LOOPING (for): Membaca dan menampilkan semua isi laci secara otomatis
console.log("--- DAFTAR PROJECT SAYA ---");
for (let i = 0; i < daftarProject.length; i++) {
    console.log("Project ke-" + (i + 1) + ": " + daftarProject[i]);
}
