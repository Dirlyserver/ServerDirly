document
    .querySelectorAll('input[type="checkbox"][data-target]')
    .forEach(checkbox => {
        const page = document.getElementById(checkbox.dataset.target);
        const baseZ = checkbox.dataset.baseZ;
        const activeZ = checkbox.dataset.activeZ;

        if (!page) return; // Skip jika page tidak ditemukan

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                page.style.zIndex = baseZ;
                page.style.transform = "rotateY(-180deg)";

                setTimeout(() => {
                    page.style.zIndex = activeZ;
                }, 800);
            } else {
                setTimeout(() => {
                    page.style.zIndex = baseZ;
                }, 800);
                page.style.transform = "";
            }
        });
    });

// Loader efek + transisi ke buku
let percent = 0;
const redFill = document.getElementById("redFill");
const percentText = document.getElementById("percentText");
const sound = document.getElementById("romanticSound");
const preloader = document.getElementById("preloader");
const book = document.querySelector(".book");

const maxHeight = 90;

const loading = setInterval(() => {
    if (percent >= 100) {
        clearInterval(loading);
        sound.play();

        // Tambahkan efek keluar
        preloader.classList.add("fade-out");

        // Setelah efek selesai, sembunyikan dan munculkan buku
        setTimeout(() => {
            preloader.style.display = "none";
            book.classList.add("fade-in");
        }, 800);
    } else {
        percent++;
        let fillHeight = (percent / 100) * maxHeight;
        redFill.setAttribute("y", maxHeight - fillHeight);
        redFill.setAttribute("height", fillHeight);
        percentText.textContent = percent + "%";
    }
}, 200);
function createEmojiRain() {
    const container = document.querySelector(".love-rain-container");
    const emoji = document.createElement("div");
    emoji.classList.add("love");

    // Daftar emoji dan peluang kemunculan
    const emojiOptions = [
        { char: "❤️", chance: 0.8 }, // 90% sering muncul
        { char: "💋", chance: 0.07 }, // 5%
        { char: "😘", chance: 0.05 }, // 3%
        { char: "😍", chance: 0.08 } // 2%
    ];

    // Pilih emoji berdasarkan peluang (chance)
    const rand = Math.random();
    let total = 0;
    let selected = "❤️"; // default
    for (let item of emojiOptions) {
        total += item.chance;
        if (rand < total) {
            selected = item.char;
            break;
        }
    }

    emoji.innerText = selected;

    // Random ukuran, posisi, dan durasi animasi
    const size = Math.random() * 20 + 10; // 10-30px
    const left = Math.random() * window.innerWidth;
    const duration = Math.random() * 6 + 3; // 2-5s
    const delay = Math.random(); // sedikit delay

    emoji.style.fontSize = `${size}px`;
    emoji.style.left = `${left}px`;
    emoji.style.animationDuration = `${duration}s, ${duration}s`;
    emoji.style.animationDelay = `${delay}s, ${delay}s`;

    container.appendChild(emoji);

    setTimeout(
        () => {
            emoji.remove();
        },
        (duration + delay) * 1000
    );
}

// Jalankan terus
// Tunggu 5 detik sebelum mulai hujan
setTimeout(() => {
    setInterval(createEmojiRain, 250); // hujan setiap 200ms
}, 20000); // delay 5 detik sebelum hujan dimulai

const tombol = document.getElementById("tombol");
const gambar = document.getElementById("gambar");
let rotated = false;

tombol.addEventListener("click", () => {
    // Tampilkan gambar jika belum muncul
    if (gambar.style.display === "none") {
        gambar.style.display = "block";
    }

    // Toggle rotasi gambar
    if (!rotated) {
        gambar.style.transform = "rotate(0deg)";
    } else {
        gambar.style.transform = "rotate(90deg)";
    }

    rotated = !rotated;
});
