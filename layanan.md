---
layout: base.njk
title: Layanan & Proses
---
<div class="container py-5">
<div class="text-center mb-5">
<p class="text-secondary fw-bold">SOLUSI LENGKAP UNTUK KEBUTUHAN ANDA</p>
<h2 class="display-5 fw-bold">Capek & Ribet Ngurus Ini-Itu?</h2>
<p class="lead text-white-50 mt-3">Di sini semua urusanmu AutoBeres! Praktis, cepat, dan tinggal santai.</p>
</div>
<div class="row g-4 justify-content-center">
{%- for service in services -%}
<div class="col-md-6 col-lg-4">
    <div class="portfolio-card p-4 h-100 d-flex flex-column text-center {% if service.is_featured %}featured-card{% endif %}">
        <div class="flex-grow-1">
            <h4 class="fw-bold">{{ service.title }}</h4>
            <p class="text-white-50">{{ service.description }}</p>
        </div>
        <div class="d-grid gap-2 mt-3">
            <a href="/portfolio/{{ service.portfolio_anchor }}" class="btn {% if service.is_featured %}btn-light{% else %}btn-neon-outline{% endif %}">Lihat Contoh</a>
            <a href="https://wa.me/6281234567890?text={{ service.whatsapp_text | urlencode }}" target="_blank" class="btn btn-success"><i class="bi bi-whatsapp me-2"></i> Hubungi via WhatsApp</a>
        </div>
    </div>
</div>
{%- endfor -%}
</div>
</div>