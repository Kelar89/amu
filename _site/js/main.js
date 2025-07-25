// File: js/main.js (Versi Final Gabungan)

document.addEventListener('DOMContentLoaded', function() {

    // ======================================================
    // BAGIAN 1: Fungsionalitas Tombol Kontak WhatsApp
    // Kode ini hanya berjalan jika ada tombol dengan ID 'send-whatsapp'
    // ======================================================
    const sendButton = document.getElementById('send-whatsapp');
    
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            // Nomor WhatsApp Anda dari kode sebelumnya
            const phoneNumber = '6285894448143'; 

            // Ambil nilai dari setiap input
            const name = document.getElementById('wa_name').value;
            const email = document.getElementById('wa_email').value;
            const subject = document.getElementById('wa_subject').value;
            const message = document.getElementById('wa_message').value;

            // Validasi: Pastikan nama dan email diisi
            if (name.trim() === '' || email.trim() === '') {
                alert('Tolong isi Nama Lengkap dan Email Anda.');
                return;
            }

            // Format pesan yang profesional
            const formattedMessage = `
*Pesan Baru dari Website Portofolio*
-----------------------------------

Halo Umar, saya ingin menghubungi Anda.

*Berikut adalah detail pengirim:*
• *Nama:* ${name}
• *Email:* ${email}
• *Subjek:* ${subject}

-----------------------------------
*Pesan:*

${message}

-----------------------------------
Terima kasih.
            `;

            // Buat URL WhatsApp
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;

            // Buka URL di tab baru
            window.open(whatsappURL, '_blank');
        });
    }

    // ======================================================
    // BAGIAN 2: Fungsionalitas Filter Portofolio Masonry
    // Kode ini hanya berjalan jika ada tombol filter dengan ID 'portfolio-filter'
    // ======================================================
    const filterContainer = document.querySelector('#portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterContainer) {
        filterContainer.addEventListener('click', function(e) {
            // Pastikan yang diklik adalah tombol
            if (e.target.matches('button')) {
                // Hapus class 'active' dari semua tombol
                if (filterContainer.querySelector('.active')) {
                    filterContainer.querySelector('.active').classList.remove('active');
                }
                // Tambahkan class 'active' ke tombol yang diklik
                e.target.classList.add('active');

                const filterValue = e.target.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    // Cek apakah item memiliki class yang cocok dengan filter
                    // Filter "All" diwakili oleh '*'
                    if (item.classList.contains(filterValue) || filterValue === '*') {
                        item.classList.remove('hide'); // Tampilkan item
                    } else {
                        item.classList.add('hide'); // Sembunyikan item
                    }
                });
            }
        });
    }

}); // Penutup untuk DOMContentLoaded
// File: js/main.js

document.addEventListener('DOMContentLoaded', function() {
    
    // ... (kode WhatsApp dan filter portofolio Anda biarkan di atas sini)

    // ======================================================
    // KODE BARU UNTUK TOMBOL SCROLL TO TOP
    // ======================================================
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        // Tampilkan tombol saat pengguna scroll ke bawah 200px
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollToTopBtn.style.display = "flex";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        // Saat tombol diklik, scroll kembali ke atas
        scrollToTopBtn.addEventListener('click', function() {
            document.body.scrollTop = 0; // Untuk Safari
            document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE dan Opera
        });
    }

}); // Penutup untuk DOMContentLoaded