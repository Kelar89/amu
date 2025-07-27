---
layout: base.njk
title: Testimoni Klien
---
<div class="container py-5">
<div class="text-center mb-5">
<h2 class="text-neon d-block mb-2">Apa Kata Mereka yang Telah Terbantu</h2>
<p class="h3">Kepercayaan dan hasil nyata adalah fondasi dari setiap kolaborasi.</p>
</div>

<div class="row g-4 justify-content-center">
{%- for review in reviews -%}
    <div class="col-md-6">
        <div class="portfolio-card p-4 h-100 d-flex flex-column">
            <div class="mb-3">
                <span class="fs-1 text-neon">"</span>
            </div>
            <blockquote class="blockquote flex-grow-1">
                <p>{{ review.quote }}</p>
            </blockquote>
            <div class="d-flex align-items-center mt-4">
                <img src="{{ review.avatar | url }}" alt="{{ review.author }}" class="rounded-circle" width="50" height="50">
                <div class="ms-3">
                    <h6 class="mb-0 fw-bold">{{ review.author }}</h6>
                    <small class="text-white-50">{{ review.origin }}</small>
                </div>
            </div>
        </div>
    </div>
{%- endfor -%}
</div>

<div class="text-center mt-5 pt-4">
    <a href="/layanan-dan-proses/" class="btn btn-neon rounded-pill px-4 py-2">Lihat Layanan yang Saya Tawarkan</a>
</div>

</div>