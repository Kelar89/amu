---
layout: base.njk
title: Proses Kerja Saya
---
<div class="container py-5">
    <div class="text-center mb-5">
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