---
layout: base.njk
title: Solusi & Alur Kerja
---

<div class="container py-5">
<div class="text-center mb-5">
<h2 class="text-neon d-block mb-2">Solusi Digital dari Hulu ke Hilir</h2>
<p class="h3">Kami menyediakan semua yang Anda butuhkan untuk bertumbuh.<br>Pilih layanan yang paling sesuai dengan tujuan Anda saat ini.</p>
</div>
<div class="row g-4">
{%- for service in services -%}
<div class="col-lg-6">
<div class="portfolio-card p-4 h-100">
    <div class="d-flex align-items-start">
        <i class="bi {{ service.icon }} fs-2 text-neon me-4 mt-1"></i>
        <div>
            <h3 class="fw-bold">{{ service.title }}</h3>
            <p class="text-white-50">{{ service.summary }}</p>
            <ul class="list-unstyled">
            {%- for point in service.points -%}
                <li class="mb-2"><i class="bi bi-check-circle-fill text-neon me-2"></i>{{ point }}</li>
            {%- endfor -%}
            </ul>
            <a href="/contact/" class="btn btn-neon-outline mt-3">Diskusikan Kebutuhan Anda</a>
        </div>
    </div>
</div>
</div>
{%- endfor -%}
</div>
</div>

<div class="container pt-5 pb-5">
    <div class="text-center mb-5">
        <hr class="my-5 w-50 mx-auto">
        <h2 class="text-neon d-block mb-2">Peta Perjalanan Proyek Kita</h2>
        <p class="h3">Transparansi adalah kunci. Berikut adalah 4 tahap<br>yang akan kita lalui bersama untuk mencapai kesuksesan.</p>
    </div>
    <div class="row g-4">
    {%- for item in process -%}
        <div class="col-md-6 col-lg-3">
            <div class="portfolio-card p-4 h-100 text-center">
                <h1 class="display-4 fw-bold text-neon">{{ item.step }}</h1>
                <h4 class="fw-bold mt-3">{{ item.title }}</h4>
                <p class="text-white-50">{{ item.description }}</p>
            </div>
        </div>
    {%- endfor -%}
    </div>
</div>