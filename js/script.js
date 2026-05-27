// ==========================================
// 1. FITUR DARK MODE (Tetap Berjalan Aman)
// ==========================================
const tombolMode = document.getElementById("btn-mode");

if (tombolMode) {
    tombolMode.addEventListener("click", function() {
        if (document.body.style.backgroundColor === "rgb(34, 34, 34)") {
            document.body.style.backgroundColor = "#f4f4f4";
            document.body.style.color = "#333";
        } else {
            document.body.style.backgroundColor = "#222";
            document.body.style.color = "#fff";
        }
    });
}

// ==========================================
// 2. FITUR FETCH API (Versi Paling Aman & Stabil)
// ==========================================
const textQuote = document.getElementById("text-quote");
const btnQuote = document.getElementById("btn-quote");

async function ambilQuoteDariInternet() {
    if (!textQuote) return;

    try {
        textQuote.textContent = "Sedang mengambil data dari NASA...";
        
        // Menggunakan API Resmi NASA (Sangat stabil & bebas typo)
        const respon = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        
        if (!respon.ok) {
            throw new Error("Koneksi server NASA bermasalah");
        }
        
        const data = await respon.json();
        
        // Menampilkan judul foto luar angkasa hari ini dari server NASA
        textQuote.textContent = "NASA Today: " + data.title;
        
    } catch (error) {
        textQuote.textContent = "Gagal memuat data dari NASA.";
        console.log("Error detail:", error);
    }
}

if (btnQuote) {
    btnQuote.addEventListener("click", ambilQuoteDariInternet);
}

// Jalankan otomatis di awal
ambilQuoteDariInternet();